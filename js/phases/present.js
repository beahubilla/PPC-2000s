// ============================================================
// PHASE 2: PRESENT INTERACTIVE LOGIC (TODAY / 2020s)
// ------------------------------------------------------------
// 5G Smartphone Besties GC (with live barkada auto-replies &
// tap-to-react emojis) and METRO SURFER: EDSA RUSH (Subway
// Surfers-style 3-lane endless runner with Jump, Roll, Coins,
// 2x Star Multiplier, Swipe/Keyboard/Button controls & High Score).
// ============================================================
window.$ = window.$ || (id => document.getElementById(id));
window.PHASE_TEMPLATES = window.PHASE_TEMPLATES || {};
window.PHASE_TEMPLATES.present = {
  hero: "<figure class=\"hero-spotlight only-now\">\n        <img src=\"./images/today-wing-hero.png\" alt=\"An iridescent Y2K museum display featuring a chrome flip phone, smartphone, compact discs, and holographic interfaces\" fetchpriority=\"high\">\n        <div class=\"hero-image-shade\" aria-hidden=\"true\"></div>\n        <figcaption>\n          <span class=\"hero-overline\">TODAY WING &nbsp; / &nbsp; PHILIPPINE POP CULTURE, REBOOTED</span>\n          <h2 class=\"hero-title\">The present looks<br><em>a little familiar.</em></h2>\n          <p>Everything in one smartphone: 5G social feeds, e-wallets, global P-pop, and multi-sport livestreams.</p>\n          <div class=\"hero-actions\">\n            <button type=\"button\" onclick=\"openRoom(0)\" class=\"btn btn-pink\">Explore the collection <span aria-hidden=\"true\">\u2197</span></button>\n            <a href=\"#exhibits\" class=\"btn\">Browse exhibits <span aria-hidden=\"true\">\u2193</span></a>\n          </div>\n        </figcaption>\n        <span class=\"hero-index\" aria-hidden=\"true\">01 &nbsp;\u2014&nbsp; 06</span>\n      </figure>",
  relic: "<!-- Today Mode Switcher -->\n      <div class=\"modern-mode-switch only-now\" role=\"group\" aria-label=\"Choose smartphone app\">\n        <button type=\"button\" id=\"modern-mode-chat-btn\" class=\"modern-mode-btn active\" aria-pressed=\"true\" onclick=\"setModernMode('chat')\">\ud83d\udcac Besties GC</button>\n        <button type=\"button\" id=\"modern-mode-game-btn\" class=\"modern-mode-btn\" aria-pressed=\"false\" onclick=\"setModernMode('game')\">\ud83c\udfc3 Metro Surfer</button>\n      </div>\n\n      <!-- DEVICE 2: Modern 5G Smartphone (Today / 2020s) -->\n      <div class=\"smartphone-device only-now\">\n        <div class=\"smartphone-screen\">\n          <div class=\"smartphone-status\"><span>9:41</span><span aria-label=\"Full signal, Wi-Fi, battery\">5G &nbsp; \u25b0</span></div>\n          <div id=\"modern-chat-view\" class=\"smartphone-app-view\">\n            <div class=\"modern-chat-header\">\n              <span class=\"modern-contact-avatar\" aria-hidden=\"true\">B</span>\n              <div><strong>Besties GC</strong><span>Tap any message to react \u2764\ufe0f \u00b7 active now</span></div>\n              <span class=\"modern-chat-call\" aria-hidden=\"true\">\u2022\u2022\u2022</span>\n            </div>\n            <div class=\"modern-chat-feed\" id=\"modern-chat-feed\" aria-live=\"polite\" aria-label=\"Messages\">\n              <div class=\"modern-chat-date\">TODAY \u00b7 9:38 AM</div>\n              <div class=\"modern-message modern-message-in\" onclick=\"toggleModernReaction(this)\"><span class=\"modern-message-name\">Bea</span>Uy, nasa exhibit na kami! Ang ganda ng Today wing.</div>\n              <div class=\"modern-message modern-message-in\" onclick=\"toggleModernReaction(this)\"><span class=\"modern-message-name\">Benz</span>Game tayo after? Beat my high score sa Metro Surfer!</div>\n              <div class=\"modern-message modern-message-out\" onclick=\"toggleModernReaction(this)\">On my way! Save me a spot \u2728</div>\n              <span class=\"modern-typing\" id=\"modern-typing-indicator\"><i></i><i></i><i></i> Active in GC</span>\n            </div>\n            <form class=\"modern-composer\" onsubmit=\"modernSendMessage(event)\">\n              <label class=\"sr-only\" for=\"modern-message-input\">Write a message</label>\n              <input id=\"modern-message-input\" type=\"text\" maxlength=\"220\" autocomplete=\"off\" placeholder=\"Message Besties GC (gets a reply)\u2026\">\n              <button type=\"submit\" aria-label=\"Send message\" title=\"Send message\">\u2191</button>\n            </form>\n          </div>\n          <div id=\"modern-game-view\" class=\"smartphone-app-view modern-game-view\" hidden>\n            <div class=\"modern-game-header\"><span>3-LANE ENDLESS RUNNER</span><span>METRO SURFER: EDSA RUSH</span></div>\n            <div class=\"modern-game-scorebar\">\n              <span>SCORE <strong id=\"modern-game-score\">000</strong></span>\n              <span>COINS \ud83e\ude99 <strong id=\"modern-game-coins\">0</strong></span>\n              <span>SPEED <strong id=\"modern-game-time\">1.0x</strong></span>\n            </div>\n            <div class=\"modern-game-arena\" id=\"modern-game-arena\">\n              <canvas id=\"modern-runner-canvas\" width=\"320\" height=\"380\" style=\"position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;\"></canvas>\n              <!-- On-screen Subway Surfers touch controls -->\n              <div id=\"modern-runner-controls\" style=\"position:absolute;left:0;right:0;bottom:0.55rem;z-index:1;display:flex;justify-content:center;gap:0.5rem;padding:0 0.65rem;pointer-events:none;\">\n                <button type=\"button\" onclick=\"modernRunnerMove(-1)\" aria-label=\"Move Left Lane\" style=\"pointer-events:auto;min-width:3.1rem;height:2.35rem;border-radius:999px;border:1px solid rgba(255,255,255,0.55);background:rgba(23,23,47,0.72);color:#fff;font-weight:800;font-size:0.85rem;backdrop-filter:blur(4px);cursor:pointer;\">\u25c0</button>\n                <button type=\"button\" onclick=\"modernRunnerJump()\" aria-label=\"Jump over barrier\" style=\"pointer-events:auto;min-width:4.8rem;height:2.35rem;border-radius:999px;border:1px solid rgba(255,255,255,0.75);background:linear-gradient(135deg,rgba(219,50,174,0.88),rgba(135,107,237,0.88));color:#fff;font-weight:800;font-size:0.7rem;letter-spacing:0.04em;backdrop-filter:blur(4px);cursor:pointer;\">\u25b2 JUMP</button>\n                <button type=\"button\" onclick=\"modernRunnerRoll()\" aria-label=\"Roll / Duck\" style=\"pointer-events:auto;min-width:3.8rem;height:2.35rem;border-radius:999px;border:1px solid rgba(255,255,255,0.55);background:rgba(23,23,47,0.72);color:#fff;font-weight:800;font-size:0.68rem;backdrop-filter:blur(4px);cursor:pointer;\">\u25bc ROLL</button>\n                <button type=\"button\" onclick=\"modernRunnerMove(1)\" aria-label=\"Move Right Lane\" style=\"pointer-events:auto;min-width:3.1rem;height:2.35rem;border-radius:999px;border:1px solid rgba(255,255,255,0.55);background:rgba(23,23,47,0.72);color:#fff;font-weight:800;font-size:0.85rem;backdrop-filter:blur(4px);cursor:pointer;\">\u25b6</button>\n              </div>\n              <div id=\"modern-game-overlay\" class=\"modern-game-overlay\">\n                <span class=\"modern-game-sparkle\" aria-hidden=\"true\"></span>\n                <strong id=\"modern-game-message\">Metro Surfer</strong>\n                <p id=\"modern-game-instructions\">Swipe or tap \u25c0 \u25b6 to switch lanes, \u25b2 JUMP over low barriers (\ud83d\udea7), \u25bc ROLL under signs (\ud83e\udea7), and dodge buses (\ud83d\ude8c) &amp; trains (\ud83d\ude9d) while collecting coins (\ud83e\ude99)!</p>\n                <button type=\"button\" id=\"modern-game-start\" onclick=\"startModernGame()\">Start Running \ud83c\udfc3</button>\n              </div>\n            </div>\n            <div class=\"modern-game-foot\"><span>Swipe / Arrow keys / Buttons</span><span>BEST \ud83c\udfc6 <strong id=\"modern-game-best\">0</strong></span></div>\n          </div>\n          <div class=\"smartphone-home-indicator\" aria-hidden=\"true\"></div>\n        </div>\n      </div>\n\n      <!-- Today Smartphone Shortcuts -->\n      <div class=\"modern-shortcuts mt-5 max-w-md mx-auto only-now\">\n        <span class=\"modern-shortcuts-label\">Send a quick GC message (triggers live barkada reply)</span>\n        <div class=\"modern-preset-list\">\n          <button type=\"button\" onclick=\"modernUsePreset('Nasa museum na kami \u2014 ikaw, where you at?')\">Where you at?</button>\n          <button type=\"button\" onclick=\"modernUsePreset('Grabe yung 2026 bebot makeup look at P-Pop sa TikTok! \ud83d\udc84')\">Bebot &amp; P-Pop</button>\n          <button type=\"button\" onclick=\"modernUsePreset('Sent na sa GCash! Nood tayo ng PVL livestream mamaya \ud83c\udfd0')\">GCash &amp; PVL</button>\n        </div>\n      </div>"
};

let modernReplyIndex = 0;
const MODERN_REACTIONS = ["❤️", "🔥", "😂", "✨"];

function playModernTone(freq = 880, duration = 0.05, type = "sine") {
  if (typeof playNokiaTone === "function") {
    playNokiaTone(freq, duration, type);
    return;
  }
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function setModernMode(mode) {
  if (mode !== "chat" && mode !== "game") return;
  const isGame = mode === "game";
  const chatView = $("modern-chat-view");
  const gameView = $("modern-game-view");
  const chatButton = $("modern-mode-chat-btn");
  const gameButton = $("modern-mode-game-btn");
  if (!chatView || !gameView) return;

  chatView.hidden = isGame;
  gameView.hidden = !isGame;
  chatView.classList.toggle("is-active", !isGame);
  gameView.classList.toggle("is-active", isGame);
  chatButton?.classList.toggle("active", !isGame);
  gameButton?.classList.toggle("active", isGame);
  chatButton?.setAttribute("aria-pressed", String(!isGame));
  gameButton?.setAttribute("aria-pressed", String(isGame));
  if ($("modern-game-best")) $("modern-game-best").textContent = String(modernGameBest);

  if (isGame) {
    initModernRunnerCanvas();
    drawModernRunnerIdle();
  } else {
    stopModernGame();
  }
}

function toggleModernReaction(msgEl) {
  if (!msgEl) return;
  let badge = msgEl.querySelector(".msg-react-badge");
  if (!badge) {
    badge = document.createElement("span");
    badge.className = "msg-react-badge";
    badge.textContent = MODERN_REACTIONS[0];
    msgEl.appendChild(badge);
  } else {
    const idx = MODERN_REACTIONS.indexOf(badge.textContent);
    if (idx === MODERN_REACTIONS.length - 1) {
      badge.remove();
    } else {
      badge.textContent = MODERN_REACTIONS[(idx + 1) % MODERN_REACTIONS.length];
    }
  }
  playModernTone(1080, 0.03, "sine");
}

function appendModernMessage(text, isIncoming = false, sender = "") {
  const feed = $("modern-chat-feed");
  if (!feed) return;
  const message = document.createElement("div");
  message.className = isIncoming ? "modern-message modern-message-in" : "modern-message modern-message-out";
  message.onclick = function () { toggleModernReaction(this); };
  if (isIncoming && sender) {
    const nameEl = document.createElement("span");
    nameEl.className = "modern-message-name";
    nameEl.textContent = sender;
    message.appendChild(nameEl);
  }
  message.appendChild(document.createTextNode(text));
  const typing = $("modern-typing-indicator") || feed.querySelector(".modern-typing");
  feed.insertBefore(message, typing || null);
  feed.scrollTop = feed.scrollHeight;
}

function triggerModernAutoReply() {
  const replies = (typeof modernAutoReplies !== "undefined" && modernAutoReplies.length)
    ? modernAutoReplies
    : [{ sender: "Bea", text: "G! Beat my score sa Metro Surfer! 🏃✨" }];
  const reply = replies[modernReplyIndex % replies.length];
  modernReplyIndex += 1;
  const typing = $("modern-typing-indicator") || document.querySelector("#modern-chat-feed .modern-typing");
  if (typing) typing.innerHTML = `<i></i><i></i><i></i> ${reply.sender} is typing…`;

  setTimeout(() => {
    appendModernMessage(reply.text, true, reply.sender);
    playModernTone(960, 0.05, "sine");
    if (typing) typing.innerHTML = "<i></i><i></i><i></i> Active in GC · Tap any message to react ❤️";
  }, 600);
}

function modernSendMessage(event) {
  event.preventDefault();
  const input = $("modern-message-input");
  const text = input?.value.trim();
  if (!text) return;
  playModernTone(1180, 0.04, "sine");
  appendModernMessage(text, false);
  input.value = "";
  input.focus();
  triggerModernAutoReply();
}

function modernUsePreset(text) {
  setModernMode("chat");
  playModernTone(1180, 0.04, "sine");
  appendModernMessage(text, false);
  triggerModernAutoReply();
}

// ============================================================
// METRO SURFER: EDSA RUSH (3-Lane Endless Runner Game Engine)
// ============================================================
let modernRunnerRaf = null;
let modernRunnerRunning = false;
let modernRunnerCanvas = null;
let modernRunnerCtx = null;
let modernRunnerBound = false;

let modernGameScore = 0;
let modernGameCoins = 0;
let modernGameBest = 0;
try {
  modernGameBest = Number(localStorage.getItem("ppc-modern-game-best") || 0);
} catch (e) {
  modernGameBest = 0;
}

let runnerState = {
  lane: 1,          // 0 = Left, 1 = Center, 2 = Right
  visualLane: 1,    // Smoothly interpolated lane position
  jumpTimer: 0,     // > 0 while jumping in air
  jumpDuration: 34, // frames
  rollTimer: 0,     // > 0 while rolling/ducking
  rollDuration: 28, // frames
  speed: 0.017,     // z units per frame
  distance: 0,
  roadOffset: 0,
  multiplierTimer: 0,
  bannerText: "",
  bannerTimer: 0,
  spawnCooldown: 0,
  entities: []      // { type: "bus"|"train"|"barrier"|"sign"|"coin"|"star", lane: 0..2, z: 0..1.2, hit: false }
};

function initModernRunnerCanvas() {
  modernRunnerCanvas = $("modern-runner-canvas");
  if (!modernRunnerCanvas) return;
  modernRunnerCtx = modernRunnerCanvas.getContext("2d");
  const arena = $("modern-game-arena");
  if (arena && arena.clientWidth > 0 && arena.clientHeight > 0) {
    modernRunnerCanvas.width = arena.clientWidth;
    modernRunnerCanvas.height = arena.clientHeight;
  }
  if (!modernRunnerBound) {
    modernRunnerBound = true;
    let sx = 0, sy = 0, st = 0;
    modernRunnerCanvas.addEventListener("pointerdown", e => {
      sx = e.clientX;
      sy = e.clientY;
      st = Date.now();
    });
    modernRunnerCanvas.addEventListener("pointerup", e => {
      if (!modernRunnerRunning) return;
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      const dt = Date.now() - st;
      if (dt < 500 && (Math.abs(dx) > 24 || Math.abs(dy) > 24)) {
        if (Math.abs(dx) > Math.abs(dy)) {
          modernRunnerMove(dx < 0 ? -1 : 1);
        } else {
          if (dy < 0) modernRunnerJump();
          else modernRunnerRoll();
        }
      } else {
        const rect = modernRunnerCanvas.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width;
        if (relX < 0.35) modernRunnerMove(-1);
        else if (relX > 0.65) modernRunnerMove(1);
        else modernRunnerJump();
      }
    });
    window.addEventListener("resize", () => {
      if (modernRunnerCanvas && $("modern-game-arena")) {
        const a = $("modern-game-arena");
        if (a.clientWidth > 0 && a.clientHeight > 0) {
          modernRunnerCanvas.width = a.clientWidth;
          modernRunnerCanvas.height = a.clientHeight;
          if (!modernRunnerRunning) drawModernRunnerScene();
        }
      }
    });
  }
}

function modernRunnerMove(dir) {
  if (!modernRunnerRunning) return;
  const next = Math.max(0, Math.min(2, runnerState.lane + dir));
  if (next !== runnerState.lane) {
    runnerState.lane = next;
    playModernTone(dir < 0 ? 680 : 760, 0.04, "sine");
  }
}

function modernRunnerJump() {
  if (!modernRunnerRunning) return;
  if (runnerState.jumpTimer <= 0) {
    runnerState.jumpTimer = runnerState.jumpDuration;
    runnerState.rollTimer = 0;
    playModernTone(920, 0.07, "triangle");
  }
}

function modernRunnerRoll() {
  if (!modernRunnerRunning) return;
  if (runnerState.jumpTimer > 0) {
    runnerState.jumpTimer = 0;
  }
  runnerState.rollTimer = runnerState.rollDuration;
  playModernTone(520, 0.06, "sine");
}

// Keyboard controls for Metro Surfer when in Today wing
document.addEventListener("keydown", e => {
  if (!modernRunnerRunning) return;
  if (["ArrowLeft", "KeyA"].includes(e.code)) { modernRunnerMove(-1); e.preventDefault(); }
  else if (["ArrowRight", "KeyD"].includes(e.code)) { modernRunnerMove(1); e.preventDefault(); }
  else if (["ArrowUp", "KeyW", "Space"].includes(e.code)) { modernRunnerJump(); e.preventDefault(); }
  else if (["ArrowDown", "KeyS"].includes(e.code)) { modernRunnerRoll(); e.preventDefault(); }
});

function startModernGame() {
  stopModernGame();
  initModernRunnerCanvas();
  modernGameScore = 0;
  modernGameCoins = 0;
  runnerState = {
    lane: 1,
    visualLane: 1,
    jumpTimer: 0,
    jumpDuration: 34,
    rollTimer: 0,
    rollDuration: 28,
    speed: 0.016,
    distance: 0,
    roadOffset: 0,
    multiplierTimer: 0,
    bannerText: "GO! DODGE & COLLECT 🪙",
    bannerTimer: 55,
    spawnCooldown: 18,
    entities: []
  };
  updateModernRunnerHud();
  const overlay = $("modern-game-overlay");
  if (overlay) overlay.hidden = true;
  modernRunnerRunning = true;
  playModernTone(880, 0.06, "sine");
  setTimeout(() => playModernTone(1180, 0.08, "triangle"), 70);
  modernRunnerRaf = requestAnimationFrame(stepModernRunner);
}

function stopModernGame() {
  modernRunnerRunning = false;
  if (modernRunnerRaf) {
    cancelAnimationFrame(modernRunnerRaf);
    modernRunnerRaf = null;
  }
  const overlay = $("modern-game-overlay");
  if (overlay) overlay.hidden = false;
}

function finishModernGame(reason) {
  stopModernGame();
  playModernTone(240, 0.18, "sawtooth");
  setTimeout(() => playModernTone(170, 0.25, "sawtooth"), 110);

  if (modernGameScore > modernGameBest) {
    modernGameBest = modernGameScore;
    try { localStorage.setItem("ppc-modern-game-best", String(modernGameBest)); } catch (e) {}
    if ($("modern-game-best")) $("modern-game-best").textContent = String(modernGameBest);
  }
  if ($("modern-game-message")) $("modern-game-message").textContent = `Wipeout! (${modernGameScore} pts)`;
  if ($("modern-game-instructions")) {
    $("modern-game-instructions").textContent = `${reason || "You hit an obstacle on EDSA!"} Collected ${modernGameCoins} 🪙 · Best: ${modernGameBest} pts.`;
  }
  if ($("modern-game-start")) $("modern-game-start").textContent = "Run Again 🏃";
  if ($("modern-game-overlay")) $("modern-game-overlay").hidden = false;
}

function updateModernRunnerHud() {
  if ($("modern-game-score")) $("modern-game-score").textContent = String(modernGameScore).padStart(3, "0");
  if ($("modern-game-coins")) $("modern-game-coins").textContent = String(modernGameCoins);
  const spdMult = (runnerState.speed / 0.016).toFixed(1) + "x" + (runnerState.multiplierTimer > 0 ? " ★2X" : "");
  if ($("modern-game-time")) $("modern-game-time").textContent = spdMult;
  if ($("modern-game-best")) $("modern-game-best").textContent = String(modernGameBest);
}

function spawnModernWave() {
  // Pick 1 or 2 lanes for obstacles, Always leave at least 1 safe or jumpable/rollable path
  const lanes = [0, 1, 2];
  const obsCount = Math.random() < 0.42 ? 2 : 1;
  const shuffled = lanes.sort(() => Math.random() - 0.5);
  const obsLanes = shuffled.slice(0, obsCount);
  const freeLanes = shuffled.slice(obsCount);

  obsLanes.forEach((ln, idx) => {
    const r = Math.random();
    let type = "bus";
    if (r < 0.34) type = "barrier";      // Jumpable low barrier
    else if (r < 0.58) type = "sign";    // Rollable overhead sign
    else if (r < 0.80) type = "bus";     // Tall EDSA bus
    else type = "train";                 // Tall MRT train
    runnerState.entities.push({ type, lane: ln, z: 0.02 + idx * 0.04, hit: false });
  });

  // Spawn coin trail or 2x star in a free lane (or over a jumpable barrier!)
  const coinLane = freeLanes[0] !== undefined ? freeLanes[0] : 1;
  if (Math.random() < 0.16) {
    runnerState.entities.push({ type: "star", lane: coinLane, z: 0.02, hit: false });
  } else {
    for (let i = 0; i < 3; i++) {
      runnerState.entities.push({ type: "coin", lane: coinLane, z: -i * 0.08, hit: false });
    }
  }
}

function stepModernRunner() {
  if (!modernRunnerRunning) return;

  // Smooth lane interpolation
  runnerState.visualLane += (runnerState.lane - runnerState.visualLane) * 0.28;
  if (runnerState.jumpTimer > 0) runnerState.jumpTimer -= 1;
  if (runnerState.rollTimer > 0) runnerState.rollTimer -= 1;
  if (runnerState.multiplierTimer > 0) runnerState.multiplierTimer -= 1;
  if (runnerState.bannerTimer > 0) runnerState.bannerTimer -= 1;

  // Gradually increase speed up to 2.2x
  runnerState.speed = Math.min(0.035, runnerState.speed + 0.000008);
  runnerState.roadOffset = (runnerState.roadOffset + runnerState.speed * 18) % 1;
  runnerState.distance += runnerState.speed * 12;

  const mult = runnerState.multiplierTimer > 0 ? 2 : 1;
  if (Math.floor(runnerState.distance) > Math.floor(runnerState.distance - runnerState.speed * 12)) {
    modernGameScore += 1 * mult;
  }

  runnerState.spawnCooldown -= 1;
  if (runnerState.spawnCooldown <= 0) {
    spawnModernWave();
    runnerState.spawnCooldown = Math.max(24, Math.round(48 - (runnerState.speed - 0.016) * 900));
  }

  const isJumping = runnerState.jumpTimer > 6;
  const isRolling = runnerState.rollTimer > 4;

  // Move entities & check collisions at player plane (z in [0.84, 0.95])
  for (let i = runnerState.entities.length - 1; i >= 0; i--) {
    const ent = runnerState.entities[i];
    ent.z += runnerState.speed;

    if (!ent.hit && ent.z >= 0.84 && ent.z <= 0.95 && Math.abs(ent.lane - runnerState.visualLane) < 0.42) {
      if (ent.type === "coin") {
        ent.hit = true;
        modernGameCoins += 1;
        modernGameScore += 10 * mult;
        playModernTone(1320, 0.04, "sine");
      } else if (ent.type === "star") {
        ent.hit = true;
        runnerState.multiplierTimer = 280;
        modernGameScore += 25;
        runnerState.bannerText = "⭐ 2X SCORE BOOST!";
        runnerState.bannerTimer = 50;
        playModernTone(1560, 0.08, "triangle");
      } else if (ent.type === "barrier") {
        if (isJumping) {
          ent.hit = true;
          modernGameScore += 15 * mult;
          runnerState.bannerText = "🔥 +15 HURDLE JUMP!";
          runnerState.bannerTimer = 35;
          playModernTone(1140, 0.04, "sine");
        } else {
          finishModernGame("Tripped on an EDSA road barrier (🚧)! Swipe UP or tap ▲ JUMP to leap over barriers.");
          return;
        }
      } else if (ent.type === "sign") {
        if (isRolling) {
          ent.hit = true;
          modernGameScore += 15 * mult;
          runnerState.bannerText = "⚡ +15 SLIDE UNDER!";
          runnerState.bannerTimer = 35;
          playModernTone(1040, 0.04, "sine");
        } else {
          finishModernGame("Bumped into an overhead sign (🪧)! Swipe DOWN or tap ▼ ROLL to slide under signs.");
          return;
        }
      } else {
        // Tall bus or MRT train
        finishModernGame(ent.type === "train" ? "Hit an oncoming MRT train (🚝)! Switch lanes ◀ ▶ to dodge." : "Hit an EDSA bus (🚌)! Switch lanes ◀ ▶ to dodge.");
        return;
      }
    }

    if (ent.z > 1.12 || (ent.hit && (ent.type === "coin" || ent.type === "star"))) {
      runnerState.entities.splice(i, 1);
    }
  }

  updateModernRunnerHud();
  drawModernRunnerScene();
  modernRunnerRaf = requestAnimationFrame(stepModernRunner);
}

function drawModernRunnerIdle() {
  drawModernRunnerScene();
}

function drawModernRunnerScene() {
  if (!modernRunnerCtx || !modernRunnerCanvas) return;
  const ctx = modernRunnerCtx;
  const w = modernRunnerCanvas.width;
  const h = modernRunnerCanvas.height;
  const horizonY = h * 0.24;
  const playerY = h * 0.78;

  // 1. Manila Twilight Sky Gradient
  const sky = ctx.createLinearGradient(0, 0, 0, horizonY);
  sky.addColorStop(0, "#1c1642");
  sky.addColorStop(0.6, "#3b277a");
  sky.addColorStop(1, "#ff6bb5");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, horizonY + 2);

  // Skyline silhouette
  ctx.fillStyle = "rgba(22, 16, 52, 0.85)";
  const bWidths = [22, 18, 28, 16, 24, 30, 19, 26, 20, 25];
  let bx = 6;
  bWidths.forEach((bw, idx) => {
    const bh = 16 + ((idx * 13) % 28);
    ctx.fillRect(bx, horizonY - bh, bw, bh);
    bx += bw + 6;
  });

  // 2. Ground & 3-Lane Perspective Road
  const ground = ctx.createLinearGradient(0, horizonY, 0, h);
  ground.addColorStop(0, "#241d49");
  ground.addColorStop(1, "#120e29");
  ctx.fillStyle = ground;
  ctx.fillRect(0, horizonY, w, h - horizonY);

  const topRoadHalf = w * 0.14;
  const botRoadHalf = w * 0.46;
  const cx = w * 0.5;

  // Road trapezoid
  ctx.beginPath();
  ctx.moveTo(cx - topRoadHalf, horizonY);
  ctx.lineTo(cx + topRoadHalf, horizonY);
  ctx.lineTo(cx + botRoadHalf, h);
  ctx.lineTo(cx - botRoadHalf, h);
  ctx.closePath();
  const roadGrad = ctx.createLinearGradient(0, horizonY, 0, h);
  roadGrad.addColorStop(0, "#2e265e");
  roadGrad.addColorStop(1, "#1b163b");
  ctx.fillStyle = roadGrad;
  ctx.fill();

  // Neon road edges
  ctx.strokeStyle = "#53cdea";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - topRoadHalf, horizonY);
  ctx.lineTo(cx - botRoadHalf, h);
  ctx.moveTo(cx + topRoadHalf, horizonY);
  ctx.lineTo(cx + botRoadHalf, h);
  ctx.stroke();

  // Animated dashed lane dividers (2 dividers separating 3 lanes)
  ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
  ctx.lineWidth = 1.6;
  [-0.333, 0.333].forEach(frac => {
    for (let s = 0; s < 6; s++) {
      const z1 = ((s + runnerState.roadOffset) / 6);
      const z2 = Math.min(1, z1 + 0.08);
      const p1 = Math.pow(z1, 1.5);
      const p2 = Math.pow(z2, 1.5);
      const y1 = horizonY + p1 * (h - horizonY);
      const y2 = horizonY + p2 * (h - horizonY);
      const hw1 = topRoadHalf + p1 * (botRoadHalf - topRoadHalf);
      const hw2 = topRoadHalf + p2 * (botRoadHalf - topRoadHalf);
      ctx.beginPath();
      ctx.moveTo(cx + frac * hw1, y1);
      ctx.lineTo(cx + frac * hw2, y2);
      ctx.stroke();
    }
  });

  // Helper to project (lane 0..2, z 0..1) -> (x, y, scale)
  const project = (lane, z) => {
    const p = Math.pow(Math.max(0.01, z), 1.45);
    const y = horizonY + p * (playerY - horizonY);
    const halfW = topRoadHalf + p * ((botRoadHalf * 0.85) - topRoadHalf);
    const laneOffset = (lane - 1) * (halfW * 0.66);
    const scale = 0.28 + p * 0.85;
    return { x: cx + laneOffset, y, scale };
  };

  // 3. Draw Entities sorted back-to-front
  const sorted = [...runnerState.entities].sort((a, b) => a.z - b.z);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  sorted.forEach(ent => {
    if (ent.z < 0 || ent.hit) return;
    const pt = project(ent.lane, ent.z);
    const sz = Math.max(12, Math.round(28 * pt.scale));

    if (ent.type === "coin") {
      ctx.fillStyle = "rgba(250, 204, 21, 0.28)";
      ctx.beginPath();
      ctx.arc(pt.x, pt.y - 8 * pt.scale, sz * 0.58, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = `${sz}px sans-serif`;
      ctx.fillText("🪙", pt.x, pt.y - 8 * pt.scale);
    } else if (ent.type === "star") {
      ctx.font = `${Math.round(sz * 1.15)}px sans-serif`;
      ctx.fillText("⭐", pt.x, pt.y - 10 * pt.scale);
    } else if (ent.type === "barrier") {
      // Low jumpable road barrier
      const bw = 42 * pt.scale;
      const bh = 20 * pt.scale;
      ctx.fillStyle = "#f97316";
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(pt.x - bw / 2, pt.y - bh, bw, bh, 4);
      ctx.fill();
      ctx.stroke();
      ctx.font = `bold ${Math.max(8, Math.round(10 * pt.scale))}px sans-serif`;
      ctx.fillStyle = "#fff";
      ctx.fillText("▲ JUMP", pt.x, pt.y - bh * 0.5);
    } else if (ent.type === "sign") {
      // High overhead sign — roll under
      const bw = 46 * pt.scale;
      const bh = 22 * pt.scale;
      const signY = pt.y - 26 * pt.scale;
      ctx.fillStyle = "#0ea5e9";
      ctx.strokeStyle = "#e0f2fe";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(pt.x - bw / 2, signY - bh, bw, bh, 4);
      ctx.fill();
      ctx.stroke();
      ctx.font = `bold ${Math.max(8, Math.round(10 * pt.scale))}px sans-serif`;
      ctx.fillStyle = "#fff";
      ctx.fillText("▼ ROLL", pt.x, signY - bh * 0.5);
    } else {
      // Tall Bus or MRT Train
      const bw = 44 * pt.scale;
      const bh = 42 * pt.scale;
      ctx.fillStyle = ent.type === "train" ? "#6366f1" : "#ec4899";
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(pt.x - bw / 2, pt.y - bh, bw, bh, 6);
      ctx.fill();
      ctx.stroke();
      ctx.font = `${Math.round(sz * 1.05)}px sans-serif`;
      ctx.fillText(ent.type === "train" ? "🚝" : "🚌", pt.x, pt.y - bh * 0.5);
    }
  });

  // 4. Draw Player Surfer
  const pPt = project(runnerState.visualLane, 0.9);
  const jumpProg = runnerState.jumpTimer > 0
    ? Math.sin((1 - runnerState.jumpTimer / runnerState.jumpDuration) * Math.PI)
    : 0;
  const jumpOffset = jumpProg * 42;
  const isRolling = runnerState.rollTimer > 0;

  // Ground shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.42)";
  ctx.beginPath();
  ctx.ellipse(pPt.x, pPt.y + 4, Math.max(8, 18 * (1 - jumpProg * 0.35)), 6, 0, 0, Math.PI * 2);
  ctx.fill();

  // Player glow aura
  const auraColor = runnerState.multiplierTimer > 0 ? "rgba(250, 204, 21, 0.55)" : "rgba(219, 50, 174, 0.45)";
  ctx.fillStyle = auraColor;
  ctx.beginPath();
  ctx.arc(pPt.x, pPt.y - 16 - jumpOffset, isRolling ? 15 : 21, 0, Math.PI * 2);
  ctx.fill();

  // Player avatar badge
  ctx.font = isRolling ? "22px sans-serif" : "30px sans-serif";
  ctx.fillText(isRolling ? "🛹" : (jumpProg > 0.15 ? "🤸" : "🏃"), pPt.x, pPt.y - (isRolling ? 10 : 16) - jumpOffset);

  // 5. Floating Action Banner (e.g., "+15 HURDLE JUMP!", "⭐ 2X SCORE BOOST!")
  if (runnerState.bannerTimer > 0 && runnerState.bannerText) {
    ctx.fillStyle = "rgba(23, 23, 47, 0.82)";
    ctx.beginPath();
    ctx.roundRect(cx - 88, horizonY + 10, 176, 24, 12);
    ctx.fill();
    ctx.font = "bold 11px sans-serif";
    ctx.fillStyle = "#fde047";
    ctx.fillText(runnerState.bannerText, cx, horizonY + 22);
  }
}
