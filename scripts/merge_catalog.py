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
    # Anthropic officially confirmed on the pricing page that Sonnet 5's
    # $2/$10 introductory pricing (originally set to expire 2026-08-31) is
    # now the permanent standard price; the previously scheduled increase
    # to $3/$15 on 2026-09-01 was cancelled. Store already carries $2/$10,
    # but the pros list should reflect this now-permanent status.
    # Source: https://platform.claude.com/docs/en/about-claude/pricing
    "anthropic::claude-sonnet-5": {
        "pros": [
            "Cheaper than Opus tier while retaining adaptive thinking and 1M context",
            "$2/$10 introductory pricing confirmed as permanent standard on 2026-09-01",
            "128K max output tokens with streaming",
            "Full effort range low through max",
            "Common cascade partner as worker under Opus/Fable",
        ],
        "source_url": "https://platform.claude.com/docs/en/about-claude/pricing",
    },
}

# Insertions (full model object). No new models confirmed today; the
# research pass surfaced only names that already exist in the store under
# their canonical provider IDs (e.g. NVIDIA models under the "nvidia/"
# prefix, Moonshot kimi-k2 variants under their dated IDs). Direct fetches
# to several official sites (docs.perplexity.ai, api-docs.deepseek.com,
# docs.x.ai, mistral.ai, llama.com) were blocked by the network egress
# proxy, so aggregator-only "changes" were not treated as confirmed.
INSERTIONS = []


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

    raw.sort(key=lambda m: (m["provider"], m["model_name"].lower()))
    STORE.write_text(json.dumps(raw, indent=2, ensure_ascii=False) + "\n")
    print(f"\nTotal models: {len(raw)} | inserted: {inserted} | updated: {updated}")


if __name__ == "__main__":
    main()
