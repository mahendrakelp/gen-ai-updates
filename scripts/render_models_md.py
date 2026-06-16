#!/usr/bin/env python3
"""Render MODELS.md from data/models_store.json."""
import json
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
STORE = REPO / "data" / "models_store.json"
OUT = REPO / "MODELS.md"
TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")

STATUS_ORDER = {"ga": 0, "preview": 1, "deprecated": 2}


def fmt_ctx(n):
    if n is None:
        return "—"
    if n >= 1_000_000:
        v = n / 1_000_000
        return f"{v:g}M"
    if n >= 1_000:
        v = n / 1_000
        return f"{v:g}K"
    return str(n)


def fmt_price(p):
    if p is None:
        return "—"
    return f"${p:,.2f}"


def fmt_date(d):
    return d if d else "—"


def fmt_lineage(m):
    parts = []
    prev = m.get("previous_version")
    sup = m.get("superseded_by")
    if prev:
        parts.append(f"prev: `{prev}`")
    if sup:
        parts.append(f"superseded by: `{sup}`")
    return " → ".join(parts) if parts else "—"


def md_escape(s):
    if not s:
        return ""
    return str(s).replace("|", "\\|").replace("\n", " ")


def main():
    models = json.loads(STORE.read_text())

    by_provider = {}
    for m in models:
        by_provider.setdefault(m["provider"], []).append(m)

    lines = []
    lines.append("# Frontier Production Model Catalog\n")
    lines.append(f"_Last refreshed: {TODAY} by genai-model-catalog routine._\n")
    lines.append(f"_Total models tracked: {len(models)} across {len(by_provider)} providers._\n")

    for provider in sorted(by_provider.keys()):
        rows = sorted(
            by_provider[provider],
            key=lambda m: (
                STATUS_ORDER.get(m.get("status"), 9),
                -(int(m["release_date"].replace("-", "")) if m.get("release_date") else 0),
            ),
        )
        lines.append(f"\n## {provider}\n")
        lines.append(
            "| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |"
        )
        lines.append(
            "| --- | --- | --- | --- | --- | --- | --- | --- | --- |"
        )
        for m in rows:
            name = md_escape(m["model_name"])
            mid = md_escape(m["model_id"])
            arch = md_escape(m.get("architecture")) or "—"
            best = md_escape(m.get("best_for")) or "—"
            lineage = fmt_lineage(m)
            lines.append(
                f"| {name} (`{mid}`) | {m['status']} | {fmt_date(m.get('release_date'))} | "
                f"{fmt_ctx(m.get('context_window'))} | {fmt_price(m.get('input_price_per_1m'))} | "
                f"{fmt_price(m.get('output_price_per_1m'))} | {arch} | {best} | {lineage} |"
            )

    OUT.write_text("\n".join(lines) + "\n")
    print(f"Wrote {OUT} ({len(models)} models, {len(by_provider)} providers)")


if __name__ == "__main__":
    main()
