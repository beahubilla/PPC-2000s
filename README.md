# Tatak 2000s: Philippine Pop Culture Virtual Museum (Modular Edition)

This project has been modularized by **Phase (Past, Present, Future)** across HTML, Data, JavaScript, and CSS so you can edit any era directly without scrolling through a single massive file.

## 📁 Folder Structure by Phase

```text
ph-pop-culture-museum-main/
├── index.html                  # Slim museum shell (Header, Gallery Grid, Modals, Player, Footer)
├── phases/                     # ✏️ HTML Markup separated by Phase (Hero + Interactive Relic)
│   ├── past.html               # Past (2000–2010): 2000s Hero & Nokia 3310 + Snake II HTML
│   ├── present.html            # Present (Today/2020s): Today Hero & 5G Smartphone + Glow Rush HTML
│   └── future.html             # Future (2030s+): Future Hero & NeuroLink AR Visor + Quantum Sync HTML
├── js/
│   ├── data/                   # ✏️ Exhibit & Relic Data separated by Phase
│   │   ├── past.js             # Past (2000–2010) exhibits, Nokia SMS presets, Friendster profiles
│   │   ├── present.js          # Present (2020s) exhibits & Then-vs-Now comparison slider pairs
│   │   ├── future.js           # Future (2030s+) exhibits & AR Visor holographic auto-replies
│   │   └── shared.js           # Shared room metadata, Winamp playlists & automatic phase merger
│   ├── phases/                 # ✏️ Interactive Relic & Mini-Game JS separated by Phase
│   │   ├── past.js             # Nokia 3310 multi-tap SMS composer, audio tones & Snake II engine
│   │   ├── present.js          # 5G Smartphone Besties GC chat & Glow Rush 15s reflex game
│   │   ├── future.js           # 2035 NeuroLink AR Visor Holo-Link chat & Quantum Sync game
│   │   └── loader.js           # Injects phases/past.html, present.html, and future.html into index.html
│   └── app.js                  # Core museum logic (Time Machine, Rooms, Passport, Floor Map, Player)
├── css/                        # ✏️ Stylesheets separated by Phase
│   ├── past.css                # Past (2000–2010) Candy Y2K palette & Nokia 3310 hardware styles
│   ├── base.css                # Shared layout, cards, modals, passport, floor map & sources styles
│   ├── present.css             # Present (Today/2020s) glassmorphic theme & 5G Smartphone styles
│   └── future.css              # Future (2030s+) Holographic Dark Mode & NeuroLink AR Visor styles
├── images/                     # Museum image assets
└── sync_phases.py              # Optional helper to sync phases/*.html into js/phases/*.js for file:// mode
```

## 🛠️ Quick Editing Guide

| What you want to edit | File to open |
| :--- | :--- |
| **Past (2000–2010)** Hero banner or Nokia 3310 HTML | `phases/past.html` |
| **Past (2000–2010)** Exhibit text, facts, artifacts, SMS presets, or Friendster profiles | `js/data/past.js` |
| **Past (2000–2010)** Nokia 3310 keypad or Snake II game mechanics | `js/phases/past.js` |
| **Past (2000–2010)** Candy Y2K colors or Nokia 3310 styling | `css/past.css` |
| **Present (Today / 2020s)** Hero banner or 5G Smartphone HTML | `phases/present.html` |
| **Present (Today / 2020s)** Exhibit text, facts, artifacts, or Then-vs-Now slider | `js/data/present.js` |
| **Present (Today / 2020s)** Group chat or Glow Rush mini-game mechanics | `js/phases/present.js` |
| **Present (Today / 2020s)** Today Wing theme or 5G Smartphone styling | `css/present.css` |
| **Future (2030s+)** Hero banner or 2035 NeuroLink AR Visor HTML | `phases/future.html` |
| **Future (2030s+)** Exhibit text, facts, artifacts, or AI Holo-Node auto-replies | `js/data/future.js` |
| **Future (2030s+)** Holo-Link chat or Quantum Sync game mechanics | `js/phases/future.js` |
| **Future (2030s+)** Holographic Dark Mode theme or AR Visor styling | `css/future.css` |
| **Shared** Winamp playlists, room titles/colors, or image credits | `js/data/shared.js` |

## 🚀 Running Locally

- **With VS Code Live Server / Local HTTP Server / GitHub Pages (Recommended):**
  Open the folder in VS Code and click **Go Live** (or run `python3 -m http.server 8000`). Any edits to `phases/past.html`, `phases/present.html`, `phases/future.html`, `js/data/*.js`, `js/phases/*.js`, or `css/*.css` appear immediately on refresh.
- **Direct Double-Click (`file://` mode):**
  Works out of the box! If you edit `phases/*.html` and want those HTML changes reflected when opening `index.html` directly via `file://` without a local server, run `python3 sync_phases.py`.
