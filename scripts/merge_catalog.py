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
    # Anthropic Fable 5 and Mythos 5 were suspended worldwide on
    # 2026-06-12/13 following a US government export-control directive.
    # Anthropic has stated it is working to restore access; Opus/Sonnet/Haiku
    # are unaffected. Source: anthropic.com/news/fable-mythos-access
    "anthropic::claude-fable-5": {
        "cons": [
            "Access suspended worldwide since 2026-06-12 under US export-control directive (restoration pending)",
            "Highest price in lineup ($10/$50)",
            "No extended-thinking budget controls",
            "New tokenizer can use ~35% more tokens for same text",
        ],
        "source_url": "https://www.anthropic.com/news/fable-mythos-access",
    },
    "anthropic::claude-mythos-5": {
        "cons": [
            "Access suspended worldwide since 2026-06-13 under US export-control directive (restoration pending)",
            "Limited availability via Project Glasswing only",
            "No self-serve access; invitation required",
            "Same premium pricing as Fable 5",
        ],
        "source_url": "https://www.anthropic.com/news/fable-mythos-access",
    },
}

# Insertions (key -> full model object). None this run.
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
    STORE.write_text(json.dumps(raw, indent=2) + "\n")
    print(f"\nTotal models: {len(raw)} | inserted: {inserted} | updated: {updated}")


if __name__ == "__main__":
    main()
