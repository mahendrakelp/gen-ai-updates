# GenAI Monitor — Daily Agent Brief

A daily intelligence agent for Senior Technical Managers building GenAI applications.

Runs every day at **05:00 IST**, searches for real news, deduplicates against a local CSV store,
and serves a clean executive briefing dashboard.

---

## How it works

```
Every day at 05:00 IST
        │
        ▼
  Claude (claude-haiku-4-5) + web_search
        │  searches recent window across model providers:
        │  Microsoft · OpenAI · Anthropic · Google · Meta
        │  Mistral · DeepSeek · xAI · Amazon · Alibaba (Qwen)
        │  Cohere · NVIDIA · Perplexity · Moonshot (Kimi)
        │  + agent frameworks: LangChain · LangSmith · LangFuse
        │
        ▼
  Deduplication check
        │  compares URLs against data/news_store.csv
        │  skips anything already stored
        │
        ▼
  Append new rows to CSV
        │  url, title, company, categories,
        │  summary, impact, date_published, date_fetched
        │
        ▼
  Dashboard at localhost:3000
        │  filter by platform, category, time range
        │  executive summary per article
        │  direct link to source
```

---

## Setup

### 1. Install dependencies
```bash
cd genai-monitor
npm install
```

### 2. Set your Gemini API key
```bash
# Mac/Linux
export GEMINI_API_KEY=...

# Windows (PowerShell)
$env:GEMINI_API_KEY = "..."
```

### 3. Start the dashboard server
```bash
node server.js
# Open http://localhost:3000
```

### 4. Start the daily scheduler (separate terminal)
```bash
node scheduler.js
```
Runs immediately on startup, then every day at 05:00 IST.

---

## Keep it running 24/7 (recommended)

Use [PM2](https://pm2.keymetrics.io/):

```bash
npm install -g pm2

# Start both processes
pm2 start server.js --name genai-dashboard
pm2 start scheduler.js --name genai-scheduler

# Auto-restart on reboot
pm2 startup
pm2 save

# Check status
pm2 status

# View logs
pm2 logs genai-scheduler
```

---

## Files

```
genai-monitor/
├── agent.js          ← news agent: fetch + deduplicate + save
├── model_agent.js    ← model catalog agent: refresh specs/prices/benchmarks
├── scheduler.js      ← cron runner (05:00 IST daily — runs both agents)
├── server.js         ← Express API + serve dashboard
├── package.json
├── data/
│   ├── news_store.csv      ← append-only article store
│   ├── models_store.json   ← model comparison catalog
│   └── run_log.json        ← history of every news-agent run
└── public/
    ├── index.html    ← daily updates dashboard
    └── models.html   ← model comparison page
```

### CSV schema (data/news_store.csv)

| Column | Description |
|--------|-------------|
| url | Source article URL (dedup key) |
| title | Article title |
| company | Platform name |
| categories | Pipe-separated: Model\|Agent\|Tool\|Infra\|Memory\|Routing |
| summary | 2-3 sentence executive summary |
| impact | Pipe-separated impact points |
| date_published | Date the news was published |
| date_fetched | Date our agent fetched it (YYYY-MM-DD) |
| is_new | true (all stored rows were new when added) |

---

## Pages

| Path | What it shows |
|------|----------------|
| `/` | Daily intelligence feed — news cards filtered by provider, category, time range |
| `/models.html` | Model comparison catalog — sortable table of every flagship/tier model with pricing, context, modalities, pros/cons, benchmarks |

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/news | All stored articles (supports ?company=, ?category=, ?days=) |
| GET | /api/today | Only today's new articles |
| GET | /api/stats | Summary stats + last run info |
| GET | /api/models | Model comparison catalog (supports ?provider=) |
| POST | /api/run | Trigger a manual news fetch |
| POST | /api/run-models | Trigger a manual model catalog refresh |

## Model comparison page

`/models.html` is a sortable, filterable table of frontier production models from every tracked provider. Each row shows:

- Provider, model name + API id, GA/preview/deprecated status, release date
- Context window, max output tokens
- Input / cached-input / output price per 1M tokens
- Modalities (text, vision, audio, video) and capabilities (tool use, structured output, reasoning, MCP, open weights)
- "Best for" one-liner
- Click a row to expand pros, cons, benchmarks (MMLU, SWE-bench, AIME, …), and the official source URL

The catalog is maintained by `model_agent.js`, which runs daily alongside the news agent and:
- Calls Claude (Sonnet 4.6) + web_search for current official specs and prices
- Inserts new models (e.g. when a provider ships a new flagship)
- Updates changed fields on existing rows (price drops, context-window expansions)
- Stamps `last_updated` and preserves `first_seen` per model

Click **Refresh catalog** on the page to trigger a manual run (1–2 min).

### Model store schema (data/models_store.json)

```json
{
  "provider": "Anthropic",
  "model_name": "Claude Opus 4.7",
  "model_id": "claude-opus-4-7",
  "release_date": "2026-XX-XX",
  "status": "ga",
  "context_window": 1000000,
  "max_output_tokens": 64000,
  "input_price_per_1m": 15.0,
  "cached_input_price_per_1m": 1.5,
  "output_price_per_1m": 75.0,
  "modalities": ["text", "vision"],
  "tool_use": true,
  "structured_output": true,
  "mcp_support": true,
  "reasoning": true,
  "open_weights": false,
  "best_for": "Long-context agentic coding and reasoning",
  "pros": ["…"],
  "cons": ["…"],
  "benchmarks": { "mmlu_pro": 87.0, "swe_bench_verified": 78.4 },
  "source_url": "https://www.anthropic.com/…",
  "first_seen": "2026-05-21",
  "last_updated": "2026-05-21"
}
```

---

## Cost estimate

- Claude Sonnet 4 with web search: ~$0.02–0.05 per daily run
- ~$1–1.50/month for daily runs
