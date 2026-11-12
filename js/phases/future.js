// ============================================================
// PHASE 3: FUTURE INTERACTIVE LOGIC (2030s+ HOLOGRAPHIC HORIZON)
// ------------------------------------------------------------
// Controls the 2030 6G Holo-Link Hub (with context-aware AI &
// barkada replies + neural sync badges) and HOLO-SABER 2030
// (a Beat Saber-style 3D neon rhythm slasher with procedural
// synthwave music, directional beat cubes, saber slash trails,
// particle bursts, x8 Overdrive combos & high-score saving).
// ============================================================
window.$ = window.$ || (id => document.getElementById(id));
window.PHASE_TEMPLATES = window.PHASE_TEMPLATES || {};
window.PHASE_TEMPLATES.future = {
  hero: "<figure class=\"hero-spotlight hero-spotlight-future only-future\">\n        <img src=\"./images/future-wing-hero.jpg\" alt=\"A futuristic 2030s museum hall with glowing holographic projections of Manila and AI interfaces\" loading=\"lazy\" decoding=\"async\">\n        <div class=\"hero-image-shade\" aria-hidden=\"true\"></div>\n        <figcaption>\n          <span class=\"hero-overline\">FUTURE WING &nbsp; / &nbsp; 2030 HORIZON</span>\n          <h2 class=\"hero-title\">Where heritage meets<br><em>holographic light.</em></h2>\n          <p>6G AI-assisted communication, digital banking, AI fact-checking, virtual concerts, and satellite weather forecasting.</p>\n          <div class=\"hero-actions\">\n            <button type=\"button\" onclick=\"openRoom(0)\" class=\"btn btn-pink\">Enter 2030 archive <span aria-hidden=\"true\">\u2197</span></button>\n            <a href=\"#exhibits\" class=\"btn\">Browse exhibits <span aria-hidden=\"true\">\u2193</span></a>\n            <button type=\"button\" onclick=\"openMap()\" class=\"btn\">\ud83d\uddfa\ufe0f Floor map</button>\n          </div>\n        </figcaption>\n        <span class=\"hero-index\" aria-hidden=\"true\">2030s+ &nbsp;\u2022&nbsp; HOLO-ARCHIVE 01\u201406</span>\n      </figure>",
  relic: "<!-- Future Mode Switcher -->\n      <div class=\"future-mode-switch only-future\" role=\"group\" aria-label=\"Choose AR visor module\">\n        <button type=\"button\" id=\"future-mode-holo-btn\" class=\"future-mode-btn active\" aria-pressed=\"true\" onclick=\"setFutureMode('holo')\">\ud83e\udee7 6G Holo-Link</button>\n        <button type=\"button\" id=\"future-mode-game-btn\" class=\"future-mode-btn\" aria-pressed=\"false\" onclick=\"setFutureMode('game')\">\u2694\ufe0f Holo-Saber</button>\n      </div>\n\n      <!-- DEVICE 3: 2035 NeuroLink AR Visor (Future / 2030s+) -->\n      <div class=\"holovisor-device only-future\">\n        <div class=\"holovisor-frame\">\n          <div class=\"holovisor-bridge\" aria-hidden=\"true\"></div>\n          <div class=\"holovisor-hud\">\n            <div class=\"holovisor-status\">\n              <span>MNL-2030 \u00b7 21:40 PST</span>\n              <span class=\"holovisor-signal\" id=\"future-hud-signal\">6G AI-NET \u00b7 SYNC 99% \u25c8</span>\n            </div>\n\n            <!-- VIEW 1: HOLO-LINK SPATIAL CHAT -->\n            <div id=\"future-holo-view\" class=\"holovisor-app-view is-active\">\n              <div class=\"future-chat-header\">\n                <span class=\"future-avatar\" aria-hidden=\"true\">\ud83c\udf0c</span>\n                <div>\n                  <strong>Barkada 6G Hub</strong>\n                  <span>Tap any transmission to neural-sync \u26a1 \u00b7 AI Assistant ON</span>\n                </div>\n                <span class=\"future-live-pill\">6G LIVE</span>\n              </div>\n              <div class=\"future-chat-feed\" id=\"future-holo-feed\" aria-live=\"polite\" aria-label=\"Holographic transmissions\">\n                <div class=\"future-chat-date\">2030 AI NETWORK LOG</div>\n                <div class=\"future-msg future-msg-in\" onclick=\"toggleFutureReaction(this)\">\n                  <span class=\"future-msg-meta\">Bea \u00b7 [6G Smart Hub \u00b7 Marikina]</span>\n                  Uy! Naka-connect na OFW family virtual call natin habang nanonood ng interactive virtual P-Pop concert!\n                </div>\n                <div class=\"future-msg future-msg-in\" onclick=\"toggleFutureReaction(this)\">\n                  <span class=\"future-msg-meta\">Benz \u00b7 [Global Sports Virtual Hub]</span>\n                  G! Try niyo rin yung bagong Holo-Saber rhythm beat stage sa AR visor!\n                </div>\n                <div class=\"future-msg future-msg-ai\" onclick=\"toggleFutureReaction(this)\">\n                  <span class=\"future-msg-meta\">TALA-2030 \u00b7 [AI Weather &amp; Civic Co-Pilot]</span>\n                  AI Satellite Weather Advisory: Clear skies across Metro Manila. AI fact-checking &amp; digital public services active.\n                </div>\n                <div class=\"future-msg future-msg-out\" onclick=\"toggleFutureReaction(this)\">\n                  Joining the 6G virtual stream now! Save a slot for me \ud83c\udf0c\n                </div>\n                <span class=\"future-typing\" id=\"future-typing-indicator\"><i></i><i></i><i></i> 6G AI Assistant ready \u00b7 Transmit a prompt</span>\n              </div>\n              <form class=\"future-composer\" onsubmit=\"futureSendMessage(event)\">\n                <label class=\"sr-only\" for=\"future-message-input\">Transmit holographic message</label>\n                <input id=\"future-message-input\" type=\"text\" maxlength=\"220\" autocomplete=\"off\" placeholder=\"Ask AI or message the 6G hub\u2026\">\n                <button type=\"submit\" aria-label=\"Transmit message\" title=\"Transmit message\">\u26a1</button>\n              </form>\n            </div>\n\n            <!-- VIEW 2: HOLO-SABER FUTURISTIC RHYTHM SLASHER -->\n            <div id=\"future-game-view\" class=\"holovisor-app-view future-game-view\" hidden>\n              <div class=\"future-game-header\">\n                <span>NEURAL RHYTHM ARENA</span>\n                <span>HOLO-SABER 2030</span>\n              </div>\n              <div class=\"future-game-scorebar\">\n                <span>SCORE <strong id=\"future-game-score\">000</strong></span>\n                <span>COMBO <strong id=\"future-game-combo\">x1</strong></span>\n                <span>TIME <strong id=\"future-game-time\">30</strong>s</span>\n              </div>\n              <div class=\"future-game-arena\" id=\"future-game-arena\">\n                <canvas id=\"future-saber-canvas\" width=\"340\" height=\"360\" style=\"position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;\"></canvas>\n                <!-- On-screen Beat Saber Lane Slasher Controls -->\n                <div id=\"future-saber-controls\" style=\"position:absolute;left:0;right:0;bottom:0.5rem;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:0.45rem;padding:0 0.65rem;pointer-events:none;\">\n                  <button type=\"button\" onpointerdown=\"futureSaberSlash(0)\" aria-label=\"Slash Left Cyan Lane\" style=\"pointer-events:auto;height:2.4rem;border-radius:0.75rem;border:1.5px solid #00f2fe;background:rgba(0,242,254,0.18);color:#e0faff;font-weight:800;font-size:0.68rem;letter-spacing:0.05em;box-shadow:0 0 14px rgba(0,242,254,0.35);backdrop-filter:blur(4px);cursor:pointer;\">\u2694\ufe0f LEFT (A/\u25c0)</button>\n                  <button type=\"button\" onpointerdown=\"futureSaberSlash(1)\" aria-label=\"Slash Center Violet Lane\" style=\"pointer-events:auto;height:2.4rem;border-radius:0.75rem;border:1.5px solid #c084fc;background:rgba(192,132,252,0.2);color:#f3e8ff;font-weight:800;font-size:0.68rem;letter-spacing:0.05em;box-shadow:0 0 14px rgba(192,132,252,0.35);backdrop-filter:blur(4px);cursor:pointer;\">\u2694\ufe0f MID (S/\u25b2)</button>\n                  <button type=\"button\" onpointerdown=\"futureSaberSlash(2)\" aria-label=\"Slash Right Magenta Lane\" style=\"pointer-events:auto;height:2.4rem;border-radius:0.75rem;border:1.5px solid #f472b6;background:rgba(244,114,182,0.2);color:#fce7f3;font-weight:800;font-size:0.68rem;letter-spacing:0.05em;box-shadow:0 0 14px rgba(244,114,182,0.35);backdrop-filter:blur(4px);cursor:pointer;\">\u2694\ufe0f RIGHT (D/\u25b6)</button>\n                </div>\n                <div id=\"future-game-overlay\" class=\"future-game-overlay\">\n                  <span class=\"future-game-emblem\" aria-hidden=\"true\">\u2694\ufe0f</span>\n                  <strong id=\"future-game-message\">Holo-Saber: 2030 Beat</strong>\n                  <p id=\"future-game-instructions\">Slice glowing neon beat-cubes as they cross the saber rings! Tap/swipe the 3 lanes or press \u25c0 \u25b2 \u25b6 (A / S / D) in rhythm to build your x8 Overdrive combo.</p>\n                  <button type=\"button\" id=\"future-game-start\" onclick=\"startFutureGame()\">Start 30s Rhythm Track \u26a1</button>\n                </div>\n              </div>\n              <div class=\"future-game-foot\">\n                <span>Slice on the ring: PERFECT (+20\u00d7combo) \u00b7 \u2605 (+50)</span>\n                <span>BEST \ud83c\udfc6 <strong id=\"future-game-best\">0</strong></span>\n              </div>\n            </div>\n\n            <div class=\"holovisor-home-bar\" aria-hidden=\"true\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Future AR Visor Shortcuts -->\n      <div class=\"future-shortcuts mt-5 max-w-md mx-auto only-future\">\n        <span class=\"future-shortcuts-label\">Transmit a 2030 preset (triggers smart AI &amp; barkada reply)</span>\n        <div class=\"future-preset-list\">\n          <button type=\"button\" onclick=\"futureUsePreset('Connecting our OFW family call on 6G with AI live translation! \ud83c\udf10')\">\ud83c\udf10 6G OFW Family Call</button>\n          <button type=\"button\" onclick=\"futureUsePreset('Joining the interactive virtual P-Pop concert &amp; creator livestream! \ud83c\udfb6')\">\ud83c\udfb6 Virtual Concert</button>\n          <button type=\"button\" onclick=\"futureUsePreset('Watching our Filipino athletes live in the international league virtual hub! \ud83c\udfc6')\">\ud83c\udfc6 Global Sports Hub</button>\n          <button type=\"button\" onclick=\"futureUsePreset('Run AI weather forecast, satellite storm tracker &amp; AI fact-check! \ud83d\udef0\ufe0f')\">\ud83d\udef0\ufe0f AI Weather &amp; Civic Check</button>\n        </div>\n      </div>"
};

let futureReplyIndex = 0;
let futureGameBest = 0;

try {
  futureGameBest = Number(localStorage.getItem("ppc-future-game-best") || 0);
} catch (e) {
  futureGameBest = 0;
}

function playFutureTone(freq = 880, duration = 0.06, type = "sine", vol = 0.045) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!window._futureAudioCtx) window._futureAudioCtx = new AudioCtx();
    const ctx = window._futureAudioCtx;
    if (ctx.state === "suspended") ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function setFutureMode(mode) {
  if (mode !== "holo" && mode !== "game") return;
  const isGame = mode === "game";
  const holoView = $("future-holo-view");
  const gameView = $("future-game-view");
  const holoBtn = $("future-mode-holo-btn");
  const gameBtn = $("future-mode-game-btn");
  if (!holoView || !gameView) return;

  holoView.hidden = isGame;
  gameView.hidden = !isGame;
  holoView.classList.toggle("is-active", !isGame);
  gameView.classList.toggle("is-active", isGame);
  holoBtn?.classList.toggle("active", !isGame);
  gameBtn?.classList.toggle("active", isGame);
  holoBtn?.setAttribute("aria-pressed", String(!isGame));
  gameBtn?.setAttribute("aria-pressed", String(isGame));
  if ($("future-game-best")) $("future-game-best").textContent = String(futureGameBest);

  if (isGame) {
    ensureFutureSaberDom();
    initFutureSaberCanvas();
    drawFutureSaberScene();
  } else {
    stopFutureGame();
  }
  playFutureTone(isGame ? 1120 : 880, 0.06, "sine");
}

function toggleFutureReaction(msgEl) {
  if (!msgEl) return;
  let badge = msgEl.querySelector(".msg-react-badge");
  if (!badge) {
    badge = document.createElement("span");
    badge.className = "msg-react-badge";
    badge.textContent = "⚡ Synced";
    msgEl.appendChild(badge);
  } else {
    badge.remove();
  }
  playFutureTone(1360, 0.04, "sine");
}

function appendFutureMessage(text, isIncoming = false, sender = "") {
  const feed = $("future-holo-feed");
  if (!feed) return;
  const msg = document.createElement("div");
  msg.className = isIncoming ? "future-msg future-msg-in" : "future-msg future-msg-out";
  msg.onclick = function () { toggleFutureReaction(this); };
  if (isIncoming && sender) {
    const meta = document.createElement("span");
    meta.className = "future-msg-meta";
    meta.textContent = sender;
    msg.appendChild(meta);
    msg.appendChild(document.createTextNode(text));
  } else {
    msg.textContent = text;
  }
  const typing = $("future-typing-indicator");
  feed.insertBefore(msg, typing || null);
  feed.scrollTop = feed.scrollHeight;
}

function pickFutureSmartReply(promptText) {
  const q = String(promptText || "").toLowerCase();
  const list = (typeof futureAutoReplies !== "undefined" && futureAutoReplies.length) ? futureAutoReplies : [];
  if (q.includes("weather") || q.includes("satellite") || q.includes("fact")) {
    return list[3] || { sender: "TALA-2030 · AI Co-Pilot", text: "AI weather forecasting & satellite monitoring active: 0% flood risk." };
  }
  if (q.includes("concert") || q.includes("p-pop") || q.includes("music")) {
    return list[2] || { sender: "Ingrid · Creator Studio", text: "Virtual P-Pop concert livestream synced across 6G!" };
  }
  if (q.includes("sport") || q.includes("athlete") || q.includes("league")) {
    return list[1] || { sender: "Benz · Global Sports Feed", text: "International tournament livestream active in our virtual fan hub!" };
  }
  if (q.includes("ofw") || q.includes("family") || q.includes("6g")) {
    return list[0] || { sender: "Bea · 6G AI Hub", text: "6G OFW family virtual call connected with real-time AI translation!" };
  }
  const reply = list[futureReplyIndex % (list.length || 1)] || { sender: "Bea · 6G AI Hub", text: "Synced on 6G! Try beating my Holo-Saber rhythm score ⚔️" };
  futureReplyIndex += 1;
  return reply;
}

function triggerFutureAutoReply(promptText) {
  const typing = $("future-typing-indicator");
  if (typing) typing.innerHTML = "<i></i><i></i><i></i> Incoming 6G neural transmission…";
  setTimeout(() => {
    const reply = pickFutureSmartReply(promptText);
    if (reply) appendFutureMessage(reply.text, true, reply.sender);
    playFutureTone(1040, 0.05, "sine");
    if (typing) typing.innerHTML = "<i></i><i></i><i></i> 6G AI Assistant ready · Tap any message to sync ⚡";
  }, 600);
}

function futureSendMessage(event) {
  event.preventDefault();
  const input = $("future-message-input");
  const text = input?.value.trim();
  if (!text) return;
  playFutureTone(1320, 0.05, "sine");
  appendFutureMessage(text, false);
  input.value = "";
  input.focus();
  triggerFutureAutoReply(text);
}

function futureUsePreset(text) {
  setFutureMode("holo");
  playFutureTone(1320, 0.05, "sine");
  appendFutureMessage(text, false);
  triggerFutureAutoReply(text);
}

// ============================================================
// HOLO-SABER: 2030 RHYTHM SLASHER (Beat Saber-style 3D Engine)
// ============================================================
let futureSaberRaf = null;
let futureSaberTimer = null;
let futureSaberRunning = false;
let futureSaberCanvas = null;
let futureSaberCtx = null;
let futureSaberBound = false;
let futureGameScore = 0;
let futureGameCombo = 1;
let futureSecondsLeft = 30;

const SABER_MELODY = [523.25, 622.25, 698.46, 783.99, 932.33, 1046.50, 932.33, 783.99];
const LANE_COLORS = ["#00f2fe", "#c084fc", "#f472b6"];
const LANE_ARROWS = ["◀", "▲", "▶"];

let saberState = {
  trackOffset: 0,
  beatStep: 0,
  spawnCounter: 0,
  eqBars: [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.75, 0.55, 0.85, 0.45, 0.65],
  cubes: [],
  slashes: [],
  particles: [],
  judgeText: "",
  judgeColor: "#00f2fe",
  judgeTimer: 0
};

function drawRoundedBox(ctx, x, y, w, h, r) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.lineTo(x + w - rad, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
  ctx.lineTo(x + w, y + h - rad);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
  ctx.lineTo(x + rad, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
  ctx.lineTo(x, y + rad);
  ctx.quadraticCurveTo(x, y, x + rad, y);
  ctx.closePath();
}

// Self-healing DOM check in case phases/future.html was cached
function ensureFutureSaberDom() {
  const arena = $("future-game-arena");
  if (!arena) return;
  if (!$("future-saber-canvas")) {
    const oldTarget = $("future-game-target");
    const oldBonus = $("future-game-bonus");
    const oldGrid = arena.querySelector(".future-grid-lines");
    if (oldTarget) oldTarget.remove();
    if (oldBonus) oldBonus.remove();
    if (oldGrid) oldGrid.remove();

    const cvs = document.createElement("canvas");
    cvs.id = "future-saber-canvas";
    cvs.width = 340;
    cvs.height = 360;
    cvs.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;";
    arena.insertBefore(cvs, arena.firstChild);

    if (!$("future-saber-controls")) {
      const ctrl = document.createElement("div");
      ctrl.id = "future-saber-controls";
      ctrl.style.cssText = "position:absolute;left:0;right:0;bottom:0.5rem;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:0.45rem;padding:0 0.65rem;pointer-events:none;";
      ctrl.innerHTML = `
        <button type="button" onpointerdown="futureSaberSlash(0)" style="pointer-events:auto;height:2.4rem;border-radius:0.75rem;border:1.5px solid #00f2fe;background:rgba(0,242,254,0.18);color:#e0faff;font-weight:800;font-size:0.68rem;letter-spacing:0.05em;box-shadow:0 0 14px rgba(0,242,254,0.35);backdrop-filter:blur(4px);cursor:pointer;">⚔️ LEFT (A/◀)</button>
        <button type="button" onpointerdown="futureSaberSlash(1)" style="pointer-events:auto;height:2.4rem;border-radius:0.75rem;border:1.5px solid #c084fc;background:rgba(192,132,252,0.2);color:#f3e8ff;font-weight:800;font-size:0.68rem;letter-spacing:0.05em;box-shadow:0 0 14px rgba(192,132,252,0.35);backdrop-filter:blur(4px);cursor:pointer;">⚔️ MID (S/▲)</button>
        <button type="button" onpointerdown="futureSaberSlash(2)" style="pointer-events:auto;height:2.4rem;border-radius:0.75rem;border:1.5px solid #f472b6;background:rgba(244,114,182,0.2);color:#fce7f3;font-weight:800;font-size:0.68rem;letter-spacing:0.05em;box-shadow:0 0 14px rgba(244,114,182,0.35);backdrop-filter:blur(4px);cursor:pointer;">⚔️ RIGHT (D/▶)</button>`;
      arena.insertBefore(ctrl, $("future-game-overlay") || null);
    }
  }
}

function initFutureSaberCanvas() {
  ensureFutureSaberDom();
  futureSaberCanvas = $("future-saber-canvas");
  if (!futureSaberCanvas) return;
  futureSaberCtx = futureSaberCanvas.getContext("2d");
  const arena = $("future-game-arena");
  const w = (arena && arena.clientWidth > 40) ? arena.clientWidth : 340;
  const h = (arena && arena.clientHeight > 40) ? arena.clientHeight : 360;
  futureSaberCanvas.width = w;
  futureSaberCanvas.height = h;

  if (!futureSaberBound) {
    futureSaberBound = true;
    let lastSwipeLane = -1;
    const laneFromEvent = e => {
      const rect = futureSaberCanvas.getBoundingClientRect();
      const width = rect.width || 340;
      const relX = (e.clientX - rect.left) / width;
      return relX < 0.34 ? 0 : (relX < 0.66 ? 1 : 2);
    };
    futureSaberCanvas.addEventListener("pointerdown", e => {
      if (!futureSaberRunning) return;
      const ln = laneFromEvent(e);
      lastSwipeLane = ln;
      futureSaberSlash(ln);
    });
    futureSaberCanvas.addEventListener("pointermove", e => {
      if (!futureSaberRunning || e.buttons === 0) return;
      const ln = laneFromEvent(e);
      if (ln !== lastSwipeLane) {
        lastSwipeLane = ln;
        futureSaberSlash(ln);
      }
    });
    window.addEventListener("resize", () => {
      if (futureSaberCanvas && $("future-game-arena")) {
        const a = $("future-game-arena");
        if (a.clientWidth > 40 && a.clientHeight > 40) {
          futureSaberCanvas.width = a.clientWidth;
          futureSaberCanvas.height = a.clientHeight;
          if (!futureSaberRunning) drawFutureSaberScene();
        }
      }
    });
  }
}

document.addEventListener("keydown", e => {
  if (!futureSaberRunning) return;
  if (["ArrowLeft", "KeyA", "KeyJ"].includes(e.code)) { futureSaberSlash(0); e.preventDefault(); }
  else if (["ArrowUp", "ArrowDown", "KeyW", "KeyS", "Space", "KeyK"].includes(e.code)) { futureSaberSlash(1); e.preventDefault(); }
  else if (["ArrowRight", "KeyD", "KeyL"].includes(e.code)) { futureSaberSlash(2); e.preventDefault(); }
});

function startFutureGame() {
  stopFutureGame();
  initFutureSaberCanvas();
  futureGameScore = 0;
  futureGameCombo = 1;
  futureSecondsLeft = 30;
  saberState = {
    trackOffset: 0,
    beatStep: 0,
    spawnCounter: 8,
    eqBars: [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.75, 0.55, 0.85, 0.45, 0.65],
    cubes: [],
    slashes: [],
    particles: [],
    judgeText: "SLICE TO THE BEAT! ⚔️",
    judgeColor: "#00f2fe",
    judgeTimer: 45
  };
  updateFutureSaberHud();
  const overlay = $("future-game-overlay");
  if (overlay) overlay.hidden = true;
  futureSaberRunning = true;
  playFutureTone(523.25, 0.08, "triangle", 0.06);
  setTimeout(() => playFutureTone(783.99, 0.1, "triangle", 0.06), 80);

  futureSaberTimer = setInterval(() => {
    futureSecondsLeft -= 1;
    if ($("future-game-time")) $("future-game-time").textContent = String(futureSecondsLeft).padStart(2, "0");
    if (futureSecondsLeft <= 0) finishFutureGame();
  }, 1000);

  futureSaberRaf = requestAnimationFrame(stepFutureSaber);
}

function stopFutureGame() {
  futureSaberRunning = false;
  if (futureSaberRaf) {
    cancelAnimationFrame(futureSaberRaf);
    futureSaberRaf = null;
  }
  if (futureSaberTimer) {
    clearInterval(futureSaberTimer);
    futureSaberTimer = null;
  }
  const overlay = $("future-game-overlay");
  if (overlay) overlay.hidden = false;
}

function finishFutureGame() {
  stopFutureGame();
  playFutureTone(783.99, 0.1, "triangle", 0.06);
  setTimeout(() => playFutureTone(1046.5, 0.18, "sine", 0.06), 110);

  if (futureGameScore > futureGameBest) {
    futureGameBest = futureGameScore;
    try { localStorage.setItem("ppc-future-game-best", String(futureGameBest)); } catch (e) {}
    if ($("future-game-best")) $("future-game-best").textContent = String(futureGameBest);
  }
  if ($("future-game-message")) $("future-game-message").textContent = `Track Complete! (${futureGameScore} pts)`;
  if ($("future-game-instructions")) {
    $("future-game-instructions").textContent = `Final Holo-Saber Score: ${futureGameScore} pts (Best: ${futureGameBest}). Ready for another rhythm run?`;
  }
  if ($("future-game-start")) $("future-game-start").textContent = "Play Track Again ⚔️";
  if ($("future-game-overlay")) $("future-game-overlay").hidden = false;
}

function updateFutureSaberHud() {
  if ($("future-game-score")) $("future-game-score").textContent = String(futureGameScore).padStart(3, "0");
  if ($("future-game-combo")) $("future-game-combo").textContent = "x" + futureGameCombo + (futureGameCombo >= 8 ? " 🔥" : "");
  if ($("future-game-time")) $("future-game-time").textContent = String(futureSecondsLeft).padStart(2, "0");
  if ($("future-game-best")) $("future-game-best").textContent = String(futureGameBest);
}

function spawnSaberBeatPattern() {
  const step = saberState.beatStep++;
  const bassFreq = step % 4 === 0 ? 130.81 : (step % 2 === 0 ? 164.81 : 196.00);
  playFutureTone(bassFreq, 0.07, "sawtooth", 0.02);

  saberState.eqBars = saberState.eqBars.map((_, i) => 0.25 + Math.abs(Math.sin(step * 0.7 + i * 0.9)) * 0.72);

  const isDouble = step > 6 && step % 5 === 0;
  const lane1 = Math.floor(Math.random() * 3);
  const isGold = step % 7 === 4;

  saberState.cubes.push({
    lane: lane1,
    z: 0.02,
    gold: isGold,
    dir: isGold ? "★" : LANE_ARROWS[lane1],
    sliced: false,
    missed: false
  });

  if (isDouble) {
    const lane2 = (lane1 + 1 + Math.floor(Math.random() * 2)) % 3;
    saberState.cubes.push({
      lane: lane2,
      z: 0.02,
      gold: false,
      dir: LANE_ARROWS[lane2],
      sliced: false,
      missed: false
    });
  }
}

function futureSaberSlash(lane) {
  if (!futureSaberRunning) return;
  const col = LANE_COLORS[lane] || "#00f2fe";
  saberState.slashes.push({ lane, alpha: 1.0, color: col });

  let bestCube = null;
  let bestDist = 999;
  saberState.cubes.forEach(c => {
    if (!c.sliced && !c.missed && c.lane === lane && c.z >= 0.62 && c.z <= 0.99) {
      const d = Math.abs(c.z - 0.84);
      if (d < bestDist) {
        bestDist = d;
        bestCube = c;
      }
    }
  });

  if (bestCube) {
    bestCube.sliced = true;
    const isPerfect = bestDist <= 0.09;
    futureGameCombo = Math.min(8, futureGameCombo + 1);
    const pts = bestCube.gold ? 50 : (isPerfect ? 20 : 10) * futureGameCombo;
    futureGameScore += pts;

    saberState.judgeText = bestCube.gold
      ? `★ OVERDRIVE +${pts}!`
      : (isPerfect ? `⚡ PERFECT! +${pts}` : `✓ GOOD +${pts}`);
    saberState.judgeColor = bestCube.gold ? "#fde047" : col;
    saberState.judgeTimer = 28;

    const note = SABER_MELODY[(saberState.beatStep + lane) % SABER_MELODY.length];
    playFutureTone(bestCube.gold ? 1318.5 : note, 0.09, "triangle", 0.055);

    if (futureSaberCanvas) {
      const pt = projectSaber(lane, bestCube.z, futureSaberCanvas.width, futureSaberCanvas.height);
      for (let i = 0; i < 12; i++) {
        const ang = (Math.PI * 2 * i) / 12;
        const spd = 2 + Math.random() * 3.5;
        saberState.particles.push({
          x: pt.x,
          y: pt.y,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd - 1,
          color: bestCube.gold ? "#fde047" : col,
          alpha: 1.0
        });
      }
    }

    if (futureGameScore > futureGameBest) {
      futureGameBest = futureGameScore;
      try { localStorage.setItem("ppc-future-game-best", String(futureGameBest)); } catch (e) {}
    }
    updateFutureSaberHud();
  } else {
    playFutureTone(320 + lane * 60, 0.03, "sine", 0.02);
  }
}

function futureGameTap(kind) {
  futureSaberSlash(kind === "bonus" ? 1 : 0);
}

function projectSaber(lane, z, w, h) {
  const horizonY = h * 0.22;
  const hitY = h * 0.80;
  const topHalfW = w * 0.11;
  const botHalfW = w * 0.44;
  const cx = w * 0.5;
  const p = Math.pow(Math.max(0.01, z), 1.55);
  const y = horizonY + p * (hitY - horizonY);
  const halfW = topHalfW + p * (botHalfW - topHalfW);
  const x = cx + (lane - 1) * (halfW * 0.68);
  const scale = 0.24 + p * 0.86;
  return { x, y, scale };
}

function stepFutureSaber() {
  if (!futureSaberRunning) return;

  const speed = 0.019 + (30 - futureSecondsLeft) * 0.00025;
  saberState.trackOffset = (saberState.trackOffset + speed * 14) % 1;
  if (saberState.judgeTimer > 0) saberState.judgeTimer -= 1;

  saberState.spawnCounter -= 1;
  if (saberState.spawnCounter <= 0) {
    spawnSaberBeatPattern();
    saberState.spawnCounter = Math.max(18, Math.round(28 - (30 - futureSecondsLeft) * 0.3));
  }

  for (let i = saberState.cubes.length - 1; i >= 0; i--) {
    const c = saberState.cubes[i];
    c.z += speed;
    if (!c.sliced && !c.missed && c.z > 0.99) {
      c.missed = true;
      futureGameCombo = 1;
      saberState.judgeText = "MISS! COMBO RESET";
      saberState.judgeColor = "#fb7185";
      saberState.judgeTimer = 22;
      updateFutureSaberHud();
    }
    if (c.z > 1.12 || c.sliced) {
      saberState.cubes.splice(i, 1);
    }
  }

  for (let i = saberState.slashes.length - 1; i >= 0; i--) {
    saberState.slashes[i].alpha -= 0.12;
    if (saberState.slashes[i].alpha <= 0) saberState.slashes.splice(i, 1);
  }

  for (let i = saberState.particles.length - 1; i >= 0; i--) {
    const p = saberState.particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.06;
    if (p.alpha <= 0) saberState.particles.splice(i, 1);
  }

  drawFutureSaberScene();
  futureSaberRaf = requestAnimationFrame(stepFutureSaber);
}

function drawFutureSaberScene() {
  if (!futureSaberCtx || !futureSaberCanvas) return;
  const arena = $("future-game-arena");
  if (arena && arena.clientWidth > 40 && Math.abs(futureSaberCanvas.width - arena.clientWidth) > 4) {
    futureSaberCanvas.width = arena.clientWidth;
    futureSaberCanvas.height = arena.clientHeight || 360;
  }
  const ctx = futureSaberCtx;
  const w = futureSaberCanvas.width || 340;
  const h = futureSaberCanvas.height || 360;
  const horizonY = h * 0.22;
  const hitY = h * 0.80;
  const cx = w * 0.5;
  const topHalfW = w * 0.11;
  const botHalfW = w * 0.44;

  // 1. Cyber Arena Background
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#040711");
  bg.addColorStop(0.24, "#0d1633");
  bg.addColorStop(1, "#050918");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Horizon Equalizer Bars
  const barCount = saberState.eqBars.length;
  const barSpan = w * 0.56;
  const barW = (barSpan / barCount) - 3;
  saberState.eqBars.forEach((val, i) => {
    const bh = val * 32;
    const bx = (cx - barSpan / 2) + i * (barW + 3);
    ctx.fillStyle = i % 2 === 0 ? "rgba(0, 242, 254, 0.45)" : "rgba(244, 114, 182, 0.45)";
    ctx.fillRect(bx, horizonY - bh, barW, bh);
  });

  // 2. 3D Neon Highway Trapezoid
  ctx.beginPath();
  ctx.moveTo(cx - topHalfW, horizonY);
  ctx.lineTo(cx + topHalfW, horizonY);
  ctx.lineTo(cx + botHalfW, h);
  ctx.lineTo(cx - botHalfW, h);
  ctx.closePath();
  const trackGrad = ctx.createLinearGradient(0, horizonY, 0, h);
  trackGrad.addColorStop(0, "rgba(0, 242, 254, 0.08)");
  trackGrad.addColorStop(0.7, "rgba(192, 132, 252, 0.12)");
  trackGrad.addColorStop(1, "rgba(244, 114, 182, 0.18)");
  ctx.fillStyle = trackGrad;
  ctx.fill();

  ctx.lineWidth = 1;
  for (let g = 0; g < 7; g++) {
    const gz = (g + saberState.trackOffset) / 7;
    const gp = Math.pow(gz, 1.55);
    const gy = horizonY + gp * (hitY - horizonY);
    const ghw = topHalfW + gp * (botHalfW - topHalfW);
    ctx.strokeStyle = `rgba(0, 242, 254, ${0.1 + gp * 0.25})`;
    ctx.beginPath();
    ctx.moveTo(cx - ghw, gy);
    ctx.lineTo(cx + ghw, gy);
    ctx.stroke();
  }

  [-1, -0.333, 0.333, 1].forEach((frac, idx) => {
    ctx.strokeStyle = idx === 0 || idx === 3 ? "#00f2fe" : "rgba(192, 132, 252, 0.45)";
    ctx.lineWidth = idx === 0 || idx === 3 ? 2 : 1.2;
    ctx.beginPath();
    ctx.moveTo(cx + frac * topHalfW, horizonY);
    ctx.lineTo(cx + frac * botHalfW, h);
    ctx.stroke();
  });

  // 3. Draw Target Saber Rings at z = 0.84
  [0, 1, 2].forEach(ln => {
    const pt = projectSaber(ln, 0.84, w, h);
    ctx.strokeStyle = LANE_COLORS[ln];
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(pt.x, pt.y, 24, 10, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.fill();
  });

  // 4. Draw Incoming 3D Neon Beat Cubes
  const sorted = [...saberState.cubes].sort((a, b) => a.z - b.z);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  sorted.forEach(c => {
    if (c.sliced) return;
    const pt = projectSaber(c.lane, c.z, w, h);
    const size = Math.max(12, 38 * pt.scale);
    const col = c.gold ? "#fde047" : LANE_COLORS[c.lane];

    ctx.fillStyle = c.gold ? "rgba(253, 224, 71, 0.28)" : (c.lane === 0 ? "rgba(0, 242, 254, 0.25)" : c.lane === 1 ? "rgba(192, 132, 252, 0.25)" : "rgba(244, 114, 182, 0.25)");
    drawRoundedBox(ctx, pt.x - size * 0.62, pt.y - size * 0.95, size * 1.24, size * 1.1, 7);
    ctx.fill();

    ctx.fillStyle = "#091328";
    ctx.strokeStyle = col;
    ctx.lineWidth = 2.2;
    drawRoundedBox(ctx, pt.x - size * 0.5, pt.y - size * 0.85, size, size * 0.9, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = `bold ${Math.max(10, Math.round(size * 0.52))}px sans-serif`;
    ctx.fillText(c.dir, pt.x, pt.y - size * 0.4);
  });

  // 5. Draw Saber Slash Arcs
  saberState.slashes.forEach(s => {
    const pt = projectSaber(s.lane, 0.84, w, h);
    ctx.save();
    ctx.globalAlpha = Math.max(0, s.alpha);
    ctx.strokeStyle = "#ffffff";
    ctx.shadowColor = s.color;
    ctx.shadowBlur = 14;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pt.x - 28, pt.y + 18);
    ctx.lineTo(pt.x + 28, pt.y - 26);
    ctx.stroke();
    ctx.restore();
  });

  // 6. Draw Particle Sparks
  saberState.particles.forEach(p => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  // 7. Judgment Banner
  if (saberState.judgeTimer > 0 && saberState.judgeText) {
    ctx.fillStyle = "rgba(5, 10, 25, 0.82)";
    drawRoundedBox(ctx, cx - 86, horizonY + 8, 172, 24, 12);
    ctx.fill();
    ctx.font = "bold 11px sans-serif";
    ctx.fillStyle = saberState.judgeColor;
    ctx.fillText(saberState.judgeText, cx, horizonY + 20);
  }
}
