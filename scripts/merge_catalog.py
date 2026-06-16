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
    "moonshot::kimi-k2.7-code": {
        "pros": [
            "Strongest Kimi coding model to date, built on K2.6",
            "~30% reduction in thinking-token usage vs K2.6 for better cost efficiency",
            "HighSpeed Mode (rolled out 2026-06-15) delivers ~180-260 tok/s throughput",
            "Improved instruction following in long contexts and higher coding task success rates",
        ],
        "cons": [
            "Always-on thinking mode is less flexible for fast/non-reasoning calls",
            "Coding-specialized; weaker general-purpose chat than K2.6",
            "HighSpeed Mode capacity-constrained, limited to Kimi Code Beta / Business",
            "Massive 1T-param weights costly to self-host; works best with Kimi Code CLI",
        ],
        "source_url": "https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart",
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
