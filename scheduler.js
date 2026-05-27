/**
 * genai-monitor/scheduler.js
 *
 * Runs the agent every day at 05:00 IST (Asia/Kolkata)
 * Start with: node scheduler.js
 * Keep running with: pm2 start scheduler.js --name genai-monitor
 */

require("dotenv").config({ override: true });

const cron = require("node-cron");
const { runAgent } = require("./agent");
const { runModelAgent } = require("./model_agent");
const fs = require("fs");
const path = require("path");

const LOG_PATH = path.join(__dirname, "data", "run_log.json");
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("ERROR: GEMINI_API_KEY environment variable not set");
  console.error("Set it with: export GEMINI_API_KEY=...");
  process.exit(1);
}

function appendRunLog(result) {
  let log = [];
  if (fs.existsSync(LOG_PATH)) {
    try { log = JSON.parse(fs.readFileSync(LOG_PATH, "utf8")); } catch {}
  }
  log.unshift({ ...result, ran_at: new Date().toISOString() });
  log = log.slice(0, 90); // keep last 90 runs (~3 months)
  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

async function run() {
  const startTime = Date.now();
  console.log(`\n${"─".repeat(60)}`);
  console.log(`  GenAI Monitor — Scheduled Run`);
  console.log(`  ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`);
  console.log(`${"─".repeat(60)}`);

  try {
    const result = await runAgent(API_KEY);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log(`\n  ✓ News agent done in ${elapsed}s`);
    console.log(`  New articles added: ${result.new_items}`);
    console.log(`  Duplicates skipped: ${result.skipped}`);

    appendRunLog({ status: "success", elapsed_s: elapsed, ...result });
  } catch (err) {
    console.error(`\n  ✗ News agent failed: ${err.message}`);
    appendRunLog({ status: "error", error: err.message, ran_at: new Date().toISOString() });
  }

  // Model catalog refresh runs independently — a news-agent failure shouldn't
  // skip the model refresh and vice versa.
  const modelStart = Date.now();
  try {
    const result = await runModelAgent(API_KEY);
    const elapsed = ((Date.now() - modelStart) / 1000).toFixed(1);
    console.log(`\n  ✓ Model agent done in ${elapsed}s`);
    console.log(`  Models inserted: ${result.inserted}, updated: ${result.updated}, total: ${result.total}`);
  } catch (err) {
    console.error(`\n  ✗ Model agent failed: ${err.message}`);
  }
}

// ── Schedule: 05:00 IST every day ──────────────────────────────────────────
// IST = UTC+5:30, so 05:00 IST = 23:30 UTC previous day
cron.schedule(
  "30 23 * * *",
  () => { run(); },
  { timezone: "UTC" }
);

console.log("GenAI Monitor Scheduler started");
console.log("Next run: 05:00 IST daily (23:30 UTC)");
console.log("Press Ctrl+C to stop\n");

// Run immediately on startup so you get today's news right away
console.log("Running immediately on startup...");
run();
