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
#
# 2026-11-14 research pass:
# Only platform.claude.com was reachable from this session (the OpenAI,
# Google, AWS, x.ai, Mistral, DeepSeek, Alibaba, Cohere, NVIDIA, Perplexity,
# Moonshot, Microsoft, and Meta developer domains resolve to ENOTFOUND under
# the current network policy). Verified every Anthropic row against the live
# official pricing page at https://platform.claude.com/docs/en/about-claude/pricing.
# Store prices, context windows and statuses already match the official page
# except Claude Sonnet 4.5, which the page footnote explicitly labels
# "deprecated"; promoted the store row to match.
# Claude Mythos 5.2 appears on the official pricing table (limited access
# via the Cyber Verification Program) at $8 input / $40 output, matching
# Fable 5.2; inserted as preview with limited-availability note.
# No reliable official source for other providers was reachable today;
# skipped per HARD RULE 2 (never fabricate). Third-party aggregator pages
# were consulted via WebSearch but not used to overwrite any stored field.
UPDATES = {
    "anthropic::claude-sonnet-4-5": {"status": "deprecated"},
}

# Insertions (full model object).
INSERTIONS = [
    {
        "provider": "Anthropic",
        "model_name": "Claude Mythos 5.2",
        "model_id": "claude-mythos-5-2",
        "release_date": None,
        "status": "preview",
        "context_window": 1000000,
        "max_output_tokens": None,
        "input_price_per_1m": 8.0,
        "cached_input_price_per_1m": 0.2,
        "output_price_per_1m": 40.0,
        "modalities": ["text", "vision"],
        "tool_use": True,
        "structured_output": True,
        "mcp_support": True,
        "reasoning": True,
        "open_weights": False,
        "best_for": "cyber-verified frontier reasoning and research",
        "pros": [
            "Flagship Mythos tier at Fable 5.2 pricing",
            "1M token context window with newer tokenizer",
            "Fast mode available on the Claude API",
        ],
        "cons": [
            "Limited availability: Cyber Verification Program required",
            "Not available under zero data retention without authorization",
        ],
        "benchmarks": {},
        "source_url": "https://platform.claude.com/docs/en/about-claude/pricing",
        "architecture": None,
        "previous_version": "claude-mythos-5-1",
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
    STORE.write_text(json.dumps(raw, indent=2, ensure_ascii=False) + "\n")
    print(f"\nTotal models: {len(raw)} | inserted: {inserted} | updated: {updated}")


if __name__ == "__main__":
    main()
