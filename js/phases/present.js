// ============================================================
// PHASE 2: PRESENT INTERACTIVE LOGIC (TODAY / 2020s)
// ------------------------------------------------------------
// Controls the modern 5G Smartphone Besties GC chat interface
// and the Glow Rush 15-second mobile reflex mini-game.
// HTML markup for this phase is in: phases/present.html
// ============================================================
window.PHASE_TEMPLATES = window.PHASE_TEMPLATES || {};
window.PHASE_TEMPLATES.present = {
  hero: "<figure class=\"hero-spotlight only-now\">\n        <img src=\"./images/today-wing-hero.png\" alt=\"An iridescent Y2K museum display featuring a chrome flip phone, smartphone, compact discs, and holographic interfaces\" fetchpriority=\"high\">\n        <div class=\"hero-image-shade\" aria-hidden=\"true\"></div>\n        <figcaption>\n          <span class=\"hero-overline\">TODAY WING &nbsp; / &nbsp; PHILIPPINE POP CULTURE, REBOOTED</span>\n          <h2 class=\"hero-title\">The present looks<br><em>a little familiar.</em></h2>\n          <p>From pocket-sized text threads to world-stage P-pop, explore the 2020s culture bridging our past and what comes next.</p>\n          <div class=\"hero-actions\">\n            <button type=\"button\" onclick=\"openRoom(0)\" class=\"btn btn-pink\">Explore the collection <span aria-hidden=\"true\">\u2197</span></button>\n            <a href=\"#exhibits\" class=\"btn\">Browse exhibits <span aria-hidden=\"true\">\u2193</span></a>\n          </div>\n        </figcaption>\n        <span class=\"hero-index\" aria-hidden=\"true\">01 &nbsp;\u2014&nbsp; 06</span>\n      </figure>",
  relic: "<!-- Today Mode Switcher -->\n      <div class=\"modern-mode-switch only-now\" role=\"group\" aria-label=\"Choose smartphone app\">\n        <button type=\"button\" id=\"modern-mode-chat-btn\" class=\"modern-mode-btn active\" aria-pressed=\"true\" onclick=\"setModernMode('chat')\">Messages</button>\n        <button type=\"button\" id=\"modern-mode-game-btn\" class=\"modern-mode-btn\" aria-pressed=\"false\" onclick=\"setModernMode('game')\">Quick game</button>\n      </div>\n\n      <!-- DEVICE 2: Modern 5G Smartphone (Today / 2020s) -->\n      <div class=\"smartphone-device only-now\">\n        <div class=\"smartphone-screen\">\n          <div class=\"smartphone-status\"><span>9:41</span><span aria-label=\"Full signal, Wi-Fi, battery\">5G &nbsp; \u25b0</span></div>\n          <div id=\"modern-chat-view\" class=\"smartphone-app-view\">\n            <div class=\"modern-chat-header\">\n              <span class=\"modern-contact-avatar\" aria-hidden=\"true\">B</span>\n              <div><strong>Besties GC</strong><span>4 friends \u00b7 active now</span></div>\n              <span class=\"modern-chat-call\" aria-hidden=\"true\">\u2022\u2022\u2022</span>\n            </div>\n            <div class=\"modern-chat-feed\" id=\"modern-chat-feed\" aria-live=\"polite\" aria-label=\"Messages\">\n              <div class=\"modern-chat-date\">TODAY \u00b7 9:38 AM</div>\n              <div class=\"modern-message modern-message-in\"><span class=\"modern-message-name\">Bea</span>Uy, nasa exhibit na kami! Ang ganda ng new phone wing.</div>\n              <div class=\"modern-message modern-message-in\"><span class=\"modern-message-name\">Migs</span>Game tayo after? One quick round lang.</div>\n              <div class=\"modern-message modern-message-out\">On my way! Save me a spot \u2728</div>\n              <span class=\"modern-typing\"><i></i><i></i><i></i> Bea is typing</span>\n            </div>\n            <form class=\"modern-composer\" onsubmit=\"modernSendMessage(event)\">\n              <label class=\"sr-only\" for=\"modern-message-input\">Write a message</label>\n              <input id=\"modern-message-input\" type=\"text\" maxlength=\"220\" autocomplete=\"off\" placeholder=\"Message the group\u2026\">\n              <button type=\"submit\" aria-label=\"Send message\" title=\"Send message\">\u2191</button>\n            </form>\n          </div>\n          <div id=\"modern-game-view\" class=\"smartphone-app-view modern-game-view\" hidden>\n            <div class=\"modern-game-header\"><span>MINI ARCADE</span><span>DAILY PLAY</span></div>\n            <div class=\"modern-game-scorebar\"><span>SCORE <strong id=\"modern-game-score\">00</strong></span><span>TIME <strong id=\"modern-game-time\">15</strong></span></div>\n            <div class=\"modern-game-arena\" id=\"modern-game-arena\">\n              <button type=\"button\" id=\"modern-game-target\" class=\"modern-game-target\" aria-label=\"Tap the glowing target\" onclick=\"modernGameTap()\" hidden><span></span></button>\n              <div id=\"modern-game-overlay\" class=\"modern-game-overlay\">\n                <span class=\"modern-game-sparkle\" aria-hidden=\"true\"></span>\n                <strong id=\"modern-game-message\">Glow Rush</strong>\n                <p id=\"modern-game-instructions\">Tap the light. Chase your high score.</p>\n                <button type=\"button\" id=\"modern-game-start\" onclick=\"startModernGame()\">Play 15 seconds</button>\n              </div>\n            </div>\n            <div class=\"modern-game-foot\"><span>One thumb. One quick round.</span><span>BEST <strong id=\"modern-game-best\">0</strong></span></div>\n          </div>\n          <div class=\"smartphone-home-indicator\" aria-hidden=\"true\"></div>\n        </div>\n      </div>\n\n      <!-- Today Smartphone Shortcuts -->\n      <div class=\"modern-shortcuts mt-5 max-w-md mx-auto only-now\">\n        <span class=\"modern-shortcuts-label\">Try a quick message</span>\n        <div class=\"modern-preset-list\">\n          <button type=\"button\" onclick=\"modernUsePreset('Nasa museum na kami \u2014 ikaw, where you at?')\">Where you at?</button>\n          <button type=\"button\" onclick=\"modernUsePreset('One quick round after this? Game!')\">Game tayo?</button>\n          <button type=\"button\" onclick=\"modernUsePreset('Sent you the pics sa GC!')\">Photo check-in</button>\n        </div>\n      </div>"
};

// ------------------------------------------------------------
// TODAY 5G SMARTPHONE: MESSAGES & GLOW RUSH MINI-GAME (2020s)
// ------------------------------------------------------------
let modernGameInterval = null;
let modernGameScore = 0;
let modernGameBest = 0;

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
  if (!isGame) {
    stopModernGame();
    $('modern-game-score').textContent = '00';
    $('modern-game-time').textContent = '15';
    $('modern-game-message').textContent = 'Glow Rush';
    $('modern-game-instructions').textContent = 'Tap the light. Chase your high score.';
    $('modern-game-start').textContent = 'Play 15 seconds';
  }
}

function appendModernMessage(text) {
  const feed = $('modern-chat-feed');
  if (!feed) return;
  const message = document.createElement('div');
  message.className = 'modern-message modern-message-out';
  message.textContent = text;
  const typing = feed.querySelector('.modern-typing');
  feed.insertBefore(message, typing || null);
  feed.scrollTop = feed.scrollHeight;
}

function modernSendMessage(event) {
  event.preventDefault();
  const input = $('modern-message-input');
  const text = input?.value.trim();
  if (!text) return;
  appendModernMessage(text);
  input.value = '';
  input.focus();
}

function modernUsePreset(text) {
  appendModernMessage(text);
  setModernMode('chat');
}

function moveModernGameTarget() {
  const target = $('modern-game-target');
  if (!target) return;
  target.style.left = `${18 + Math.random() * 64}%`;
  target.style.top = `${18 + Math.random() * 64}%`;
}

function startModernGame() {
  stopModernGame();
  modernGameScore = 0;
  $('modern-game-score').textContent = '00';
  $('modern-game-time').textContent = '15';
  $('modern-game-message').textContent = 'Glow Rush';
  $('modern-game-instructions').textContent = 'Tap the light. Chase your high score.';
  $('modern-game-start').textContent = 'Play 15 seconds';
  $('modern-game-overlay').hidden = true;
  $('modern-game-target').hidden = false;
  moveModernGameTarget();

  let secondsLeft = 15;
  modernGameInterval = setInterval(() => {
    secondsLeft -= 1;
    $('modern-game-time').textContent = String(secondsLeft).padStart(2, '0');
    if (secondsLeft <= 0) finishModernGame();
  }, 1000);
}

function modernGameTap() {
  if (!modernGameInterval) return;
  modernGameScore += 1;
  $('modern-game-score').textContent = String(modernGameScore).padStart(2, '0');
  if (modernGameScore > modernGameBest) {
    modernGameBest = modernGameScore;
    $('modern-game-best').textContent = String(modernGameBest);
  }
  moveModernGameTarget();
}

function finishModernGame() {
  stopModernGame();
  $('modern-game-message').textContent = 'Round complete!';
  $('modern-game-instructions').textContent = `You caught ${modernGameScore} lights. Want another go?`;
  $('modern-game-start').textContent = 'Play again';
  $('modern-game-overlay').hidden = false;
}

function stopModernGame() {
  if (modernGameInterval) clearInterval(modernGameInterval);
  modernGameInterval = null;
  const target = $('modern-game-target');
  const overlay = $('modern-game-overlay');
  if (target) target.hidden = true;
  if (overlay) overlay.hidden = false;
}


