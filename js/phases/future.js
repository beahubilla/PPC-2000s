// ============================================================
// PHASE 3: FUTURE INTERACTIVE LOGIC (2030s+ HOLOGRAPHIC HORIZON)
// ------------------------------------------------------------
// Controls the 2035 NeuroLink AR Visor Holo-Link spatial chat
// (with automated AI co-pilot replies) and Quantum Sync mini-game.
// HTML markup for this phase is in: phases/future.html
// ============================================================
window.PHASE_TEMPLATES = window.PHASE_TEMPLATES || {};
window.PHASE_TEMPLATES.future = {
  hero: "<figure class=\"hero-spotlight hero-spotlight-future only-future\">\n        <img src=\"./images/future-wing-hero.jpg\" alt=\"A futuristic 2030s obsidian museum hall with glowing cyan and magenta holographic projections of Manila, a flying jeepney, and an AR neural visor\" fetchpriority=\"high\">\n        <div class=\"hero-image-shade\" aria-hidden=\"true\"></div>\n        <figcaption>\n          <span class=\"hero-overline\">FUTURE WING &nbsp; / &nbsp; 2030s+ HOLOGRAPHIC HORIZON</span>\n          <h2 class=\"hero-title\">Where heritage meets<br><em>holographic light.</em></h2>\n          <p>Step into the 2030s onwards: spatial telepresence for OFW families, volumetric P-Pop domes, full-body cyber-athletics, and AI-resilient smart cities.</p>\n          <div class=\"hero-actions\">\n            <button type=\"button\" onclick=\"openRoom(0)\" class=\"btn btn-pink\">Enter neural archive <span aria-hidden=\"true\">\u2197</span></button>\n            <a href=\"#exhibits\" class=\"btn\">Browse exhibits <span aria-hidden=\"true\">\u2193</span></a>\n            <button type=\"button\" onclick=\"openMap()\" class=\"btn\">\ud83d\uddfa\ufe0f Floor map</button>\n          </div>\n        </figcaption>\n        <span class=\"hero-index\" aria-hidden=\"true\">2030s+ &nbsp;\u2022&nbsp; HOLO-ARCHIVE 01\u201406</span>\n      </figure>",
  relic: "<!-- Future Mode Switcher -->\n      <div class=\"future-mode-switch only-future\" role=\"group\" aria-label=\"Choose AR visor module\">\n        <button type=\"button\" id=\"future-mode-holo-btn\" class=\"future-mode-btn active\" aria-pressed=\"true\" onclick=\"setFutureMode('holo')\">\ud83e\udee7 Holo-Link</button>\n        <button type=\"button\" id=\"future-mode-game-btn\" class=\"future-mode-btn\" aria-pressed=\"false\" onclick=\"setFutureMode('game')\">\u26a1 Quantum Sync</button>\n      </div>\n\n      <!-- DEVICE 3: 2035 NeuroLink AR Visor (Future / 2030s+) -->\n      <div class=\"holovisor-device only-future\">\n        <div class=\"holovisor-frame\">\n          <div class=\"holovisor-bridge\" aria-hidden=\"true\"></div>\n          <div class=\"holovisor-hud\">\n            <div class=\"holovisor-status\">\n              <span>MNL-2035 \u00b7 21:40 PST</span>\n              <span class=\"holovisor-signal\">6G QUANTUM \u00b7 SYNC 99% \u25c8</span>\n            </div>\n\n            <!-- VIEW 1: HOLO-LINK SPATIAL CHAT -->\n            <div id=\"future-holo-view\" class=\"holovisor-app-view is-active\">\n              <div class=\"future-chat-header\">\n                <span class=\"future-avatar\" aria-hidden=\"true\">\ud83c\udf0c</span>\n                <div>\n                  <strong>Barkada Holo-Node 07</strong>\n                  <span>4 volumetric avatars linked \u00b7 Auto-Dialect AI ON</span>\n                </div>\n                <span class=\"future-live-pill\">LIVE 3D</span>\n              </div>\n              <div class=\"future-chat-feed\" id=\"future-holo-feed\" aria-live=\"polite\" aria-label=\"Holographic transmissions\">\n                <div class=\"future-chat-date\">SPATIAL LOG \u00b7 2035.10.22</div>\n                <div class=\"future-msg future-msg-in\">\n                  <span class=\"future-msg-meta\">Bea \u00b7 [AR Lens \u00b7 Marikina SkyHub]</span>\n                  Uy! Kita-kits sa holographic P-Pop dome mamaya? Naka-sync na biometric lightstick ko!\n                </div>\n                <div class=\"future-msg future-msg-in\">\n                  <span class=\"future-msg-meta\">Benz \u00b7 [VR Rig 04 \u00b7 Manila Cyber-Arena]</span>\n                  G! Katatapos lang ng full-body VR scrimmage namin. Send ko 3D replay node sa table niyo.\n                </div>\n                <div class=\"future-msg future-msg-ai\">\n                  <span class=\"future-msg-meta\">TALA-9 \u00b7 [Civic &amp; Weather AI Co-Pilot]</span>\n                  Watershed Digital Twin Advisory: Clear skies across Metro Manila (0% flood risk). Drone transit corridors optimal.\n                </div>\n                <div class=\"future-msg future-msg-out\">\n                  Deploying my holo-avatar in 5 mins! Save a floating pod for me \ud83c\udf0c\n                </div>\n                <span class=\"future-typing\" id=\"future-typing-indicator\"><i></i><i></i><i></i> Neural link active \u00b7 Ready to transmit</span>\n              </div>\n              <form class=\"future-composer\" onsubmit=\"futureSendMessage(event)\">\n                <label class=\"sr-only\" for=\"future-message-input\">Transmit holographic message</label>\n                <input id=\"future-message-input\" type=\"text\" maxlength=\"220\" autocomplete=\"off\" placeholder=\"Transmit thought or holo-message\u2026\">\n                <button type=\"submit\" aria-label=\"Transmit message\" title=\"Transmit message\">\u26a1</button>\n              </form>\n            </div>\n\n            <!-- VIEW 2: QUANTUM SYNC NEURAL MINI-GAME -->\n            <div id=\"future-game-view\" class=\"holovisor-app-view future-game-view\" hidden>\n              <div class=\"future-game-header\">\n                <span>NEURAL REFLEX LAB</span>\n                <span>QUANTUM SYNC v3.5</span>\n              </div>\n              <div class=\"future-game-scorebar\">\n                <span>SCORE <strong id=\"future-game-score\">000</strong></span>\n                <span>COMBO <strong id=\"future-game-combo\">x1</strong></span>\n                <span>TIME <strong id=\"future-game-time\">20</strong>s</span>\n              </div>\n              <div class=\"future-game-arena\" id=\"future-game-arena\">\n                <div class=\"future-grid-lines\" aria-hidden=\"true\"></div>\n                <button type=\"button\" id=\"future-game-target\" class=\"future-game-target\" aria-label=\"Stabilize quantum node\" onclick=\"futureGameTap('normal')\" hidden>\n                  <span class=\"node-ring\"></span>\n                  <span class=\"node-core\">\u25c8</span>\n                </button>\n                <button type=\"button\" id=\"future-game-bonus\" class=\"future-game-bonus\" aria-label=\"Capture golden overclock node\" onclick=\"futureGameTap('bonus')\" hidden>\n                  <span class=\"node-core\">\u2605</span>\n                </button>\n                <div id=\"future-game-overlay\" class=\"future-game-overlay\">\n                  <span class=\"future-game-emblem\" aria-hidden=\"true\">\u25c8</span>\n                  <strong id=\"future-game-message\">Quantum Sync</strong>\n                  <p id=\"future-game-instructions\">Stabilize glowing quantum nodes before phase decay. Chain rapid hits to multiply your neural sync score!</p>\n                  <button type=\"button\" id=\"future-game-start\" onclick=\"startFutureGame()\">Initialize 20s Run \u26a1</button>\n                </div>\n              </div>\n              <div class=\"future-game-foot\">\n                <span>Tap cyan nodes (+10\u00d7combo) &amp; gold cores (+35)</span>\n                <span>BEST <strong id=\"future-game-best\">0</strong></span>\n              </div>\n            </div>\n\n            <div class=\"holovisor-home-bar\" aria-hidden=\"true\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Future AR Visor Shortcuts -->\n      <div class=\"future-shortcuts mt-5 max-w-md mx-auto only-future\">\n        <span class=\"future-shortcuts-label\">Transmit a quick neural preset</span>\n        <div class=\"future-preset-list\">\n          <button type=\"button\" onclick=\"futureUsePreset('Beam your 3D holo-avatar to our Sunday family table! \ud83e\udee7')\">\ud83e\udee7 OFW Holo-Dinner</button>\n          <button type=\"button\" onclick=\"futureUsePreset('Syncing my biometric lightstick to the P-Pop dome! \ud83e\ude84')\">\ud83e\ude84 Sync Lightstick</button>\n          <button type=\"button\" onclick=\"futureUsePreset('Hop into the full-body VR arena for one round! \ud83e\udd7d')\">\ud83e\udd7d VR Arena Scrim</button>\n          <button type=\"button\" onclick=\"futureUsePreset('TALA-9, run Marikina River digital twin forecast \ud83d\udef0\ufe0f')\">\ud83d\udef0\ufe0f Check Weather Twin</button>\n        </div>\n      </div>"
};

// ------------------------------------------------------------
// FUTURE 2035 NEUROLINK AR VISOR: HOLO-LINK & QUANTUM SYNC
// ------------------------------------------------------------
let futureGameInterval = null;
let futureBonusTimeout = null;
let futureReplyIndex = 0;
let futureGameScore = 0;
let futureGameCombo = 1;
let futureLastTapTime = 0;
let futureGameBest = 0;

try {
  futureGameBest = Number(localStorage.getItem('ppc-future-game-best') || 0);
} catch (e) {
  futureGameBest = 0;
}

function setFutureMode(mode) {
  if (mode !== 'holo' && mode !== 'game') return;
  const isGame = mode === 'game';
  const holoView = $('future-holo-view');
  const gameView = $('future-game-view');
  const holoBtn = $('future-mode-holo-btn');
  const gameBtn = $('future-mode-game-btn');
  if (!holoView || !gameView) return;

  holoView.hidden = isGame;
  gameView.hidden = !isGame;
  holoView.classList.toggle('is-active', !isGame);
  gameView.classList.toggle('is-active', isGame);
  holoBtn?.classList.toggle('active', !isGame);
  gameBtn?.classList.toggle('active', isGame);
  holoBtn?.setAttribute('aria-pressed', String(!isGame));
  gameBtn?.setAttribute('aria-pressed', String(isGame));
  if ($('future-game-best')) $('future-game-best').textContent = String(futureGameBest);
  if (!isGame) {
    stopFutureGame();
    $('future-game-score').textContent = '000';
    $('future-game-combo').textContent = 'x1';
    $('future-game-time').textContent = '20';
    $('future-game-message').textContent = 'Quantum Sync';
    $('future-game-instructions').textContent = 'Stabilize glowing quantum nodes before phase decay. Chain rapid hits to multiply your neural sync score!';
    $('future-game-start').textContent = 'Initialize 20s Run ⚡';
  }
  playNokiaTone(isGame ? 1120 : 880, 0.06, 'sine');
}

function appendFutureMessage(text, isIncoming = false, sender = '') {
  const feed = $('future-holo-feed');
  if (!feed) return;
  const msg = document.createElement('div');
  msg.className = isIncoming ? 'future-msg future-msg-in' : 'future-msg future-msg-out';
  if (isIncoming && sender) {
    const meta = document.createElement('span');
    meta.className = 'future-msg-meta';
    meta.textContent = sender;
    msg.appendChild(meta);
    msg.appendChild(document.createTextNode(text));
  } else {
    msg.textContent = text;
  }
  const typing = $('future-typing-indicator');
  feed.insertBefore(msg, typing || null);
  feed.scrollTop = feed.scrollHeight;
}

function triggerFutureAutoReply() {
  if (typeof futureAutoReplies === 'undefined' || !futureAutoReplies.length) return;
  const typing = $('future-typing-indicator');
  if (typing) typing.innerHTML = '<i></i><i></i><i></i> Incoming holographic projection…';
  setTimeout(() => {
    const reply = futureAutoReplies[futureReplyIndex % futureAutoReplies.length];
    futureReplyIndex += 1;
    appendFutureMessage(reply.text, true, reply.sender);
    playNokiaTone(1040, 0.05, 'sine');
    if (typing) typing.innerHTML = '<i></i><i></i><i></i> Neural link active · Ready to transmit';
  }, 650);
}

function futureSendMessage(event) {
  event.preventDefault();
  const input = $('future-message-input');
  const text = input?.value.trim();
  if (!text) return;
  playNokiaTone(1320, 0.05, 'sine');
  appendFutureMessage(text, false);
  input.value = '';
  input.focus();
  triggerFutureAutoReply();
}

function futureUsePreset(text) {
  setFutureMode('holo');
  playNokiaTone(1320, 0.05, 'sine');
  appendFutureMessage(text, false);
  triggerFutureAutoReply();
}

function moveFutureGameNode(el) {
  if (!el) return;
  el.style.left = `${16 + Math.random() * 68}%`;
  el.style.top = `${18 + Math.random() * 64}%`;
}

function spawnFutureBonusNode() {
  const bonus = $('future-game-bonus');
  if (!bonus || !futureGameInterval) return;
  moveFutureGameNode(bonus);
  bonus.hidden = false;
  clearTimeout(futureBonusTimeout);
  futureBonusTimeout = setTimeout(() => {
    if (bonus) bonus.hidden = true;
  }, 2400);
}

function startFutureGame() {
  stopFutureGame();
  futureGameScore = 0;
  futureGameCombo = 1;
  futureLastTapTime = performance.now();
  $('future-game-score').textContent = '000';
  $('future-game-combo').textContent = 'x1';
  $('future-game-time').textContent = '20';
  $('future-game-overlay').hidden = true;

  const target = $('future-game-target');
  if (target) {
    target.hidden = false;
    moveFutureGameNode(target);
  }
  playNokiaTone(980, 0.07, 'sine');

  let secondsLeft = 20;
  futureGameInterval = setInterval(() => {
    secondsLeft -= 1;
    $('future-game-time').textContent = String(secondsLeft).padStart(2, '0');
    if (secondsLeft % 4 === 0 && secondsLeft > 0) spawnFutureBonusNode();
    if (secondsLeft <= 0) finishFutureGame();
  }, 1000);
}

function futureGameTap(kind) {
  if (!futureGameInterval) return;
  const now = performance.now();
  if (now - futureLastTapTime < 1100) {
    futureGameCombo = Math.min(5, futureGameCombo + 1);
  } else {
    futureGameCombo = 1;
  }
  futureLastTapTime = now;

  if (kind === 'bonus') {
    futureGameScore += 35;
    playNokiaTone(1560, 0.08, 'triangle');
    const bonus = $('future-game-bonus');
    if (bonus) bonus.hidden = true;
  } else {
    futureGameScore += 10 * futureGameCombo;
    playNokiaTone(880 + futureGameCombo * 110, 0.05, 'sine');
    moveFutureGameNode($('future-game-target'));
  }

  $('future-game-score').textContent = String(futureGameScore).padStart(3, '0');
  $('future-game-combo').textContent = 'x' + futureGameCombo;

  if (futureGameScore > futureGameBest) {
    futureGameBest = futureGameScore;
    try { localStorage.setItem('ppc-future-game-best', String(futureGameBest)); } catch (e) {}
    if ($('future-game-best')) $('future-game-best').textContent = String(futureGameBest);
  }
}

function finishFutureGame() {
  stopFutureGame();
  playNokiaTone(660, 0.12, 'sine');
  $('future-game-message').textContent = 'Neural Sync Complete!';
  $('future-game-instructions').textContent = `Final Quantum Score: ${futureGameScore} pts (Best: ${futureGameBest}). Recalibrate for another run?`;
  $('future-game-start').textContent = 'Re-initialize Run ⚡';
  $('future-game-overlay').hidden = false;
}

function stopFutureGame() {
  if (futureGameInterval) clearInterval(futureGameInterval);
  if (futureBonusTimeout) clearTimeout(futureBonusTimeout);
  futureGameInterval = null;
  futureBonusTimeout = null;
  const target = $('future-game-target');
  const bonus = $('future-game-bonus');
  const overlay = $('future-game-overlay');
  if (target) target.hidden = true;
  if (bonus) bonus.hidden = true;
  if (overlay) overlay.hidden = false;
}


