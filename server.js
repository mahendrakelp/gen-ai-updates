require("dotenv").config({ override: true });

/**
 * genai-monitor/server.js
 * 
 * Simple Express server:
 *   GET /          → serves the dashboard HTML
 *   GET /api/news  → returns all news from CSV as JSON
 *   GET /api/today → returns only today's news
 *   GET /api/stats → summary stats (run log)
 *   POST /api/run  → trigger a manual agent run
 */

const express = require("express");
const path = require("path");
const fs = require("fs");
const { readCSV, runAgent } = require("./agent");
const { readStore: readModelStore, runModelAgent } = require("./model_agent");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GEMINI_API_KEY;

// Warn immediately at startup if API key is missing
if (!API_KEY) {
  console.warn("\n⚠️  WARNING: GEMINI_API_KEY is not set.");
  console.warn("   The dashboard will load but 'Fetch new updates' will fail.");
  console.warn("   Fix: export GEMINI_API_KEY=... then restart.\n");
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ── API: all news ──────────────────────────────────────────────────────────
app.get("/api/news", (req, res) => {
  const rows = readCSV();
  const { company, category, days } = req.query;

  let filtered = rows.map(r => ({
    ...r,
    categories: r.categories ? r.categories.split("|") : [],
    impact: r.impact ? r.impact.split(" | ") : [],
  }));

  if (company && company !== "All") {
    filtered = filtered.filter(r => r.company === company);
  }
  if (category && category !== "All") {
    filtered = filtered.filter(r => r.categories.includes(category));
  }
  if (days) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - parseInt(days));
    filtered = filtered.filter(r => new Date(r.date_fetched) >= cutoff);
  }

  // Sort newest first
  filtered.sort((a, b) => new Date(b.date_fetched) - new Date(a.date_fetched));

  res.json({ count: filtered.length, items: filtered });
});

// ── API: today's news ──────────────────────────────────────────────────────
app.get("/api/today", (req, res) => {
  const today = new Date().toISOString().split("T")[0];
  const rows = readCSV();
  const todayRows = rows
    .filter(r => r.date_fetched === today)
    .map(r => ({
      ...r,
      categories: r.categories ? r.categories.split("|") : [],
      impact: r.impact ? r.impact.split(" | ") : [],
    }));

  res.json({ date: today, count: todayRows.length, items: todayRows });
});

// ── API: stats ─────────────────────────────────────────────────────────────
app.get("/api/stats", (req, res) => {
  const rows = readCSV();
  const logPath = path.join(__dirname, "data", "run_log.json");
  let runLog = [];
  if (fs.existsSync(logPath)) {
    try { runLog = JSON.parse(fs.readFileSync(logPath, "utf8")); } catch {}
  }

  const today = new Date().toISOString().split("T")[0];
  const todayCount = rows.filter(r => r.date_fetched === today).length;
  const last7 = new Date(); last7.setDate(last7.getDate() - 7);
  const week7Count = rows.filter(r => new Date(r.date_fetched) >= last7).length;

  const companies = {};
  rows.forEach(r => { companies[r.company] = (companies[r.company] || 0) + 1; });

  res.json({
    total_articles: rows.length,
    today_count: todayCount,
    last_7_days: week7Count,
    by_company: companies,
    last_run: runLog[0] || null,
    run_count: runLog.length,
  });
});

// ── API: model catalog ─────────────────────────────────────────────────────
app.get("/api/models", (req, res) => {
  const models = readModelStore();
  const { provider } = req.query;
  let filtered = models;
  if (provider && provider !== "All") {
    filtered = filtered.filter((m) => m.provider === provider);
  }
  const providers = Array.from(new Set(models.map((m) => m.provider))).sort();
  res.json({ count: filtered.length, providers, items: filtered });
});

// ── API: manual model refresh ──────────────────────────────────────────────
app.post("/api/run-models", async (req, res) => {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(500).json({
      success: false,
      error: "GEMINI_API_KEY is not set."
    });
  }
  try {
    const result = await runModelAgent(key);
    res.json({ success: true, ...result });
  } catch (err) {
    console.error("Model agent run failed:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── API: manual trigger ────────────────────────────────────────────────────
app.post("/api/run", async (req, res) => {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(500).json({
      success: false,
      error: "GEMINI_API_KEY is not set. Run: export GEMINI_API_KEY=... and restart the server."
    });
  }
  try {
    const result = await runAgent(key);
    res.json({ success: true, ...result });
  } catch (err) {
    console.error("Agent run failed:", err.message);
    res.status(500).json({
      success: false,
      error: err.message || "Agent failed. Check server terminal for details."
    });
  }
});

const server = app.listen(PORT, () => {
  console.log("\n✓ GenAI Monitor running");
  console.log(`  Dashboard → http://localhost:${PORT}`);
  console.log(`  API key   → ${process.env.GEMINI_API_KEY ? "✓ set" : "✗ NOT SET — export GEMINI_API_KEY=..."}`);
  console.log(`\nEndpoints:`);
  console.log(`  GET  /api/news        — all stored articles`);
  console.log(`  GET  /api/today       — today's articles`);
  console.log(`  GET  /api/stats       — summary stats`);
  console.log(`  GET  /api/models      — model comparison catalog`);
  console.log(`  POST /api/run         — trigger manual news fetch`);
  console.log(`  POST /api/run-models  — trigger manual model catalog refresh\n`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`\n✗ Port ${PORT} is already in use.`);
    console.error(`  Either stop the other process, or run on a different port:`);
    console.error(`  PORT=3001 node server.js\n`);
  } else {
    console.error("Server error:", err.message);
  }
  process.exit(1);
});
