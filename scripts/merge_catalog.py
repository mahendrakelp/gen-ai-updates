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
# 2026-11-16 research pass:
# Same network footprint as yesterday: only platform.claude.com resolves
# in this session's network policy (OpenAI, Google, AWS, x.ai, Mistral,
# DeepSeek, Alibaba, Cohere, NVIDIA, Perplexity, Moonshot, Microsoft, and
# Meta developer domains all return ENOTFOUND). Verified Anthropic rows
# again against two live official pages:
#   - https://platform.claude.com/docs/en/about-claude/pricing
#   - https://platform.claude.com/docs/en/about-claude/model-deprecations
#
# All Anthropic rows (pricing, context, cached_input, status, superseded_by)
# now match the live pages verbatim after yesterday's corrections. No new
# deltas today.
#
# Notes for future runs:
#   - claude-opus-4-5-20251101 has a tentative retirement "not sooner than
#     Nov 24, 2026" — expect a Deprecated status flip within a week.
#   - claude-sonnet-4-5-20250929 retires Nov 30, 2026 (already Deprecated).
#   - claude-mythos-5-2 has no official release_date on either page. Its
#     retirement is "not sooner than November 9, 2027" (one-year pattern
#     matches Fable 5.2's 2026-11-09 release) but HARD RULE 2 forbids
#     inferring a date, so release_date stays null.
#
# No reliable official source for any other provider was reachable today;
# skipped per HARD RULE 2 (never fabricate).
UPDATES = {}

# Insertions (full model object). None today — no new Anthropic models on
# the pricing or deprecations page that aren't already in the store.
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

    raw.sort(key=lambda m: (m["provider"], m["model_name"]))
    STORE.write_text(json.dumps(raw, indent=2, ensure_ascii=False) + "\n")
    print(f"\nTotal models: {len(raw)} | inserted: {inserted} | updated: {updated}")


if __name__ == "__main__":
    main()
