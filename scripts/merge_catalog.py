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
# 2026-11-15 research pass:
# Only platform.claude.com resolves in this session's network policy today
# (OpenAI, Google, AWS, x.ai, Mistral, DeepSeek, Alibaba, Cohere, NVIDIA,
# Perplexity, Moonshot, Microsoft, and Meta developer domains return
# ENOTFOUND). Verified Anthropic rows against two live official pages:
#   - https://platform.claude.com/docs/en/about-claude/pricing
#   - https://platform.claude.com/docs/en/about-claude/model-deprecations
#
# Status corrections from the official Model status table:
#   - claude-opus-4-5-20251101 is officially "Active" (retirement not sooner
#     than Nov 24, 2026), not deprecated as the store had it.
#   - claude-opus-4-6 is officially "Active" (retirement not sooner than
#     Feb 5, 2027), not deprecated.
#   - claude-opus-4-8 is officially "Active" (retirement not sooner than
#     May 28, 2027), not deprecated.
#   - claude-sonnet-4-5-20250929 is Deprecated with recommended replacement
#     claude-sonnet-5-5 per the 2026-09-30 deprecation notice; store had
#     superseded_by=claude-sonnet-4-6 which is now corrected.
#
# All other Anthropic rows (pricing, context, status) already match the
# live pages. No reliable official source for any other provider was
# reachable today; skipped per HARD RULE 2 (never fabricate).
UPDATES = {
    "anthropic::claude-opus-4-5-20251101": {"status": "ga"},
    "anthropic::claude-opus-4-6": {"status": "ga"},
    "anthropic::claude-opus-4-8": {"status": "ga"},
    "anthropic::claude-sonnet-4-5-20250929": {"superseded_by": "claude-sonnet-5-5"},
}

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
