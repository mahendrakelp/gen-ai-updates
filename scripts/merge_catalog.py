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
# 2026-09-13 research pass:
# Verified official release/pricing pages and provider changelogs for all 14
# providers. Every current flagship model already exists in the store under
# its canonical id (OpenAI GPT-6 Astra, Anthropic Fable 5.1, Google Gemini
# 3.8 Flash, xAI Grok 4.6, Meta Muse Spark 1.3, DeepSeek V4.1 Flash,
# Alibaba Qwen 3.8-Max, Cohere Command A+, Moonshot Kimi K3, NVIDIA
# Nemotron 3.5 family, Microsoft MAI-Code-1.1-Flash, Mistral Leanstral 1.5).
# xAI Grok 4.7 slipped past its September 12 target and has no official
# card/pricing yet — not confirmed. NVIDIA "Sports Tennis" 31B fine-tune
# on HF has no blog, pricing, or benchmarks — skipped per HARD RULE 1.
# No pricing, context window, or status field changed vs. yesterday's
# baseline on any tracked model.
UPDATES = {}

# Insertions (full model object). None confirmed today.
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
