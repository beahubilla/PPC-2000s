// ============================================================
// PHASE HTML LOADER (phases/past.html, phases/present.html, phases/future.html)
// ------------------------------------------------------------
// Dynamically loads the Hero and Interactive Relic HTML from
// phases/past.html, phases/present.html, and phases/future.html
// when running on a local/web server (e.g., Live Server, GitHub Pages).
// Automatically falls back to the built-in templates when opened
// directly via double-click (file:// protocol).
// ============================================================
async function loadSinglePhaseHtml(phase) {
  const heroSlot = document.getElementById(`hero-${phase}-slot`);
  const relicSlot = document.getElementById(`relic-${phase}-slot`);
  const fallback = (window.PHASE_TEMPLATES && window.PHASE_TEMPLATES[phase]) || { hero: '', relic: '' };

  let heroHtml = fallback.hero;
  let relicHtml = fallback.relic;

  if (location.protocol === 'http:' || location.protocol === 'https:') {
    try {
      const res = await fetch(`./phases/${phase}.html`, { cache: 'no-cache' });
      if (res.ok) {
        const text = await res.text();
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const heroTpl = doc.getElementById(`${phase}-hero-template`);
        const relicTpl = doc.getElementById(`${phase}-relic-template`);
        if (heroTpl) heroHtml = heroTpl.innerHTML.trim();
        if (relicTpl) relicHtml = relicTpl.innerHTML.trim();
      }
    } catch (e) {
      // Fallback to embedded phase templates if offline/file://
    }
  }

  if (heroSlot) heroSlot.outerHTML = heroHtml;
  if (relicSlot) relicSlot.outerHTML = relicHtml;
}

async function mountAllPhases() {
  await Promise.all([
    loadSinglePhaseHtml('past'),
    loadSinglePhaseHtml('present'),
    loadSinglePhaseHtml('future')
  ]);
}
