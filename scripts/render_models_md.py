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
        if n % 1_000_000 == 0:
            return f"{n // 1_000_000}M"
        return f"{n / 1_000_000:.1f}M"
    if n >= 1_000:
        if n % 1000 == 0:
            return f"{n // 1000}K"
        return f"{n / 1_000:.1f}K"
    return str(n)


def fmt_price(p):
    if p is None:
        return "—"
    return f"${p:,.2f}"


def fmt_date(d):
    return d if d else "—"


def fmt_lineage(m):
    prev = m.get("previous_version")
    sup = m.get("superseded_by")
    if not prev and not sup:
        return "—"
    parts = []
    if prev:
        parts.append(f"prev: {prev}")
    if sup:
        parts.append(f"superseded by: {sup}")
    return " → ".join(parts) if prev else f"→ {parts[0]}"


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
    lines.append("# Frontier Production Model Catalog")
    lines.append("")
    lines.append(f"_Last refreshed: {TODAY} by genai-model-catalog routine._")

    for provider in sorted(by_provider.keys()):
        rows = sorted(
            by_provider[provider],
            key=lambda m: (
                STATUS_ORDER.get(m.get("status"), 9),
                -(int(m["release_date"].replace("-", "")) if m.get("release_date") else 0),
            ),
        )
        lines.append("")
        lines.append(f"## {provider}")
        lines.append("")
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
