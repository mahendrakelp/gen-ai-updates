#!/usr/bin/env python3
"""Merge today's catalog updates into data/models_store.json.

Only applies confirmed, source-backed updates discovered during this run.
"""
import json
import os
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
STORE = REPO / "data" / "models_store.json"
TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")

# Updates keyed by lowercase "provider::model_id"
# Each value is a dict of fields to overwrite. Only confirmed deltas.
UPDATES = {
    # Alibaba qwen3-max was marked deprecated but remains served on
    # Alibaba Cloud Model Studio / DashScope as a superseded-but-active
    # snapshot. Source: alibabacloud.com/help/en/model-studio/models.
    "alibaba::qwen3-max": {
        "status": "ga",
        "best_for": "Prior-generation flagship reasoning (still GA, superseded by 3.7-Max)",
        "cons": [
            "Superseded by Qwen3.7-Max (still available, not retired)",
            "Smaller 262K context vs 1M on successor",
            "Proprietary, no open weights",
        ],
    },
    # Google gemini-3-flash is still labeled Preview on Vertex AI / Agent
    # Platform; recommended migration target is gemini-3.5-flash.
    # Source: cloud.google.com/vertex-ai/generative-ai/pricing
    "google::gemini-3-flash": {
        "status": "preview",
        "superseded_by": "gemini-3.5-flash",
        "best_for": "Cost-efficient frontier reasoning at Flash speed",
        "cons": [
            "Still labeled Preview on Vertex/Agent Platform",
            "Google recommends migrating to Gemini 3.5 Flash",
            "Audio input priced separately at $1/1M tokens",
        ],
        "source_url": "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    },
    # Google 3.1-flash-lite-preview was missing the superseded_by pointer
    # to the GA gemini-3.1-flash-lite.
    "google::gemini-3.1-flash-lite-preview": {
        "superseded_by": "gemini-3.1-flash-lite",
        "source_url": "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    },
    # Microsoft MAI-1-preview is now superseded by MAI-Thinking-1
    # (Microsoft's first in-house reasoning LLM), which lists
    # previous_version=mai-1-preview. Source: microsoft.ai/news Build 2026.
    "microsoft::mai-1-preview": {
        "superseded_by": "mai-thinking-1",
    },
    # Moonshot kimi-k2.7-code had an unverified swe_bench_verified=78.2.
    # Moonshot only published first-party deltas vs K2.6 on their internal
    # benchmarks; replace with the published deltas.
    # Source: platform.moonshot.ai release notes
    "moonshot::kimi-k2.7-code": {
        "benchmarks": {
            "kimi_code_bench_v2_delta_vs_k2_6": 21.8,
            "program_bench_delta_vs_k2_6": 11.0,
            "mls_bench_lite_delta_vs_k2_6": 31.5,
        },
        "cons": [
            "Always-on thinking mode is less flexible for fast/non-reasoning calls",
            "Coding-specialized; weaker general-purpose chat than K2.6",
            "HighSpeed Mode capacity-constrained, limited to Kimi Code Beta / Business",
            "Massive 1T-param weights costly to self-host; works best with Kimi Code CLI",
            "No independent third-party benchmark numbers published as of release; all reported deltas are first-party",
        ],
    },
    # xAI grok-4-1-fast deprecation confirmed: deprecated May 15, 2026;
    # retires Aug 15, 2026; requests redirect to grok-4.3.
    # Source: docs.x.ai/developers/migration/may-15-retirement
    "xai::grok-4-1-fast": {
        "cons": [
            "Deprecated May 15, 2026; retires August 15, 2026",
            "Requests redirect to grok-4.3 (billed at grok-4.3 rates)",
            "Lower intelligence than current flagship",
        ],
        "source_url": "https://docs.x.ai/developers/migration/may-15-retirement",
    },
}

# Insertions (full model object). Only Mistral Devstral 2 family was
# discovered missing; the Cohere/Perplexity/xAI insertions proposed by
# research agents were ASR / embedding / video models that don't fit the
# frontier-LLM scope and were intentionally excluded.
INSERTIONS = [
    {
        "provider": "Mistral",
        "model_name": "Devstral 2",
        "model_id": "devstral-2-2512",
        "release_date": "2025-12-09",
        "status": "ga",
        "context_window": 262144,
        "max_output_tokens": None,
        "input_price_per_1m": 0.4,
        "cached_input_price_per_1m": None,
        "output_price_per_1m": 2.0,
        "modalities": ["text"],
        "tool_use": True,
        "structured_output": True,
        "mcp_support": True,
        "reasoning": False,
        "open_weights": True,
        "best_for": "Agentic coding and multi-file edits",
        "pros": [
            "256K context window for whole-codebase context",
            "Open weights under Modified MIT license",
            "Strong SWE-bench Verified score of 72.2%",
        ],
        "cons": [
            "Text-only, no vision input",
            "Output pricing higher than Codestral",
            "Pricing confirmed only via third parties; Mistral price card not directly verified",
        ],
        "benchmarks": {
            "swe_bench_verified": 72.2,
        },
        "source_url": "https://mistral.ai/news/devstral-2-vibe-cli/",
        "architecture": "Dense transformer, 123B parameters",
        "previous_version": "devstral-medium-2507",
        "superseded_by": None,
    },
    {
        "provider": "Mistral",
        "model_name": "Devstral Small 2",
        "model_id": "devstral-small-2-2512",
        "release_date": "2025-12-09",
        "status": "ga",
        "context_window": 262144,
        "max_output_tokens": None,
        "input_price_per_1m": 0.1,
        "cached_input_price_per_1m": None,
        "output_price_per_1m": 0.3,
        "modalities": ["text"],
        "tool_use": True,
        "structured_output": True,
        "mcp_support": True,
        "reasoning": False,
        "open_weights": True,
        "best_for": "Local low-cost agentic coding on consumer hardware",
        "pros": [
            "Apache 2.0 license",
            "Runs on a single 4090 or 32GB Mac",
            "256K context window with 68.0% SWE-bench Verified",
        ],
        "cons": [
            "Text-only",
            "Smaller 24B parameter count limits frontier reasoning",
            "Pricing confirmed only via third parties; Mistral price card not directly verified",
        ],
        "benchmarks": {
            "swe_bench_verified": 68.0,
            "swe_bench_multilingual": 55.7,
        },
        "source_url": "https://mistral.ai/news/devstral-2-vibe-cli/",
        "architecture": "Dense transformer, 24B parameters",
        "previous_version": "devstral-small-2507",
        "superseded_by": None,
    },
]


def main():
    raw = json.loads(STORE.read_text())
    by_key = {f"{m['provider'].lower()}::{m['model_id'].lower()}": m for m in raw}

    inserted = 0
    updated = 0

    for key, patch in UPDATES.items():
        if key not in by_key:
            print(f"  skip update (missing): {key}")
            continue
        m = by_key[key]
        changed = False
        for field, new_val in patch.items():
            if m.get(field) != new_val:
                m[field] = new_val
                changed = True
        if changed:
            m["last_updated"] = TODAY
            updated += 1
            print(f"  updated: {key}")

    for new_model in INSERTIONS:
        key = f"{new_model['provider'].lower()}::{new_model['model_id'].lower()}"
        if key in by_key:
            print(f"  skip insert (exists): {key}")
            continue
        new_model.setdefault("first_seen", TODAY)
        new_model["last_updated"] = TODAY
        raw.append(new_model)
        inserted += 1
        print(f"  inserted: {key}")

    raw.sort(key=lambda m: (m["provider"], m["model_name"]))
    STORE.write_text(json.dumps(raw, indent=2) + "\n")
    print(f"\nTotal models: {len(raw)} | inserted: {inserted} | updated: {updated}")


if __name__ == "__main__":
    main()
