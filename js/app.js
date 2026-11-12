// ============================================================
// CORE MUSEUM APPLICATION SHELL (js/app.js)
// ------------------------------------------------------------
// Controls:
// 1. Era Time Machine (2000s / Today / 2030s+ Future) & Exhibit Cards
// 2. Detail Room Modals (with 5 Worksheet Category Sub-Cards &
//    Full-Width High-Contrast Compare 3-Era Banner + Fallback Hero Images)
// 3. Friendster Curators Modal, Before/After Slider, OPM Mini-Player
// 4. Museum Floor Map & 18-Stamp Museum Passport (Mobile & Web Friendly)
// 5. Auto-Popup Museum Passport on Site Entry (unless a #room- hash is open)
// ============================================================

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------
window.$ = window.$ || (id => document.getElementById(id));
var $ = window.$;

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function profShort(p) {
  return p.short || String(p.name || '?').trim().split(/\s+/)[0];
}
function profInitials(p) {
  if (p.initials) return p.initials;
  const w = String(p.name || '?').trim().split(/\s+/).filter(Boolean);
  return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : '')).toUpperCase();
}

// ------------------------------------------------------------
// TIME MACHINE (2000s <-> Today <-> Future 2030s+) + EXHIBIT WINGS
// ------------------------------------------------------------
const ERA_STORAGE_KEY = 'ppc-era';
const VALID_ERAS = ['then', 'now', 'future'];
let currentEra = document.documentElement.classList.contains('era-future')
  ? 'future'
  : (document.documentElement.classList.contains('era-now') ? 'now' : 'then');
let currentTopic = 'all';
let warpTimers = [];

const ERA_INFO = {
  then: {
    name: 'The 2000s Wing',
    theme: '#fff4fa',
    desc: '2000–2010: texting clans, Friendster, burned CDs, LAN shops, and the first online rescue calls.'
  },
  now: {
    name: 'The Today Wing',
    theme: '#e9e6ff',
    desc: 'The 2020s: short videos, e-wallets, P-Pop, mobile esports, and real-time weather alerts.'
  },
  future: {
    name: 'The Future Wing',
    theme: '#070b19',
    desc: '2030s Onwards: 6G AI-assisted communication, digital banking, AI fact-checking, virtual concerts, and satellite weather forecasting.'
  }
};

// One exhibit, seen through one era. Missing fields fall back to safe blanks.
function eraData(ex, era) {
  if (era === 'future') {
    const f = ex.future || {};
    const gal = f.gallery || [];
    const fallbackImg = (gal[0] && gal[0].src) || ex.image || '';
    return {
      era: 'future',
      label: '2030s+',
      title: f.title || ex.title || '',
      blurb: f.blurb || ex.blurb || '',
      badge: f.badge || ex.badge || '',
      tag: f.tag || ex.tag || '',
      icon: f.icon || ex.icon || '🚀',
      image: f.image || fallbackImg,
      alt: f.alt || f.badge || ex.badge || '',
      summary: f.summary || ex.futureSummary || '',
      intro: f.intro || '',
      categories: f.categories || [],
      facts: f.facts || [],
      artifacts: f.artifacts || [],
      gallery: gal,
      impact: f.impact || ex.impact || ''
    };
  }
  if (era === 'now') {
    const t = ex.today || {};
    const gal = t.gallery || [];
    const fallbackImg = (gal[0] && gal[0].src) || ex.image || '';
    return {
      era: 'now',
      label: 'Today',
      title: t.title || ex.title || '',
      blurb: t.blurb || ex.blurb || '',
      badge: t.badge || ex.badge || '',
      tag: t.tag || ex.tag || '',
      icon: t.icon || ex.icon || '✨',
      image: t.image || fallbackImg,
      alt: t.alt || t.badge || ex.badge || '',
      summary: ex.now || '',
      intro: t.intro || '',
      categories: t.categories || [],
      facts: t.facts || [],
      artifacts: t.artifacts || [],
      gallery: gal,
      impact: t.impact || ex.impact || ''
    };
  }
  const gal = ex.gallery || [];
  const fallbackImg = (gal[0] && gal[0].src) || '';
  return {
    era: 'then',
    label: '2000–2010',
    title: ex.thenTitle || ex.title || '',
    blurb: ex.thenBlurb || ex.blurb || '',
    badge: ex.badge || '',
    tag: ex.tag || '',
    icon: ex.icon || '✨',
    image: ex.image || fallbackImg,
    alt: ex.alt || ex.badge || '',
    summary: ex.then || '',
    intro: ex.intro || '',
    categories: ex.categories || [],
    facts: ex.facts || [],
    artifacts: ex.artifacts || [],
    gallery: gal,
    impact: ex.impact || ''
  };
}

function setEra(era) {
  if (!VALID_ERAS.includes(era)) return;
  if (era === currentEra) return;
  warpTimers.forEach(clearTimeout);
  warpTimers = [];
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const warp = $('warp');
  if (warp && !reduce) {
    warp.className = 'warp warping to-' + era;
    warpTimers.push(setTimeout(() => applyEra(era), 260));
    warpTimers.push(setTimeout(() => { warp.className = 'warp'; }, 760));
  } else {
    applyEra(era);
  }
}

function applyEra(era) {
  currentEra = VALID_ERAS.includes(era) ? era : 'then';
  const root = document.documentElement;
  root.classList.remove('era-then', 'era-now', 'era-future');
  root.classList.add('era-' + currentEra);
  try { localStorage.setItem(ERA_STORAGE_KEY, currentEra); } catch (e) { /* ignore */ }

  document.querySelectorAll('[data-era]').forEach(b => {
    const on = b.dataset.era === currentEra;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  const desc = $('wing-desc');
  if (desc) desc.textContent = ERA_INFO[currentEra].desc;
  const currentWing = $('wing-current');
  if (currentWing) currentWing.textContent = `Now viewing: ${ERA_INFO[currentEra].name}`;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', ERA_INFO[currentEra].theme);

  renderGallery();
  switchWing(currentTopic);
  if (currentEra !== 'now' && typeof stopModernGame === 'function') stopModernGame();
  if (currentEra !== 'future' && typeof stopFutureGame === 'function') stopFutureGame();
  if (currentEra !== 'then' && typeof stopSnake === 'function') stopSnake();
}

function renderWingTabs() {
  const wrap = $('wing-tabs');
  if (!wrap) return;
  wrap.innerHTML =
    `<button type="button" class="chip-btn tab-btn active" data-wing="all" onclick="switchWing('all')">All Topics</button>` +
    exhibits.map(ex =>
      `<button type="button" class="chip-btn tab-btn" data-wing="${esc(ex.id)}" onclick="switchWing('${esc(ex.id)}')">${esc(ex.icon)} ${esc(ex.wing)}</button>`
    ).join('');
}

function renderGallery() {
  const grid = $('gallery-grid');
  if (!grid) return;
  grid.innerHTML = exhibits.map((ex, i) => {
    const d = eraData(ex, currentEra);
    const visited = hasStamp(ex.id, currentEra);
    const eraIcon = currentEra === 'then' ? '🕹️' : currentEra === 'now' ? '📱' : '🚀';
    const footLabel = currentEra === 'then' ? 'Impact' : currentEra === 'now' ? 'Why it matters' : '2030s+ Horizon';
    return `
    <article class="exhibit-card reveal" tabindex="0" role="button" data-category="${esc(ex.id)}" data-index="${i}"
             style="--c:${esc(ex.color)}" aria-label="Enter the ${esc(ex.wing)} room (${esc(d.label)}): ${esc(d.title)}">
      <div>
        <div class="card-media">
          <span class="card-emoji" aria-hidden="true">${esc(d.icon)}</span>
          ${d.image ? `<img src="${esc(d.image)}" alt="${esc(d.alt)}" loading="lazy" decoding="async" onerror="this.remove()">` : ''}
          <span class="card-badge">${esc(d.badge)}</span>
          <span class="card-era">${esc(d.label)}</span>
        </div>
        <div class="card-body">
          <div class="flex items-center justify-between gap-2">
            <span class="domain">${esc(ex.domain)}</span>
            <span class="retro-tag">${esc(d.tag)}</span>
          </div>
          <div class="card-era-comparison" aria-label="${esc(d.label)} summary">
            <section class="card-era-copy card-era-copy-${currentEra} is-current">
              <span class="card-era-label"><span aria-hidden="true">${eraIcon}</span>${esc(d.label)}</span>
              <h4>${esc(d.title)}</h4>
              <p class="card-era-subtitle">${esc(d.blurb)}</p>
            </section>
          </div>
        </div>
      </div>
      <div class="card-foot">
        <span>${footLabel}: <em>${esc(d.impact)}</em></span>
        <span class="enter">${visited ? '✓ ' : ''}Enter room →</span>
      </div>
    </article>`;
  }).join('');

  const cards = grid.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.1 });
    cards.forEach(c => io.observe(c));
  } else {
    cards.forEach(c => c.classList.add('in'));
  }
}

// Attached once (the cards themselves are re-built whenever the era changes)
let galleryEventsBound = false;
function initGalleryEvents() {
  if (galleryEventsBound) return;
  const grid = $('gallery-grid');
  if (!grid) return;
  galleryEventsBound = true;
  grid.addEventListener('click', e => {
    const card = e.target.closest('.exhibit-card');
    if (card) openRoom(Number(card.dataset.index));
  });
  grid.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.exhibit-card');
    if (card) { e.preventDefault(); openRoom(Number(card.dataset.index)); }
  });
}

function switchWing(category) {
  currentTopic = category;
  document.querySelectorAll('.tab-btn').forEach(tab => {
    const isActive = tab.getAttribute('data-wing') === category;
    tab.classList.toggle('active', isActive);
    if (isActive && window.innerWidth < 640) {
      tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
  document.querySelectorAll('.exhibit-card').forEach(card =>
    card.classList.toggle('hidden', !(category === 'all' || card.getAttribute('data-category') === category))
  );
}

// ------------------------------------------------------------
// MODAL LAYERS
// ------------------------------------------------------------
let historyOK = true;
const lastFocus = { room: null, fs: null, lb: null, pp: null, map: null };

function histLevel() { return (history.state && history.state.lvl) || 0; }

function enterLevel(lvl, hash) {
  if (!historyOK) return;
  try {
    const base = location.pathname + location.search;
    const url = hash || (lvl > 1 ? base + location.hash : base);
    if (histLevel() < lvl) history.pushState({ lvl }, '', url);
    else history.replaceState({ lvl }, '', url);
  } catch (e) { historyOK = false; }
}

function leaveLevel(lvl, hideFn) {
  if (historyOK && histLevel() >= lvl) {
    try { history.back(); } catch (e) { hideFn(); return; }
    setTimeout(() => { if (histLevel() >= lvl) hideFn(); }, 400);
  } else {
    hideFn();
  }
}

function roomIsOpen() { const m = $('room-modal'); return !!m && !m.classList.contains('hidden'); }
function fsIsOpen() { const m = $('friendster-modal'); return !!m && !m.classList.contains('hidden'); }
function lbIsOpen() { const m = $('lightbox'); return !!m && !m.classList.contains('hidden'); }
function passportIsOpen() { const m = $('passport-modal'); return !!m && !m.classList.contains('hidden'); }
function mapIsOpen() { const m = $('map-modal'); return !!m && !m.classList.contains('hidden'); }

function lockScroll() { document.body.style.overflow = 'hidden'; }
function unlockScrollIfIdle() {
  if (!roomIsOpen() && !fsIsOpen() && !lbIsOpen() && !passportIsOpen() && !mapIsOpen()) document.body.style.overflow = '';
}

function focusPanel(id) { const el = $(id); if (el && el.focus) el.focus({ preventScroll: true }); }
function restoreFocus(key) {
  const el = lastFocus[key];
  lastFocus[key] = null;
  if (el && el.focus && (!document.contains || document.contains(el))) el.focus({ preventScroll: true });
}

function trapTab(e, container) {
  if (!container) return;
  const items = [...container.querySelectorAll('button, a[href], textarea, input, [tabindex]:not([tabindex="-1"])')]
    .filter(el => !el.disabled && el.getClientRects().length > 0);
  if (!items.length) { e.preventDefault(); return; }
  const first = items[0], last = items[items.length - 1], active = document.activeElement;
  if (e.shiftKey && (active === first || active === container)) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
}

function addSwipe(el, onLeft, onRight) {
  if (!el) return;
  let x0 = 0, y0 = 0, t0 = 0, tracking = false;
  el.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) { tracking = false; return; }
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now(); tracking = true;
  }, { passive: true });
  el.addEventListener('touchend', e => {
    if (!tracking) return;
    tracking = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - x0, dy = t.clientY - y0;
    if (Date.now() - t0 < 700 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      (dx < 0 ? onLeft : onRight)();
    }
  }, { passive: true });
}

window.addEventListener('popstate', () => {
  const lvl = histLevel();
  if (lvl < 2 && lbIsOpen()) hideLightbox();
  if (lvl < 1) {
    if (roomIsOpen()) hideRoom();
    if (fsIsOpen()) hideFriendster();
    if (passportIsOpen()) hidePassport();
    if (mapIsOpen()) hideMap();
  }
});

// ---------- Lightbox ----------
let lbIndex = 0;
let lbEra = 'then';
function currentGallery() {
  const ex = exhibits[currentRoom];
  return ex ? eraData(ex, lbEra).gallery : [];
}

function showLightbox(i) {
  const items = currentGallery();
  if (!items.length) return;
  lbIndex = (i + items.length) % items.length;
  const g = items[lbIndex];
  const img = $('lb-img');
  img.classList.remove('lb-broken');
  img.alt = g.caption || '';
  img.src = g.src;
  $('lb-caption').textContent = (g.caption || '') + (g.year ? ` (${g.year})` : '');
  $('lb-credit').textContent = g.credit || '';
  $('lb-count').textContent = `${lbIndex + 1} / ${items.length}`;
  $('lb-full').href = g.src;
  document.querySelectorAll('.lb-nav').forEach(b => b.classList.toggle('hidden', items.length < 2));
}

function openLightbox(i, era) {
  lbEra = (era === 'now' || era === 'future') ? era : 'then';
  lastFocus.lb = document.activeElement;
  enterLevel(2);
  showLightbox(i);
  $('lightbox').classList.remove('hidden');
  lockScroll();
  focusPanel('lightbox');
}
function hideLightbox() {
  $('lightbox').classList.add('hidden');
  $('lb-img').removeAttribute('src');
  unlockScrollIfIdle();
  restoreFocus('lb');
}
function closeLightbox() { leaveLevel(2, hideLightbox); }
function lightboxStep(d) { showLightbox(lbIndex + d); }

function galleryImgFailed(img) {
  const item = img.closest('.gallery-item');
  const grid = img.closest('.gallery-grid');
  const section = img.closest('.gallery-section');
  if (item) item.remove();
  if (grid && !grid.children.length && section) section.remove();
}

// ------------------------------------------------------------
// DETAIL ROOMS (every room has 2000s / Today / 2030s+ / Compare tabs)
// ------------------------------------------------------------
let currentRoom = 0;
let roomEra = 'then'; // 'then' | 'now' | 'future' | 'compare'

function roomHash(id, era) { return '#room-' + id + (era && era !== 'then' ? '/' + era : ''); }

function roomGalleryHtml(items, era, heading) {
  if (!items || !items.length) return '';
  return `
    <section class="gallery-section">
      <h3 class="room-h">${heading || '📸 Photo gallery'} <span class="room-h-sub">tap a photo to enlarge</span></h3>
      <div class="gallery-grid">
        ${items.map((g, i) => `
          <button type="button" class="gallery-item" onclick="openLightbox(${i}, '${era}')" aria-label="Enlarge photo: ${esc(g.caption || 'Photo ' + (i + 1))}">
            <span class="gallery-frame"><img src="${esc(g.src)}" alt="${esc(g.caption || '')}" loading="lazy" decoding="async" onerror="galleryImgFailed(this)"></span>
            <span class="gallery-cap">${esc(g.caption || '')}${g.year ? ` <em>(${esc(g.year)})</em>` : ''}</span>
          </button>`).join('')}
      </div>
    </section>`;
}

function srcLinkHtml(s) {
  const meta = [s.publisher, s.year].filter(Boolean).map(esc).join(', ');
  return `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a>${meta ? ` <span class="src-pub">— ${meta}</span>` : ''}`;
}

function roomSourcesHtml(ex, era) {
  const list = (ex.sources || []).filter(s => era === 'compare' || s.era === 'both' || s.era === era);
  if (!list.length) return '';
  return `
    <details class="room-sources">
      <summary>📚 Sources for this room (${list.length})</summary>
      <ol>${list.map(s => `<li>${srcLinkHtml(s)}${s.note ? `<small>${esc(s.note)}</small>` : ''}</li>`).join('')}</ol>
    </details>`;
}

function roomCategoriesHtml(categories) {
  if (!categories || !categories.length) return '';
  return `
    <h3 class="room-h">🗂️ Worksheet Breakdown</h3>
    <div class="category-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:0.75rem;margin-bottom:1.1rem;">
      ${categories.map(c => `
        <div class="category-card" style="background:rgba(128,128,160,0.08);border:1px solid rgba(128,128,160,0.22);border-radius:0.85rem;padding:0.85rem 1rem;">
          <div style="font-weight:800;font-size:0.8rem;letter-spacing:0.03em;text-transform:uppercase;margin-bottom:0.35rem;color:var(--c, #db32ae);">
            <span aria-hidden="true">${esc(c.icon || '📌')}</span> ${esc(c.label || '')}
          </div>
          <p style="margin:0;font-size:0.86rem;line-height:1.5;">${esc(c.text || '')}</p>
        </div>`).join('')}
    </div>`;
}

function roomFactsHtml(facts) {
  if (!facts || !facts.length) return '';
  return `<h3 class="room-h">💡 Key Takeaways</h3><ul class="fact-list">${facts.map(f => `<li>${esc(f)}</li>`).join('')}</ul>`;
}

function roomArtifactsHtml(items) {
  if (!items || !items.length) return '';
  return `
    <h3 class="room-h">🗂️ Artifacts in this room</h3>
    <div class="artifact-grid">
      ${items.map(a => `
        <div class="artifact">
          <span class="artifact-emoji">${esc(a.emoji)}</span>
          <div><b>${esc(a.name)}</b><p>${esc(a.note)}</p></div>
        </div>`).join('')}
    </div>`;
}

function roomHeroHtml(ex, era) {
  if (era === 'compare') {
    const third = (d, cls) => `
      <div class="hero-half ${cls}" style="position:relative;height:100%;overflow:hidden;">
        <span class="hero-half-emoji" aria-hidden="true">${esc(d.icon)}</span>
        ${d.image ? `<img src="${esc(d.image)}" alt="${esc(d.alt)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onerror="this.remove()">` : ''}
        <span class="hero-half-tag" style="position:absolute;top:0.6rem;left:0.6rem;z-index:2;padding:0.12rem 0.52rem;font-size:0.6rem;font-weight:800;background:rgba(255,255,255,0.92);color:#17172f;border:1.5px solid #17172f;border-radius:999px;">${esc(d.label)}</span>
      </div>`;
    return `
      <div class="room-hero era-compare" style="position:relative;display:flex;align-items:flex-end;height:12.5rem;overflow:hidden;">
        <div style="position:absolute;inset:0;display:grid;grid-template-columns:repeat(3,1fr);z-index:0;">
          ${third(eraData(ex, 'then'), 'then')}${third(eraData(ex, 'now'), 'now')}${third(eraData(ex, 'future'), 'future')}
        </div>
        <div class="room-hero-shade" style="position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(10,12,28,0.22) 0%,rgba(10,12,28,0.68) 48%,rgba(10,12,28,0.92) 100%);"></div>
        <div class="room-hero-text" style="position:relative;z-index:2;width:100%;padding:1.1rem 1.25rem;color:#ffffff;">
          <span class="room-domain" style="display:inline-block;padding:0.15rem 0.6rem;margin-bottom:0.35rem;background:#ffffff;color:#17172f;border-radius:999px;font-size:0.62rem;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;">${esc(ex.domain)} • All 3 Phases</span>
          <h2 style="color:#ffffff;font-size:clamp(1.2rem,3.5vw,1.85rem);font-weight:800;line-height:1.15;text-shadow:0 2px 10px rgba(0,0,0,0.75);margin:0;">${esc(ex.title)}</h2>
          <p style="color:rgba(255,255,255,0.94);font-size:0.76rem;line-height:1.42;margin:0.25rem 0 0;max-width:42rem;text-shadow:0 1px 6px rgba(0,0,0,0.65);">${esc(ex.blurb)}</p>
        </div>
      </div>`;
  }
  const d = eraData(ex, era);
  return `
    <div class="room-hero era-${era}">
      <span class="room-hero-emoji" aria-hidden="true">${esc(d.icon)}</span>
      ${d.image ? `<img src="${esc(d.image)}" alt="${esc(d.alt)}" onerror="this.remove()">` : ''}
      <div class="room-hero-shade"></div>
      <div class="room-hero-text">
        <span class="room-domain">${esc(ex.domain)} • ${esc(d.label)}</span>
        <h2>${esc(d.title)}</h2>
        <p>${esc(d.blurb)}</p>
      </div>
    </div>`;
}

function roomTabsHtml(ex) {
  const tabs = [
    ['then', '🕹️', '2000s'],
    ['now', '📱', 'Today'],
    ['future', '🚀', '2030s+'],
    ['compare', '⚖️', 'Compare']
  ];
  return `<div class="room-tabs" role="tablist" aria-label="Choose an era">` +
    tabs.map(([k, ic, label]) => {
      const stamped = k !== 'compare' && hasStamp(ex.id, k);
      return `<button type="button" role="tab" aria-selected="${roomEra === k}" class="room-tab tab-${k} ${roomEra === k ? 'active' : ''}" onclick="setRoomEra('${k}')">${ic} ${label}${stamped ? ' <span class="tab-stamp" title="Stamp collected">✓</span>' : ''}</button>`;
    }).join('') + `</div>`;
}

function roomActionsHtml(ex, era) {
  const otherBtns = VALID_ERAS.filter(e => e !== era).map(e => {
    const label = e === 'then' ? '⏪ 2000s Room' : e === 'now' ? '📱 Today Room' : '🚀 2030s+ Future Room';
    return `<button type="button" class="btn ${e === 'future' ? 'btn-pink' : ''}" onclick="setRoomEra('${e}')">${label}</button>`;
  }).join('');
  return `
    <div class="room-actions">
      ${otherBtns}
      <button type="button" class="btn" onclick="setRoomEra('compare')">⚖️ Compare all 3</button>
    </div>`;
}

function roomEraBodyHtml(ex, era) {
  const d = eraData(ex, era);
  const blockCls = era === 'then' ? 'era-then' : era === 'now' ? 'era-present' : 'era-future';
  const blockLabel = era === 'then' ? '2000–2010 Decade' : era === 'now' ? 'Present Time (2020s)' : 'Future Horizon (2030s+)';
  const impactLabel = era === 'then' ? 'Impact' : era === 'now' ? 'Why it matters' : '2030s+ Horizon';
  return `
    ${d.intro ? `<p class="room-intro">${esc(d.intro)}</p>` : ''}
    <div class="era-block ${blockCls}" style="margin:0 0 1rem">
      <span class="era-label">${blockLabel}</span>${esc(d.summary)}
    </div>
    ${roomCategoriesHtml(d.categories)}
    ${roomGalleryHtml(d.gallery, era)}
    ${roomFactsHtml(d.facts)}
    ${roomArtifactsHtml(d.artifacts)}
    ${d.impact ? `<div class="impact-box">⭐ ${impactLabel}: ${esc(d.impact)}</div>` : ''}
    ${roomSourcesHtml(ex, era)}
    ${roomActionsHtml(ex, era)}`;
}

function roomCompareBodyHtml(ex) {
  const col = (d, cls, heading, blockCls) => `
    <div class="cmp-col ${cls}">
      <h4 class="cmp-head">${heading}</h4>
      <div class="era-block ${blockCls}" style="margin:0 0 .6rem">
        <span class="era-label">${esc(d.title)}</span>${esc(d.summary)}
      </div>
      ${d.facts.length ? `<ul class="cmp-facts">${d.facts.slice(0, 3).map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}
      <div class="cmp-chips">${d.artifacts.map(a => `<span class="cmp-chip" title="${esc(a.note)}">${esc(a.emoji)} ${esc(a.name)}</span>`).join('')}</div>
    </div>`;
  const a = eraData(ex, 'then');
  const b = eraData(ex, 'now');
  const c = eraData(ex, 'future');
  return `
    <div class="change-box">🔄 <b>Across three eras:</b> ${esc(ex.change || ex.impact || '')}</div>
    <div class="cmp-grid">
      ${col(a, 'then', '🕹️ 2000–2010', 'era-then')}
      ${col(b, 'now', '📱 Today (2020s)', 'era-present')}
      ${col(c, 'future', '🚀 Future (2030s+)', 'era-future')}
    </div>
    ${roomGalleryHtml(a.gallery, 'then', '📸 2000s photos')}
    ${roomGalleryHtml(b.gallery, 'now', '📸 Today photos')}
    ${roomGalleryHtml(c.gallery, 'future', '📸 2030s+ Future visualizations')}
    ${roomSourcesHtml(ex, 'compare')}
    <div class="room-actions">
      <button type="button" class="btn" onclick="setRoomEra('then')">🕹️ Enter 2000s room</button>
      <button type="button" class="btn" onclick="setRoomEra('now')">📱 Enter Today room</button>
      <button type="button" class="btn btn-pink" onclick="setRoomEra('future')">🚀 Enter 2030s+ room</button>
    </div>`;
}

function renderRoom(index, era) {
  const total = exhibits.length;
  currentRoom = ((index % total) + total) % total;
  if (era === 'then' || era === 'now' || era === 'future' || era === 'compare') roomEra = era;
  const ex = exhibits[currentRoom];

  $('room-panel').style.setProperty('--c', ex.color);
  $('room-panel').dataset.era = roomEra;
  stampVisit(ex.id, roomEra);

  const content = $('room-content');
  content.innerHTML = `
    ${roomHeroHtml(ex, roomEra)}
    ${roomTabsHtml(ex)}
    <div class="room-body">
      ${roomEra === 'compare' ? roomCompareBodyHtml(ex) : roomEraBodyHtml(ex, roomEra)}
    </div>`;
  content.scrollTop = 0;
  content.classList.remove('swap'); void content.offsetWidth; content.classList.add('swap');

  $('room-dots').innerHTML = exhibits.map((e, i) =>
    `<button type="button" class="room-dot ${i === currentRoom ? 'active' : ''}" onclick="renderRoom(${i})" title="${esc(e.wing)}" aria-label="Go to ${esc(e.wing)} room">${esc(e.icon)}</button>`
  ).join('');
  if ($('room-prev-label')) $('room-prev-label').textContent = exhibits[(currentRoom - 1 + total) % total].wing;
  if ($('room-next-label')) $('room-next-label').textContent = exhibits[(currentRoom + 1) % total].wing;
  const eraName = roomEra === 'then' ? '2000s' : roomEra === 'now' ? 'Today' : roomEra === 'future' ? '2030s+' : 'Compare';
  $('room-count').textContent = `Room ${currentRoom + 1} of ${total} • ${ex.wing} • ${eraName}`;

  try { history.replaceState(history.state, '', roomHash(ex.id, roomEra)); } catch (e) { /* ignore */ }
}

function setRoomEra(era) { renderRoom(currentRoom, era); }

function openRoom(index, era) {
  const n = exhibits.length;
  const i = (((typeof index === 'number' ? index : 0) % n) + n) % n;
  roomEra = (era === 'then' || era === 'now' || era === 'future' || era === 'compare') ? era : currentEra;
  lastFocus.room = document.activeElement;
  enterLevel(1, roomHash(exhibits[i].id, roomEra));
  renderRoom(i);
  $('room-modal').classList.remove('hidden');
  lockScroll();
  focusPanel('room-panel');
}

function hideRoom() {
  $('room-modal').classList.add('hidden');
  unlockScrollIfIdle();
  restoreFocus('room');
  if (location.hash.indexOf('#room-') === 0) {
    try { history.replaceState(history.state, '', location.pathname + location.search); } catch (e) { /* ignore */ }
  }
}

function closeRoom() { leaveLevel(1, hideRoom); }
function nextRoom() { renderRoom(currentRoom + 1); }
function prevRoom() { renderRoom(currentRoom - 1); }

function visitCurator(profileIndex) {
  hideRoom();
  openFriendsterModal(profileIndex);
}

let initialPassportShown = false;

function openRoomFromHash() {
  const m = location.hash.match(/^#room-([\w-]+?)(?:\/(then|now|future|compare))?$/);
  if (m) {
    const i = exhibits.findIndex(e => e.id === m[1]);
    if (i >= 0) {
      initialPassportShown = true;
      openRoom(i, m[2] || 'then');
      return;
    }
  }
  // Automatically pop up the Museum Passport first when entering the site
  // so viewers immediately have a clear path on where to go
  if (!initialPassportShown) {
    initialPassportShown = true;
    openPassport(true);
  }
}

// ------------------------------------------------------------
// Keyboard controls
// ------------------------------------------------------------
document.addEventListener('keydown', e => {
  if (lbIsOpen()) {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') lightboxStep(1);
    else if (e.key === 'ArrowLeft') lightboxStep(-1);
    else if (e.key === 'Tab') trapTab(e, $('lightbox'));
    return;
  }
  if (fsIsOpen()) {
    if (e.key === 'Escape') closeFriendsterModal();
    else if (e.key === 'ArrowRight') nextProfile();
    else if (e.key === 'ArrowLeft') prevProfile();
    else if (e.key === 'Tab') trapTab(e, $('fs-window'));
    return;
  }
  if (passportIsOpen()) {
    if (e.key === 'Escape') closePassport();
    else if (e.key === 'Tab') trapTab(e, $('passport-panel'));
    return;
  }
  if (mapIsOpen()) {
    if (e.key === 'Escape') closeMap();
    else if (e.key === 'Tab') trapTab(e, $('map-panel'));
    return;
  }
  if (roomIsOpen()) {
    if (e.key === 'Escape') closeRoom();
    else if (e.key === 'ArrowRight') nextRoom();
    else if (e.key === 'ArrowLeft') prevRoom();
    else if (e.key === 'Tab') trapTab(e, $('room-panel'));
    return;
  }

  if (typeof nokiaMode !== 'undefined' && nokiaMode === 'snake' && currentEra === 'then') {
    if (['ArrowUp', 'KeyW'].includes(e.code)) { snakeChangeDir(0, -1); e.preventDefault(); }
    else if (['ArrowDown', 'KeyS'].includes(e.code)) { snakeChangeDir(0, 1); e.preventDefault(); }
    else if (['ArrowLeft', 'KeyA'].includes(e.code)) { snakeChangeDir(-1, 0); e.preventDefault(); }
    else if (['ArrowRight', 'KeyD'].includes(e.code)) { snakeChangeDir(1, 0); e.preventDefault(); }
    else if (['Space', 'Enter'].includes(e.code)) { toggleSnakePlay(); e.preventDefault(); }
    else if (e.key === 'Escape') { setNokiaMode('sms'); }
  }
});

// ------------------------------------------------------------
// FRIENDSTER PROFILES
// ------------------------------------------------------------
let currentProfile = 0;

function avatarHtml(p) {
  const img = p.avatar
    ? `<img src="${esc(p.avatar)}" alt="${esc(profShort(p))}'s profile photo" onerror="this.remove()">`
    : '';
  return `<span>${esc(profInitials(p))}</span>${img}`;
}

function showProfile(index) {
  if (typeof friendsterProfiles === 'undefined' || !friendsterProfiles.length) return;
  const total = friendsterProfiles.length;
  currentProfile = (index + total) % total;
  const p = friendsterProfiles[currentProfile];

  $('fs-tabs').innerHTML = friendsterProfiles.map((f, i) =>
    `<button type="button" class="fs-tab ${i === currentProfile ? 'active' : ''}" onclick="showProfile(${i})">${esc(profShort(f))}</button>`
  ).join('');

  const activeTab = $('fs-tabs').querySelector('.fs-tab.active');
  if (activeTab && window.innerWidth < 640) {
    activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  const friends = friendsterProfiles
    .map((f, i) => ({ f, i }))
    .filter(x => x.i !== currentProfile)
    .map(x => `
      <button type="button" class="fs-friend" onclick="showProfile(${x.i})" title="View ${esc(profShort(x.f))}'s profile">
        <span class="fs-avatar">${avatarHtml(x.f)}</span>
        <span>${esc(profShort(x.f))}</span>
      </button>`).join('');

  $('fs-body').innerHTML = `
    <div class="flex flex-row gap-3 items-center sm:items-start">
      <div class="fs-avatar">${avatarHtml(p)}</div>
      <div class="min-w-0 text-left flex-1">
        <h4 class="font-bold text-sm sm:text-base text-blue-900 break-words leading-tight">${esc(p.handle)}</h4>
        <p class="text-[10px] sm:text-[11px] font-semibold text-slate-600">${esc(p.name)}</p>
        <p class="text-[10px] sm:text-[11px] text-slate-500 italic mb-1 truncate">"${esc(p.quote)}"</p>
        <div class="text-[10px] sm:text-[11px] space-y-0.5 text-slate-600">
          <p><strong>Status:</strong> ${esc(p.status)}</p>
          <p><strong>Since:</strong> ${esc(p.memberSince)}</p>
          <p><strong>From:</strong> ${esc(p.hometown)}</p>
        </div>
      </div>
    </div>
    <div class="border border-blue-200 rounded p-2.5 sm:p-3 bg-blue-50/50">
      <h5 class="font-bold text-blue-900 mb-1 border-b border-blue-200 pb-1">About Me</h5>
      <p class="text-[11px] text-slate-700 leading-relaxed mb-2">${esc(p.about)}</p>
      <div>${p.interests.map(t => `<span class="fs-chip">${esc(t)}</span>`).join('')}</div>
    </div>
    <div class="border border-blue-200 rounded p-2.5 sm:p-3 bg-blue-50/50">
      <h5 class="font-bold text-blue-900 mb-2 border-b border-blue-200 pb-1">Testimonials (${p.testimonials.length})</h5>
      <div class="space-y-1.5">
        ${p.testimonials.map(t => `
          <div class="bg-white p-2 rounded border border-blue-100 text-[10px] sm:text-[11px]">
            <span class="font-semibold text-blue-800">${esc(t.from)}:</span> "${esc(t.text)}"
          </div>`).join('')}
      </div>
    </div>
    <div class="border border-blue-200 rounded p-2.5 sm:p-3 bg-blue-50/50">
      <h5 class="font-bold text-blue-900 mb-2 border-b border-blue-200 pb-1">Top Friends</h5>
      <div class="flex gap-2.5 flex-wrap">${friends}</div>
    </div>`;
  $('fs-body').scrollTop = 0;
  $('fs-counter').textContent = `Profile ${currentProfile + 1} of ${total}`;
}

function nextProfile() { showProfile(currentProfile + 1); }
function prevProfile() { showProfile(currentProfile - 1); }

function openFriendsterModal(index) {
  lastFocus.fs = document.activeElement;
  enterLevel(1);
  showProfile(typeof index === 'number' ? index : 0);
  $('friendster-modal').classList.remove('hidden');
  lockScroll();
  focusPanel('fs-window');
}

function hideFriendster() {
  $('friendster-modal').classList.add('hidden');
  unlockScrollIfIdle();
  restoreFocus('fs');
}

function closeFriendsterModal() { leaveLevel(1, hideFriendster); }

function renderCurators() {
  const grid = $('curator-grid');
  if (!grid || typeof friendsterProfiles === 'undefined') return;
  grid.innerHTML = friendsterProfiles.map((p, i) => `
    <div class="curator-card">
      <div class="fs-avatar">${avatarHtml(p)}</div>
      <h4 class="font-extrabold text-sm">${esc(p.name)}</h4>
      ${p.role ? `<p class="text-[11px] text-[var(--muted)] mt-1">${esc(p.role)}</p>` : ''}
      <button type="button" onclick="openFriendsterModal(${i})" class="btn btn-yellow btn-sm mt-3">✨ View Friendster</button>
    </div>`).join('');
}

// ------------------------------------------------------------
// BEFORE / AFTER SLIDER
// ------------------------------------------------------------
function baLayerHtml(side) {
  const photo = side.img
    ? `<img src="${esc(side.img)}" alt="${esc(side.label)}" draggable="false" onerror="this.remove()">`
    : '';
  return `<div class="ba-ph"><span class="ba-emoji">${esc(side.emoji)}</span><span class="ba-ph-label">${esc(side.label)}</span></div>${photo}`;
}

function setBaPosition(percent) {
  const slider = $('ba-slider');
  if (!slider) return;
  const p = Math.max(0, Math.min(100, percent));
  slider.style.setProperty('--pos', p + '%');
  slider.setAttribute('aria-valuenow', Math.round(p));
}

function showBeforeAfter(index) {
  if (typeof beforeAfterPairs === 'undefined') return;
  const pair = beforeAfterPairs[index];
  if (!pair) return;
  $('ba-before').innerHTML = baLayerHtml(pair.before);
  $('ba-after').innerHTML = baLayerHtml(pair.after);
  $('ba-title').textContent = pair.title;
  $('ba-caption').textContent = pair.caption;
  document.querySelectorAll('#ba-tabs button').forEach((btn, i) => {
    const isActive = i === index;
    btn.classList.toggle('active', isActive);
    if (isActive && window.innerWidth < 640) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
  setBaPosition(50);
}

let baEventsBound = false;
function initBeforeAfter() {
  const slider = $('ba-slider');
  if (!slider || typeof beforeAfterPairs === 'undefined' || !beforeAfterPairs.length) return;

  $('ba-tabs').innerHTML = beforeAfterPairs.map((pair, i) =>
    `<button type="button" class="chip-btn" onclick="showBeforeAfter(${i})">${esc(String(pair.tab).trim())}</button>`
  ).join('');

  if (!baEventsBound) {
    baEventsBound = true;
    let dragging = false;
    const moveTo = clientX => {
      const rect = slider.getBoundingClientRect();
      setBaPosition(((clientX - rect.left) / rect.width) * 100);
    };
    slider.addEventListener('pointerdown', e => { dragging = true; slider.setPointerCapture(e.pointerId); moveTo(e.clientX); });
    slider.addEventListener('pointermove', e => { if (dragging) moveTo(e.clientX); });
    ['pointerup', 'pointercancel'].forEach(evt => slider.addEventListener(evt, () => { dragging = false; }));

    slider.addEventListener('keydown', e => {
      const now = Number(slider.getAttribute('aria-valuenow')) || 50;
      if (e.key === 'ArrowLeft') { setBaPosition(now - 5); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { setBaPosition(now + 5); e.preventDefault(); }
      else if (e.key === 'Home') { setBaPosition(0); e.preventDefault(); }
      else if (e.key === 'End') { setBaPosition(100); e.preventDefault(); }
    });
  }

  showBeforeAfter(0);
}

// ------------------------------------------------------------
// MINI PLAYER
// ------------------------------------------------------------
let currentStation = 1;

function getPlaylistId(url) {
  if (!url) return null;
  try { return new URL(url).searchParams.get('list') || null; } catch (e) { return null; }
}

function renderStationTabs() {
  const wrap = $('station-tabs');
  if (!wrap || typeof playlistStations === 'undefined') return;
  wrap.style.gridTemplateColumns = `repeat(${playlistStations.length}, minmax(0, 1fr))`;
  wrap.innerHTML = playlistStations.map((s, i) =>
    `<button type="button" class="station-btn" onclick="switchStation(${i + 1})">${esc(s.tab)}</button>`
  ).join('');
}

function setPlayerMissing(message) {
  const box = $('yt-video-box');
  if (!box) return;
  box.classList.add('missing');
  box.innerHTML = `<div>${esc(message)}<br><br><a class="btn btn-pink btn-sm" href="${esc(playlistSearch.youtube)}" target="_blank" rel="noopener noreferrer">🔎 Search YouTube ↗</a></div>`;
}

function switchStation(stationNum) {
  if (typeof playlistStations === 'undefined') return;
  const st = playlistStations[stationNum - 1];
  if (!st) return;
  currentStation = stationNum;

  document.querySelectorAll('.station-btn').forEach((b, i) => b.classList.toggle('active', i === stationNum - 1));
  $('station-badge').textContent = `STATION ${stationNum}`;
  $('playlist-title').textContent = st.title;

  const embedWrap = $('yt-embed-wrap');
  const musicWrap = $('yt-music-wrap');
  const hasId = !!getPlaylistId(st.url);

  if (st.type === 'link') {
    embedWrap.classList.add('hidden');
    musicWrap.classList.remove('hidden');

    const iframe = $('yt-inpage-player');
    if (iframe) iframe.src = 'about:blank';

    $('ytm-open-link').href = st.url || playlistSearch.music;
    $('ytm-note').textContent = st.url
      ? 'Opens curated playlist in YouTube Music.'
      : 'No playlist link set yet. Paste yours into js/data/shared.js (playlistStations).';
    return;
  }

  musicWrap.classList.add('hidden');
  embedWrap.classList.remove('hidden');
  const box = $('yt-video-box');

  if (!hasId) {
    setPlayerMissing('No playlist link yet. Paste a YouTube playlist link into js/data/shared.js (playlistStations).');
    $('yt-open-link').href = playlistSearch.youtube;
    $('yt-open-link').textContent = 'Search YouTube for 2000s OPM ↗';
    return;
  }
  if (!$('yt-inpage-player')) {
    box.classList.remove('missing');
    box.innerHTML = '<iframe id="yt-inpage-player" class="w-full h-full" title="2000s soundtrack playlist" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(getPlaylistId(st.url))}`;
  const iframe = $('yt-inpage-player');
  if (iframe.getAttribute('src') !== embedUrl) iframe.src = embedUrl;
  $('yt-open-link').href = st.url;
  $('yt-open-link').textContent = 'Not playing? Open on YouTube ↗';
}

function togglePlayerPopup() {
  const pill = $('player-pill');
  const popup = $('player-popup');
  const opening = popup.classList.contains('hidden');

  popup.classList.toggle('hidden', !opening);
  pill.classList.toggle('hidden', opening);

  if (opening) switchStation(currentStation);
}

// ------------------------------------------------------------
// SOURCES SECTION (built from `sources` + `imageCredits`)
// ------------------------------------------------------------
function renderSources() {
  const wrap = $('sources-list');
  if (!wrap) return;
  const tag = era => {
    if (era === 'both') return '<span class="src-tag both">2000s + Today</span>';
    if (era === 'future') return '<span class="src-tag future">2030s+</span>';
    if (era === 'now') return '<span class="src-tag now">Today</span>';
    return '<span class="src-tag then">2000s</span>';
  };
  wrap.innerHTML = exhibits.map(ex => `
    <article class="src-card" style="--c:${esc(ex.color)}">
      <div class="src-body">
        <h4><span aria-hidden="true">${esc(ex.icon)}</span> ${esc(ex.wing)}</h4>
        ${(ex.sources && ex.sources.length)
          ? `<ol>${ex.sources.map(s => `<li>${tag(s.era)} ${srcLinkHtml(s)}${s.note ? `<small>${esc(s.note)}</small>` : ''}</li>`).join('')}</ol>`
          : '<p class="src-empty">No sources added yet.</p>'}
      </div>
    </article>`).join('');

  const credits = (typeof imageCredits !== 'undefined' && Array.isArray(imageCredits)) ? imageCredits : [];
  const box = $('credits-wrap');
  if (box && credits.length) {
    $('credits-list').innerHTML = credits.map(c =>
      `<li>${esc(c.item || '')}${c.credit ? ' — ' + esc(c.credit) : ''}${c.url ? ` (<a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">link</a>)` : ''}</li>`).join('');
    box.classList.remove('hidden');
  }
}

// ------------------------------------------------------------
// MUSEUM PASSPORT (a stamp for every room across all 3 eras = 18 stamps)
// ------------------------------------------------------------
const PASSPORT_KEY = 'ppc-passport-v1';
let passportResetArmed = false;

function loadPassport() {
  try {
    const raw = localStorage.getItem(PASSPORT_KEY);
    const d = raw && JSON.parse(raw);
    return (d && typeof d.stamps === 'object' && d.stamps) ? d.stamps : {};
  } catch (e) { return {}; }
}
let passportStamps = loadPassport();

function savePassport() {
  try { localStorage.setItem(PASSPORT_KEY, JSON.stringify({ stamps: passportStamps })); } catch (e) { /* ignore */ }
}
function hasStamp(id, era) { return !!passportStamps[id + ':' + era]; }
function passportTotal() { return exhibits.length * VALID_ERAS.length; }
function passportCount() {
  let n = 0;
  exhibits.forEach(ex => { VALID_ERAS.forEach(era => { if (hasStamp(ex.id, era)) n++; }); });
  return n;
}
function updatePassportBadge() {
  document.querySelectorAll('.pp-count').forEach(el => { el.textContent = passportCount() + '/' + passportTotal(); });
}

function stampVisit(id, era) {
  const eras = era === 'compare' ? VALID_ERAS : [era];
  const fresh = eras.filter(e => VALID_ERAS.includes(e) && !hasStamp(id, e));
  if (!fresh.length) return;
  const stamp = Date.now();
  fresh.forEach(e => { passportStamps[id + ':' + e] = stamp; });
  savePassport();
  updatePassportBadge();

  const ex = exhibits.find(x => x.id === id);
  const label = fresh.map(e => e === 'then' ? '2000s' : e === 'now' ? 'Today' : '2030s+').join(' + ');
  const n = passportCount(), total = passportTotal();
  showToast(`🛂 New stamp: ${ex ? ex.wing : id} • ${label} (${n}/${total})`);
  if (n === total) {
    setTimeout(() => { showToast('🏅 Museum complete! You collected all 18 stamps across every era.', 4500); burstConfetti(); }, 2000);
  }
  if (passportIsOpen()) renderPassport();
}

function renderPassport() {
  const total = passportTotal(), n = passportCount();
  const pct = total ? Math.round((n / total) * 100) : 0;
  const slot = (ex, i, era) => {
    const got = passportStamps[ex.id + ':' + era];
    const when = got ? new Date(got).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : '';
    const eraTitle = era === 'then' ? '2000s' : era === 'now' ? 'Today' : '2030s+';
    return `
      <button type="button" class="pp-stamp era-${era} ${got ? 'got' : ''}" onclick="passportGo(${i}, '${era}')"
              aria-label="${esc(ex.wing)}, ${eraTitle}: ${got ? 'stamp collected' : 'not visited yet'}">
        <span class="pp-ring">${got ? '✓' : '?'}</span>
        <small>${eraTitle}</small>
        ${got ? `<em>${esc(when)}</em>` : ''}
      </button>`;
  };
  $('passport-body').innerHTML = `
    <div class="pp-progress">
      <div class="pp-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${n}"><i style="width:${pct}%"></i></div>
      <b>${n} / ${total} stamps</b>
    </div>
    ${n === total
      ? `<div class="pp-complete">🏅 Museum complete! You explored every room across all three eras (2000s, Today, and 2030s+).</div>`
      : `<p class="pp-hint">Open each room in the <b>2000s</b>, <b>Today</b>, and <b>2030s+</b> tabs to collect all 18 stamps. The <b>Compare</b> tab awards all three at once. Tap a stamp to jump there.</p>`}
    <div class="pp-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,13.2rem),1fr));">
      ${exhibits.map((ex, i) => `
        <div class="pp-room" style="--c:${esc(ex.color)}">
          <div class="pp-room-head" onclick="passportGo(${i}, currentEra)" style="cursor:pointer" title="Enter ${esc(ex.wing)} room"><span>${esc(ex.icon)}</span><b>${esc(ex.wing)}</b></div>
          <div class="pp-stamps" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:0.4rem;">${slot(ex, i, 'then')}${slot(ex, i, 'now')}${slot(ex, i, 'future')}</div>
        </div>`).join('')}
    </div>
    <div class="pp-foot" style="flex-wrap:wrap;gap:0.5rem;">
      <div style="display:flex;align-items:center;gap:0.45rem;flex-wrap:wrap;">
        <button type="button" class="btn btn-pink btn-sm" onclick="closePassport()">🏛️ Explore Lobby →</button>
        <button type="button" id="pp-reset-btn" class="btn btn-sm" onclick="resetPassport()">${passportResetArmed ? 'Tap again to confirm reset' : 'Reset passport'}</button>
      </div>
      <span>Saved on this device only.</span>
    </div>`;
}

function openPassport(isAuto) {
  const modal = $('passport-modal');
  if (!modal) return;
  passportResetArmed = false;
  if (!passportIsOpen()) {
    lastFocus.pp = document.activeElement;
    if (!isAuto) enterLevel(1);
  }
  renderPassport();
  modal.classList.remove('hidden');
  lockScroll();
  focusPanel('passport-panel');
}
function hidePassport() {
  passportResetArmed = false;
  const modal = $('passport-modal');
  if (modal) modal.classList.add('hidden');
  unlockScrollIfIdle();
  restoreFocus('pp');
}
function closePassport() {
  if (historyOK && histLevel() >= 1) {
    leaveLevel(1, hidePassport);
  } else {
    hidePassport();
  }
}

function passportGo(i, era) { hidePassport(); openRoom(i, era); }

function resetPassport() {
  if (!passportResetArmed) {
    passportResetArmed = true;
    const btn = $('pp-reset-btn');
    if (btn) btn.textContent = 'Tap again to confirm reset';
    showToast('⚠️ Tap "Reset passport" again to clear all stamps.');
    return;
  }
  passportResetArmed = false;
  passportStamps = {};
  savePassport();
  updatePassportBadge();
  renderPassport();
  renderGallery();
  switchWing(currentTopic);
  showToast('🛂 Passport stamps cleared.');
}

// ---------- Toast + confetti ----------
let toastTimer = null;
function showToast(message, ms) {
  const t = $('toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), ms || 2800);
}

function burstConfetti() {
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const bits = ['🎉', '✨', '🏅', '⭐', '🎊', '💖', '🚀'];
  for (let i = 0; i < 28; i++) {
    const s = document.createElement('span');
    s.className = 'confetti';
    s.textContent = bits[i % bits.length];
    s.style.left = (Math.random() * 100) + 'vw';
    s.style.animationDelay = (Math.random() * 0.6) + 's';
    s.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3600);
  }
}

// ------------------------------------------------------------
// MUSEUM FLOOR MAP (2000s Wing | Today Wing | Future Wing + Grand Lobby)
// ------------------------------------------------------------
let mapHere = null;

function renderMap() {
  const doors = era => exhibits.map((ex, i) => {
    const got = hasStamp(ex.id, era);
    const here = mapHere && mapHere.id === ex.id && (mapHere.era === era || mapHere.era === 'compare');
    const wingLabel = era === 'then' ? '2000s' : era === 'now' ? 'Today' : '2030s+';
    return `
      <button type="button" class="door door-${era} ${got ? 'visited' : ''} ${here ? 'here' : ''}" style="--c:${esc(ex.color)}"
              onclick="mapEnter(${i}, '${era}')"
              aria-label="Enter the ${esc(ex.wing)} room, ${wingLabel} wing${got ? ' (visited)' : ''}${here ? ' (you are here)' : ''}">
        ${here ? '<span class="you-are-here">📍 You are here</span>' : ''}
        <span class="door-icon">${esc(ex.icon)}</span>
        <span class="door-name">${esc(ex.wing)}</span>
        ${got ? '<span class="door-check">✓</span>' : ''}
      </button>`;
  }).join('');

  $('map-body').innerHTML = `
    <div class="floor floor-three">
      <section class="floor-wing fw-then" aria-label="The 2000s Wing">
        <h4>🕹️ The 2000s Wing <small>2000–2010</small></h4>
        <div class="floor-rooms">${doors('then')}</div>
      </section>

      <section class="floor-wing fw-now" aria-label="The Today Wing">
        <h4>📱 The Today Wing <small>2020s</small></h4>
        <div class="floor-rooms">${doors('now')}</div>
      </section>

      <section class="floor-wing fw-future" aria-label="The Future Wing">
        <h4>🚀 The Future Wing <small>2030s Onwards</small></h4>
        <div class="floor-rooms">${doors('future')}</div>
      </section>

      <section class="floor-lobby ${mapHere ? '' : 'here'}" aria-label="Grand Lobby">
        ${mapHere ? '' : '<span class="you-are-here">📍 You are here</span>'}
        <div class="lobby-title">🏛️ Grand Lobby &amp; Interactive Relics</div>
        <div class="lobby-links">
          <button type="button" class="btn btn-sm" onclick="mapOpenPassport()">🛂 Passport (18 Stamps)</button>
          <button type="button" class="btn btn-sm" onclick="mapGo('then-now')">↔ Then vs. Now</button>
          <button type="button" class="btn btn-sm" onclick="mapGo('sms')">🕶️ Interactive Relics</button>
          <button type="button" class="btn btn-sm" onclick="mapGo('curators')">✨ Curators</button>
        </div>
      </section>
    </div>
    <p class="map-legend">✓ visited &nbsp;•&nbsp; 📍 you are here &nbsp;•&nbsp; tap any door across the 3 wings to walk in</p>`;
}

function openMap(here) {
  mapHere = (here && typeof here === 'object' && here.id) ? here : null;
  lastFocus.map = document.activeElement;
  enterLevel(1);
  renderMap();
  $('map-modal').classList.remove('hidden');
  lockScroll();
  focusPanel('map-panel');
}
function openMapFromRoom() {
  const here = { id: exhibits[currentRoom].id, era: roomEra };
  hideRoom();
  openMap(here);
}
function hideMap() {
  $('map-modal').classList.add('hidden');
  unlockScrollIfIdle();
  restoreFocus('map');
}
function closeMap() { leaveLevel(1, hideMap); }

function mapEnter(i, era) { hideMap(); openRoom(i, era); }
function mapOpenPassport() { hideMap(); openPassport(); }
function mapGo(sectionId) {
  closeMap();
  setTimeout(() => { const el = $(sectionId); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 160);
}

// ------------------------------------------------------------
// Start everything (supports both direct DOMContentLoaded and
// modular js/phases/loader.js bootMuseum() invocation)
// ------------------------------------------------------------
let swipeEventsBound = false;


// ------------------------------------------------------------
// GUARANTEE ALL 3 ERA HERO BANNERS, WING TABS & TIME MACHINE PICKER
// Restores:
// - Past (2000s): "From Unli-Text & Friendster to P-Pop & Holo-Horizons" (.hero-copy.only-then)
// - Present (Today): ./images/today-wing-hero.png spotlight (.hero-spotlight.only-now)
// - Future (2030s+): ./images/future-wing-hero.jpg spotlight (.hero-spotlight-future.only-future)
// - Topic filter bar (#wing-tabs) & Time Machine picker (.wing-picker)
// ------------------------------------------------------------
const PAST_HERO_HTML = `
      <div class="hero-copy only-then">
        <span class="hero-pill">📼 The 2000s Wing is open • 2000–2010</span>
        <h2 class="hero-title">
          From <span class="grad-text">Unli-Text &amp; Friendster</span><br>to P-Pop &amp; Holo-Horizons
        </h2>
        <p class="max-w-2xl mx-auto text-xs sm:text-base leading-relaxed text-[var(--muted)] mb-6 sm:mb-7">
          Trace how the analog-digital hybrid era of 2000–2010 shaped modern Philippine communication, entertainment, sports, and socio-political identity—and where it is heading next.
        </p>
        <div class="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          <button type="button" onclick="openRoom(0)" class="btn btn-pink">🚪 Start the tour</button>
          <a href="#exhibits" class="btn">Browse exhibits ↓</a>
          <button type="button" onclick="openMap()" class="btn">🗺️ Floor map</button>
        </div>
      </div>`;

const PRESENT_HERO_HTML = `
      <figure class="hero-spotlight only-now">
        <img src="./images/today-wing-hero.png" alt="An iridescent Y2K museum display featuring a chrome flip phone, smartphone, compact discs, and holographic interfaces" fetchpriority="high">
        <div class="hero-image-shade" aria-hidden="true"></div>
        <figcaption>
          <span class="hero-overline">TODAY WING &nbsp; / &nbsp; PHILIPPINE POP CULTURE, REBOOTED</span>
          <h2 class="hero-title">The present looks<br><em>a little familiar.</em></h2>
          <p>From pocket-sized text threads to world-stage P-pop, explore the 2020s culture bridging our past and what comes next.</p>
          <div class="hero-actions">
            <button type="button" onclick="openRoom(0)" class="btn btn-pink">Explore the collection <span aria-hidden="true">↗</span></button>
            <a href="#exhibits" class="btn">Browse exhibits <span aria-hidden="true">↓</span></a>
          </div>
        </figcaption>
        <span class="hero-index" aria-hidden="true">01 &nbsp;—&nbsp; 06</span>
      </figure>`;

const FUTURE_HERO_HTML = `
      <figure class="hero-spotlight hero-spotlight-future only-future">
        <img src="./images/future-wing-hero.jpg" alt="A futuristic 2030s obsidian museum hall with glowing cyan and magenta holographic projections of Manila, a flying jeepney, and an AR neural visor" fetchpriority="high">
        <div class="hero-image-shade" aria-hidden="true"></div>
        <figcaption>
          <span class="hero-overline">FUTURE WING &nbsp; / &nbsp; 2030s+ HOLOGRAPHIC HORIZON</span>
          <h2 class="hero-title">Where heritage meets<br><em>holographic light.</em></h2>
          <p>Step into the 2030s onwards: spatial telepresence for OFW families, volumetric P-Pop domes, full-body cyber-athletics, and AI-resilient smart cities.</p>
          <div class="hero-actions">
            <button type="button" onclick="openRoom(0)" class="btn btn-pink">Enter neural archive <span aria-hidden="true">↗</span></button>
            <a href="#exhibits" class="btn">Browse exhibits <span aria-hidden="true">↓</span></a>
            <button type="button" onclick="openMap()" class="btn">🗺️ Floor map</button>
          </div>
        </figcaption>
        <span class="hero-index" aria-hidden="true">2030s+ &nbsp;•&nbsp; HOLO-ARCHIVE 01—06</span>
      </figure>`;

const WING_PICKER_HTML = `
    <div class="wing-picker panel mb-7">
      <div class="text-center mb-3">
        <span class="wing-kicker">TIME MACHINE</span>
        <h3 class="font-extrabold text-sm sm:text-base">🏛️ Choose an era</h3>
        <p id="wing-current" class="wing-current" aria-live="polite">Now viewing: The 2000s Wing</p>
        <p id="wing-desc" class="text-xs text-[var(--muted)] mt-0.5"></p>
      </div>
      <div class="wing-switch" role="group" aria-label="Choose a wing">
        <button type="button" class="wing-btn wing-then active" data-era="then" aria-pressed="true" onclick="setEra('then')">
          <span class="wing-emoji">🕹️</span><b>The 2000s Wing</b><small>2000–2010</small>
        </button>
        <button type="button" class="wing-btn wing-now" data-era="now" aria-pressed="false" onclick="setEra('now')">
          <span class="wing-emoji">📱</span><b>The Today Wing</b><small>2020s</small>
        </button>
        <button type="button" class="wing-btn wing-future" data-era="future" aria-pressed="false" onclick="setEra('future')">
          <span class="wing-emoji">🚀</span><b>The Future Wing</b><small>2030s Onwards</small>
        </button>
      </div>
    </div>`;

window.PHASE_TEMPLATES = window.PHASE_TEMPLATES || {};
window.PHASE_TEMPLATES.past = window.PHASE_TEMPLATES.past || {};
window.PHASE_TEMPLATES.past.hero = PAST_HERO_HTML;
window.PHASE_TEMPLATES.present = window.PHASE_TEMPLATES.present || {};
window.PHASE_TEMPLATES.present.hero = PRESENT_HERO_HTML;
window.PHASE_TEMPLATES.future = window.PHASE_TEMPLATES.future || {};
window.PHASE_TEMPLATES.future.hero = FUTURE_HERO_HTML;

function ensureHeroSectionsRestored() {
  // 1. Ensure era visibility & full hero spotlight styles (2000s, Today, 2030s+) are always present
  if (!$('hero-restore-styles')) {
    const st = document.createElement('style');
    st.id = 'hero-restore-styles';
    st.textContent = `
      html.era-then .only-now, html.era-then .only-future { display: none !important; }
      html.era-now .only-then, html.era-now .only-future { display: none !important; }
      html.era-future .only-then, html.era-future .only-now { display: none !important; }
      html.era-then .hero-copy.only-then { display: block !important; text-align: center; }
      html.era-now .hero-spotlight.only-now { display: block !important; }
      html.era-future .hero-spotlight-future.only-future { display: block !important; }

      /* Past 2000s Hero Copy */
      .hero-copy.only-then { max-width: 54rem; margin: 0 auto 1.25rem; }
      .hero-copy.only-then .hero-pill {
        display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.32rem 0.85rem;
        margin-bottom: 1rem; font-size: 0.72rem; font-weight: 800; color: var(--ink, #2b1d45);
        background: #ffffff; border: 2px solid var(--ink, #2b1d45); border-radius: 999px;
        box-shadow: 3px 3px 0 var(--pink, #ff5fa2);
      }
      .hero-copy.only-then .hero-title {
        font-size: clamp(2rem, 5.2vw, 3.85rem); font-weight: 800; line-height: 1.08;
        letter-spacing: -0.03em; margin: 0 0 1rem; color: var(--ink, #2b1d45);
      }
      .hero-copy.only-then .grad-text {
        background: linear-gradient(90deg, #ff5fa2, #ff8a3d 48%, #7c3aed 78%, #00b4d8);
        -webkit-background-clip: text; background-clip: text; color: transparent;
      }

      /* Present (Today) Hero Spotlight */
      html.era-now .hero-layout, html.era-future .hero-layout {
        display: block !important; width: 100%; max-width: 76rem; margin: 0 auto;
      }
      html.era-now .hero-spotlight.only-now {
        position: relative; width: 100%; min-height: 32rem; aspect-ratio: 1.82;
        overflow: hidden; margin: 0 0 1.25rem; border: 1px solid rgba(255,255,255,0.92);
        border-radius: 1.5rem; background: #242044;
        box-shadow: 0 22px 70px -35px rgba(97,76,182,0.38), 0 0 0 1px rgba(149,118,234,0.28);
      }
      html.era-now .hero-spotlight.only-now img {
        position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 53%;
      }
      html.era-now .hero-spotlight.only-now .hero-image-shade {
        position: absolute; inset: 0; pointer-events: none;
        background: radial-gradient(ellipse at 80% 18%, rgba(81,210,245,0.28), transparent 42%),
                    linear-gradient(90deg, rgba(35,24,70,0.04) 18%, rgba(38,24,75,0.18) 43%, rgba(34,25,79,0.68) 100%),
                    linear-gradient(0deg, rgba(38,25,78,0.28), transparent 38%);
      }
      html.era-now .hero-spotlight.only-now figcaption {
        position: absolute; z-index: 2; top: 50%; right: clamp(1.2rem, 5vw, 5rem);
        display: flex; width: min(48%, 34rem); flex-direction: column; align-items: flex-start;
        text-align: left; padding: clamp(1.2rem, 2.5vw, 2rem); color: #ffffff;
        border: 1px solid rgba(255,255,255,0.44); border-radius: 1.3rem;
        background: linear-gradient(135deg, rgba(96,76,159,0.52), rgba(41,43,103,0.62) 55%, rgba(43,114,151,0.46));
        box-shadow: 0 18px 54px rgba(21,15,55,0.25), inset 0 1px rgba(255,255,255,0.32);
        -webkit-backdrop-filter: blur(16px) saturate(1.35); backdrop-filter: blur(16px) saturate(1.35);
        transform: translateY(-50%);
      }
      html.era-now .hero-spotlight.only-now .hero-overline {
        margin-bottom: 0.85rem; color: #9df1ff; font-size: 0.58rem; font-weight: 800; letter-spacing: 0.16em;
      }
      html.era-now .hero-spotlight.only-now .hero-title {
        max-width: 14ch; margin: 0 0 0.8rem; color: #ffffff; font-size: clamp(2.2rem, 4.1vw, 4.2rem);
        font-weight: 800; line-height: 0.98; letter-spacing: -0.05em;
      }
      html.era-now .hero-spotlight.only-now .hero-title em {
        color: #b8a5ff; font-style: italic; font-weight: 700;
      }
      html.era-now .hero-spotlight.only-now figcaption p {
        max-width: 30rem; margin: 0 0 1.2rem; color: rgba(255,255,255,0.88); font-size: 0.82rem; line-height: 1.65;
      }
      html.era-now .hero-spotlight.only-now .hero-index {
        position: absolute; right: 1.5rem; bottom: 1.15rem; z-index: 2;
        color: rgba(255,255,255,0.72); font-family: "VT323", monospace; font-size: 0.95rem; letter-spacing: 0.14em;
      }

      /* Future (2030s+) Hero Spotlight */
      html.era-future .hero-spotlight-future.only-future {
        position: relative; width: 100%; min-height: 32rem; aspect-ratio: 1.82;
        overflow: hidden; margin: 0 0 1.25rem; border: 1px solid rgba(0,229,255,0.45);
        border-radius: 1.5rem; background: #060b18;
        box-shadow: 0 26px 80px -30px rgba(0,229,255,0.35), 0 0 0 1px rgba(192,132,252,0.25);
      }
      html.era-future .hero-spotlight-future.only-future img {
        position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 50%;
      }
      html.era-future .hero-spotlight-future.only-future .hero-image-shade {
        position: absolute; inset: 0; pointer-events: none;
        background: radial-gradient(ellipse at 78% 22%, rgba(0,229,255,0.22), transparent 45%),
                    linear-gradient(90deg, rgba(6,9,19,0.15) 15%, rgba(6,9,19,0.55) 48%, rgba(6,9,19,0.88) 100%),
                    linear-gradient(0deg, rgba(6,9,19,0.65), transparent 35%);
      }
      html.era-future .hero-spotlight-future.only-future figcaption {
        position: absolute; z-index: 2; top: 50%; right: clamp(1.2rem, 5vw, 5rem);
        display: flex; width: min(50%, 35rem); flex-direction: column; align-items: flex-start;
        text-align: left; padding: clamp(1.25rem, 2.5vw, 2.1rem); color: #e4f3ff;
        border: 1px solid rgba(0,229,255,0.42); border-radius: 1.35rem;
        background: linear-gradient(135deg, rgba(8,17,36,0.78), rgba(22,14,46,0.82) 60%, rgba(6,38,56,0.72));
        box-shadow: 0 20px 60px rgba(0,0,0,0.65), 0 0 28px rgba(0,229,255,0.18), inset 0 1px rgba(255,255,255,0.22);
        -webkit-backdrop-filter: blur(16px) saturate(1.4); backdrop-filter: blur(16px) saturate(1.4);
        transform: translateY(-50%);
      }
      html.era-future .hero-spotlight-future.only-future .hero-overline {
        margin-bottom: 0.85rem; color: #00e5ff; font-family: "Silkscreen", monospace;
        font-size: 0.58rem; letter-spacing: 0.14em; text-shadow: 0 0 14px rgba(0,229,255,0.6);
      }
      html.era-future .hero-spotlight-future.only-future .hero-title {
        max-width: 15ch; margin: 0 0 0.85rem; color: #ffffff; font-size: clamp(2.2rem, 4vw, 4.1rem);
        font-weight: 800; line-height: 1.02; letter-spacing: -0.04em; text-shadow: 0 4px 24px rgba(0,229,255,0.35);
      }
      html.era-future .hero-spotlight-future.only-future .hero-title em {
        background: linear-gradient(90deg, #00f2fe, #c084fc, #f472b6);
        -webkit-background-clip: text; background-clip: text; color: transparent; font-style: italic;
      }
      html.era-future .hero-spotlight-future.only-future figcaption p {
        max-width: 31rem; margin: 0 0 1.2rem; color: rgba(228,243,255,0.88); font-size: 0.82rem; line-height: 1.65;
      }
      html.era-future .hero-spotlight-future.only-future .hero-index {
        position: absolute; right: 1.5rem; bottom: 1.15rem; z-index: 2;
        color: #00e5ff; font-family: "VT323", monospace; font-size: 0.95rem; letter-spacing: 0.14em;
      }

      @media (max-width: 760px) {
        html.era-now .hero-spotlight.only-now,
        html.era-future .hero-spotlight-future.only-future {
          min-height: 36rem; aspect-ratio: auto;
        }
        html.era-now .hero-spotlight.only-now figcaption,
        html.era-future .hero-spotlight-future.only-future figcaption {
          top: auto; right: 1rem; bottom: 3.2rem; left: 1rem; width: auto; transform: none;
        }
      }
    `;
    document.head.appendChild(st);
  }

  // 2. Locate or create .hero-layout inside <section id="top">
  let topSec = $('top') || document.querySelector('section#top');
  if (!topSec) {
    const mainEl = document.querySelector('main');
    if (mainEl && mainEl.parentNode) {
      topSec = document.createElement('section');
      topSec.id = 'top';
      topSec.className = 'px-4 pt-10 sm:pt-14 pb-8 text-center';
      mainEl.parentNode.insertBefore(topSec, mainEl);
    }
  }
  if (!topSec) return;

  let heroLayout = topSec.querySelector('.hero-layout');
  if (!heroLayout) {
    heroLayout = document.createElement('div');
    heroLayout.className = 'max-w-5xl mx-auto hero-layout';
    topSec.prepend(heroLayout);
  }

  // If #hero-phase-slot is used inside heroLayout, populate or unwrap it so CSS selectors match .hero-layout > ...
  const heroSlot = $('hero-phase-slot');
  const container = heroSlot || heroLayout;

  // Restore Past (2000s) Hero (.hero-copy.only-then)
  const existingPast = topSec.querySelector('.hero-copy.only-then');
  if (!existingPast) {
    container.insertAdjacentHTML('afterbegin', PAST_HERO_HTML);
  } else if (!existingPast.querySelector('.hero-title')) {
    existingPast.outerHTML = PAST_HERO_HTML;
  }

  // Restore Present (Today) Hero Spotlight (.hero-spotlight.only-now)
  const existingPresent = topSec.querySelector('figure.hero-spotlight.only-now');
  if (!existingPresent) {
    const afterEl = topSec.querySelector('.hero-copy.only-then');
    if (afterEl) afterEl.insertAdjacentHTML('afterend', PRESENT_HERO_HTML);
    else container.insertAdjacentHTML('beforeend', PRESENT_HERO_HTML);
  } else {
    existingPresent.outerHTML = PRESENT_HERO_HTML;
  }

  // Restore Future (2030s+) Hero Spotlight (.hero-spotlight-future.only-future)
  const existingFuture = topSec.querySelector('figure.hero-spotlight-future.only-future');
  if (!existingFuture) {
    const afterEl = topSec.querySelector('figure.hero-spotlight.only-now') || topSec.querySelector('.hero-copy.only-then');
    if (afterEl) afterEl.insertAdjacentHTML('afterend', FUTURE_HERO_HTML);
    else container.insertAdjacentHTML('beforeend', FUTURE_HERO_HTML);
  } else {
    existingFuture.outerHTML = FUTURE_HERO_HTML;
  }

  // Ensure #wing-tabs exists at the bottom of .hero-layout
  if (!$('wing-tabs')) {
    heroLayout.insertAdjacentHTML(
      'beforeend',
      '<div id="wing-tabs" class="pill-carousel max-w-3xl mx-auto" role="tablist" aria-label="Filter exhibits by topic"></div>'
    );
  }

  // Ensure .wing-picker (Time Machine "Choose an era" box) exists above #gallery-grid
  if (!document.querySelector('.wing-picker')) {
    const galleryGrid = $('gallery-grid');
    if (galleryGrid) {
      galleryGrid.insertAdjacentHTML('beforebegin', WING_PICKER_HTML);
    }
  }
}

function syncMobilePolishAndRelicHeadings() {
  // Ensure sheet headers in Passport & Map have horizontal clearance from the top-right close button on mobile
  document.querySelectorAll('.sheet-head').forEach(el => {
    el.style.paddingLeft = '2.2rem';
    el.style.paddingRight = '2.2rem';
  });
  // Sync Relic section heading & sub-caption with 2030 Holo-Saber & Metro Surfer
  const smsSec = $('sms');
  if (smsSec) {
    const fTitle = smsSec.querySelector('h3 .only-future');
    if (fTitle) fTitle.textContent = 'NeuroLink AR Visor • 2030 Relic';
    const nDesc = smsSec.querySelector('p .only-now');
    if (nDesc) nDesc.textContent = 'Step into a 5G smartphone: send a message to Besties GC, or dodge EDSA traffic in Metro Surfer!';
    const fDesc = smsSec.querySelector('p .only-future');
    if (fDesc) fDesc.textContent = 'Connect with your barkada on the 6G AI Hub, or slice neon beat-cubes in Holo-Saber: 2030 Beat!';
  }
}

function bootMuseum() {
  ensureHeroSectionsRestored();
  syncMobilePolishAndRelicHeadings();
  renderWingTabs();
  initGalleryEvents();
  applyEra(currentEra);
  // Initialize best-score badges without triggering AudioContext before first user gesture
  if ($('modern-game-best') && typeof modernGameBest !== 'undefined') {
    $('modern-game-best').textContent = String(modernGameBest);
  }
  if ($('future-game-best') && typeof futureGameBest !== 'undefined') {
    $('future-game-best').textContent = String(futureGameBest);
  }
  updatePassportBadge();
  renderCurators();
  renderSources();
  initBeforeAfter();
  renderStationTabs();
  if (!swipeEventsBound) {
    swipeEventsBound = true;
    addSwipe($('room-content'), nextRoom, prevRoom);
    addSwipe($('lightbox'), () => lightboxStep(1), () => lightboxStep(-1));
    addSwipe($('fs-window'), nextProfile, prevProfile);
  }
  if (typeof smsDefault !== 'undefined' && $('sms-input') && typeof updateSmsDisplay === 'function') {
    $('sms-input').value = '';
    updateSmsDisplay(smsDefault);
  }
  openRoomFromHash();
}

let heroObserverBound = false;
function bindHeroProtectionObserver() {
  if (heroObserverBound || typeof MutationObserver === 'undefined') return;
  const topSec = $('top') || document.querySelector('section#top');
  if (!topSec) return;
  heroObserverBound = true;
  let restoring = false;
  const obs = new MutationObserver(() => {
    if (restoring) return;
    const hasPast = !!topSec.querySelector('.hero-copy.only-then');
    const hasPresent = !!topSec.querySelector('figure.hero-spotlight.only-now');
    const hasFuture = !!topSec.querySelector('figure.hero-spotlight-future.only-future');
    if (!hasPast || !hasPresent || !hasFuture) {
      restoring = true;
      ensureHeroSectionsRestored();
      renderWingTabs();
      restoring = false;
    }
  });
  obs.observe(topSec, { childList: true, subtree: true });
}

window.bootMuseum = function() {
  bootMuseum();
  bindHeroProtectionObserver();
};

document.addEventListener('DOMContentLoaded', () => {
  window.bootMuseum();
});
window.addEventListener('load', () => {
  ensureHeroSectionsRestored();
  renderWingTabs();
});// ============================================================
// CORE MUSEUM APPLICATION SHELL (js/app.js)
// ------------------------------------------------------------
// Controls:
// 1. Era Time Machine (2000s / Today / 2030s+ Future) & Exhibit Cards
// 2. Detail Room Modals (with 5 Worksheet Category Sub-Cards &
//    Full-Width High-Contrast Compare 3-Era Banner + Fallback Hero Images)
// 3. Friendster Curators Modal, Before/After Slider, OPM Mini-Player
// 4. Museum Floor Map & 18-Stamp Museum Passport (Mobile & Web Friendly)
// 5. Auto-Popup Museum Passport on Site Entry (unless a #room- hash is open)
// ============================================================

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------
window.$ = window.$ || (id => document.getElementById(id));
var $ = window.$;

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function profShort(p) {
  return p.short || String(p.name || '?').trim().split(/\s+/)[0];
}
function profInitials(p) {
  if (p.initials) return p.initials;
  const w = String(p.name || '?').trim().split(/\s+/).filter(Boolean);
  return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : '')).toUpperCase();
}

// ------------------------------------------------------------
// TIME MACHINE (2000s <-> Today <-> Future 2030s+) + EXHIBIT WINGS
// ------------------------------------------------------------
const ERA_STORAGE_KEY = 'ppc-era';
const VALID_ERAS = ['then', 'now', 'future'];
let currentEra = document.documentElement.classList.contains('era-future')
  ? 'future'
  : (document.documentElement.classList.contains('era-now') ? 'now' : 'then');
let currentTopic = 'all';
let warpTimers = [];

const ERA_INFO = {
  then: {
    name: 'The 2000s Wing',
    theme: '#fff4fa',
    desc: '2000–2010: texting clans, Friendster, burned CDs, LAN shops, and the first online rescue calls.'
  },
  now: {
    name: 'The Today Wing',
    theme: '#e9e6ff',
    desc: 'The 2020s: short videos, e-wallets, P-Pop, mobile esports, and real-time weather alerts.'
  },
  future: {
    name: 'The Future Wing',
    theme: '#070b19',
    desc: '2030s Onwards: 6G AI-assisted communication, digital banking, AI fact-checking, virtual concerts, and satellite weather forecasting.'
  }
};

// One exhibit, seen through one era. Missing fields fall back to safe blanks.
function eraData(ex, era) {
  if (era === 'future') {
    const f = ex.future || {};
    const gal = f.gallery || [];
    const fallbackImg = (gal[0] && gal[0].src) || ex.image || '';
    return {
      era: 'future',
      label: '2030s+',
      title: f.title || ex.title || '',
      blurb: f.blurb || ex.blurb || '',
      badge: f.badge || ex.badge || '',
      tag: f.tag || ex.tag || '',
      icon: f.icon || ex.icon || '🚀',
      image: f.image || fallbackImg,
      alt: f.alt || f.badge || ex.badge || '',
      summary: f.summary || ex.futureSummary || '',
      intro: f.intro || '',
      categories: f.categories || [],
      facts: f.facts || [],
      artifacts: f.artifacts || [],
      gallery: gal,
      impact: f.impact || ex.impact || ''
    };
  }
  if (era === 'now') {
    const t = ex.today || {};
    const gal = t.gallery || [];
    const fallbackImg = (gal[0] && gal[0].src) || ex.image || '';
    return {
      era: 'now',
      label: 'Today',
      title: t.title || ex.title || '',
      blurb: t.blurb || ex.blurb || '',
      badge: t.badge || ex.badge || '',
      tag: t.tag || ex.tag || '',
      icon: t.icon || ex.icon || '✨',
      image: t.image || fallbackImg,
      alt: t.alt || t.badge || ex.badge || '',
      summary: ex.now || '',
      intro: t.intro || '',
      categories: t.categories || [],
      facts: t.facts || [],
      artifacts: t.artifacts || [],
      gallery: gal,
      impact: t.impact || ex.impact || ''
    };
  }
  const gal = ex.gallery || [];
  const fallbackImg = (gal[0] && gal[0].src) || '';
  return {
    era: 'then',
    label: '2000–2010',
    title: ex.thenTitle || ex.title || '',
    blurb: ex.thenBlurb || ex.blurb || '',
    badge: ex.badge || '',
    tag: ex.tag || '',
    icon: ex.icon || '✨',
    image: ex.image || fallbackImg,
    alt: ex.alt || ex.badge || '',
    summary: ex.then || '',
    intro: ex.intro || '',
    categories: ex.categories || [],
    facts: ex.facts || [],
    artifacts: ex.artifacts || [],
    gallery: gal,
    impact: ex.impact || ''
  };
}

function setEra(era) {
  if (!VALID_ERAS.includes(era)) return;
  if (era === currentEra) return;
  warpTimers.forEach(clearTimeout);
  warpTimers = [];
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const warp = $('warp');
  if (warp && !reduce) {
    warp.className = 'warp warping to-' + era;
    warpTimers.push(setTimeout(() => applyEra(era), 260));
    warpTimers.push(setTimeout(() => { warp.className = 'warp'; }, 760));
  } else {
    applyEra(era);
  }
}

function applyEra(era) {
  currentEra = VALID_ERAS.includes(era) ? era : 'then';
  const root = document.documentElement;
  root.classList.remove('era-then', 'era-now', 'era-future');
  root.classList.add('era-' + currentEra);
  try { localStorage.setItem(ERA_STORAGE_KEY, currentEra); } catch (e) { /* ignore */ }

  document.querySelectorAll('[data-era]').forEach(b => {
    const on = b.dataset.era === currentEra;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  const desc = $('wing-desc');
  if (desc) desc.textContent = ERA_INFO[currentEra].desc;
  const currentWing = $('wing-current');
  if (currentWing) currentWing.textContent = `Now viewing: ${ERA_INFO[currentEra].name}`;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', ERA_INFO[currentEra].theme);

  renderGallery();
  switchWing(currentTopic);
  if (currentEra !== 'now' && typeof stopModernGame === 'function') stopModernGame();
  if (currentEra !== 'future' && typeof stopFutureGame === 'function') stopFutureGame();
  if (currentEra !== 'then' && typeof stopSnake === 'function') stopSnake();
}

function renderWingTabs() {
  const wrap = $('wing-tabs');
  if (!wrap) return;
  wrap.innerHTML =
    `<button type="button" class="chip-btn tab-btn active" data-wing="all" onclick="switchWing('all')">All Topics</button>` +
    exhibits.map(ex =>
      `<button type="button" class="chip-btn tab-btn" data-wing="${esc(ex.id)}" onclick="switchWing('${esc(ex.id)}')">${esc(ex.icon)} ${esc(ex.wing)}</button>`
    ).join('');
}

function renderGallery() {
  const grid = $('gallery-grid');
  if (!grid) return;
  grid.innerHTML = exhibits.map((ex, i) => {
    const d = eraData(ex, currentEra);
    const visited = hasStamp(ex.id, currentEra);
    const eraIcon = currentEra === 'then' ? '🕹️' : currentEra === 'now' ? '📱' : '🚀';
    const footLabel = currentEra === 'then' ? 'Impact' : currentEra === 'now' ? 'Why it matters' : '2030s+ Horizon';
    return `
    <article class="exhibit-card reveal" tabindex="0" role="button" data-category="${esc(ex.id)}" data-index="${i}"
             style="--c:${esc(ex.color)}" aria-label="Enter the ${esc(ex.wing)} room (${esc(d.label)}): ${esc(d.title)}">
      <div>
        <div class="card-media">
          <span class="card-emoji" aria-hidden="true">${esc(d.icon)}</span>
          ${d.image ? `<img src="${esc(d.image)}" alt="${esc(d.alt)}" loading="lazy" decoding="async" onerror="this.remove()">` : ''}
          <span class="card-badge">${esc(d.badge)}</span>
          <span class="card-era">${esc(d.label)}</span>
        </div>
        <div class="card-body">
          <div class="flex items-center justify-between gap-2">
            <span class="domain">${esc(ex.domain)}</span>
            <span class="retro-tag">${esc(d.tag)}</span>
          </div>
          <div class="card-era-comparison" aria-label="${esc(d.label)} summary">
            <section class="card-era-copy card-era-copy-${currentEra} is-current">
              <span class="card-era-label"><span aria-hidden="true">${eraIcon}</span>${esc(d.label)}</span>
              <h4>${esc(d.title)}</h4>
              <p class="card-era-subtitle">${esc(d.blurb)}</p>
            </section>
          </div>
        </div>
      </div>
      <div class="card-foot">
        <span>${footLabel}: <em>${esc(d.impact)}</em></span>
        <span class="enter">${visited ? '✓ ' : ''}Enter room →</span>
      </div>
    </article>`;
  }).join('');

  const cards = grid.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.1 });
    cards.forEach(c => io.observe(c));
  } else {
    cards.forEach(c => c.classList.add('in'));
  }
}

// Attached once (the cards themselves are re-built whenever the era changes)
let galleryEventsBound = false;
function initGalleryEvents() {
  if (galleryEventsBound) return;
  const grid = $('gallery-grid');
  if (!grid) return;
  galleryEventsBound = true;
  grid.addEventListener('click', e => {
    const card = e.target.closest('.exhibit-card');
    if (card) openRoom(Number(card.dataset.index));
  });
  grid.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.exhibit-card');
    if (card) { e.preventDefault(); openRoom(Number(card.dataset.index)); }
  });
}

function switchWing(category) {
  currentTopic = category;
  document.querySelectorAll('.tab-btn').forEach(tab => {
    const isActive = tab.getAttribute('data-wing') === category;
    tab.classList.toggle('active', isActive);
    if (isActive && window.innerWidth < 640) {
      tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
  document.querySelectorAll('.exhibit-card').forEach(card =>
    card.classList.toggle('hidden', !(category === 'all' || card.getAttribute('data-category') === category))
  );
}

// ------------------------------------------------------------
// MODAL LAYERS
// ------------------------------------------------------------
let historyOK = true;
const lastFocus = { room: null, fs: null, lb: null, pp: null, map: null };

function histLevel() { return (history.state && history.state.lvl) || 0; }

function enterLevel(lvl, hash) {
  if (!historyOK) return;
  try {
    const base = location.pathname + location.search;
    const url = hash || (lvl > 1 ? base + location.hash : base);
    if (histLevel() < lvl) history.pushState({ lvl }, '', url);
    else history.replaceState({ lvl }, '', url);
  } catch (e) { historyOK = false; }
}

function leaveLevel(lvl, hideFn) {
  if (historyOK && histLevel() >= lvl) {
    try { history.back(); } catch (e) { hideFn(); return; }
    setTimeout(() => { if (histLevel() >= lvl) hideFn(); }, 400);
  } else {
    hideFn();
  }
}

function roomIsOpen() { const m = $('room-modal'); return !!m && !m.classList.contains('hidden'); }
function fsIsOpen() { const m = $('friendster-modal'); return !!m && !m.classList.contains('hidden'); }
function lbIsOpen() { const m = $('lightbox'); return !!m && !m.classList.contains('hidden'); }
function passportIsOpen() { const m = $('passport-modal'); return !!m && !m.classList.contains('hidden'); }
function mapIsOpen() { const m = $('map-modal'); return !!m && !m.classList.contains('hidden'); }

function lockScroll() { document.body.style.overflow = 'hidden'; }
function unlockScrollIfIdle() {
  if (!roomIsOpen() && !fsIsOpen() && !lbIsOpen() && !passportIsOpen() && !mapIsOpen()) document.body.style.overflow = '';
}

function focusPanel(id) { const el = $(id); if (el && el.focus) el.focus({ preventScroll: true }); }
function restoreFocus(key) {
  const el = lastFocus[key];
  lastFocus[key] = null;
  if (el && el.focus && (!document.contains || document.contains(el))) el.focus({ preventScroll: true });
}

function trapTab(e, container) {
  if (!container) return;
  const items = [...container.querySelectorAll('button, a[href], textarea, input, [tabindex]:not([tabindex="-1"])')]
    .filter(el => !el.disabled && el.getClientRects().length > 0);
  if (!items.length) { e.preventDefault(); return; }
  const first = items[0], last = items[items.length - 1], active = document.activeElement;
  if (e.shiftKey && (active === first || active === container)) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
}

function addSwipe(el, onLeft, onRight) {
  if (!el) return;
  let x0 = 0, y0 = 0, t0 = 0, tracking = false;
  el.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) { tracking = false; return; }
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now(); tracking = true;
  }, { passive: true });
  el.addEventListener('touchend', e => {
    if (!tracking) return;
    tracking = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - x0, dy = t.clientY - y0;
    if (Date.now() - t0 < 700 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      (dx < 0 ? onLeft : onRight)();
    }
  }, { passive: true });
}

window.addEventListener('popstate', () => {
  const lvl = histLevel();
  if (lvl < 2 && lbIsOpen()) hideLightbox();
  if (lvl < 1) {
    if (roomIsOpen()) hideRoom();
    if (fsIsOpen()) hideFriendster();
    if (passportIsOpen()) hidePassport();
    if (mapIsOpen()) hideMap();
  }
});

// ---------- Lightbox ----------
let lbIndex = 0;
let lbEra = 'then';
function currentGallery() {
  const ex = exhibits[currentRoom];
  return ex ? eraData(ex, lbEra).gallery : [];
}

function showLightbox(i) {
  const items = currentGallery();
  if (!items.length) return;
  lbIndex = (i + items.length) % items.length;
  const g = items[lbIndex];
  const img = $('lb-img');
  img.classList.remove('lb-broken');
  img.alt = g.caption || '';
  img.src = g.src;
  $('lb-caption').textContent = (g.caption || '') + (g.year ? ` (${g.year})` : '');
  $('lb-credit').textContent = g.credit || '';
  $('lb-count').textContent = `${lbIndex + 1} / ${items.length}`;
  $('lb-full').href = g.src;
  document.querySelectorAll('.lb-nav').forEach(b => b.classList.toggle('hidden', items.length < 2));
}

function openLightbox(i, era) {
  lbEra = (era === 'now' || era === 'future') ? era : 'then';
  lastFocus.lb = document.activeElement;
  enterLevel(2);
  showLightbox(i);
  $('lightbox').classList.remove('hidden');
  lockScroll();
  focusPanel('lightbox');
}
function hideLightbox() {
  $('lightbox').classList.add('hidden');
  $('lb-img').removeAttribute('src');
  unlockScrollIfIdle();
  restoreFocus('lb');
}
function closeLightbox() { leaveLevel(2, hideLightbox); }
function lightboxStep(d) { showLightbox(lbIndex + d); }

function galleryImgFailed(img) {
  const item = img.closest('.gallery-item');
  const grid = img.closest('.gallery-grid');
  const section = img.closest('.gallery-section');
  if (item) item.remove();
  if (grid && !grid.children.length && section) section.remove();
}

// ------------------------------------------------------------
// DETAIL ROOMS (every room has 2000s / Today / 2030s+ / Compare tabs)
// ------------------------------------------------------------
let currentRoom = 0;
let roomEra = 'then'; // 'then' | 'now' | 'future' | 'compare'

function roomHash(id, era) { return '#room-' + id + (era && era !== 'then' ? '/' + era : ''); }

function roomGalleryHtml(items, era, heading) {
  if (!items || !items.length) return '';
  return `
    <section class="gallery-section">
      <h3 class="room-h">${heading || '📸 Photo gallery'} <span class="room-h-sub">tap a photo to enlarge</span></h3>
      <div class="gallery-grid">
        ${items.map((g, i) => `
          <button type="button" class="gallery-item" onclick="openLightbox(${i}, '${era}')" aria-label="Enlarge photo: ${esc(g.caption || 'Photo ' + (i + 1))}">
            <span class="gallery-frame"><img src="${esc(g.src)}" alt="${esc(g.caption || '')}" loading="lazy" decoding="async" onerror="galleryImgFailed(this)"></span>
            <span class="gallery-cap">${esc(g.caption || '')}${g.year ? ` <em>(${esc(g.year)})</em>` : ''}</span>
          </button>`).join('')}
      </div>
    </section>`;
}

function srcLinkHtml(s) {
  const meta = [s.publisher, s.year].filter(Boolean).map(esc).join(', ');
  return `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a>${meta ? ` <span class="src-pub">— ${meta}</span>` : ''}`;
}

function roomSourcesHtml(ex, era) {
  const list = (ex.sources || []).filter(s => era === 'compare' || s.era === 'both' || s.era === era);
  if (!list.length) return '';
  return `
    <details class="room-sources">
      <summary>📚 Sources for this room (${list.length})</summary>
      <ol>${list.map(s => `<li>${srcLinkHtml(s)}${s.note ? `<small>${esc(s.note)}</small>` : ''}</li>`).join('')}</ol>
    </details>`;
}

function roomCategoriesHtml(categories) {
  if (!categories || !categories.length) return '';
  return `
    <h3 class="room-h">🗂️ Worksheet Breakdown</h3>
    <div class="category-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:0.75rem;margin-bottom:1.1rem;">
      ${categories.map(c => `
        <div class="category-card" style="background:rgba(128,128,160,0.08);border:1px solid rgba(128,128,160,0.22);border-radius:0.85rem;padding:0.85rem 1rem;">
          <div style="font-weight:800;font-size:0.8rem;letter-spacing:0.03em;text-transform:uppercase;margin-bottom:0.35rem;color:var(--c, #db32ae);">
            <span aria-hidden="true">${esc(c.icon || '📌')}</span> ${esc(c.label || '')}
          </div>
          <p style="margin:0;font-size:0.86rem;line-height:1.5;">${esc(c.text || '')}</p>
        </div>`).join('')}
    </div>`;
}

function roomFactsHtml(facts) {
  if (!facts || !facts.length) return '';
  return `<h3 class="room-h">💡 Key Takeaways</h3><ul class="fact-list">${facts.map(f => `<li>${esc(f)}</li>`).join('')}</ul>`;
}

function roomArtifactsHtml(items) {
  if (!items || !items.length) return '';
  return `
    <h3 class="room-h">🗂️ Artifacts in this room</h3>
    <div class="artifact-grid">
      ${items.map(a => `
        <div class="artifact">
          <span class="artifact-emoji">${esc(a.emoji)}</span>
          <div><b>${esc(a.name)}</b><p>${esc(a.note)}</p></div>
        </div>`).join('')}
    </div>`;
}

function roomHeroHtml(ex, era) {
  if (era === 'compare') {
    const third = (d, cls) => {
      const heroSrc = d.image || (d.gallery && d.gallery[0] && d.gallery[0].src) || ex.image || '';
      return `
      <div class="hero-half ${cls}" style="position:relative;height:100%;min-height:13.5rem;overflow:hidden;">
        <span class="hero-half-emoji" aria-hidden="true">${esc(d.icon)}</span>
        ${heroSrc ? `<img src="${esc(heroSrc)}" alt="${esc(d.alt || d.title)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onerror="this.remove()">` : ''}
        <span class="hero-half-tag" style="z-index:3;color:#0f172a;background:#ffffff;">${esc(d.label)}</span>
      </div>`;
    };
    return `
      <div class="room-hero compare" style="position:relative;height:13.5rem;min-height:13.5rem;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));background:#0f172a;color:#ffffff;overflow:hidden;">
        ${third(eraData(ex, 'then'), 'then')}${third(eraData(ex, 'now'), 'now')}${third(eraData(ex, 'future'), 'future')}
        <div class="room-hero-shade" style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,11,26,0.18) 0%,rgba(8,11,26,0.68) 48%,rgba(8,11,26,0.94) 100%);pointer-events:none;z-index:2;"></div>
        <div class="room-hero-text" style="position:absolute;left:0;right:0;bottom:0;z-index:3;padding:0.9rem 1.2rem;color:#ffffff;text-shadow:0 2px 10px rgba(0,0,0,0.88);">
          <span class="room-domain" style="background:#ffffff;color:#0f172a;font-weight:800;">${esc(ex.domain)} • All 3 Phases</span>
          <h2 style="color:#ffffff;font-size:clamp(1.12rem,2.6vw,1.6rem);line-height:1.18;margin:0.15rem 0 0.2rem;text-shadow:0 2px 12px rgba(0,0,0,0.92);">${esc(ex.title)}</h2>
          <p style="color:rgba(255,255,255,0.95);font-size:0.78rem;line-height:1.38;margin:0;text-shadow:0 1px 8px rgba(0,0,0,0.88);">${esc(ex.blurb)}</p>
        </div>
      </div>`;
  }
  const d = eraData(ex, era);
  const heroSrc = d.image || (d.gallery && d.gallery[0] && d.gallery[0].src) || ex.image || '';
  return `
    <div class="room-hero era-${era}">
      <span class="room-hero-emoji" aria-hidden="true">${esc(d.icon)}</span>
      ${heroSrc ? `<img src="${esc(heroSrc)}" alt="${esc(d.alt || d.title)}" onerror="this.remove()">` : ''}
      <div class="room-hero-shade"></div>
      <div class="room-hero-text">
        <span class="room-domain">${esc(ex.domain)} • ${esc(d.label)}</span>
        <h2>${esc(d.title)}</h2>
        <p>${esc(d.blurb)}</p>
      </div>
    </div>`;
}

function roomTabsHtml(ex) {
  const tabs = [
    ['then', '🕹️', '2000s'],
    ['now', '📱', 'Today'],
    ['future', '🚀', '2030s+'],
    ['compare', '⚖️', 'Compare']
  ];
  return `<div class="room-tabs" role="tablist" aria-label="Choose an era">` +
    tabs.map(([k, ic, label]) => {
      const stamped = k !== 'compare' && hasStamp(ex.id, k);
      return `<button type="button" role="tab" aria-selected="${roomEra === k}" class="room-tab tab-${k} ${roomEra === k ? 'active' : ''}" onclick="setRoomEra('${k}')">${ic} ${label}${stamped ? ' <span class="tab-stamp" title="Stamp collected">✓</span>' : ''}</button>`;
    }).join('') + `</div>`;
}

function roomActionsHtml(ex, era) {
  const otherBtns = VALID_ERAS.filter(e => e !== era).map(e => {
    const label = e === 'then' ? '⏪ 2000s Room' : e === 'now' ? '📱 Today Room' : '🚀 2030s+ Future Room';
    return `<button type="button" class="btn ${e === 'future' ? 'btn-pink' : ''}" onclick="setRoomEra('${e}')">${label}</button>`;
  }).join('');
  return `
    <div class="room-actions">
      ${otherBtns}
      <button type="button" class="btn" onclick="setRoomEra('compare')">⚖️ Compare all 3</button>
    </div>`;
}

function roomEraBodyHtml(ex, era) {
  const d = eraData(ex, era);
  const blockCls = era === 'then' ? 'era-then' : era === 'now' ? 'era-present' : 'era-future';
  const blockLabel = era === 'then' ? '2000–2010 Decade' : era === 'now' ? 'Present Time (2020s)' : 'Future Horizon (2030s+)';
  const impactLabel = era === 'then' ? 'Impact' : era === 'now' ? 'Why it matters' : '2030s+ Horizon';
  return `
    ${d.intro ? `<p class="room-intro">${esc(d.intro)}</p>` : ''}
    <div class="era-block ${blockCls}" style="margin:0 0 1rem">
      <span class="era-label">${blockLabel}</span>${esc(d.summary)}
    </div>
    ${roomCategoriesHtml(d.categories)}
    ${roomGalleryHtml(d.gallery, era)}
    ${roomFactsHtml(d.facts)}
    ${roomArtifactsHtml(d.artifacts)}
    ${d.impact ? `<div class="impact-box">⭐ ${impactLabel}: ${esc(d.impact)}</div>` : ''}
    ${roomSourcesHtml(ex, era)}
    ${roomActionsHtml(ex, era)}`;
}

function roomCompareBodyHtml(ex) {
  const col = (d, cls, heading, blockCls) => `
    <div class="cmp-col ${cls}">
      <h4 class="cmp-head">${heading}</h4>
      <div class="era-block ${blockCls}" style="margin:0 0 .6rem">
        <span class="era-label">${esc(d.title)}</span>${esc(d.summary)}
      </div>
      ${d.facts.length ? `<ul class="cmp-facts">${d.facts.slice(0, 3).map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}
      <div class="cmp-chips">${d.artifacts.map(a => `<span class="cmp-chip" title="${esc(a.note)}">${esc(a.emoji)} ${esc(a.name)}</span>`).join('')}</div>
    </div>`;
  const a = eraData(ex, 'then');
  const b = eraData(ex, 'now');
  const c = eraData(ex, 'future');
  return `
    <div class="change-box">🔄 <b>Across three eras:</b> ${esc(ex.change || ex.impact || '')}</div>
    <div class="cmp-grid">
      ${col(a, 'then', '🕹️ 2000–2010', 'era-then')}
      ${col(b, 'now', '📱 Today (2020s)', 'era-present')}
      ${col(c, 'future', '🚀 Future (2030s+)', 'era-future')}
    </div>
    ${roomGalleryHtml(a.gallery, 'then', '📸 2000s photos')}
    ${roomGalleryHtml(b.gallery, 'now', '📸 Today photos')}
    ${roomGalleryHtml(c.gallery, 'future', '📸 2030s+ Future visualizations')}
    ${roomSourcesHtml(ex, 'compare')}
    <div class="room-actions">
      <button type="button" class="btn" onclick="setRoomEra('then')">🕹️ Enter 2000s room</button>
      <button type="button" class="btn" onclick="setRoomEra('now')">📱 Enter Today room</button>
      <button type="button" class="btn btn-pink" onclick="setRoomEra('future')">🚀 Enter 2030s+ room</button>
    </div>`;
}

function renderRoom(index, era) {
  const total = exhibits.length;
  currentRoom = ((index % total) + total) % total;
  if (era === 'then' || era === 'now' || era === 'future' || era === 'compare') roomEra = era;
  const ex = exhibits[currentRoom];

  $('room-panel').style.setProperty('--c', ex.color);
  $('room-panel').dataset.era = roomEra;
  stampVisit(ex.id, roomEra);

  const content = $('room-content');
  content.innerHTML = `
    ${roomHeroHtml(ex, roomEra)}
    ${roomTabsHtml(ex)}
    <div class="room-body">
      ${roomEra === 'compare' ? roomCompareBodyHtml(ex) : roomEraBodyHtml(ex, roomEra)}
    </div>`;
  content.scrollTop = 0;
  content.classList.remove('swap'); void content.offsetWidth; content.classList.add('swap');

  $('room-dots').innerHTML = exhibits.map((e, i) =>
    `<button type="button" class="room-dot ${i === currentRoom ? 'active' : ''}" onclick="renderRoom(${i})" title="${esc(e.wing)}" aria-label="Go to ${esc(e.wing)} room">${esc(e.icon)}</button>`
  ).join('');
  if ($('room-prev-label')) $('room-prev-label').textContent = exhibits[(currentRoom - 1 + total) % total].wing;
  if ($('room-next-label')) $('room-next-label').textContent = exhibits[(currentRoom + 1) % total].wing;
  const eraName = roomEra === 'then' ? '2000s' : roomEra === 'now' ? 'Today' : roomEra === 'future' ? '2030s+' : 'Compare';
  $('room-count').textContent = `Room ${currentRoom + 1} of ${total} • ${ex.wing} • ${eraName}`;

  try { history.replaceState(history.state, '', roomHash(ex.id, roomEra)); } catch (e) { /* ignore */ }
}

function setRoomEra(era) { renderRoom(currentRoom, era); }

function openRoom(index, era) {
  const n = exhibits.length;
  const i = (((typeof index === 'number' ? index : 0) % n) + n) % n;
  roomEra = (era === 'then' || era === 'now' || era === 'future' || era === 'compare') ? era : currentEra;
  lastFocus.room = document.activeElement;
  enterLevel(1, roomHash(exhibits[i].id, roomEra));
  renderRoom(i);
  $('room-modal').classList.remove('hidden');
  lockScroll();
  focusPanel('room-panel');
}

function hideRoom() {
  $('room-modal').classList.add('hidden');
  unlockScrollIfIdle();
  restoreFocus('room');
  if (location.hash.indexOf('#room-') === 0) {
    try { history.replaceState(history.state, '', location.pathname + location.search); } catch (e) { /* ignore */ }
  }
}

function closeRoom() { leaveLevel(1, hideRoom); }
function nextRoom() { renderRoom(currentRoom + 1); }
function prevRoom() { renderRoom(currentRoom - 1); }

function visitCurator(profileIndex) {
  hideRoom();
  openFriendsterModal(profileIndex);
}

let initialPassportShown = false;

function openRoomFromHash() {
  const m = location.hash.match(/^#room-([\w-]+?)(?:\/(then|now|future|compare))?$/);
  if (m) {
    const i = exhibits.findIndex(e => e.id === m[1]);
    if (i >= 0) {
      initialPassportShown = true;
      openRoom(i, m[2] || 'then');
      return;
    }
  }
  // Automatically pop up the Museum Passport first when entering the site
  // so viewers immediately have a clear path on where to go
  if (!initialPassportShown) {
    initialPassportShown = true;
    openPassport(true);
  }
}

// ------------------------------------------------------------
// Keyboard controls
// ------------------------------------------------------------
document.addEventListener('keydown', e => {
  if (lbIsOpen()) {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') lightboxStep(1);
    else if (e.key === 'ArrowLeft') lightboxStep(-1);
    else if (e.key === 'Tab') trapTab(e, $('lightbox'));
    return;
  }
  if (fsIsOpen()) {
    if (e.key === 'Escape') closeFriendsterModal();
    else if (e.key === 'ArrowRight') nextProfile();
    else if (e.key === 'ArrowLeft') prevProfile();
    else if (e.key === 'Tab') trapTab(e, $('fs-window'));
    return;
  }
  if (passportIsOpen()) {
    if (e.key === 'Escape') closePassport();
    else if (e.key === 'Tab') trapTab(e, $('passport-panel'));
    return;
  }
  if (mapIsOpen()) {
    if (e.key === 'Escape') closeMap();
    else if (e.key === 'Tab') trapTab(e, $('map-panel'));
    return;
  }
  if (roomIsOpen()) {
    if (e.key === 'Escape') closeRoom();
    else if (e.key === 'ArrowRight') nextRoom();
    else if (e.key === 'ArrowLeft') prevRoom();
    else if (e.key === 'Tab') trapTab(e, $('room-panel'));
    return;
  }

  if (typeof nokiaMode !== 'undefined' && nokiaMode === 'snake' && currentEra === 'then') {
    if (['ArrowUp', 'KeyW'].includes(e.code)) { snakeChangeDir(0, -1); e.preventDefault(); }
    else if (['ArrowDown', 'KeyS'].includes(e.code)) { snakeChangeDir(0, 1); e.preventDefault(); }
    else if (['ArrowLeft', 'KeyA'].includes(e.code)) { snakeChangeDir(-1, 0); e.preventDefault(); }
    else if (['ArrowRight', 'KeyD'].includes(e.code)) { snakeChangeDir(1, 0); e.preventDefault(); }
    else if (['Space', 'Enter'].includes(e.code)) { toggleSnakePlay(); e.preventDefault(); }
    else if (e.key === 'Escape') { setNokiaMode('sms'); }
  }
});

// ------------------------------------------------------------
// FRIENDSTER PROFILES
// ------------------------------------------------------------
let currentProfile = 0;

function avatarHtml(p) {
  const img = p.avatar
    ? `<img src="${esc(p.avatar)}" alt="${esc(profShort(p))}'s profile photo" onerror="this.remove()">`
    : '';
  return `<span>${esc(profInitials(p))}</span>${img}`;
}

function showProfile(index) {
  if (typeof friendsterProfiles === 'undefined' || !friendsterProfiles.length) return;
  const total = friendsterProfiles.length;
  currentProfile = (index + total) % total;
  const p = friendsterProfiles[currentProfile];

  $('fs-tabs').innerHTML = friendsterProfiles.map((f, i) =>
    `<button type="button" class="fs-tab ${i === currentProfile ? 'active' : ''}" onclick="showProfile(${i})">${esc(profShort(f))}</button>`
  ).join('');

  const activeTab = $('fs-tabs').querySelector('.fs-tab.active');
  if (activeTab && window.innerWidth < 640) {
    activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  const friends = friendsterProfiles
    .map((f, i) => ({ f, i }))
    .filter(x => x.i !== currentProfile)
    .map(x => `
      <button type="button" class="fs-friend" onclick="showProfile(${x.i})" title="View ${esc(profShort(x.f))}'s profile">
        <span class="fs-avatar">${avatarHtml(x.f)}</span>
        <span>${esc(profShort(x.f))}</span>
      </button>`).join('');

  $('fs-body').innerHTML = `
    <div class="flex flex-row gap-3 items-center sm:items-start">
      <div class="fs-avatar">${avatarHtml(p)}</div>
      <div class="min-w-0 text-left flex-1">
        <h4 class="font-bold text-sm sm:text-base text-blue-900 break-words leading-tight">${esc(p.handle)}</h4>
        <p class="text-[10px] sm:text-[11px] font-semibold text-slate-600">${esc(p.name)}</p>
        <p class="text-[10px] sm:text-[11px] text-slate-500 italic mb-1 truncate">"${esc(p.quote)}"</p>
        <div class="text-[10px] sm:text-[11px] space-y-0.5 text-slate-600">
          <p><strong>Status:</strong> ${esc(p.status)}</p>
          <p><strong>Since:</strong> ${esc(p.memberSince)}</p>
          <p><strong>From:</strong> ${esc(p.hometown)}</p>
        </div>
      </div>
    </div>
    <div class="border border-blue-200 rounded p-2.5 sm:p-3 bg-blue-50/50">
      <h5 class="font-bold text-blue-900 mb-1 border-b border-blue-200 pb-1">About Me</h5>
      <p class="text-[11px] text-slate-700 leading-relaxed mb-2">${esc(p.about)}</p>
      <div>${p.interests.map(t => `<span class="fs-chip">${esc(t)}</span>`).join('')}</div>
    </div>
    <div class="border border-blue-200 rounded p-2.5 sm:p-3 bg-blue-50/50">
      <h5 class="font-bold text-blue-900 mb-2 border-b border-blue-200 pb-1">Testimonials (${p.testimonials.length})</h5>
      <div class="space-y-1.5">
        ${p.testimonials.map(t => `
          <div class="bg-white p-2 rounded border border-blue-100 text-[10px] sm:text-[11px]">
            <span class="font-semibold text-blue-800">${esc(t.from)}:</span> "${esc(t.text)}"
          </div>`).join('')}
      </div>
    </div>
    <div class="border border-blue-200 rounded p-2.5 sm:p-3 bg-blue-50/50">
      <h5 class="font-bold text-blue-900 mb-2 border-b border-blue-200 pb-1">Top Friends</h5>
      <div class="flex gap-2.5 flex-wrap">${friends}</div>
    </div>`;
  $('fs-body').scrollTop = 0;
  $('fs-counter').textContent = `Profile ${currentProfile + 1} of ${total}`;
}

function nextProfile() { showProfile(currentProfile + 1); }
function prevProfile() { showProfile(currentProfile - 1); }

function openFriendsterModal(index) {
  lastFocus.fs = document.activeElement;
  enterLevel(1);
  showProfile(typeof index === 'number' ? index : 0);
  $('friendster-modal').classList.remove('hidden');
  lockScroll();
  focusPanel('fs-window');
}

function hideFriendster() {
  $('friendster-modal').classList.add('hidden');
  unlockScrollIfIdle();
  restoreFocus('fs');
}

function closeFriendsterModal() { leaveLevel(1, hideFriendster); }

function renderCurators() {
  const grid = $('curator-grid');
  if (!grid || typeof friendsterProfiles === 'undefined') return;
  grid.innerHTML = friendsterProfiles.map((p, i) => `
    <div class="curator-card">
      <div class="fs-avatar">${avatarHtml(p)}</div>
      <h4 class="font-extrabold text-sm">${esc(p.name)}</h4>
      ${p.role ? `<p class="text-[11px] text-[var(--muted)] mt-1">${esc(p.role)}</p>` : ''}
      <button type="button" onclick="openFriendsterModal(${i})" class="btn btn-yellow btn-sm mt-3">✨ View Friendster</button>
    </div>`).join('');
}

// ------------------------------------------------------------
// BEFORE / AFTER SLIDER
// ------------------------------------------------------------
function baLayerHtml(side) {
  const photo = side.img
    ? `<img src="${esc(side.img)}" alt="${esc(side.label)}" draggable="false" onerror="this.remove()">`
    : '';
  return `<div class="ba-ph"><span class="ba-emoji">${esc(side.emoji)}</span><span class="ba-ph-label">${esc(side.label)}</span></div>${photo}`;
}

function setBaPosition(percent) {
  const slider = $('ba-slider');
  if (!slider) return;
  const p = Math.max(0, Math.min(100, percent));
  slider.style.setProperty('--pos', p + '%');
  slider.setAttribute('aria-valuenow', Math.round(p));
}

function showBeforeAfter(index) {
  if (typeof beforeAfterPairs === 'undefined') return;
  const pair = beforeAfterPairs[index];
  if (!pair) return;
  $('ba-before').innerHTML = baLayerHtml(pair.before);
  $('ba-after').innerHTML = baLayerHtml(pair.after);
  $('ba-title').textContent = pair.title;
  $('ba-caption').textContent = pair.caption;
  document.querySelectorAll('#ba-tabs button').forEach((btn, i) => {
    const isActive = i === index;
    btn.classList.toggle('active', isActive);
    if (isActive && window.innerWidth < 640) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
  setBaPosition(50);
}

let baEventsBound = false;
function initBeforeAfter() {
  const slider = $('ba-slider');
  if (!slider || typeof beforeAfterPairs === 'undefined' || !beforeAfterPairs.length) return;

  $('ba-tabs').innerHTML = beforeAfterPairs.map((pair, i) =>
    `<button type="button" class="chip-btn" onclick="showBeforeAfter(${i})">${esc(String(pair.tab).trim())}</button>`
  ).join('');

  if (!baEventsBound) {
    baEventsBound = true;
    let dragging = false;
    const moveTo = clientX => {
      const rect = slider.getBoundingClientRect();
      setBaPosition(((clientX - rect.left) / rect.width) * 100);
    };
    slider.addEventListener('pointerdown', e => { dragging = true; slider.setPointerCapture(e.pointerId); moveTo(e.clientX); });
    slider.addEventListener('pointermove', e => { if (dragging) moveTo(e.clientX); });
    ['pointerup', 'pointercancel'].forEach(evt => slider.addEventListener(evt, () => { dragging = false; }));

    slider.addEventListener('keydown', e => {
      const now = Number(slider.getAttribute('aria-valuenow')) || 50;
      if (e.key === 'ArrowLeft') { setBaPosition(now - 5); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { setBaPosition(now + 5); e.preventDefault(); }
      else if (e.key === 'Home') { setBaPosition(0); e.preventDefault(); }
      else if (e.key === 'End') { setBaPosition(100); e.preventDefault(); }
    });
  }

  showBeforeAfter(0);
}

// ------------------------------------------------------------
// MINI PLAYER
// ------------------------------------------------------------
let currentStation = 1;

function getPlaylistId(url) {
  if (!url) return null;
  try { return new URL(url).searchParams.get('list') || null; } catch (e) { return null; }
}

function renderStationTabs() {
  const wrap = $('station-tabs');
  if (!wrap || typeof playlistStations === 'undefined') return;
  wrap.style.gridTemplateColumns = `repeat(${playlistStations.length}, minmax(0, 1fr))`;
  wrap.innerHTML = playlistStations.map((s, i) =>
    `<button type="button" class="station-btn" onclick="switchStation(${i + 1})">${esc(s.tab)}</button>`
  ).join('');
}

function setPlayerMissing(message) {
  const box = $('yt-video-box');
  if (!box) return;
  box.classList.add('missing');
  box.innerHTML = `<div>${esc(message)}<br><br><a class="btn btn-pink btn-sm" href="${esc(playlistSearch.youtube)}" target="_blank" rel="noopener noreferrer">🔎 Search YouTube ↗</a></div>`;
}

function switchStation(stationNum) {
  if (typeof playlistStations === 'undefined') return;
  const st = playlistStations[stationNum - 1];
  if (!st) return;
  currentStation = stationNum;

  document.querySelectorAll('.station-btn').forEach((b, i) => b.classList.toggle('active', i === stationNum - 1));
  $('station-badge').textContent = `STATION ${stationNum}`;
  $('playlist-title').textContent = st.title;

  const embedWrap = $('yt-embed-wrap');
  const musicWrap = $('yt-music-wrap');
  const hasId = !!getPlaylistId(st.url);

  if (st.type === 'link') {
    embedWrap.classList.add('hidden');
    musicWrap.classList.remove('hidden');

    const iframe = $('yt-inpage-player');
    if (iframe) iframe.src = 'about:blank';

    $('ytm-open-link').href = st.url || playlistSearch.music;
    $('ytm-note').textContent = st.url
      ? 'Opens curated playlist in YouTube Music.'
      : 'No playlist link set yet. Paste yours into js/data/shared.js (playlistStations).';
    return;
  }

  musicWrap.classList.add('hidden');
  embedWrap.classList.remove('hidden');
  const box = $('yt-video-box');

  if (!hasId) {
    setPlayerMissing('No playlist link yet. Paste a YouTube playlist link into js/data/shared.js (playlistStations).');
    $('yt-open-link').href = playlistSearch.youtube;
    $('yt-open-link').textContent = 'Search YouTube for 2000s OPM ↗';
    return;
  }
  if (!$('yt-inpage-player')) {
    box.classList.remove('missing');
    box.innerHTML = '<iframe id="yt-inpage-player" class="w-full h-full" title="2000s soundtrack playlist" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(getPlaylistId(st.url))}`;
  const iframe = $('yt-inpage-player');
  if (iframe.getAttribute('src') !== embedUrl) iframe.src = embedUrl;
  $('yt-open-link').href = st.url;
  $('yt-open-link').textContent = 'Not playing? Open on YouTube ↗';
}

function togglePlayerPopup() {
  const pill = $('player-pill');
  const popup = $('player-popup');
  const opening = popup.classList.contains('hidden');

  popup.classList.toggle('hidden', !opening);
  pill.classList.toggle('hidden', opening);

  if (opening) switchStation(currentStation);
}

// ------------------------------------------------------------
// SOURCES SECTION (built from `sources` + `imageCredits`)
// ------------------------------------------------------------
function renderSources() {
  const wrap = $('sources-list');
  if (!wrap) return;
  const tag = era => {
    if (era === 'both') return '<span class="src-tag both">2000s + Today</span>';
    if (era === 'future') return '<span class="src-tag future">2030s+</span>';
    if (era === 'now') return '<span class="src-tag now">Today</span>';
    return '<span class="src-tag then">2000s</span>';
  };
  wrap.innerHTML = exhibits.map(ex => `
    <article class="src-card" style="--c:${esc(ex.color)}">
      <div class="src-body">
        <h4><span aria-hidden="true">${esc(ex.icon)}</span> ${esc(ex.wing)}</h4>
        ${(ex.sources && ex.sources.length)
          ? `<ol>${ex.sources.map(s => `<li>${tag(s.era)} ${srcLinkHtml(s)}${s.note ? `<small>${esc(s.note)}</small>` : ''}</li>`).join('')}</ol>`
          : '<p class="src-empty">No sources added yet.</p>'}
      </div>
    </article>`).join('');

  const credits = (typeof imageCredits !== 'undefined' && Array.isArray(imageCredits)) ? imageCredits : [];
  const box = $('credits-wrap');
  if (box && credits.length) {
    $('credits-list').innerHTML = credits.map(c =>
      `<li>${esc(c.item || '')}${c.credit ? ' — ' + esc(c.credit) : ''}${c.url ? ` (<a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">link</a>)` : ''}</li>`).join('');
    box.classList.remove('hidden');
  }
}

// ------------------------------------------------------------
// MUSEUM PASSPORT (a stamp for every room across all 3 eras = 18 stamps)
// ------------------------------------------------------------
const PASSPORT_KEY = 'ppc-passport-v1';
let passportResetArmed = false;

function loadPassport() {
  try {
    const raw = localStorage.getItem(PASSPORT_KEY);
    const d = raw && JSON.parse(raw);
    return (d && typeof d.stamps === 'object' && d.stamps) ? d.stamps : {};
  } catch (e) { return {}; }
}
let passportStamps = loadPassport();

function savePassport() {
  try { localStorage.setItem(PASSPORT_KEY, JSON.stringify({ stamps: passportStamps })); } catch (e) { /* ignore */ }
}
function hasStamp(id, era) { return !!passportStamps[id + ':' + era]; }
function passportTotal() { return exhibits.length * VALID_ERAS.length; }
function passportCount() {
  let n = 0;
  exhibits.forEach(ex => { VALID_ERAS.forEach(era => { if (hasStamp(ex.id, era)) n++; }); });
  return n;
}
function updatePassportBadge() {
  document.querySelectorAll('.pp-count').forEach(el => { el.textContent = passportCount() + '/' + passportTotal(); });
}

function stampVisit(id, era) {
  const eras = era === 'compare' ? VALID_ERAS : [era];
  const fresh = eras.filter(e => VALID_ERAS.includes(e) && !hasStamp(id, e));
  if (!fresh.length) return;
  const stamp = Date.now();
  fresh.forEach(e => { passportStamps[id + ':' + e] = stamp; });
  savePassport();
  updatePassportBadge();

  const ex = exhibits.find(x => x.id === id);
  const label = fresh.map(e => e === 'then' ? '2000s' : e === 'now' ? 'Today' : '2030s+').join(' + ');
  const n = passportCount(), total = passportTotal();
  showToast(`🛂 New stamp: ${ex ? ex.wing : id} • ${label} (${n}/${total})`);
  if (n === total) {
    setTimeout(() => { showToast('🏅 Museum complete! You collected all 18 stamps across every era.', 4500); burstConfetti(); }, 2000);
  }
  if (passportIsOpen()) renderPassport();
}

function renderPassport() {
  const total = passportTotal(), n = passportCount();
  const pct = total ? Math.round((n / total) * 100) : 0;
  const slot = (ex, i, era) => {
    const got = passportStamps[ex.id + ':' + era];
    const when = got ? new Date(got).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : '';
    const eraTitle = era === 'then' ? '2000s' : era === 'now' ? 'Today' : '2030s+';
    return `
      <button type="button" class="pp-stamp era-${era} ${got ? 'got' : ''}" onclick="passportGo(${i}, '${era}')"
              aria-label="${esc(ex.wing)}, ${eraTitle}: ${got ? 'stamp collected' : 'not visited yet'}">
        <span class="pp-ring">${got ? '✓' : '?'}</span>
        <small>${eraTitle}</small>
        ${got ? `<em>${esc(when)}</em>` : ''}
      </button>`;
  };
  $('passport-body').innerHTML = `
    <div class="pp-progress">
      <div class="pp-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${n}"><i style="width:${pct}%"></i></div>
      <b>${n} / ${total} stamps</b>
    </div>
    ${n === total
      ? `<div class="pp-complete">🏅 Museum complete! You explored every room across all three eras (2000s, Today, and 2030s+).</div>`
      : `<p class="pp-hint">Open each room in the <b>2000s</b>, <b>Today</b>, and <b>2030s+</b> tabs to collect all 18 stamps. The <b>Compare</b> tab awards all three at once. Tap a stamp to jump there.</p>`}
    <div class="pp-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,13.2rem),1fr));">
      ${exhibits.map((ex, i) => `
        <div class="pp-room" style="--c:${esc(ex.color)}">
          <div class="pp-room-head" onclick="passportGo(${i}, currentEra)" style="cursor:pointer" title="Enter ${esc(ex.wing)} room"><span>${esc(ex.icon)}</span><b>${esc(ex.wing)}</b></div>
          <div class="pp-stamps" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:0.4rem;">${slot(ex, i, 'then')}${slot(ex, i, 'now')}${slot(ex, i, 'future')}</div>
        </div>`).join('')}
    </div>
    <div class="pp-foot" style="flex-wrap:wrap;gap:0.5rem;">
      <div style="display:flex;align-items:center;gap:0.45rem;flex-wrap:wrap;">
        <button type="button" class="btn btn-pink btn-sm" onclick="closePassport()">🏛️ Explore Lobby →</button>
        <button type="button" id="pp-reset-btn" class="btn btn-sm" onclick="resetPassport()">${passportResetArmed ? 'Tap again to confirm reset' : 'Reset passport'}</button>
      </div>
      <span>Saved on this device only.</span>
    </div>`;
}

function openPassport(isAuto) {
  const modal = $('passport-modal');
  if (!modal) return;
  passportResetArmed = false;
  if (!passportIsOpen()) {
    lastFocus.pp = document.activeElement;
    if (!isAuto) enterLevel(1);
  }
  renderPassport();
  modal.classList.remove('hidden');
  lockScroll();
  focusPanel('passport-panel');
}
function hidePassport() {
  passportResetArmed = false;
  const modal = $('passport-modal');
  if (modal) modal.classList.add('hidden');
  unlockScrollIfIdle();
  restoreFocus('pp');
}
function closePassport() {
  if (historyOK && histLevel() >= 1) {
    leaveLevel(1, hidePassport);
  } else {
    hidePassport();
  }
}

function passportGo(i, era) { hidePassport(); openRoom(i, era); }

function resetPassport() {
  if (!passportResetArmed) {
    passportResetArmed = true;
    const btn = $('pp-reset-btn');
    if (btn) btn.textContent = 'Tap again to confirm reset';
    showToast('⚠️ Tap "Reset passport" again to clear all stamps.');
    return;
  }
  passportResetArmed = false;
  passportStamps = {};
  savePassport();
  updatePassportBadge();
  renderPassport();
  renderGallery();
  switchWing(currentTopic);
  showToast('🛂 Passport stamps cleared.');
}

// ---------- Toast + confetti ----------
let toastTimer = null;
function showToast(message, ms) {
  const t = $('toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), ms || 2800);
}

function burstConfetti() {
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const bits = ['🎉', '✨', '🏅', '⭐', '🎊', '💖', '🚀'];
  for (let i = 0; i < 28; i++) {
    const s = document.createElement('span');
    s.className = 'confetti';
    s.textContent = bits[i % bits.length];
    s.style.left = (Math.random() * 100) + 'vw';
    s.style.animationDelay = (Math.random() * 0.6) + 's';
    s.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3600);
  }
}

// ------------------------------------------------------------
// MUSEUM FLOOR MAP (2000s Wing | Today Wing | Future Wing + Grand Lobby)
// ------------------------------------------------------------
let mapHere = null;

function renderMap() {
  const doors = era => exhibits.map((ex, i) => {
    const got = hasStamp(ex.id, era);
    const here = mapHere && mapHere.id === ex.id && (mapHere.era === era || mapHere.era === 'compare');
    const wingLabel = era === 'then' ? '2000s' : era === 'now' ? 'Today' : '2030s+';
    return `
      <button type="button" class="door door-${era} ${got ? 'visited' : ''} ${here ? 'here' : ''}" style="--c:${esc(ex.color)}"
              onclick="mapEnter(${i}, '${era}')"
              aria-label="Enter the ${esc(ex.wing)} room, ${wingLabel} wing${got ? ' (visited)' : ''}${here ? ' (you are here)' : ''}">
        ${here ? '<span class="you-are-here">📍 You are here</span>' : ''}
        <span class="door-icon">${esc(ex.icon)}</span>
        <span class="door-name">${esc(ex.wing)}</span>
        ${got ? '<span class="door-check">✓</span>' : ''}
      </button>`;
  }).join('');

  $('map-body').innerHTML = `
    <div class="floor floor-three">
      <section class="floor-wing fw-then" aria-label="The 2000s Wing">
        <h4>🕹️ The 2000s Wing <small>2000–2010</small></h4>
        <div class="floor-rooms">${doors('then')}</div>
      </section>

      <section class="floor-wing fw-now" aria-label="The Today Wing">
        <h4>📱 The Today Wing <small>2020s</small></h4>
        <div class="floor-rooms">${doors('now')}</div>
      </section>

      <section class="floor-wing fw-future" aria-label="The Future Wing">
        <h4>🚀 The Future Wing <small>2030s Onwards</small></h4>
        <div class="floor-rooms">${doors('future')}</div>
      </section>

      <section class="floor-lobby ${mapHere ? '' : 'here'}" aria-label="Grand Lobby">
        ${mapHere ? '' : '<span class="you-are-here">📍 You are here</span>'}
        <div class="lobby-title">🏛️ Grand Lobby &amp; Interactive Relics</div>
        <div class="lobby-links">
          <button type="button" class="btn btn-sm" onclick="mapOpenPassport()">🛂 Passport (18 Stamps)</button>
          <button type="button" class="btn btn-sm" onclick="mapGo('then-now')">↔ Then vs. Now</button>
          <button type="button" class="btn btn-sm" onclick="mapGo('sms')">🕶️ Interactive Relics</button>
          <button type="button" class="btn btn-sm" onclick="mapGo('curators')">✨ Curators</button>
        </div>
      </section>
    </div>
    <p class="map-legend">✓ visited &nbsp;•&nbsp; 📍 you are here &nbsp;•&nbsp; tap any door across the 3 wings to walk in</p>`;
}

function openMap(here) {
  mapHere = (here && typeof here === 'object' && here.id) ? here : null;
  lastFocus.map = document.activeElement;
  enterLevel(1);
  renderMap();
  $('map-modal').classList.remove('hidden');
  lockScroll();
  focusPanel('map-panel');
}
function openMapFromRoom() {
  const here = { id: exhibits[currentRoom].id, era: roomEra };
  hideRoom();
  openMap(here);
}
function hideMap() {
  $('map-modal').classList.add('hidden');
  unlockScrollIfIdle();
  restoreFocus('map');
}
function closeMap() { leaveLevel(1, hideMap); }

function mapEnter(i, era) { hideMap(); openRoom(i, era); }
function mapOpenPassport() { hideMap(); openPassport(); }
function mapGo(sectionId) {
  closeMap();
  setTimeout(() => { const el = $(sectionId); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 160);
}

// ------------------------------------------------------------
// Start everything (supports both direct DOMContentLoaded and
// modular js/phases/loader.js bootMuseum() invocation)
// ------------------------------------------------------------
let swipeEventsBound = false;

function syncMobilePolishAndRelicHeadings() {
  // Ensure sheet headers in Passport & Map have horizontal clearance from the top-right close button on mobile
  document.querySelectorAll('.sheet-head').forEach(el => {
    el.style.paddingLeft = '2.2rem';
    el.style.paddingRight = '2.2rem';
  });
  // Sync Relic section heading & sub-caption with 2030 Holo-Saber & Metro Surfer
  const smsSec = $('sms');
  if (smsSec) {
    const fTitle = smsSec.querySelector('h3 .only-future');
    if (fTitle) fTitle.textContent = 'NeuroLink AR Visor • 2030 Relic';
    const nDesc = smsSec.querySelector('p .only-now');
    if (nDesc) nDesc.textContent = 'Step into a 5G smartphone: send a message to Besties GC, or dodge EDSA traffic in Metro Surfer!';
    const fDesc = smsSec.querySelector('p .only-future');
    if (fDesc) fDesc.textContent = 'Connect with your barkada on the 6G AI Hub, or slice neon beat-cubes in Holo-Saber: 2030 Beat!';
  }
}

function bootMuseum() {
  syncMobilePolishAndRelicHeadings();
  renderWingTabs();
  initGalleryEvents();
  applyEra(currentEra);
  // Initialize best-score badges without triggering AudioContext before first user gesture
  if ($('modern-game-best') && typeof modernGameBest !== 'undefined') {
    $('modern-game-best').textContent = String(modernGameBest);
  }
  if ($('future-game-best') && typeof futureGameBest !== 'undefined') {
    $('future-game-best').textContent = String(futureGameBest);
  }
  updatePassportBadge();
  renderCurators();
  renderSources();
  initBeforeAfter();
  renderStationTabs();
  if (!swipeEventsBound) {
    swipeEventsBound = true;
    addSwipe($('room-content'), nextRoom, prevRoom);
    addSwipe($('lightbox'), () => lightboxStep(1), () => lightboxStep(-1));
    addSwipe($('fs-window'), nextProfile, prevProfile);
  }
  if (typeof smsDefault !== 'undefined' && $('sms-input') && typeof updateSmsDisplay === 'function') {
    $('sms-input').value = '';
    updateSmsDisplay(smsDefault);
  }
  openRoomFromHash();
}

window.bootMuseum = bootMuseum;

document.addEventListener('DOMContentLoaded', () => {
  bootMuseum();
});
