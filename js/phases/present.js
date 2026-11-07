// ============================================================
// PHASE 2: PRESENT INTERACTIVE LOGIC (TODAY / 2020s)
// ------------------------------------------------------------
// 5G Smartphone Besties GC (with live barkada auto-replies &
// tap-to-react emojis) and Glow Rush (with combo streaks,
// bonus stars, and persistent localStorage high scores).
// ============================================================
window.PHASE_TEMPLATES = window.PHASE_TEMPLATES || {};
window.PHASE_TEMPLATES.present = {
  hero: "<figure class=\"hero-spotlight only-now\">\n        <img src=\"./images/today-wing-hero.png\" alt=\"An iridescent Y2K museum display featuring a chrome flip phone, smartphone, compact discs, and holographic interfaces\" fetchpriority=\"high\">\n        <div class=\"hero-image-shade\" aria-hidden=\"true\"></div>\n        <figcaption>\n          <span class=\"hero-overline\">TODAY WING &nbsp; / &nbsp; PHILIPPINE POP CULTURE, REBOOTED</span>\n          <h2 class=\"hero-title\">The present looks<br><em>a little familiar.</em></h2>\n          <p>Everything in one smartphone: 5G social feeds, e-wallets, global P-pop, and multi-sport livestreams.</p>\n          <div class=\"hero-actions\">\n            <button type=\"button\" onclick=\"openRoom(0)\" class=\"btn btn-pink\">Explore the collection <span aria-hidden=\"true\">\u2197</span></button>\n            <a href=\"#exhibits\" class=\"btn\">Browse exhibits <span aria-hidden=\"true\">\u2193</span></a>\n          </div>\n        </figcaption>\n        <span class=\"hero-index\" aria-hidden=\"true\">01 &nbsp;\u2014&nbsp; 06</span>\n      </figure>",
  relic: "<!-- Today Mode Switcher -->\n      <div class=\"modern-mode-switch only-now\" role=\"group\" aria-label=\"Choose smartphone app\">\n        <button type=\"button\" id=\"modern-mode-chat-btn\" class=\"modern-mode-btn active\" aria-pressed=\"true\" onclick=\"setModernMode('chat')\">\ud83d\udcac Besties GC</button>\n        <button type=\"button\" id=\"modern-mode-game-btn\" class=\"modern-mode-btn\" aria-pressed=\"false\" onclick=\"setModernMode('game')\">\u2728 Glow Rush</button>\n      </div>\n\n      <!-- DEVICE 2: Modern 5G Smartphone (Today / 2020s) -->\n      <div class=\"smartphone-device only-now\">\n        <div class=\"smartphone-screen\">\n          <div class=\"smartphone-status\"><span>9:41</span><span aria-label=\"Full signal, Wi-Fi, battery\">5G &nbsp; \u25b0</span></div>\n          <div id=\"modern-chat-view\" class=\"smartphone-app-view\">\n            <div class=\"modern-chat-header\">\n              <span class=\"modern-contact-avatar\" aria-hidden=\"true\">B</span>\n              <div><strong>Besties GC</strong><span>Tap any message to react \u2764\ufe0f \u00b7 active now</span></div>\n              <span class=\"modern-chat-call\" aria-hidden=\"true\">\u2022\u2022\u2022</span>\n            </div>\n            <div class=\"modern-chat-feed\" id=\"modern-chat-feed\" aria-live=\"polite\" aria-label=\"Messages\">\n              <div class=\"modern-chat-date\">TODAY \u00b7 9:38 AM</div>\n              <div class=\"modern-message modern-message-in\" onclick=\"toggleModernReaction(this)\"><span class=\"modern-message-name\">Bea</span>Uy, nasa exhibit na kami! Ang ganda ng Today wing.</div>\n              <div class=\"modern-message modern-message-in\" onclick=\"toggleModernReaction(this)\"><span class=\"modern-message-name\">Benz</span>Game tayo after? PVL &amp; B.League livestream mamaya!</div>\n              <div class=\"modern-message modern-message-out\" onclick=\"toggleModernReaction(this)\">On my way! Save me a spot \u2728</div>\n              <span class=\"modern-typing\" id=\"modern-typing-indicator\"><i></i><i></i><i></i> Active in GC</span>\n            </div>\n            <form class=\"modern-composer\" onsubmit=\"modernSendMessage(event)\">\n              <label class=\"sr-only\" for=\"modern-message-input\">Write a message</label>\n              <input id=\"modern-message-input\" type=\"text\" maxlength=\"220\" autocomplete=\"off\" placeholder=\"Message Besties GC (gets a reply)\u2026\">\n              <button type=\"submit\" aria-label=\"Send message\" title=\"Send message\">\u2191</button>\n            </form>\n          </div>\n          <div id=\"modern-game-view\" class=\"smartphone-app-view modern-game-view\" hidden>\n            <div class=\"modern-game-header\"><span>MINI ARCADE</span><span>GLOW RUSH</span></div>\n            <div class=\"modern-game-scorebar\">\n              <span>SCORE <strong id=\"modern-game-score\">00</strong></span>\n              <span>STREAK <strong id=\"modern-game-combo\">x1</strong></span>\n              <span>TIME <strong id=\"modern-game-time\">15</strong>s</span>\n            </div>\n            <div class=\"modern-game-arena\" id=\"modern-game-arena\">\n              <button type=\"button\" id=\"modern-game-target\" class=\"modern-game-target\" aria-label=\"Tap the glowing target\" onclick=\"modernGameTap('normal')\" hidden><span></span></button>\n              <button type=\"button\" id=\"modern-game-bonus\" class=\"modern-game-bonus\" aria-label=\"Tap bonus star\" onclick=\"modernGameTap('bonus')\" hidden>\u2605</button>\n              <div id=\"modern-game-overlay\" class=\"modern-game-overlay\">\n                <span class=\"modern-game-sparkle\" aria-hidden=\"true\"></span>\n                <strong id=\"modern-game-message\">Glow Rush</strong>\n                <p id=\"modern-game-instructions\">Chain fast taps for combo multipliers &amp; catch gold stars (+3)!</p>\n                <button type=\"button\" id=\"modern-game-start\" onclick=\"startModernGame()\">Play 15 seconds</button>\n              </div>\n            </div>\n            <div class=\"modern-game-foot\"><span>Tap orbs (+1\u00d7streak) &amp; \u2605 (+3)</span><span>BEST <strong id=\"modern-game-best\">0</strong></span></div>\n          </div>\n          <div class=\"smartphone-home-indicator\" aria-hidden=\"true\"></div>\n        </div>\n      </div>\n\n      <!-- Today Smartphone Shortcuts -->\n      <div class=\"modern-shortcuts mt-5 max-w-md mx-auto only-now\">\n        <span class=\"modern-shortcuts-label\">Send a quick GC message (triggers live barkada reply)</span>\n        <div class=\"modern-preset-list\">\n          <button type=\"button\" onclick=\"modernUsePreset('Nasa museum na kami \u2014 ikaw, where you at?')\">Where you at?</button>\n          <button type=\"button\" onclick=\"modernUsePreset('Grabe yung 2026 bebot makeup look at P-Pop sa TikTok! \ud83d\udc84')\">Bebot &amp; P-Pop</button>\n          <button type=\"button\" onclick=\"modernUsePreset('Sent na sa GCash! Nood tayo ng PVL livestream mamaya \ud83c\udfd0')\">GCash &amp; PVL</button>\n        </div>\n      </div>"
};

let modernGameInterval = null;
let modernBonusTimeout = null;
let modernGameScore = 0;
let modernGameCombo = 1;
let modernLastTapTime = 0;
let modernGameBest = 0;
let modernReplyIndex = 0;

try {
  modernGameBest = Number(localStorage.getItem('ppc-modern-game-best') || 0);
} catch (e) {
  modernGameBest = 0;
}

const MODERN_REACTIONS = ['❤️', '🔥', '😂', '✨'];

function playModernTone(freq = 880, duration = 0.05, type = 'sine') {
  if (typeof playNokiaTone === 'function') {
    playNokiaTone(freq, duration, type);
  }
}

function setModernMode(mode) {
  if (mode !== 'chat' && mode !== 'game') return;
  const isGame = mode === 'game';
  const chatView = $('modern-chat-view');
  const gameView = $('modern-game-view');
  const chatButton = $('modern-mode-chat-btn');
  const gameButton = $('modern-mode-game-btn');
  if (!chatView || !gameView) return;

  chatView.hidden = isGame;
  gameView.hidden = !isGame;
  chatView.classList.toggle('is-active', !isGame);
  gameView.classList.toggle('is-active', isGame);
  chatButton?.classList.toggle('active', !isGame);
  gameButton?.classList.toggle('active', isGame);
  chatButton?.setAttribute('aria-pressed', String(!isGame));
  gameButton?.setAttribute('aria-pressed', String(isGame));
  if ($('modern-game-best')) $('modern-game-best').textContent = String(modernGameBest);

  if (!isGame) {
    stopModernGame();
    if ($('modern-game-score')) $('modern-game-score').textContent = '00';
    if ($('modern-game-combo')) $('modern-game-combo').textContent = 'x1';
    if ($('modern-game-time')) $('modern-game-time').textContent = '15';
    if ($('modern-game-message')) $('modern-game-message').textContent = 'Glow Rush';
    if ($('modern-game-instructions')) $('modern-game-instructions').textContent = 'Chain fast taps for combo multipliers & catch gold stars (+3)!';
    if ($('modern-game-start')) $('modern-game-start').textContent = 'Play 15 seconds';
  }
}

function toggleModernReaction(msgEl) {
  if (!msgEl) return;
  let badge = msgEl.querySelector('.msg-react-badge');
  if (!badge) {
    badge = document.createElement('span');
    badge.className = 'msg-react-badge';
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
  playModernTone(1080, 0.03, 'sine');
}

function appendModernMessage(text, isIncoming = false, sender = '') {
  const feed = $('modern-chat-feed');
  if (!feed) return;
  const message = document.createElement('div');
  message.className = isIncoming ? 'modern-message modern-message-in' : 'modern-message modern-message-out';
  message.onclick = function () { toggleModernReaction(this); };
  if (isIncoming && sender) {
    const nameEl = document.createElement('span');
    nameEl.className = 'modern-message-name';
    nameEl.textContent = sender;
    message.appendChild(nameEl);
  }
  message.appendChild(document.createTextNode(text));
  const typing = $('modern-typing-indicator') || feed.querySelector('.modern-typing');
  feed.insertBefore(message, typing || null);
  feed.scrollTop = feed.scrollHeight;
}

function triggerModernAutoReply() {
  const replies = (typeof modernAutoReplies !== 'undefined' && modernAutoReplies.length)
    ? modernAutoReplies
    : [{ sender: 'Bea', text: 'G! Kita-kits sa exhibit! ✨' }];
  const reply = replies[modernReplyIndex % replies.length];
  modernReplyIndex += 1;
  const typing = $('modern-typing-indicator') || document.querySelector('#modern-chat-feed .modern-typing');
  if (typing) typing.innerHTML = `<i></i><i></i><i></i> ${reply.sender} is typing…`;

  setTimeout(() => {
    appendModernMessage(reply.text, true, reply.sender);
    playModernTone(960, 0.05, 'sine');
    if (typing) typing.innerHTML = '<i></i><i></i><i></i> Active in GC · Tap any message to react ❤️';
  }, 600);
}

function modernSendMessage(event) {
  event.preventDefault();
  const input = $('modern-message-input');
  const text = input?.value.trim();
  if (!text) return;
  playModernTone(1180, 0.04, 'sine');
  appendModernMessage(text, false);
  input.value = '';
  input.focus();
  triggerModernAutoReply();
}

function modernUsePreset(text) {
  setModernMode('chat');
  playModernTone(1180, 0.04, 'sine');
  appendModernMessage(text, false);
  triggerModernAutoReply();
}

function moveModernGameTarget(el) {
  const target = el || $('modern-game-target');
  if (!target) return;
  target.style.left = `${18 + Math.random() * 64}%`;
  target.style.top = `${18 + Math.random() * 64}%`;
}

function spawnModernBonus() {
  const bonus = $('modern-game-bonus');
  if (!bonus || !modernGameInterval) return;
  moveModernGameTarget(bonus);
  bonus.hidden = false;
  clearTimeout(modernBonusTimeout);
  modernBonusTimeout = setTimeout(() => {
    if (bonus) bonus.hidden = true;
  }, 2200);
}

function startModernGame() {
  stopModernGame();
  modernGameScore = 0;
  modernGameCombo = 1;
  modernLastTapTime = performance.now();
  if ($('modern-game-score')) $('modern-game-score').textContent = '00';
  if ($('modern-game-combo')) $('modern-game-combo').textContent = 'x1';
  if ($('modern-game-time')) $('modern-game-time').textContent = '15';
  if ($('modern-game-overlay')) $('modern-game-overlay').hidden = true;
  const target = $('modern-game-target');
  if (target) {
    target.hidden = false;
    moveModernGameTarget(target);
  }
  playModernTone(920, 0.06, 'sine');

  let secondsLeft = 15;
  modernGameInterval = setInterval(() => {
    secondsLeft -= 1;
    if ($('modern-game-time')) $('modern-game-time').textContent = String(secondsLeft).padStart(2, '0');
    if (secondsLeft % 4 === 0 && secondsLeft > 0) spawnModernBonus();
    if (secondsLeft <= 0) finishModernGame();
  }, 1000);
}

function modernGameTap(kind = 'normal') {
  if (!modernGameInterval) return;
  const now = performance.now();
  if (now - modernLastTapTime < 1050) {
    modernGameCombo = Math.min(4, modernGameCombo + 1);
  } else {
    modernGameCombo = 1;
  }
  modernLastTapTime = now;

  if (kind === 'bonus') {
    modernGameScore += 3;
    playModernTone(1480, 0.07, 'triangle');
    const bonus = $('modern-game-bonus');
    if (bonus) bonus.hidden = true;
  } else {
    modernGameScore += modernGameCombo;
    playModernTone(820 + modernGameCombo * 95, 0.04, 'sine');
    moveModernGameTarget($('modern-game-target'));
  }

  if ($('modern-game-score')) $('modern-game-score').textContent = String(modernGameScore).padStart(2, '0');
  if ($('modern-game-combo')) $('modern-game-combo').textContent = 'x' + modernGameCombo;

  if (modernGameScore > modernGameBest) {
    modernGameBest = modernGameScore;
    try { localStorage.setItem('ppc-modern-game-best', String(modernGameBest)); } catch (e) {}
    if ($('modern-game-best')) $('modern-game-best').textContent = String(modernGameBest);
  }
}

function finishModernGame() {
  stopModernGame();
  playModernTone(660, 0.1, 'sine');
  if ($('modern-game-message')) $('modern-game-message').textContent = 'Round complete!';
  if ($('modern-game-instructions')) $('modern-game-instructions').textContent = `Score: ${modernGameScore} pts (Best: ${modernGameBest}). Play another round?`;
  if ($('modern-game-start')) $('modern-game-start').textContent = 'Play again';
  if ($('modern-game-overlay')) $('modern-game-overlay').hidden = false;
}

function stopModernGame() {
  if (modernGameInterval) clearInterval(modernGameInterval);
  if (modernBonusTimeout) clearTimeout(modernBonusTimeout);
  modernGameInterval = null;
  modernBonusTimeout = null;
  const target = $('modern-game-target');
  const bonus = $('modern-game-bonus');
  const overlay = $('modern-game-overlay');
  if (target) target.hidden = true;
  if (bonus) bonus.hidden = true;
  if (overlay) overlay.hidden = false;
}
