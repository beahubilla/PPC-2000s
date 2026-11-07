// ============================================================
// PHASE 1: PAST INTERACTIVE LOGIC (2000–2010)
// ------------------------------------------------------------
// Nokia 3310 hardware simulator, sound toggle, multi-tap SMS,
// automated 2000s textmate replies, and Snake II canvas game.
// ============================================================
window.PHASE_TEMPLATES = window.PHASE_TEMPLATES || {};
window.PHASE_TEMPLATES.past = {
  hero: "<div class=\"hero-copy only-then\">\n        <span class=\"hero-pill\">\ud83d\udcfc The 2000s Wing \u2022 2000\u20132010</span>\n        <h2 class=\"hero-title\">\n          From <span class=\"grad-text\">Unli-Text &amp; Friendster</span><br>to P-Pop &amp; 8G Horizons\n        </h2>\n        <p class=\"max-w-xl mx-auto text-xs sm:text-sm leading-relaxed text-[var(--muted)] mb-5\">\n          Explore how 2000\u20132010 shaped Philippine pop culture across Social, Economic, Political, Cultural, Environmental, and Sports life.\n        </p>\n        <div class=\"flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-5 sm:mb-6\">\n          <button type=\"button\" onclick=\"openRoom(0)\" class=\"btn btn-pink\">\ud83d\udeaa Start the tour</button>\n          <a href=\"#exhibits\" class=\"btn\">Browse exhibits \u2193</a>\n          <button type=\"button\" onclick=\"openMap()\" class=\"btn\">\ud83d\uddfa\ufe0f Floor map</button>\n        </div>\n      </div>",
  relic: "<!-- 2000s Mode Switcher -->\n      <div class=\"flex justify-center items-center gap-2 mb-4 only-then\">\n        <div class=\"seg max-w-xs shadow-[3px_3px_0_var(--ink)]\">\n          <button type=\"button\" id=\"nokia-mode-sms-btn\" onclick=\"setNokiaMode('sms')\" class=\"seg-btn active\">\ud83d\udcac SMS Text</button>\n          <button type=\"button\" id=\"nokia-mode-snake-btn\" onclick=\"setNokiaMode('snake')\" class=\"seg-btn\">\ud83d\udc0d Snake II</button>\n        </div>\n        <button type=\"button\" id=\"nokia-sound-btn\" onclick=\"toggleNokiaSound()\" class=\"btn btn-sm\" title=\"Toggle Nokia keypad &amp; SMS tones\" aria-label=\"Toggle Nokia sound\">\ud83d\udd0a</button>\n      </div>\n\n      <!-- DEVICE 1: Nokia 3310 Phone Hardware (2000s) -->\n      <div class=\"nokia-phone-case only-then\">\n        <div class=\"nokia-faceplate\">\n          <div class=\"nokia-speaker\" aria-hidden=\"true\"></div>\n          <div class=\"nokia-brand\">NOKIA</div>\n          <div class=\"nokia-screen-frame\">\n            <div class=\"nokia-lcd\">\n\n              <!-- VIEW 1: SMS SCREEN -->\n              <div id=\"nokia-sms-view\" class=\"nokia-view\">\n                <div class=\"nokia-status-bar\" aria-hidden=\"true\">\n                  <div class=\"nokia-signal\" title=\"Signal Strength\">\n                    <span class=\"bar b1\"></span><span class=\"bar b2\"></span><span class=\"bar b3\"></span><span class=\"bar b4\"></span>\n                  </div>\n                  <div class=\"nokia-operator\" id=\"nokia-operator-label\">SMART-PH</div>\n                  <div class=\"nokia-battery\" title=\"Battery Meter\">\n                    <span class=\"bar b1\"></span><span class=\"bar b2\"></span><span class=\"bar b3\"></span><span class=\"bar b4\"></span>\n                  </div>\n                </div>\n                <div class=\"nokia-screen-content\" id=\"nokia-screen\">\"D2 na me, wer na u? txt bck asap! &lt;3\"</div>\n                <div class=\"nokia-screen-foot\">\n                  <span onclick=\"nokiaNaviPress()\" class=\"cursor-pointer font-bold underline\" title=\"Send SMS &amp; get a txtmate reply\">Send (Navi)</span>\n                  <span class=\"nokia-char-count\"><span id=\"sms-count\">36</span>/160</span>\n                  <span onclick=\"nokiaBackspace()\" class=\"cursor-pointer\">Clear (C)</span>\n                </div>\n              </div>\n\n              <!-- VIEW 2: SNAKE GAME SCREEN -->\n              <div id=\"nokia-snake-view\" class=\"nokia-view hidden\">\n                <div class=\"nokia-status-bar\" aria-hidden=\"true\">\n                  <span class=\"font-bold\">SNAKE II</span>\n                  <span id=\"snake-score-display\">SCR: 0</span>\n                  <span id=\"snake-hi-display\">HI: 0</span>\n                </div>\n                <div class=\"nokia-snake-canvas-wrap\">\n                  <canvas id=\"snake-canvas\" width=\"160\" height=\"96\"></canvas>\n                  <div id=\"snake-overlay\" class=\"snake-overlay\">\n                    <div id=\"snake-msg\">PRESS NAVI TO PLAY</div>\n                    <div class=\"snake-sub-msg\">Keys: 2=\u25b2 4=\u25c0 6=\u25b6 8=\u25bc</div>\n                  </div>\n                </div>\n                <div class=\"nokia-screen-foot\">\n                  <span onclick=\"setNokiaMode('sms')\" class=\"cursor-pointer\">Exit (C)</span>\n                  <span id=\"snake-status-text\">Ready</span>\n                  <span onclick=\"toggleSnakePlay()\" class=\"cursor-pointer font-bold\">Navi=Play</span>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          <!-- Functional Navigation Keys -->\n          <div class=\"nokia-nav-controls\">\n            <button type=\"button\" class=\"nokia-key-c\" onclick=\"nokiaBackspace()\" title=\"Delete character or Exit game\" aria-label=\"Clear or Exit\">C</button>\n            <button type=\"button\" class=\"nokia-key-navi\" onclick=\"nokiaNaviPress()\" title=\"Navi Key: Send SMS (gets a reply!) or Start Snake\" aria-label=\"Navi Key\">\n              <span></span>\n            </button>\n            <div class=\"nokia-scroll-rocker\">\n              <button type=\"button\" class=\"nokia-scroll-arrow\" onclick=\"nokiaScroll(-1)\" title=\"Up arrow\" aria-label=\"Up\">\u25b2</button>\n              <button type=\"button\" class=\"nokia-scroll-arrow\" onclick=\"nokiaScroll(1)\" title=\"Down arrow\" aria-label=\"Down\">\u25bc</button>\n            </div>\n          </div>\n\n          <!-- 3x4 Numeric Keypad -->\n          <div class=\"nokia-keypad\">\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('1')\"><span class=\"num\">1</span><span class=\"sub\">. , ?</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('2')\" title=\"Key 2: Up in Snake\"><span class=\"num\">2</span><span class=\"sub\">abc \u25b2</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('3')\"><span class=\"num\">3</span><span class=\"sub\">def</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('4')\" title=\"Key 4: Left in Snake\"><span class=\"num\">4</span><span class=\"sub\">ghi \u25c0</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('5')\"><span class=\"num\">5</span><span class=\"sub\">jkl</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('6')\" title=\"Key 6: Right in Snake\"><span class=\"num\">6</span><span class=\"sub\">mno \u25b6</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('7')\"><span class=\"num\">7</span><span class=\"sub\">pqrs</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('8')\" title=\"Key 8: Down in Snake\"><span class=\"num\">8</span><span class=\"sub\">tuv \u25bc</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('9')\"><span class=\"num\">9</span><span class=\"sub\">wxyz</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('*')\"><span class=\"num\">*</span><span class=\"sub\">+</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('0')\"><span class=\"num\">0</span><span class=\"sub\">\u2423</span></button>\n            <button type=\"button\" class=\"nokia-btn\" onclick=\"nokiaKeyPress('#')\"><span class=\"num\">#</span><span class=\"sub\">\u21e7</span></button>\n          </div>\n        </div>\n      </div>\n\n      <!-- 2000s Nokia Shortcuts -->\n      <div class=\"phone-shortcuts mt-5 max-w-md mx-auto only-then\">\n        <div class=\"grid grid-cols-2 gap-2 sm:gap-2.5 mb-2.5\">\n          <button type=\"button\" onclick=\"changeSms('txt_clan')\" class=\"btn btn-sm text-center leading-tight\">\ud83d\udcf1 Text Clan Invite</button>\n          <button type=\"button\" onclick=\"changeSms('edsa2')\" class=\"btn btn-sm text-center leading-tight\">\ud83d\udce2 EDSA II Chain Msg</button>\n          <button type=\"button\" onclick=\"changeSms('gm')\" class=\"btn btn-sm text-center leading-tight\">\ud83c\udf05 2007 Group Message</button>\n          <button type=\"button\" onclick=\"changeSms('jejemon')\" class=\"btn btn-sm text-center leading-tight\">\ud83e\udde2 Jejemon Greeting</button>\n        </div>\n        <div class=\"flex justify-center mb-3\">\n          <button type=\"button\" onclick=\"nokiaNaviPress()\" class=\"btn btn-pink btn-sm\">\ud83d\udce8 Send SMS &amp; Get Textmate Reply</button>\n        </div>\n\n        <details class=\"keyboard-tray bg-white rounded-xl border-2 border-[var(--ink)] p-3 text-xs shadow-[3px_3px_0_var(--ink)]\">\n          <summary class=\"font-bold cursor-pointer text-[var(--muted)] hover:text-[var(--ink)] select-none\">\n            \u2328\ufe0f Type using your device's keyboard\n          </summary>\n          <div class=\"mt-2.5\">\n            <textarea id=\"sms-input\" maxlength=\"160\" rows=\"2\" oninput=\"onSmsInput()\"\n                      placeholder=\"Type your own 2000s text here\u2026\"\n                      class=\"w-full p-2 border-2 border-[var(--ink)] rounded-lg text-xs bg-[#fffdf5] focus:outline-none focus:border-[var(--pink)]\"\n                      aria-label=\"Type message\"></textarea>\n            <div class=\"flex justify-between items-center mt-1 text-[11px] text-[var(--muted)]\">\n              <span>Press Navi or Send to receive a 2000s reply</span>\n              <button type=\"button\" onclick=\"clearSms()\" class=\"text-red-500 hover:underline font-bold\">Clear text</button>\n            </div>\n          </div>\n        </details>\n      </div>"
};

let nokiaMode = 'sms';
let nokiaSoundEnabled = true;
let currentSmsText = typeof smsDefault !== 'undefined' ? smsDefault : '"D2 na me, wer na u? txt bck asap! <3"';
let lastKey = null;
let keyIndex = 0;
let keyTimer = null;
let nokiaReplyIndex = 0;
let nokiaReplyTimeout = null;

const nokiaKeyMap = {
  '1': ['.', ',', '?', '!', '1', '-', '@'],
  '2': ['a', 'b', 'c', '2'],
  '3': ['d', 'e', 'f', '3'],
  '4': ['g', 'h', 'i', '4'],
  '5': ['j', 'k', 'l', '5'],
  '6': ['m', 'n', 'o', '6'],
  '7': ['p', 'q', 'r', 's', '7'],
  '8': ['t', 'u', 'v', '8'],
  '9': ['w', 'x', 'y', 'z', '9'],
  '0': [' ', '0'],
  '*': ['*', '+', '<', '>', '#'],
  '#': ['#', '\n']
};

function toggleNokiaSound() {
  nokiaSoundEnabled = !nokiaSoundEnabled;
  const btn = $('nokia-sound-btn');
  if (btn) btn.textContent = nokiaSoundEnabled ? '🔊' : '🔇';
  if (nokiaSoundEnabled) playNokiaTone(960, 0.05);
}

function playNokiaTone(freq = 900, duration = 0.05, type = 'square') {
  if (!nokiaSoundEnabled) return;
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
  } catch (e) { /* audio disabled */ }
}

function playNokiaSmsRingtone() {
  if (!nokiaSoundEnabled) return;
  playNokiaTone(1318, 0.07, 'square');
  setTimeout(() => playNokiaTone(1318, 0.07, 'square'), 110);
  setTimeout(() => playNokiaTone(1318, 0.07, 'square'), 320);
  setTimeout(() => playNokiaTone(1318, 0.07, 'square'), 430);
}

function setNokiaMode(mode) {
  nokiaMode = mode;
  const smsView = $('nokia-sms-view');
  const snakeView = $('nokia-snake-view');
  const smsBtn = $('nokia-mode-sms-btn');
  const snakeBtn = $('nokia-mode-snake-btn');
  if (!smsView || !snakeView) return;

  if (mode === 'snake') {
    smsView.classList.add('hidden');
    snakeView.classList.remove('hidden');
    if (smsBtn) smsBtn.classList.remove('active');
    if (snakeBtn) snakeBtn.classList.add('active');
    initSnake();
    playNokiaTone(600, 0.08);
  } else {
    snakeView.classList.add('hidden');
    smsView.classList.remove('hidden');
    if (smsBtn) smsBtn.classList.add('active');
    if (snakeBtn) snakeBtn.classList.remove('active');
    stopSnake();
    playNokiaTone(850, 0.05);
  }
}

function updateSmsDisplay(text) {
  currentSmsText = String(text || '').slice(0, 160);
  const screen = $('nokia-screen');
  const counter = $('sms-count');
  const input = $('sms-input');
  const op = $('nokia-operator-label');
  if (op) op.textContent = 'SMART-PH';
  if (screen) screen.textContent = currentSmsText || ' ';
  if (counter) counter.textContent = currentSmsText.length;
  if (input && input.value !== currentSmsText) input.value = currentSmsText;
}

function nokiaKeyPress(key) {
  if (nokiaMode === 'snake') {
    handleSnakeKey(key);
    return;
  }
  playNokiaTone(700 + (parseInt(key, 10) || 1) * 45);
  const chars = nokiaKeyMap[key];
  if (!chars) return;

  if (lastKey === key && keyTimer) {
    clearTimeout(keyTimer);
    keyIndex = (keyIndex + 1) % chars.length;
    currentSmsText = currentSmsText.slice(0, -1) + chars[keyIndex];
  } else {
    if (currentSmsText.length >= 160) return;
    keyIndex = 0;
    currentSmsText += chars[keyIndex];
  }

  lastKey = key;
  updateSmsDisplay(currentSmsText);
  keyTimer = setTimeout(() => { lastKey = null; keyTimer = null; }, 800);
}

function nokiaBackspace() {
  if (nokiaMode === 'snake') {
    setNokiaMode('sms');
    return;
  }
  playNokiaTone(420);
  if (keyTimer) {
    clearTimeout(keyTimer);
    keyTimer = null;
    lastKey = null;
  }
  currentSmsText = currentSmsText.slice(0, -1);
  updateSmsDisplay(currentSmsText);
}

function nokiaNaviPress() {
  if (nokiaMode === 'snake') {
    toggleSnakePlay();
    return;
  }
  const screen = $('nokia-screen');
  const op = $('nokia-operator-label');
  if (!screen) return;

  clearTimeout(nokiaReplyTimeout);
  playNokiaTone(1200, 0.06);
  setTimeout(() => playNokiaTone(1480, 0.08), 80);

  if (op) op.textContent = 'SENDING…';
  screen.textContent = '📨 Sending message…';

  nokiaReplyTimeout = setTimeout(() => {
    if (op) op.textContent = '✓ SENT';
    screen.textContent = '✓ Message Sent!';
    nokiaReplyTimeout = setTimeout(() => {
      const replies = (typeof nokiaAutoReplies !== 'undefined' && nokiaAutoReplies.length)
        ? nokiaAutoReplies
        : ['"Fr: BeA_2002\nD2 na kmi sa SM MOA! Txt bck asap!"'];
      const reply = replies[nokiaReplyIndex % replies.length];
      nokiaReplyIndex += 1;
      playNokiaSmsRingtone();
      if (op) op.textContent = '📩 1 NEW MSG';
      screen.textContent = reply;
      const counter = $('sms-count');
      if (counter) counter.textContent = reply.length;
    }, 850);
  }, 450);
}

function nokiaScroll(dir) {
  if (nokiaMode === 'snake') {
    if (dir < 0) snakeChangeDir(0, -1);
    else snakeChangeDir(0, 1);
    return;
  }
  playNokiaTone(800);
  const screen = $('nokia-screen');
  if (screen) screen.scrollTop += dir * 25;
}

function changeSms(key) {
  if (nokiaMode === 'snake') setNokiaMode('sms');
  if (typeof smsData === 'undefined' || !smsData[key]) return;
  clearTimeout(nokiaReplyTimeout);
  playNokiaTone(980);
  updateSmsDisplay(smsData[key]);
}

function onSmsInput() {
  const input = $('sms-input');
  if (input) updateSmsDisplay(input.value);
}

function clearSms() {
  clearTimeout(nokiaReplyTimeout);
  playNokiaTone(350);
  updateSmsDisplay('');
}

// ------------------------------------------------------------
// NOKIA 3310 SNAKE II ENGINE
// ------------------------------------------------------------
const SNAKE_COLS = 20;
const SNAKE_ROWS = 12;
const CELL_SIZE = 8;
let snakeCanvas, snakeCtx;
let snakeLoop = null;
let snakeRunning = false;
let snakeScore = 0;
let snakeHighScore = 0;
let snake = [];
let snakeDir = { x: 1, y: 0 };
let snakeNextDir = { x: 1, y: 0 };
let snakeFood = { x: 10, y: 5 };

function initSnake() {
  snakeCanvas = $('snake-canvas');
  if (!snakeCanvas) return;
  snakeCtx = snakeCanvas.getContext('2d');
  try {
    snakeHighScore = Number(window.localStorage.getItem('nokia_snake_hi') || 0);
  } catch (e) {
    snakeHighScore = 0;
  }
  if ($('snake-hi-display')) $('snake-hi-display').textContent = `HI: ${snakeHighScore}`;
  resetSnakeGame();
  drawSnake();
}

function resetSnakeGame() {
  snake = [{ x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }];
  snakeDir = { x: 1, y: 0 };
  snakeNextDir = { x: 1, y: 0 };
  snakeScore = 0;
  if ($('snake-score-display')) $('snake-score-display').textContent = 'SCR: 0';
  spawnSnakeFood();
}

function spawnSnakeFood() {
  let valid = false;
  while (!valid) {
    const fx = Math.floor(Math.random() * SNAKE_COLS);
    const fy = Math.floor(Math.random() * SNAKE_ROWS);
    if (!snake.some(s => s.x === fx && s.y === fy)) {
      snakeFood = { x: fx, y: fy };
      valid = true;
    }
  }
}

function toggleSnakePlay() {
  if (snakeRunning) pauseSnake();
  else startSnake();
}

function currentSnakeDelay() {
  return Math.max(75, 130 - Math.floor(snakeScore / 30) * 10);
}

function startSnake() {
  if (snakeRunning) return;
  const overlay = $('snake-overlay');
  if (overlay) overlay.classList.add('hidden');
  if ($('snake-status-text')) $('snake-status-text').textContent = 'Playing';
  snakeRunning = true;
  playNokiaTone(900, 0.08);
  if (snakeLoop) clearInterval(snakeLoop);
  snakeLoop = setInterval(updateSnakeStep, currentSnakeDelay());
}

function pauseSnake() {
  snakeRunning = false;
  if (snakeLoop) clearInterval(snakeLoop);
  if ($('snake-status-text')) $('snake-status-text').textContent = 'Paused';
  const overlay = $('snake-overlay');
  if ($('snake-msg')) $('snake-msg').textContent = 'PAUSED';
  if (overlay) overlay.classList.remove('hidden');
}

function stopSnake() {
  snakeRunning = false;
  if (snakeLoop) clearInterval(snakeLoop);
}

function snakeDie() {
  stopSnake();
  playNokiaTone(200, 0.25, 'sawtooth');
  setTimeout(() => playNokiaTone(140, 0.35, 'sawtooth'), 120);

  if (snakeScore > snakeHighScore) {
    snakeHighScore = snakeScore;
    try { localStorage.setItem('nokia_snake_hi', snakeHighScore); } catch (e) {}
    if ($('snake-hi-display')) $('snake-hi-display').textContent = `HI: ${snakeHighScore}`;
  }

  if ($('snake-status-text')) $('snake-status-text').textContent = 'Game Over';
  if ($('snake-msg')) $('snake-msg').textContent = `GAME OVER! (${snakeScore})`;
  if ($('snake-overlay')) $('snake-overlay').classList.remove('hidden');
  resetSnakeGame();
}

function updateSnakeStep() {
  snakeDir = snakeNextDir;
  const head = { x: snake[0].x + snakeDir.x, y: snake[0].y + snakeDir.y };

  if (head.x < 0 || head.x >= SNAKE_COLS || head.y < 0 || head.y >= SNAKE_ROWS) {
    snakeDie();
    return;
  }
  if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    snakeDie();
    return;
  }

  snake.unshift(head);

  if (head.x === snakeFood.x && head.y === snakeFood.y) {
    snakeScore += 10;
    if ($('snake-score-display')) $('snake-score-display').textContent = `SCR: ${snakeScore}`;
    playNokiaTone(1250, 0.04);
    spawnSnakeFood();
    if (snakeRunning) {
      clearInterval(snakeLoop);
      snakeLoop = setInterval(updateSnakeStep, currentSnakeDelay());
    }
  } else {
    snake.pop();
  }

  drawSnake();
}

function drawSnake() {
  if (!snakeCtx) return;
  snakeCtx.fillStyle = '#9cad57';
  snakeCtx.fillRect(0, 0, 160, 96);
  snakeCtx.fillStyle = '#172207';
  snake.forEach(pt => {
    snakeCtx.fillRect(pt.x * CELL_SIZE + 0.5, pt.y * CELL_SIZE + 0.5, CELL_SIZE - 1, CELL_SIZE - 1);
  });
  snakeCtx.fillRect(snakeFood.x * CELL_SIZE + 1.5, snakeFood.y * CELL_SIZE + 1.5, CELL_SIZE - 3, CELL_SIZE - 3);
}

function snakeChangeDir(dx, dy) {
  if (snakeDir.x === -dx && snakeDir.y === -dy) return;
  snakeNextDir = { x: dx, y: dy };
  playNokiaTone(750, 0.02);
}

function handleSnakeKey(key) {
  if (!snakeRunning && key !== '5') startSnake();
  if (key === '2') snakeChangeDir(0, -1);
  else if (key === '8') snakeChangeDir(0, 1);
  else if (key === '4') snakeChangeDir(-1, 0);
  else if (key === '6') snakeChangeDir(1, 0);
  else if (key === '5') toggleSnakePlay();
}
