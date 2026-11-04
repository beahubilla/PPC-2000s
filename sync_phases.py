#!/usr/bin/env python3
"""
Optional Helper: Syncs any manual edits made in `phases/past.html`, `phases/present.html`,
and `phases/future.html` into the fallback templates inside `js/phases/*.js` for `file://` mode.
Note: If you use VS Code Live Server or GitHub Pages (`http://` / `https://`), `phases/*.html`
are loaded directly via fetch() on every page load without needing to run this script!
"""
import os, re, json

ROOT = os.path.dirname(os.path.abspath(__file__))

for phase in ("past", "present", "future"):
    html_path = os.path.join(ROOT, "phases", f"{phase}.html")
    js_path = os.path.join(ROOT, "js", "phases", f"{phase}.js")
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    hero_m = re.search(rf'<template id="{phase}-hero-template">(.*?)</template>', html, re.S)
    relic_m = re.search(rf'<template id="{phase}-relic-template">(.*?)</template>', html, re.S)
    if not (hero_m and relic_m):
        continue
    hero_str = json.dumps(hero_m.group(1).strip())
    relic_str = json.dumps(relic_m.group(1).strip())
    with open(js_path, "r", encoding="utf-8") as f:
        js = f.read()
    replacement = f"window.PHASE_TEMPLATES.{phase} = {{\n  hero: {hero_str},\n  relic: {relic_str}\n}};"
    js_new = re.sub(rf"window\.PHASE_TEMPLATES\.{phase}\s*=\s*\{{.*?\}};", lambda _: replacement, js, flags=re.S)
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_new)
    print(f"Synced phases/{phase}.html -> js/phases/{phase}.js")
