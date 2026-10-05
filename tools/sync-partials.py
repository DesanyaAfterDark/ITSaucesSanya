#!/usr/bin/env python3
"""Duplicate shared partials into every page (no build step needed at runtime).

Each page contains marker pairs like:
    <!-- @partial:header -->  ...  <!-- /@partial:header -->
This script replaces everything between each pair with partials/<name>.html,
then marks the current page's nav links with aria-current="page".

Usage:  python3 tools/sync-partials.py        (run from anywhere)
Edit partials/*.html, re-run, done. Pages stay plain static HTML.
"""
import pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PARTIALS = ROOT / "partials"
PAGES = {
    "index.html": "home",
    "work.html": "work",
    "gallery.html": "gallery",
    "services.html": "services",
    "process.html": "process",
    "contact.html": "contact",
}
MARK = re.compile(r"(<!-- @partial:(?P<name>[\w-]+) -->)(.*?)(<!-- /@partial:(?P=name) -->)", re.S)

def render(name, page_key):
    html = (PARTIALS / f"{name}.html").read_text()
    # active nav state (static, so it works without JS)
    html = re.sub(
        rf'(<a [^>]*data-nav="{page_key}")',
        r'\1 aria-current="page"',
        html,
    )
    return html

changed = 0
for page, key in PAGES.items():
    path = ROOT / page
    if not path.exists():
        print(f"skip (missing): {page}")
        continue
    src = path.read_text()
    out = MARK.sub(lambda m: m.group(1) + "\n" + render(m.group("name"), key).rstrip() + "\n  " + m.group(4), src)
    if out != src:
        path.write_text(out)
        changed += 1
    names = sorted(set(m.group("name") for m in MARK.finditer(out)))
    print(f"{page:15} partials: {', '.join(names)}")
print(f"updated {changed} file(s)")
