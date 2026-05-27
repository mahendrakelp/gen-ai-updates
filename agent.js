require("dotenv").config({ override: true });

/**
 * genai-monitor/agent.js
 * 
 * Core agent that:
 * 1. Reads existing CSV to know what we've already seen (dedup by URL)
 * 2. Calls Claude with web_search to find latest GenAI agent news
 * 3. Filters out anything already in the CSV
 * 4. Appends only new unique items to the CSV
 * 5. Returns today's new items for the dashboard
 */

const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");
const { getLangfuse, flushLangfuse, tracedGeminiCall } = require("./langfuse_client");

const CSV_PATH = path.join(__dirname, "data", "news_store.csv");
const CSV_HEADERS = ["url", "title", "company", "categories", "summary", "impact", "date_published", "date_fetched", "is_new"];

// ─── CSV helpers ──────────────────────────────────────────────────────────────

function readCSV() {
  if (!fs.existsSync(CSV_PATH)) return [];
  const content = fs.readFileSync(CSV_PATH, "utf8");
  if (!content.trim()) return [];
  try {
    return parse(content, { columns: true, skip_empty_lines: true });
  } catch {
    return [];
  }
}

function appendToCSV(rows) {
  const fileExists = fs.existsSync(CSV_PATH) && fs.readFileSync(CSV_PATH, "utf8").trim().length > 0;
  const csv = stringify(rows, {
    header: !fileExists,
    columns: CSV_HEADERS,
  });
  fs.appendFileSync(CSV_PATH, csv, "utf8");
}

function getSeenURLs() {
  const rows = readCSV();
  return new Set(rows.map((r) => r.url.trim().toLowerCase()));
}

// ─── Content-similarity dedup ─────────────────────────────────────────────────
// Catches the case where the same story is published by two different sources
// (e.g. an openai.com announcement + a TechCrunch write-up of it).

const TITLE_STOPWORDS = new Set([
  "the","and","for","with","from","that","this","into","over","its","new","now",
  "api","apis","model","models","launches","launch","launched","release","released",
  "releases","ships","ship","shipped","available","announces","announced","introduce",
  "introduces","introducing","update","updates","updated","unveils","unveiled","gets","add","adds",
]);

function normalizeTitleTokens(t) {
  return (t || "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !TITLE_STOPWORDS.has(w));
}

function jaccard(aTokens, bTokens) {
  if (!aTokens.length || !bTokens.length) return 0;
  const a = new Set(aTokens), b = new Set(bTokens);
  let inter = 0;
  for (const w of a) if (b.has(w)) inter++;
  const union = a.size + b.size - inter;
  return union ? inter / union : 0;
}

const OFFICIAL_DOMAINS = {
  Microsoft: ["microsoft.com", "azure.microsoft.com"],
  OpenAI: ["openai.com"],
  Anthropic: ["anthropic.com", "claude.com"],
  LangChain: ["langchain.com", "langchain.dev"],
  LangSmith: ["langchain.com", "smith.langchain.com"],
  LangFuse: ["langfuse.com"],
  DeepSeek: ["deepseek.com"],
  Google: ["google.com", "blog.google", "cloud.google.com", "ai.google.dev", "developers.googleblog.com", "deepmind.google"],
  Mistral: ["mistral.ai"],
  Meta: ["meta.com", "ai.meta.com", "about.fb.com"],
  xAI: ["x.ai", "grok.com"],
  Amazon: ["aws.amazon.com", "amazon.com", "amazon.science"],
  Alibaba: ["alibabacloud.com", "qwenlm.ai", "qwen.ai", "tongyi.aliyun.com"],
  Cohere: ["cohere.com", "cohere.ai"],
  NVIDIA: ["nvidia.com", "developer.nvidia.com", "blogs.nvidia.com"],
  Perplexity: ["perplexity.ai"],
  Moonshot: ["moonshot.ai", "moonshot.cn", "kimi.com"],
};

function isOfficialSource(url, company) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return (OFFICIAL_DOMAINS[company] || []).some((d) => host === d || host.endsWith("." + d));
  } catch {
    return false;
  }
}

// Same-company items are likely the same story when:
//   - title-token Jaccard ≥ 0.4 (strong title overlap), OR
//   - title-token Jaccard ≥ 0.25 AND same date_published (weaker title overlap
//     compensated by exact-date match — catches cases where two sources use
//     very different vocabulary for the same announcement)
function sameStory(a, b) {
  if (!a.company || a.company !== b.company) return false;
  const sim = jaccard(normalizeTitleTokens(a.title), normalizeTitleTokens(b.title));
  if (sim >= 0.4) return true;
  if (sim >= 0.25 && a.date_published && a.date_published === b.date_published) return true;
  return false;
}

// ─── Agent prompt ─────────────────────────────────────────────────────────────

function buildSystemPrompt(today, windowDays, cutoffISO) {
  return `You are a GenAI intelligence agent for a Senior Technical Manager responsible for building enterprise generative AI applications.

Today is ${today}. Your job: search the web for real news published in the last ${windowDays} day(s) — that is, on or after ${cutoffISO} — about these platforms:
- Microsoft Azure AI Foundry, Azure OpenAI, Phi models, Copilot Studio agents/skills
- OpenAI (models, APIs, Codex, Responses API, Apps SDK, AgentKit, ChatGPT Agents, Connectors, GPT Store skills)
- Anthropic / Claude (models, APIs, memory, Claude Skills, Claude Agent SDK, Claude Code skills/plugins/subagents, MCP integrations)
- LangChain, LangGraph, LangSmith (agent templates, prebuilt agents, deep agents)
- LangFuse
- DeepSeek
- Google AI (Gemini, Vertex AI, ADK / Agent Development Kit, Agent Builder, AI Studio, Gemini Extensions/Gems, DeepMind research)
- Mistral AI (models, Le Chat agents, Agents API)
- Meta AI (Llama models, Llama Stack agents)
- xAI (Grok models, Grok API, Grok agents/tools)
- Amazon (Bedrock platform, Nova / Titan models, Bedrock Agents, AgentCore, Q Developer)
- Alibaba (Qwen open-weight models, Qwen-Agent, Tongyi platform, Model Studio)
- Cohere (Command R / R+ / A models, Cohere Agents, North platform, Embed / Rerank)
- NVIDIA (Nemotron models, NIM microservices, NeMo Agent Toolkit, AI Blueprints)
- Perplexity (Sonar models / API, Comet browser agents, Spaces)
- Moonshot AI (Kimi models — Kimi K2 / K2-Thinking, Kimi agents, Kimi API)

EXPLICITLY INCLUDE skill- and agent-platform releases from any provider above. Examples that MUST be picked up if they fall in the window:
- New / updated Claude Skills, Claude Agent SDK releases, Claude Code subagents or plugins
- New OpenAI Apps SDK features, AgentKit / Responses API changes, ChatGPT connectors, GPT store skill capabilities
- New Google ADK / Agent Builder versions, Gemini Extensions or Gems releases
- New Microsoft Copilot Studio agents/skills, Azure AI Foundry agent services
- New LangChain/LangGraph prebuilt agents, agent templates, or agent SDK versions
- New Mistral Agents API capabilities, Llama Stack agent features
- New xAI Grok model/API releases or agent capabilities
- New Amazon Bedrock model additions, Bedrock Agents / AgentCore features, Nova model updates
- New Qwen open-weight model releases (sizes, context, vision/audio) or Qwen-Agent updates
- New Cohere Command model releases, Cohere Agents / North platform updates
- New NVIDIA Nemotron releases, NIM microservices, NeMo Agent Toolkit updates
- New Perplexity Sonar API features, Comet browser agent capabilities
- New Moonshot Kimi model releases, Kimi agent / API features

STRICT RULES:
1. HARD DATE CUTOFF: every item's date_published MUST be >= ${cutoffISO}. Reject anything older, even if popular or trending. Do NOT include evergreen docs, v1.0 retrospectives, or older announcements re-surfaced by search.
2. Only include news that DIRECTLY impacts building GenAI applications with agents (model releases, API changes, new tools, frameworks, skill/agent-platform releases, pricing that affects architecture decisions)
3. Skip: pure marketing, conference announcements with no product, opinion pieces, reposted old news
4. Each item MUST have a real, working source URL (news article, official blog, GitHub release, official docs)
5. Deduplicate: if the same feature is covered by multiple articles, return ONE item with the best source URL
6. If a platform has no real news in this window, omit it entirely — never fabricate
7. date_published MUST be the original publication date of the announcement, not the date you found it
8. For skill / agent releases, tag the item with the "Skill" or "Agent" category (or both) so the dashboard surfaces them correctly

For each item write a 2-3 sentence EXECUTIVE SUMMARY from a technical manager's perspective:
- What changed
- Why it matters for agent development
- Concrete impact on architecture/cost/capability decisions

Respond ONLY with a valid JSON array. No markdown. No explanation. No code fences.

Schema per item:
{
  "url": "https://actual-source-url.com/article",
  "title": "Clear concise title",
  "company": "One of: Microsoft | OpenAI | Anthropic | LangChain | LangSmith | LangFuse | DeepSeek | Google | Mistral | Meta | xAI | Amazon | Alibaba | Cohere | NVIDIA | Perplexity | Moonshot",
  "categories": ["one or more of: Model | Agent | Skill | Tool | Infra | Memory | Routing | Observability"],
  "summary": "2-3 sentence executive summary for a senior technical manager building GenAI apps",
  "impact": ["Specific impact 1", "Specific impact 2"],
  "date_published": "YYYY-MM-DD"
}

Return [] if nothing qualifies.`;
}

// ─── Main agent function ───────────────────────────────────────────────────────

async function runAgent(apiKey, options = {}) {
  const { windowDays = 2, maxTokens = 8000 } = options;

  const client = new GoogleGenAI({ apiKey });
  const today = new Date().toISOString().split("T")[0];
  const cutoffDate = new Date(Date.now() - windowDays * 24 * 60 * 60 * 1000);
  const cutoffISO = cutoffDate.toISOString().split("T")[0];
  const todayDisplay = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  console.log(`\n[${new Date().toISOString()}] GenAI Monitor Agent starting...`);
  console.log(`  Date: ${todayDisplay}`);
  console.log(`  Window: last ${windowDays} day(s) — cutoff ${cutoffISO}`);

  // Load already-seen URLs
  const seenURLs = getSeenURLs();
  console.log(`  Known articles in store: ${seenURLs.size}`);

  console.log("  Calling Gemini (3.5 Flash + googleSearch)...");
  let rawText = "";

  const langfuse = getLangfuse();
  const trace = langfuse?.trace({
    name: "genai-news-agent",
    metadata: { date: today, windowDays, cutoffISO },
    tags: ["news-agent"],
  });

  try {
    const response = await tracedGeminiCall(
      trace,
      client,
      {
        model: "gemini-3.5-flash",
        contents: `Search for GenAI agent platform updates published on or after ${cutoffISO} (last ${windowDays} day(s)). Today is ${todayDisplay}.

Reject any result whose original publication date is before ${cutoffISO}, even if it appears prominently in search results.`,
        config: {
          systemInstruction: buildSystemPrompt(todayDisplay, windowDays, cutoffISO),
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: "ARRAY",
            description: "An array of news articles about GenAI platforms and agent releases",
            items: {
              type: "OBJECT",
              properties: {
                url: { type: "STRING", description: "The actual source URL of the article." },
                title: { type: "STRING", description: "Clear and concise title." },
                company: { 
                  type: "STRING", 
                  description: "One of: Microsoft, OpenAI, Anthropic, LangChain, LangSmith, LangFuse, DeepSeek, Google, Mistral, Meta, xAI, Amazon, Alibaba, Cohere, NVIDIA, Perplexity, Moonshot" 
                },
                categories: {
                  type: "ARRAY",
                  items: { type: "STRING" },
                  description: "One or more of: Model, Agent, Skill, Tool, Infra, Memory, Routing, Observability"
                },
                summary: { type: "STRING", description: "Concise 2-3 sentence executive summary for a senior technical manager." },
                impact: {
                  type: "ARRAY",
                  items: { type: "STRING" },
                  description: "List of specific architectural, cost, or deployment impacts."
                },
                date_published: { type: "STRING", description: "Publication date in YYYY-MM-DD format." }
              },
              required: ["url", "title", "company", "categories", "summary", "impact", "date_published"]
            }
          }
        }
      },
      { name: "gemini-news-search" }
    );

    const usage = response.usageMetadata || {};
    console.log(`  Tokens — input: ${usage.promptTokenCount || 0}, output: ${usage.candidatesTokenCount || 0}`);

    rawText = response.text;
  } catch (err) {
    console.error("  Gemini API error:", err.message);
    await flushLangfuse();
    throw err;
  }

  // Parse JSON — model sometimes narrates around the array, so extract it.
  let items = [];
  try {
    let cleaned = rawText.trim().replace(/```json\s*/gi, "").replace(/```/g, "").trim();
    const firstBracket = cleaned.indexOf("[");
    const lastBracket = cleaned.lastIndexOf("]");
    if (firstBracket !== -1 && lastBracket > firstBracket) {
      cleaned = cleaned.slice(firstBracket, lastBracket + 1);
    }
    items = JSON.parse(cleaned);
    if (!Array.isArray(items)) items = [];
  } catch (err) {
    console.error("  JSON parse error. Raw response:", rawText.slice(0, 1000));
    throw new Error("Failed to parse agent response as JSON");
  }

  console.log(`  Claude returned ${items.length} items`);

  // Pass 0 — hard date cutoff. The model occasionally surfaces older popular
  // results despite the prompt, so we enforce date_published >= cutoff here.
  const beforeDateFilter = items.length;
  items = items.filter((item) => {
    if (!item.date_published) return false;
    if (item.date_published < cutoffISO) {
      console.log(`  ↳ skip (older than cutoff ${cutoffISO}): ${item.date_published} — "${item.title}"`);
      return false;
    }
    return true;
  });
  const dateSkipped = beforeDateFilter - items.length;

  // Pass 1 — URL dedup against CSV store
  const urlUnique = items.filter((item) => {
    if (!item.url) return false;
    return !seenURLs.has(item.url.trim().toLowerCase());
  });

  // Pass 2 — content-similarity dedup (same company + date + similar title).
  // Catches same-story coverage from different sources, intra-batch and vs. CSV.
  const existingRows = readCSV();
  const newItems = [];
  let duplicateStory = 0;

  for (const item of urlUnique) {
    const dupOfExisting = existingRows.find((row) => sameStory(item, row));
    if (dupOfExisting) {
      console.log(`  ↳ skip (same story as stored): "${item.title}"`);
      duplicateStory++;
      continue;
    }
    const dupInBatchIdx = newItems.findIndex((kept) => sameStory(item, kept));
    if (dupInBatchIdx !== -1) {
      const kept = newItems[dupInBatchIdx];
      const itemIsOfficial = isOfficialSource(item.url, item.company);
      const keptIsOfficial = isOfficialSource(kept.url, kept.company);
      if (itemIsOfficial && !keptIsOfficial) {
        console.log(`  ↳ replace with official source: "${item.title}"`);
        newItems[dupInBatchIdx] = item;
      } else {
        console.log(`  ↳ skip (same story in batch): "${item.title}"`);
      }
      duplicateStory++;
      continue;
    }
    newItems.push(item);
  }

  const urlSkipped = items.length - urlUnique.length;
  console.log(`  New (not seen before): ${newItems.length}`);
  console.log(`  Skipped — date-cutoff: ${dateSkipped}, URL match: ${urlSkipped}, same-story: ${duplicateStory}`);

  // Save new items to CSV
  if (newItems.length > 0) {
    const rows = newItems.map((item) => ({
      url: item.url.trim(),
      title: item.title || "",
      company: item.company || "",
      categories: Array.isArray(item.categories) ? item.categories.join("|") : item.categories || "",
      summary: (item.summary || "").replace(/\n/g, " "),
      impact: Array.isArray(item.impact) ? item.impact.join(" | ") : item.impact || "",
      date_published: item.date_published || today,
      date_fetched: today,
      is_new: "true",
    }));

    appendToCSV(rows);
    console.log(`  Saved ${rows.length} new items to CSV`);
  } else {
    console.log("  No new items to save today");
  }

  const result = {
    date: today,
    total_fetched: items.length,
    new_items: newItems.length,
    skipped: items.length - newItems.length,
    items: newItems,
  };

  trace?.update({
    output: {
      total_fetched: result.total_fetched,
      new_items: result.new_items,
      skipped: result.skipped,
    },
  });
  await flushLangfuse();

  return result;
}

module.exports = { runAgent, readCSV };

// ─── CLI entry point ──────────────────────────────────────────────────────────
if (require.main === module) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("ERROR: GEMINI_API_KEY is not set.");
    console.error("Add it to .env or run: export GEMINI_API_KEY=...");
    process.exit(1);
  }

  // Flags:
  //   --backfill          → seed the store with the last 90 days (one-off)
  //   --days=<n>          → custom window
  const args = process.argv.slice(2);
  const backfill = args.includes("--backfill");
  const daysArg = args.find((a) => a.startsWith("--days="));
  const windowDays = backfill ? 90 : (daysArg ? parseInt(daysArg.split("=")[1], 10) : 2);
  const maxTokens = backfill ? 16000 : 8000;

  runAgent(apiKey, { windowDays, maxTokens })
    .then((result) => {
      console.log(`\n✓ Done. ${result.new_items} new, ${result.skipped} skipped.`);
      process.exit(0);
    })
    .catch((err) => {
      console.error(`\n✗ Agent failed: ${err.message}`);
      process.exit(1);
    });
}
