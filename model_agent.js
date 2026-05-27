require("dotenv").config({ override: true });

/**
 * genai-monitor/model_agent.js
 *
 * Companion to agent.js. Maintains a JSON store of frontier LLM specs:
 * context window, pricing, modalities, tool support, benchmarks, pros/cons.
 *
 * Each run:
 *   1. Reads data/models_store.json
 *   2. Asks Claude (+ web_search) for the *current* canonical list of
 *      flagship models per provider, with official pricing/specs
 *   3. Merges: inserts new models, updates changed fields on existing ones
 *   4. Stamps last_updated and source URL per row
 */

const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const path = require("path");
const { getLangfuse, flushLangfuse, tracedGeminiCall } = require("./langfuse_client");

const STORE_PATH = path.join(__dirname, "data", "models_store.json");

const PROVIDERS = [
  "OpenAI", "Anthropic", "Google", "Meta", "Mistral", "DeepSeek",
  "xAI", "Amazon", "Alibaba", "Cohere", "NVIDIA", "Perplexity",
  "Moonshot", "Microsoft",
];

// ─── Store helpers ────────────────────────────────────────────────────────────

function readStore() {
  if (!fs.existsSync(STORE_PATH)) return [];
  try {
    const raw = fs.readFileSync(STORE_PATH, "utf8").trim();
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStore(rows) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(rows, null, 2), "utf8");
}

function modelKey(m) {
  return `${(m.provider || "").toLowerCase()}::${(m.model_id || m.model_name || "").toLowerCase()}`;
}

// ─── Merge new fetch into existing store ──────────────────────────────────────
// Insert new models, update changed fields on existing rows. Never silently
// drop a model from the store — providers occasionally retire models, but we
// want history; instead we set `status: "deprecated"` if the fetch flags it.

function mergeModels(existing, fetched, today) {
  const byKey = new Map(existing.map((m) => [modelKey(m), m]));
  let inserted = 0, updated = 0;

  for (const f of fetched) {
    if (!f.provider || !(f.model_name || f.model_id)) continue;
    const key = modelKey(f);
    const prev = byKey.get(key);

    if (!prev) {
      byKey.set(key, { ...f, last_updated: today, first_seen: today });
      inserted++;
    } else {
      const merged = { ...prev };
      let changed = false;
      for (const [k, v] of Object.entries(f)) {
        if (v === undefined || v === null || v === "") continue;
        if (JSON.stringify(prev[k]) !== JSON.stringify(v)) {
          merged[k] = v;
          changed = true;
        }
      }
      if (changed) {
        merged.last_updated = today;
        byKey.set(key, merged);
        updated++;
      }
    }
  }

  return { rows: Array.from(byKey.values()), inserted, updated };
}

// ─── Prompt ───────────────────────────────────────────────────────────────────

const PROVIDER_HINTS = {
  OpenAI: "GPT-5, GPT-5 mini/nano, o-series reasoning, GPT-4.1, GPT-4o, embedding models",
  Anthropic: "Claude Opus 4.x, Sonnet 4.x, Haiku 4.x — latest snapshots",
  Google: "Gemini 2.5 / 3 Pro / Flash / Flash-Lite, Gemini Nano, Imagen, Veo",
  Meta: "Llama 4 / 3.x families — Maverick, Scout, Behemoth, etc.",
  Mistral: "Mistral Large, Medium, Small, Codestral, Pixtral, Ministral",
  DeepSeek: "DeepSeek-V3, R1, V3.2-Exp etc.",
  xAI: "Grok 4, Grok 3, Grok Code, Grok Vision",
  Amazon: "Nova Premier / Pro / Lite / Micro, Titan, Bedrock-hosted variants",
  Alibaba: "Qwen3, Qwen2.5 Max, Qwen-VL, Qwen-Coder, QwQ",
  Cohere: "Command A, Command R+, Command R, Embed v4, Rerank",
  NVIDIA: "Nemotron Ultra / Super / Nano, Llama Nemotron, NVLM",
  Perplexity: "Sonar, Sonar Pro, Sonar Reasoning, Sonar Deep Research",
  Moonshot: "Kimi K2, Kimi K2-Thinking, Kimi-Audio",
  Microsoft: "Phi-4, Phi-4-multimodal, MAI-1",
};

function buildSystemPrompt(today, provider) {
  return `You are a model-catalog research agent for a Senior Technical Manager building enterprise GenAI applications.

Today is ${today}. Your job: produce an up-to-date catalog of the FLAGSHIP and notable current production models from ${provider} (${PROVIDER_HINTS[provider] || ""}), with verified specs from official sources.

STRICT RULES:
1. Only include models that are GENERALLY AVAILABLE or in stable public preview, with real API/endpoint access. Skip pure research releases.
2. Prices MUST come from official pricing pages. If a price is unknown or "contact sales", set it to null. Never fabricate.
3. Context window and max output MUST be from official docs. If unknown, set to null.
4. Include 2–6 of the most relevant flagship + tier models for ${provider}. Don't list every legacy variant.
5. Use canonical model_id (e.g. "gpt-5", "claude-opus-4-7", "gemini-2.5-pro", "grok-4", "kimi-k2-thinking").
6. \`best_for\` is a short phrase (≤ 10 words) describing the model's strongest use case.
7. \`pros\` and \`cons\` are 2–4 short bullet points each, comparative and concrete (not generic marketing).
8. Benchmarks: only include scores from official model cards or release blogs. Common keys: mmlu, mmlu_pro, gpqa, swe_bench_verified, humaneval, math, aime, mmmu, livecodebench. Use 0–100 scale.
9. Every model's "provider" field MUST be exactly "${provider}".

Respond ONLY with a valid JSON array. No markdown. No code fences. No prose. The first character must be '[' and the last ']'.

Schema per model:
{
  "provider": "${provider}",
  "model_name": "Display name e.g. 'GPT-5'",
  "model_id": "API id e.g. 'gpt-5'",
  "release_date": "YYYY-MM-DD or null",
  "status": "ga | preview | deprecated",
  "context_window": 200000,
  "max_output_tokens": 16384,
  "input_price_per_1m": 5.0,
  "cached_input_price_per_1m": 0.5,
  "output_price_per_1m": 15.0,
  "modalities": ["text","vision","audio","video"],
  "tool_use": true,
  "structured_output": true,
  "mcp_support": false,
  "reasoning": true,
  "open_weights": false,
  "best_for": "Complex agentic reasoning with long context",
  "pros": ["Strong tool-use accuracy","1M token context","Excellent SWE-bench"],
  "cons": ["Premium pricing","Higher latency than Haiku-tier"],
  "benchmarks": { "mmlu_pro": 86.4, "swe_bench_verified": 74.5, "aime": 92.0 },
  "source_url": "https://official-source.example.com/model-card"
}

Return [] only if you truly cannot find any current information for ${provider}.`;
}

// Extract the first balanced JSON array from a string. Tolerates leading
// prose, trailing prose, code fences, and truncation (returns null if no
// balanced array can be found).
function extractJsonArray(text) {
  const cleaned = text.replace(/```json\s*/gi, "").replace(/```/g, "");
  const start = cleaned.indexOf("[");
  if (start === -1) return null;

  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = start; i < cleaned.length; i++) {
    const ch = cleaned[i];
    if (escape) { escape = false; continue; }
    if (inString) {
      if (ch === "\\") escape = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') { inString = true; continue; }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return cleaned.slice(start, i + 1);
    }
  }
  return null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Parse a Retry-After header that may be either delta-seconds or HTTP-date.
// Returns milliseconds, or null if unparseable.
function parseRetryAfterMs(headers) {
  if (!headers) return null;
  const get = typeof headers.get === "function"
    ? (k) => headers.get(k)
    : (k) => headers[k] || headers[k.toLowerCase()];
  const raw = get("retry-after") || get("Retry-After");
  if (!raw) return null;
  const asNum = Number(raw);
  if (Number.isFinite(asNum)) return Math.max(0, asNum * 1000);
  const asDate = Date.parse(raw);
  if (!Number.isNaN(asDate)) return Math.max(0, asDate - Date.now());
  return null;
}

function isRetryableStatus(status) {
  return status === 429 || status === 408 || status === 529 || (status >= 500 && status < 600);
}

async function callWithBackoff(fn, { maxAttempts = 6, baseDelayMs = 2000, maxDelayMs = 60000 } = {}) {
  let attempt = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    attempt++;
    try {
      return await fn();
    } catch (err) {
      const status = err && (err.status || err.statusCode);
      if (!isRetryableStatus(status) || attempt >= maxAttempts) throw err;

      const retryAfterMs = parseRetryAfterMs(err.headers);
      const expBackoff = Math.min(maxDelayMs, baseDelayMs * 2 ** (attempt - 1));
      const jitter = Math.floor(Math.random() * 500);
      const delay = (retryAfterMs ?? expBackoff) + jitter;

      process.stdout.write(`(${status} retry ${attempt}/${maxAttempts - 1} in ${Math.round(delay / 1000)}s) `);
      await sleep(delay);
    }
  }
}

async function fetchProvider(client, provider, today, maxTokens, trace) {
  const response = await callWithBackoff(() =>
    tracedGeminiCall(
      trace,
      client,
      {
        model: "gemini-3.5-flash",
        contents: `Build the current ${provider} model catalog as of ${today}. Return the flagship + tier models with verified specs from official sources.`,
        config: {
          systemInstruction: buildSystemPrompt(today, provider),
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: "ARRAY",
            description: `An array of models for ${provider}`,
            items: {
              type: "OBJECT",
              properties: {
                provider: { type: "STRING" },
                model_name: { type: "STRING" },
                model_id: { type: "STRING" },
                release_date: { type: "STRING" },
                status: { type: "STRING", enum: ["ga", "preview", "deprecated"] },
                context_window: { type: "INTEGER" },
                max_output_tokens: { type: "INTEGER" },
                input_price_per_1m: { type: "NUMBER" },
                cached_input_price_per_1m: { type: "NUMBER" },
                output_price_per_1m: { type: "NUMBER" },
                modalities: { type: "ARRAY", items: { type: "STRING" } },
                tool_use: { type: "BOOLEAN" },
                structured_output: { type: "BOOLEAN" },
                mcp_support: { type: "BOOLEAN" },
                reasoning: { type: "BOOLEAN" },
                open_weights: { type: "BOOLEAN" },
                best_for: { type: "STRING" },
                pros: { type: "ARRAY", items: { type: "STRING" } },
                cons: { type: "ARRAY", items: { type: "STRING" } },
                benchmarks: {
                  type: "OBJECT",
                  properties: {
                    mmlu: { type: "NUMBER" },
                    mmlu_pro: { type: "NUMBER" },
                    gpqa: { type: "NUMBER" },
                    swe_bench_verified: { type: "NUMBER" },
                    humaneval: { type: "NUMBER" },
                    math: { type: "NUMBER" },
                    aime: { type: "NUMBER" },
                    mmmu: { type: "NUMBER" },
                    livecodebench: { type: "NUMBER" }
                  }
                },
                source_url: { type: "STRING" }
              },
              required: [
                "provider", "model_name", "model_id", "status", 
                "context_window", "max_output_tokens", 
                "input_price_per_1m", "output_price_per_1m", 
                "modalities", "tool_use", "structured_output", 
                "mcp_support", "reasoning", "open_weights", 
                "best_for", "pros", "cons", "benchmarks", "source_url"
              ]
            }
          }
        }
      },
      { name: `model-catalog:${provider}`, metadata: { provider } }
    )
  );

  const rawText = response.text;
  const usage = response.usageMetadata || {};

  return { rawText, usage };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function runModelAgent(apiKey, options = {}) {
  const {
    maxTokens = 8000,
    providers = PROVIDERS,
    perCallDelayMs = 5000,
  } = options;
  const client = new GoogleGenAI({ apiKey });
  const today = new Date().toISOString().split("T")[0];

  console.log(`\n[${new Date().toISOString()}] Model Catalog Agent starting...`);
  const existing = readStore();
  console.log(`  Models currently in store: ${existing.length}`);
  console.log(`  Fetching ${providers.length} providers (one call each)...`);

  const langfuse = getLangfuse();
  const trace = langfuse?.trace({
    name: "model-catalog-agent",
    metadata: { date: today, providers },
    tags: ["model-agent"],
  });

  const allFetched = [];
  const failures = [];
  let totalInput = 0, totalOutput = 0;

  for (let i = 0; i < providers.length; i++) {
    const provider = providers[i];
    if (i > 0 && perCallDelayMs > 0) await sleep(perCallDelayMs);
    process.stdout.write(`  [${provider}] `);
    try {
      const { rawText, usage } = await fetchProvider(client, provider, today, maxTokens, trace);
      totalInput += usage.promptTokenCount || 0;
      totalOutput += usage.candidatesTokenCount || 0;

      const jsonText = extractJsonArray(rawText);
      if (!jsonText) {
        console.log(`no JSON array found in response — skipping`);
        failures.push({ provider, reason: "no JSON array" });
        continue;
      }

      let parsed;
      try {
        parsed = JSON.parse(jsonText);
      } catch (err) {
        console.log(`JSON parse error: ${err.message} — skipping`);
        failures.push({ provider, reason: `parse error: ${err.message}` });
        continue;
      }

      if (!Array.isArray(parsed)) {
        console.log(`response was not an array — skipping`);
        failures.push({ provider, reason: "not an array" });
        continue;
      }

      // Force provider field to match what we requested (defensive).
      const tagged = parsed
        .filter((m) => m && (m.model_name || m.model_id))
        .map((m) => ({ ...m, provider }));

      allFetched.push(...tagged);
      console.log(`${tagged.length} models (in=${usage.input_tokens}, out=${usage.output_tokens})`);
    } catch (err) {
      console.log(`API error: ${err.message}`);
      failures.push({ provider, reason: `api: ${err.message}` });
    }
  }

  console.log(`\n  Aggregate tokens — input: ${totalInput}, output: ${totalOutput}`);
  console.log(`  Total models fetched: ${allFetched.length} across ${providers.length - failures.length}/${providers.length} providers`);
  if (failures.length) {
    console.log(`  Failed providers: ${failures.map((f) => `${f.provider} (${f.reason})`).join(", ")}`);
  }

  const { rows, inserted, updated } = mergeModels(existing, allFetched, today);
  rows.sort((a, b) => {
    const p = (a.provider || "").localeCompare(b.provider || "");
    if (p !== 0) return p;
    return (a.model_name || "").localeCompare(b.model_name || "");
  });

  writeStore(rows);
  console.log(`  Inserted: ${inserted}, Updated: ${updated}, Total in store: ${rows.length}`);

  trace?.update({
    output: {
      fetched: allFetched.length,
      inserted,
      updated,
      total: rows.length,
      failures,
      total_input_tokens: totalInput,
      total_output_tokens: totalOutput,
    },
  });
  await flushLangfuse();

  return {
    date: today,
    fetched: allFetched.length,
    inserted,
    updated,
    total: rows.length,
    failures,
  };
}

module.exports = { runModelAgent, readStore };

// ─── CLI entry ────────────────────────────────────────────────────────────────
if (require.main === module) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("ERROR: GEMINI_API_KEY is not set.");
    process.exit(1);
  }
  runModelAgent(apiKey)
    .then((r) => {
      console.log(`\n✓ Done. ${r.inserted} new, ${r.updated} updated, ${r.total} total.`);
      process.exit(0);
    })
    .catch((err) => {
      console.error(`\n✗ Model agent failed: ${err.message}`);
      process.exit(1);
    });
}
