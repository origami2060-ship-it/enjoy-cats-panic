// --- 多言語辞書データ (13カ国語) ---
const i18n = {
    ja: { desc: '矢印キー or<br>画面パッドで<br>移動して<br>陣地を<br>75%以上<br>奪い取れ！', startMsg: '画面をクリックして戦闘開始！', link: 'ゲーム説明はこちら', battleStart: '戦闘開始！', clear: '完全勝利！', next: 'クリック または Enterキー で次のステージへ', defeat: '敗北⋯', retry: 'クリック または Enterキー でリトライ', allClear: '全ステージクリア！！', thanks: '遊んでくれてありがとう！', freeTime: '結構暇なんだな！', restart: 'クリック または Enterキー で最初から', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'チャンネル登録はこちら' },
    en: { desc: 'Move with<br>arrow keys<br>or D-pad<br>and capture<br>75%+<br>of the area!', startMsg: 'Click screen to start battle!', link: 'Game Instructions Here', battleStart: 'Battle Start!', clear: 'Perfect Victory!', next: 'Click or press Enter for next stage', defeat: 'Defeat...', retry: 'Click or press Enter to retry', allClear: 'All Stages Cleared!!', thanks: 'Thanks for playing!', freeTime: 'You must have a lot of free time!', restart: 'Click or press Enter to restart', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Subscribe here' },
    ko: { desc: '방향키나<br>패드로<br>이동하여<br>75% 이상<br>영토를<br>차지하세요!', startMsg: '화면을 클릭하여 전투 시작!', link: '게임 설명은 여기를 클릭', battleStart: '전투 시작!', clear: '완전 승리!', next: '클릭 또는 Enter 키로 다음 스테이지로', defeat: '패배...', retry: '클릭 또는 Enter 키로 재시도', allClear: '모든 스테이지 클리어!!', thanks: '플레이해주셔서 감사합니다!', freeTime: '시간이 참 많으신가 보네요!', restart: '클릭 또는 Enter 키로 처음부터', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: '구독하기' },
    'zh-tw': { desc: '使用方向鍵<br>或搖桿移動<br>佔領<br>75%以上的<br>領地！', startMsg: '點擊螢幕開始戰鬥！', link: '遊戲說明請點此', battleStart: '戰鬥開始！', clear: '完全勝利！', next: '點擊或按 Enter 鍵進入下一關', defeat: '敗北⋯', retry: '點擊或按 Enter 鍵重試', allClear: '全關卡破關！！', thanks: '感謝遊玩！', freeTime: '看來你真的很閒呢！', restart: '點擊或按 Enter 鍵從頭開始', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: '訂閱本頻道' },
    es: { desc: '¡Muévete con<br>flechas o pad<br>y captura<br>el 75%+<br>del área!', startMsg: '¡Haz clic para iniciar!', link: 'Instrucciones aquí', battleStart: '¡Empieza la batalla!', clear: '¡Victoria perfecta!', next: 'Haz clic o Enter para la siguiente fase', defeat: 'Derrota...', retry: 'Haz clic o Enter para reintentar', allClear: '¡Todas las fases superadas!', thanks: '¡Gracias por jugar!', freeTime: '¡Debes tener mucho tiempo libre!', restart: 'Haz clic o Enter para reiniciar', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Suscríbete aquí' },
    pt: { desc: 'Mova com<br>as setas<br>ou pad<br>e capture<br>75%+<br>da área!', startMsg: 'Clique na tela para começar!', link: 'Instruções do jogo aqui', battleStart: 'Batalha começou!', clear: 'Vitória Perfeita!', next: 'Clique ou Enter para próxima fase', defeat: 'Derrota...', retry: 'Clique ou Enter para tentar de novo', allClear: 'Todas as fases concluídas!!', thanks: 'Obrigado por jogar!', freeTime: 'Você deve ter muito tempo livre!', restart: 'Clique ou Enter para recomeçar', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Inscreva-se aqui' },
    fr: { desc: 'Utilisez<br>les flèches<br>ou le pad<br>pour capturer<br>75%+ !', startMsg: 'Cliquez pour commencer !', link: 'Instructions du jeu ici', battleStart: 'Début du combat !', clear: 'Victoire parfaite !', next: 'Cliquez ou Entrée pour la suite', defeat: 'Défaite...', retry: 'Cliquez ou Entrée pour réessayer', allClear: 'Toutes les étapes terminées !!', thanks: 'Merci d\'avoir joué !', freeTime: 'Vous avez beaucoup de temps libre !', restart: 'Cliquez ou Entrée pour recommencer', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Abonnez-vous ici' },
    de: { desc: 'Bewege dich<br>mit Pfeilen<br>und erobere<br>75%+<br>der Fläche!', startMsg: 'Klicke zum Starten!', link: 'Spielanleitung hier', battleStart: 'Kampfbeginn!', clear: 'Perfekter Sieg!', next: 'Klicken oder Enter für nächste Stufe', defeat: 'Niederlage...', retry: 'Klicken oder Enter für Neustart', allClear: 'Alle Stufen abgeschlossen!!', thanks: 'Danke fürs Spielen!', freeTime: 'Du hast wohl viel Freizeit!', restart: 'Klicken oder Enter für Neustart', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Hier abonnieren' },
    it: { desc: 'Muoviti<br>con i tasti<br>e cattura<br>il 75%+<br>dell\'area!', startMsg: 'Clicca per iniziare!', link: 'Istruzioni qui', battleStart: 'Inizio battaglia!', clear: 'Vittoria perfetta!', next: 'Clicca o Invio per il prossimo livello', defeat: 'Sconfitta...', retry: 'Clicca o Invio per riprovare', allClear: 'Tutti i livelli completati!!', thanks: 'Grazie per aver giocato!', freeTime: 'Devi avere molto tempo libero!', restart: 'Clicca o Invio per ricominciare', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Iscriviti qui' },
    id: { desc: 'Bergerak<br>dan rebut<br>75%+<br>area<br>permainan!', startMsg: 'Klik layar untuk mulai!', link: 'Cara bermain di sini', battleStart: 'Pertarungan Mulai!', clear: 'Kemenangan Sempurna!', next: 'Klik atau Enter ke stage berikutnya', defeat: 'Kalah...', retry: 'Klik atau Enter untuk mencoba lagi', allClear: 'Semua Stage Selesai!!', thanks: 'Terima kasih sudah bermain!', freeTime: 'Kamu pasti punya banyak waktu luang!', restart: 'Klik atau Enter untuk mengulang', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Berlangganan di sini' },
    th: { desc: 'ยึดพื้นที่<br>ให้ได้<br>75%+<br>ด้วยปุ่ม<br>ลูกศร!', startMsg: 'คลิกเพื่อเริ่มการต่อสู้!', link: 'คำอธิบายเกมอยู่ที่นี่', battleStart: 'เริ่มการต่อสู้!', clear: 'ชนะอย่างสมบูรณ์แบบ!', next: 'คลิกหรือกด Enter เพื่อไปด่านต่อไป', defeat: 'พ่ายแพ้...', retry: 'คลิกหรือกด Enter เพื่อลองใหม่', allClear: 'เคลียร์ทุกด่านแล้ว!!', thanks: 'ขอบคุณที่เล่นนะ!', freeTime: 'สงสัยจะว่างมากสิท่า!', restart: 'คลิกหรือกด Enter เพื่อเริ่มใหม่', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'กดติดตามที่นี่' },
    vi: { desc: 'Di chuyển<br>và chiếm<br>75%+<br>diện tích<br>màn chơi!', startMsg: 'Nhấn để bắt đầu!', link: 'Hướng dẫn trò chơi', battleStart: 'Trận chiến bắt đầu!', clear: 'Chiến thắng hoàn hảo!', next: 'Nhấn hoặc Enter cho màn tiếp theo', defeat: 'Thất bại...', retry: 'Nhấn hoặc Enter để thử lại', allClear: 'Hoàn thành tất cả màn!!', thanks: 'Cảm ơn bạn đã chơi!', freeTime: 'Chắc bạn có nhiều thời gian rảnh lắm!', restart: 'Nhấn hoặc Enter để chơi lại', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Đăng ký tại đây' },
    ru: { desc: 'Двигайтесь<br>и захватите<br>75%+<br>всей<br>территории!', startMsg: 'Кликните для начала!', link: 'Инструкции к игре здесь', battleStart: 'Бой начинается!', clear: 'Идеальная победа!', next: 'Клик или Enter для следующего уровня', defeat: 'Поражение...', retry: 'Клик или Enter для повтора', allClear: 'Все уровни пройдены!!', thanks: 'Спасибо за игру!', freeTime: 'У тебя, видимо, много свободного времени!', restart: 'Клик или Enter для перезапуска', stage: 'Stage', area: 'Area', goal: 'Goal', time: 'Time', subscribe: 'Подписаться' }
};

let rawLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
let userLang = 'en'; 

if (rawLang.startsWith('ja')) userLang = 'ja';
else if (rawLang.startsWith('ko')) userLang = 'ko';
else if (rawLang.includes('zh-tw') || rawLang.includes('zh-hk') || rawLang.includes('zh-hant') || rawLang.startsWith('zh')) userLang = 'zh-tw';
else if (rawLang.startsWith('es')) userLang = 'es';
else if (rawLang.startsWith('pt')) userLang = 'pt';
else if (rawLang.startsWith('fr')) userLang = 'fr';
else if (rawLang.startsWith('de')) userLang = 'de';
else if (rawLang.startsWith('it')) userLang = 'it';
else if (rawLang.startsWith('id')) userLang = 'id';
else if (rawLang.startsWith('th')) userLang = 'th';
else if (rawLang.startsWith('vi')) userLang = 'vi';
else if (rawLang.startsWith('ru')) userLang = 'ru';

const t = i18n[userLang];

function getFontFamily(weight = 'normal') {
    const latinLangs = ['ja', 'en', 'es', 'pt', 'fr', 'de', 'it', 'id'];
    if (latinLangs.includes(userLang)) {
        if (weight === 'bold') return '"Dela Gothic One", "Reggae One", sans-serif';
        if (weight === 'rough') return '"Yusei Magic", sans-serif';
    }
    return 'sans-serif'; 
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

const stageDisplay = document.getElementById('stageDisplay');
const areaDisplay = document.getElementById('areaDisplay');
const goalDisplay = document.getElementById('goalDisplay');
const startScreen = document.getElementById('startScreen');

const audioElements = {
    bgm: document.getElementById('bgm'), start: document.getElementById('audioStart'), clear: document.getElementById('audioClear'),
    over: document.getElementById('audioGameOver'), allClear: document.getElementById('audioAllClear'),
    capture: document.getElementById('audioCapture'), shock: document.getElementById('audioShock') 
};

const startLogoImg = new Image(); startLogoImg.src = './assets/start_logo.png'; 
const endingImg = new Image(); endingImg.src = './assets/Ending.png'; 

let gameState = 'start_screen'; 
let currentPercentage = 0; 
let currentStageIndex = 0;
let animationFrameCount = 0;

const stages = [ { goal: 75, enemySpeed: 3 }, { goal: 75, enemySpeed: 5 }, { goal: 75, enemySpeed: 6 } ];
let currentBgImg = new Image(); let stageImageData = null;

const characterAssets = {
    player: { images: [], isLoaded: false, lastDirection: 'right' },
    currentEnemy: { images: [], isLoaded: false, charId: 'a', lastDirection: 'right' }
};

const player = { x: 0, y: 0, size: 60, speed: 3, color: '#00f', isDrawing: false, path: [] };
const enemy = { x: 0, y: 0, size: 80, speedX: 0, speedY: 0, color: '#f00' };

const gridWidth = 800; const gridHeight = 600; 
const grid = new Uint8Array(gridWidth * gridHeight);
let totalPlayablePixels = 0; const margin = 35; 

const bgCanvas = document.createElement('canvas'); bgCanvas.width = gridWidth; bgCanvas.height = gridHeight;
const bgCtx = bgCanvas.getContext('2d'); let bgImageData = bgCtx.createImageData(gridWidth, gridHeight);

let gameStartTime = 0; let totalElapsedTime = 0; let timerInterval = null;

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    gameStartTime = Date.now() - totalElapsedTime;
    timerInterval = setInterval(() => {
        if (['playing', 'stage_start_anim', 'clear'].includes(gameState)) {
            totalElapsedTime = Date.now() - gameStartTime; updateTimerDisplay();
        }
    }, 200);
}
function stopTimer() { if (timerInterval) clearInterval(timerInterval); timerInterval = null; }
function resetTimer() { totalElapsedTime = 0; updateTimerDisplay(); }
function updateTimerDisplay() {
    let totalSeconds = Math.floor(totalElapsedTime / 1000);
    let m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    let s = (totalSeconds % 60).toString().padStart(2, '0');
    let timeStr = `${m}:${s}`;
    let el = document.getElementById('timeDisplay'); if (el) el.innerText = timeStr;
    return timeStr; 
}

function renderGridToBg() {
    for (let i = 0; i < grid.length; i++) {
        let idx = i * 4;
        if (grid[i] === 0) {
            if (stageImageData) { bgImageData.data[idx] = stageImageData.data[idx]; bgImageData.data[idx+1] = stageImageData.data[idx+1]; bgImageData.data[idx+2] = stageImageData.data[idx+2]; } 
            else { bgImageData.data[idx] = 0; bgImageData.data[idx+1] = 0; bgImageData.data[idx+2] = 128; }
            bgImageData.data[idx+3] = 255;
        } else if (grid[i] === 3) { bgImageData.data[idx] = 0; bgImageData.data[idx+1] = 0; bgImageData.data[idx+2] = 255; bgImageData.data[idx+3] = 255; } 
        else if (grid[i] === 4) { bgImageData.data[idx] = 255; bgImageData.data[idx+1] = 255; bgImageData.data[idx+2] = 255; bgImageData.data[idx+3] = 255; } 
        else { bgImageData.data[idx] = 0; bgImageData.data[idx+1] = 0; bgImageData.data[idx+2] = 0; bgImageData.data[idx+3] = 255; }
    }
    bgCtx.putImageData(bgImageData, 0, 0);
}

const STATE_SOUNDS_CONFIG = { start: 'start_game', clear: 'stage_clear', over: 'game_over', all_clear: 'all_clear', capture: 'capture', shock: 'shock' };
function formatStageNumber(num) { return String(num + 1).padStart(2, '0'); }
function setupStageBGM(index) { const bgm = audioElements.bgm; if (!bgm) return; let numStr = formatStageNumber(index); bgm.src = `./assets/bgm${numStr}.mp3`; bgm.load(); }
function stopBGM() { if (audioElements.bgm) { audioElements.bgm.pause(); audioElements.bgm.currentTime = 0; } }
function stopAllSounds() { Object.values(audioElements).forEach(el => { if (!el) return; el.pause(); el.currentTime = 0; el.onended = null; }); }

let isAudioUnlocked = false; 
function unlockAudioContext() {
    if (isAudioUnlocked) return;
    Object.values(audioElements).forEach(el => { if (!el) return; el.play().then(() => { el.pause(); el.currentTime = 0; }).catch(() => {}); });
    if (!audioContextProcedural) { audioContextProcedural = new (window.AudioContext || window.webkitAudioContext)(); }
    if (audioContextProcedural.state === 'suspended') { audioContextProcedural.resume(); }
    isAudioUnlocked = true;
}

function playSoundAndWait(el) {
    return new Promise((resolve) => {
        if (!el || !isAudioUnlocked) { resolve(); return; }
        el.loop = false; el.currentTime = 0; el.onended = () => { el.onended = null; resolve(); };
        el.play().catch(e => { el.onended = null; resolve(); });
    });
}
function playSoundRobust(el, isLoop = false) {
    return new Promise((resolve) => {
        if (!el || !isAudioUnlocked) { resolve(); return; }
        el.loop = isLoop; el.play().then(() => resolve()).catch(e => resolve());
    });
}

async function playStageAudioSequence() {
    if (!isAudioUnlocked) return; stopAllSounds();
    gameState = 'stage_start_anim'; animationFrameCount = 0;
    await playSoundAndWait(audioElements.start); 
    if (gameState === 'stage_start_anim') { gameState = 'playing'; playSoundRobust(audioElements.bgm, true); }
}

async function playAllClearSequence() {
    if (!isAudioUnlocked) return; stopAllSounds(); stopTimer();
    gameState = 'all_clear_part1'; await playSoundAndWait(audioElements.clear);
    if (gameState === 'all_clear_part1') { gameState = 'all_clear_part2'; playSoundRobust(audioElements.allClear); }
}

let audioContextProcedural = null;
function playCaptureProceduralSound() {
    try {
        if (!isAudioUnlocked) return;
        if (audioElements.capture && audioElements.capture.readyState >= 2) { audioElements.capture.currentTime = 0; audioElements.capture.play().catch(()=>{}); return; }
        if (!audioContextProcedural) return;
        const osc = audioContextProcedural.createOscillator(); const gain = audioContextProcedural.createGain();
        osc.type = 'square'; osc.frequency.setValueAtTime(880, audioContextProcedural.currentTime); osc.frequency.exponentialRampToValueAtTime(1760, audioContextProcedural.currentTime + 0.1); 
        gain.gain.setValueAtTime(0.5, audioContextProcedural.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioContextProcedural.currentTime + 0.15);
        osc.connect(gain); gain.connect(audioContextProcedural.destination); osc.start(); osc.stop(audioContextProcedural.currentTime + 0.2);
    } catch(e) {}
}

function playWhiteLineProceduralSound() {
    try {
        if (!isAudioUnlocked || !audioContextProcedural) return;
        const osc = audioContextProcedural.createOscillator(); const gain = audioContextProcedural.createGain();
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(600, audioContextProcedural.currentTime); osc.frequency.exponentialRampToValueAtTime(100, audioContextProcedural.currentTime + 0.1); 
        gain.gain.setValueAtTime(0.2, audioContextProcedural.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioContextProcedural.currentTime + 0.1);
        osc.connect(gain); gain.connect(audioContextProcedural.destination); osc.start(); osc.stop(audioContextProcedural.currentTime + 0.1);
    } catch(e) {}
}

function playShockSound() {
    try {
        if (!isAudioUnlocked) return;
        if (audioElements.shock && audioElements.shock.readyState >= 2) { audioElements.shock.currentTime = 0; audioElements.shock.play().catch(()=>{}); return; }
        if (!audioContextProcedural) return;
        const osc = audioContextProcedural.createOscillator(); const gain = audioContextProcedural.createGain();
        osc.type = 'square'; osc.frequency.setValueAtTime(100, audioContextProcedural.currentTime); osc.frequency.exponentialRampToValueAtTime(10, audioContextProcedural.currentTime + 0.3); 
        gain.gain.setValueAtTime(0.6, audioContextProcedural.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioContextProcedural.currentTime + 0.3);
        osc.connect(gain); gain.connect(audioContextProcedural.destination); osc.start(); osc.stop(audioContextProcedural.currentTime + 0.3);
    } catch(e) {}
}

function setupStateSoundSources() {
    const loadAudioSources = (id, filenameBase) => {
        const audioEl = document.getElementById(id); if (!audioEl) return; audioEl.innerHTML = '';
        const mp3Source = document.createElement('source'); mp3Source.src = `./assets/${filenameBase}.mp3`; mp3Source.type = 'audio/mpeg'; 
        audioEl.appendChild(mp3Source); audioEl.load();
    };
    loadAudioSources('audioStart', STATE_SOUNDS_CONFIG.start); loadAudioSources('audioClear', STATE_SOUNDS_CONFIG.clear); loadAudioSources('audioGameOver', STATE_SOUNDS_CONFIG.over); 
    loadAudioSources('audioAllClear', STATE_SOUNDS_CONFIG.all_clear); loadAudioSources('audioCapture', STATE_SOUNDS_CONFIG.capture); loadAudioSources('audioShock', STATE_SOUNDS_CONFIG.shock);
}

function getEnemyCharId(index) { return String.fromCharCode(97 + (index % 26)); }
function loadCharacterImagesRobust(characterType, enemyCharId = null) {
    return new Promise((resolve) => {
        let assetObj = characterType === 'player' ? characterAssets.player : characterAssets.currentEnemy;
        assetObj.images = []; assetObj.isLoaded = false;
        if (enemyCharId) assetObj.charId = enemyCharId; 
        let loadedCount = 0; const framesToLoad = 4; 
        for (let i = 1; i <= framesToLoad; i++) {
            let img = new Image(); img.onload = () => { loadedCount++; if (loadedCount === framesToLoad) { assetObj.isLoaded = true; resolve(); } }; img.onerror = () => { resolve(); };
            let frameStr = String(i).padStart(2, '0'); 
            if (characterType === 'player') img.src = `./assets/player_${frameStr}.png`; else img.src = `./assets/enemy_${enemyCharId}_${frameStr}.png`;
            assetObj.images.push(img);
        }
    });
}
function loadImageRobust(src) {
    return new Promise((resolve) => {
        currentBgImg = new Image();
        currentBgImg.onload = () => {
            let tempCanvas = document.createElement('canvas'); tempCanvas.width = gridWidth; tempCanvas.height = gridHeight;
            let tempCtx = tempCanvas.getContext('2d'); tempCtx.drawImage(currentBgImg, 0, 0, gridWidth, gridHeight);
            stageImageData = tempCtx.getImageData(0, 0, gridWidth, gridHeight); resolve();
        };
        currentBgImg.onerror = () => { stageImageData = null; resolve(); }; currentBgImg.src = src;
    });
}

function distToSegment(px, py, x1, y1, x2, y2) {
    let l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.sqrt((px - x1) * (px - x1) + (py - y1) * (py - y1));
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2; t = Math.max(0, Math.min(1, t)); let projX = x1 + t * (x2 - x1); let projY = y1 + t * (y2 - y1);
    return Math.sqrt((px - projX) * (px - projX) + (py - projY) * (py - projY));
}
function markLineOnGrid(x0, y0, x1, y1, value) {
    let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1; let dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1; let err = dx + dy, e2;
    while (true) {
        for (let oy = -1; oy <= 1; oy++) { for (let ox = -1; ox <= 1; ox++) { let nx = x0 + ox, ny = y0 + oy; if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight) grid[ny * gridWidth + nx] = value; } }
        if (x0 === x1 && y0 === y1) break; e2 = 2 * err; if (e2 >= dy) { err += dy; x0 += sx; } if (e2 <= dx) { err += dx; y0 += sy; }
    }
}

function processCapture() {
    let lineDrawn = player.path.length > 1; 
    for (let i = 0; i < player.path.length - 1; i++) { markLineOnGrid(player.path[i].x, player.path[i].y, player.path[i+1].x, player.path[i+1].y, 3); }
    let ex = Math.floor(enemy.x), ey = Math.floor(enemy.y); let startX = -1, startY = -1;
    if (grid[ey * gridWidth + ex] === 1) { startX = ex; startY = ey; } 
    else {
        let searchRadius = 30;
        outer: for(let r = 1; r <= searchRadius; r++) { for(let dy = -r; dy <= r; dy++) { for(let dx = -r; dx <= r; dx++) { let nx = ex + dx, ny = ey + dy; if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight && grid[ny * gridWidth + nx] === 1) { startX = nx; startY = ny; break outer; } } } }
    }
    if (startX !== -1) {
        let q = new Int32Array(gridWidth * gridHeight * 2); let head = 0, tail = 0; q[tail++] = startX; q[tail++] = startY; grid[startY * gridWidth + startX] = 2;
        const dx = [0, 0, -1, 1], dy = [-1, 1, 0, 0];
        while (head < tail) {
            let cx = q[head++], cy = q[head++];
            for (let i = 0; i < 4; i++) { let nx = cx + dx[i], ny = cy + dy[i]; if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight && grid[ny * gridWidth + nx] === 1) { grid[ny * gridWidth + nx] = 2; q[tail++] = nx; q[tail++] = ny; } }
        }
    }
    let currentPlayable = 0; let territoryCapturedSuccessfully = false; 
    for (let i = 0; i < grid.length; i++) {
        if (grid[i] === 1) { grid[i] = 0; territoryCapturedSuccessfully = true; } else if (grid[i] === 2) { grid[i] = 1; currentPlayable++; }
    }
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            let idx = y * gridWidth + x;
            if (grid[idx] === 3 || grid[idx] === 4) {
                let isEdge = false;
                for (let oy = -1; oy <= 1; oy++) { for (let ox = -1; ox <= 1; ox++) { let nx = x + ox, ny = y + oy; if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight && grid[ny * gridWidth + nx] === 0) isEdge = true; } }
                grid[idx] = isEdge ? 3 : 4;
            }
        }
    }
    renderGridToBg();
    if (territoryCapturedSuccessfully) { playCaptureProceduralSound(); } else if (lineDrawn) { playWhiteLineProceduralSound(); }
    
    currentPercentage = Math.floor(((totalPlayablePixels - currentPlayable) / totalPlayablePixels) * 100);
    if (areaDisplay) areaDisplay.innerText = currentPercentage; 
    
    if (currentPercentage >= stages[currentStageIndex].goal) {
        if (currentStageIndex >= stages.length - 1) { stopBGM(); playAllClearSequence(); } 
        else { gameState = 'clear'; stopBGM(); playSoundRobust(audioElements.clear); }
    }
}

function checkCollision() {
    if (player.isDrawing && player.path.length > 0) {
        let hitRadius = enemy.size / 2.5; 
        for (let i = 0; i < player.path.length; i++) {
            let p1 = player.path[i]; let p2 = (i === player.path.length - 1) ? { x: Math.floor(player.x + player.size/2), y: Math.floor(player.y + player.size/2) } : player.path[i + 1];
            if (distToSegment(enemy.x, enemy.y, p1.x, p1.y, p2.x, p2.y) <= hitRadius) {
                gameState = 'gameover_anim'; animationFrameCount = 0; stopBGM(); stopTimer(); playSoundRobust(audioElements.over); break;
            }
        }
    }
}

function eraseWhiteLine(sx, sy) {
    let q = new Int32Array(gridWidth * gridHeight * 2); let head = 0, tail = 0; q[tail++] = sx; q[tail++] = sy; grid[sy * gridWidth + sx] = 1;
    const dx = [0, 0, -1, 1, -1, -1, 1, 1]; const dy = [-1, 1, 0, 0, -1, 1, -1, 1];
    while(head < tail) {
        let cx = q[head++]; let cy = q[head++];
        for(let i=0; i<8; i++) {
            let nx = cx + dx[i]; let ny = cy + dy[i];
            if(nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight) { let idx = ny * gridWidth + nx; if(grid[idx] === 4) { grid[idx] = 1; q[tail++] = nx; q[tail++] = ny; } }
        }
    }
}

function drawAnimatedImage(ctx, assetObj, charX, charY, charSize, currentDirection) {
    if (!assetObj.isLoaded || assetObj.images.length === 0) return false;
    const imgIndex = Math.floor(animationFrameCount / 10) % assetObj.images.length; const img = assetObj.images[imgIndex];
    ctx.save();
    if (currentDirection === 'left') { ctx.scale(-1, 1); ctx.drawImage(img, -charX - charSize, charY, charSize, charSize); } 
    else { ctx.drawImage(img, charX, charY, charSize, charSize); }
    ctx.restore(); return true; 
}

function drawPlayer() {
    if (!ctx) return;
    if (player.isDrawing && player.path.length > 0) {
        ctx.strokeStyle = '#0f0'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(player.path[0].x, player.path[0].y);
        for (let i = 1; i < player.path.length; i++) ctx.lineTo(player.path[i].x, player.path[i].y);
        ctx.lineTo(player.x + player.size/2, player.y + player.size/2); ctx.stroke();
    }
    let success = drawAnimatedImage(ctx, characterAssets.player, player.x, player.y, player.size, characterAssets.player.lastDirection);
    if (!success) {
        const currentTime = performance.now();
        if (currentTime % 500 < 250) { ctx.fillStyle = '#00f'; } else { ctx.fillStyle = '#0f0'; }
        ctx.fillRect(player.x, player.y, player.size, player.size);
    }
}

function drawEnemy() {
    if (!ctx) return;
    let success = drawAnimatedImage(ctx, characterAssets.currentEnemy, enemy.x - enemy.size / 2, enemy.y - enemy.size / 2, enemy.size, characterAssets.currentEnemy.lastDirection);
    if (!success) { ctx.beginPath(); ctx.arc(enemy.x, enemy.y, enemy.size / 2, 0, Math.PI * 2); ctx.fillStyle = enemy.color; ctx.fill(); ctx.closePath(); }
}

function drawCharacters() { drawEnemy(); drawPlayer(); }

function drawCoolText(text, x, y, baseFontSize, hasGradient = true, weight = 'bold', overrideColor = '#fff') {
    let fontFamily = getFontFamily(weight); let fontSize = baseFontSize; ctx.font = `${fontSize}px ${fontFamily}`;
    let textWidth = ctx.measureText(text).width; let maxWidth = gridWidth * 0.9;
    if (textWidth > maxWidth) { fontSize = Math.floor(fontSize * (maxWidth / textWidth)); ctx.font = `${fontSize}px ${fontFamily}`; }

    ctx.textAlign = 'center'; ctx.lineWidth = Math.max(3, fontSize / 8); ctx.strokeStyle = '#000'; ctx.strokeText(text, x, y);
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)'; ctx.shadowBlur = 10; ctx.shadowOffsetX = 5; ctx.shadowOffsetY = 5;
    
    if (hasGradient) { let gradient = ctx.createLinearGradient(0, y - fontSize, 0, y); gradient.addColorStop(0, '#fff'); gradient.addColorStop(0.5, '#ffd700'); gradient.addColorStop(1, '#ff8c00'); ctx.fillStyle = gradient; } 
    else { ctx.fillStyle = overrideColor; }
    ctx.fillText(text, x, y); ctx.shadowBlur = 0; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0;
}


// ★修正: 120Hzスマホの爆速化を防ぐための、60FPS（フレームレート）固定ロジックを追加
let lastFrameTime = 0;

function gameLoop(timestamp) {
    requestAnimationFrame(gameLoop);
    
    if (!ctx) return;
    if (!timestamp) timestamp = performance.now();
    
    // 前のフレームからの経過時間を計算
    let deltaTime = timestamp - lastFrameTime;
    // もし15ミリ秒（約60FPSのペース）経過していなければ、この回の処理をスキップ（爆速化防止）
    if (deltaTime < 15) return; 
    
    // 次回の基準時間を更新（余剰時間を引き継ぐことで正確な60FPSを維持）
    lastFrameTime = timestamp - (deltaTime % (1000/60)); 
    
    animationFrameCount++; 

    if (gameState === 'start_screen') {
        ctx.fillStyle = '#000'; ctx.fillRect(0, 0, gridWidth, gridHeight); return;
    }
    if (gameState === 'loading') { ctx.fillStyle = '#000'; ctx.fillRect(0, 0, gridWidth, gridHeight); } 
    else if (gameState === 'stage_start_anim') {
        ctx.drawImage(bgCanvas, 0, 0); drawCharacters();
        if (userLang === 'ja' && startLogoImg.complete && startLogoImg.naturalWidth !== 0) {
            let targetW = gridWidth * 0.8; let targetH = startLogoImg.height * (targetW / startLogoImg.width);
            ctx.save(); ctx.globalAlpha = Math.min(1, animationFrameCount * 0.05); ctx.drawImage(startLogoImg, (gridWidth - targetW)/2, (gridHeight - targetH)/2 - 50, targetW, targetH); ctx.restore();
        } else { drawCoolText(t.battleStart, gridWidth / 2, gridHeight / 2, 60); }
    }
    else if (gameState === 'playing') {
        ctx.drawImage(bgCanvas, 0, 0); updatePlayer(); updateEnemy(); checkCollision(); drawCharacters(); 
    } 
    else if (gameState === 'gameover_anim') {
        ctx.drawImage(bgCanvas, 0, 0); drawPlayer(); 
        let scale = 1 + animationFrameCount * 0.8; ctx.save(); ctx.translate(enemy.x, enemy.y); ctx.scale(scale, scale);
        let success = drawAnimatedImage(ctx, characterAssets.currentEnemy, -enemy.size / 2, -enemy.size / 2, enemy.size, characterAssets.currentEnemy.lastDirection);
        if (!success) { ctx.beginPath(); ctx.arc(0, 0, enemy.size / 2, 0, Math.PI * 2); ctx.fillStyle = enemy.color; ctx.fill(); ctx.closePath(); }
        ctx.restore();
        if (enemy.size * scale > gridWidth * 2.5) { gameState = 'gameover'; }
    }
    else if (gameState === 'clear') {
        if (currentBgImg && currentBgImg.complete && currentBgImg.naturalWidth !== 0) { ctx.drawImage(currentBgImg, 0, 0, gridWidth, gridHeight); } 
        else { ctx.fillStyle = '#000080'; ctx.fillRect(0, 0, gridWidth, gridHeight); }
        ctx.fillStyle = 'rgba(0, 255, 0, 0.3)'; ctx.fillRect(0, 0, gridWidth, gridHeight);
        drawCoolText(t.clear, gridWidth / 2, gridHeight / 2 - 20, 60);
        ctx.fillStyle = '#fff'; ctx.font = `20px ${getFontFamily('normal')}`; ctx.textAlign = 'center'; ctx.lineWidth = 1; ctx.strokeStyle = '#000';
        ctx.strokeText(t.next, gridWidth / 2, gridHeight / 2 + 50); ctx.fillText(t.next, gridWidth / 2, gridHeight / 2 + 50);
    }
    else if (gameState === 'gameover') {
        ctx.fillStyle = '#000'; ctx.fillRect(0, 0, gridWidth, gridHeight); 
        drawCoolText(t.defeat, gridWidth / 2, gridHeight / 2 - 20, 80, false, 'bold', '#d00');
        ctx.fillStyle = '#fff'; ctx.font = `20px ${getFontFamily('normal')}`; ctx.lineWidth = 1; ctx.strokeStyle = '#000';
        ctx.strokeText(t.retry, gridWidth / 2, gridHeight / 2 + 50); ctx.fillText(t.retry, gridWidth / 2, gridHeight / 2 + 50);
    }
    else if (gameState === 'all_clear_part1' || gameState === 'all_clear_part2') {
        if (gameState === 'all_clear_part2' && endingImg.complete && endingImg.naturalWidth !== 0) { ctx.drawImage(endingImg, 0, 0, gridWidth, gridHeight); } 
        else { ctx.fillStyle = 'rgba(255, 215, 0, 0.4)'; ctx.fillRect(0, 0, gridWidth, gridHeight); }

        drawCoolText(t.allClear, gridWidth / 2, gridHeight / 2 - 120, 60);
        
        if (gameState === 'all_clear_part2') {
            drawCoolText(t.thanks, gridWidth / 2, gridHeight / 2 + 30, 36, false, 'rough', '#fff');
            drawCoolText(t.freeTime, gridWidth / 2, gridHeight / 2 + 90, 48, false, 'rough', '#ff6666');
            let finalTime = updateTimerDisplay(); drawCoolText(`Clear Time: ${finalTime}`, gridWidth / 2, gridHeight / 2 + 150, 32, false, 'bold', '#ffd700');
            ctx.fillStyle = '#fff'; ctx.font = `20px ${getFontFamily('normal')}`; ctx.lineWidth = 1; ctx.strokeStyle = '#000';
            ctx.strokeText(t.restart, gridWidth / 2, gridHeight / 2 + 210); ctx.fillText(t.restart, gridWidth / 2, gridHeight / 2 + 210);
            let subLink = document.getElementById('subscribeLink'); if(subLink && subLink.style.display !== 'block') { subLink.style.display = 'block'; }
        }
    }
}

async function loadStage(index) {
    const MAX_STAGES = stages.length; 
    let subLink = document.getElementById('subscribeLink'); if(subLink) subLink.style.display = 'none';
    if (index >= MAX_STAGES) { gameState = 'all_clear'; stopAllSounds(); playAllClearSequence(); return; }
    if (index === 0) { resetTimer(); startTimer(); }

    let stageDef = stages[index];
    if (!stageDef) { stages[index] = { goal: 75, enemySpeed: Math.min(8, 4 + Math.floor(index / 10)) }; stageDef = stages[index]; }
    
    gameState = 'loading'; stopAllSounds(); 
    player.path = []; player.isDrawing = false; currentPercentage = 0; totalPlayablePixels = 0;

    let numStr = formatStageNumber(index);
    if (stageDisplay) stageDisplay.innerText = numStr; 
    if (areaDisplay) areaDisplay.innerText = 0;
    if (goalDisplay) goalDisplay.innerText = stageDef.goal;

    setupStageBGM(index);

    await loadCharacterImagesRobust('player'); let enemyId = getEnemyCharId(index); await loadCharacterImagesRobust('currentEnemy', enemyId);
    characterAssets.player.lastDirection = 'right'; characterAssets.currentEnemy.lastDirection = 'right';
    player.x = gridWidth / 2; player.y = gridHeight - player.size; enemy.x = gridWidth / 2; enemy.y = gridHeight / 2;

    if (index === 0) { enemy.speedX = stageDef.enemySpeed * (Math.random() > 0.5 ? 1 : -1); enemy.speedY = -stageDef.enemySpeed; enemy.size = 80; } 
    else if (index === 2) { let angle = Math.random() * Math.PI * 2; enemy.speedX = Math.cos(angle) * stageDef.enemySpeed; enemy.speedY = Math.sin(angle) * stageDef.enemySpeed; enemy.size = 192; } 
    else { enemy.speedX = stageDef.enemySpeed * (Math.random() > 0.5 ? 1 : -1); enemy.speedY = -stageDef.enemySpeed; enemy.size = 96; }

    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            if (x < margin || x >= gridWidth - margin || y < margin || y >= gridHeight - margin) { grid[y * gridWidth + x] = 0; }
            else { grid[y * gridWidth + x] = 1; totalPlayablePixels++; }
        }
    }
    renderGridToBg(); await loadImageRobust(`./assets/bg_stage${numStr}.jpg`); finalizeLoadAndPlay();
}

function finalizeLoadAndPlay() {
    renderGridToBg(); gameState = 'playing';
    if (isAudioUnlocked) { playStageAudioSequence(); }
}

const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

function startGameFromScreen(e) {
    if (e && e.target && e.target.id === 'gameDescLink') return;
    if (gameState !== 'start_screen') return;
    if (startScreen) startScreen.style.display = 'none';
    const elem = document.documentElement; 
    if (elem.requestFullscreen) { elem.requestFullscreen().catch(e => console.log(e)); } 
    else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); }
    unlockAudioContext(); loadStage(currentStageIndex);
}

function setupInputListeners() {
    if (startScreen) { startScreen.addEventListener('click', startGameFromScreen); }
    window.addEventListener('keydown', (e) => {
        if (gameState === 'start_screen') {
            if (['Enter', ' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                if (document.activeElement && document.activeElement.id === 'gameDescLink') return;
                e.preventDefault(); startGameFromScreen();
            } return;
        }
        if (gameState === 'playing') {
            if (keys.hasOwnProperty(e.key)) {
                keys[e.key] = true;
                if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
                if (e.key === 'ArrowLeft') characterAssets.player.lastDirection = 'left';
                else if (e.key === 'ArrowRight') characterAssets.player.lastDirection = 'right';
            }
        }
        else if (gameState === 'clear') {
            if (e.key === 'Enter') { currentStageIndex++; loadStage(currentStageIndex); }
        } else if (['gameover', 'all_clear', 'all_clear_part1', 'all_clear_part2'].includes(gameState)) {
            if (e.key === 'Enter') { 
                if (document.activeElement && document.activeElement.id === 'subscribeLink') return;
                currentStageIndex = 0; loadStage(currentStageIndex); 
            }
        }
    });
    window.addEventListener('keyup', (e) => { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; });
    window.addEventListener('mousedown', (e) => {
        if (e.target.closest('#dpadContainer') || e.target.closest('#startScreen') || e.target.id === 'subscribeLink') return;
        handleScreenClick();
    });
    window.addEventListener('touchstart', (e) => {
        if (e.target.closest('#dpadContainer') || e.target.closest('#startScreen') || e.target.id === 'subscribeLink') return;
        handleScreenClick();
    }, {passive: false});

    // ★修正: 十字キーのイベントリスナー（ドラッグ処理を完全廃止・指を離した時のタッチキャンセル処理を徹底追加）
    const dpadContainer = document.getElementById('dpadContainer');
    if (dpadContainer) { 
        dpadContainer.addEventListener('mousedown', startDirectionInput); 
        dpadContainer.addEventListener('touchstart', startDirectionInput, {passive: false}); 
    }
    
    window.addEventListener('mousemove', handleUIMove); 
    window.addEventListener('touchmove', handleUITouchMove, {passive: false});
    
    // 指を離した時、画面外に出た時に「確実に止める」ためのイベント群
    window.addEventListener('mouseup', endUIAction); 
    window.addEventListener('touchend', endUIAction, {passive: false});
    window.addEventListener('touchcancel', endUIAction, {passive: false});
}

function handleScreenClick() {
    if (gameState === 'clear') { currentStageIndex++; loadStage(currentStageIndex); } 
    else if (['gameover', 'all_clear', 'all_clear_part1', 'all_clear_part2'].includes(gameState)) { currentStageIndex = 0; loadStage(currentStageIndex); }
}

let isDirectionInput = false; 

// ★修正: タッチ位置が「十字キーの上かどうか」を正確に判定するロジック
function startDirectionInput(e) { 
    isDirectionInput = true; 
    if (gameState === 'start_screen') { startGameFromScreen(e); } else { unlockAudioContext(); }
    
    let cx, cy;
    if (e.type.includes('touch')) {
        for (let i = 0; i < e.touches.length; i++) {
            if (e.touches[i].target.closest('#dpadContainer')) { cx = e.touches[i].clientX; cy = e.touches[i].clientY; break; }
        }
        if (cx === undefined) { cx = e.touches[0].clientX; cy = e.touches[0].clientY; }
    } else { cx = e.clientX; cy = e.clientY; }
    
    updateDirection(cx, cy);
    e.preventDefault(); 
}

function handleUIMove(e) { if (isDirectionInput) { handleMoveGeneric(e.clientX, e.clientY); } }
function handleUITouchMove(e) { 
    if (isDirectionInput) { 
        e.preventDefault(); 
        let cx, cy;
        for (let i = 0; i < e.touches.length; i++) {
            if (e.touches[i].target.closest('#dpadContainer')) { cx = e.touches[i].clientX; cy = e.touches[i].clientY; break; }
        }
        if (cx !== undefined) { handleMoveGeneric(cx, cy); } 
        else { handleMoveGeneric(e.touches[0].clientX, e.touches[0].clientY); }
    } 
}

function handleMoveGeneric(cx, cy) { if (isDirectionInput) { updateDirection(cx, cy); } }

// ★修正: 指を離したら「完全にキー入力をリセットする」堅牢な処理
function endUIAction(e) { 
    if (e && e.type.includes('touch') && e.touches.length > 0) {
        let stillTouchingDpad = false;
        for(let i=0; i<e.touches.length; i++){ if(e.touches[i].target.closest('#dpadContainer')){ stillTouchingDpad = true; break; } }
        if (stillTouchingDpad) return; // まだ十字キーの上に別の指がある場合は止めない
    }
    isDirectionInput = false; 
    keys.ArrowUp = false; keys.ArrowDown = false; keys.ArrowLeft = false; keys.ArrowRight = false; 
}

function updateDirection(cx, cy) { 
    let dpadContainer = document.getElementById('dpadContainer'); if(!dpadContainer) return;
    let rect = dpadContainer.getBoundingClientRect(); let centerX = rect.left + rect.width / 2; let centerY = rect.top + rect.height / 2;
    let dx = cx - centerX; let dy = cy - centerY;
    if (Math.sqrt(dx*dx + dy*dy) < 20) { keys.ArrowUp = false; keys.ArrowDown = false; keys.ArrowLeft = false; keys.ArrowRight = false; return; }
    let angle = Math.atan2(dy, dx); const PI8 = Math.PI / 8;
    keys.ArrowUp = false; keys.ArrowDown = false; keys.ArrowLeft = false; keys.ArrowRight = false;
    let isMovingLeft = false; let isMovingRight = false;

    if (angle > -PI8 && angle <= PI8) { keys.ArrowRight = true; isMovingRight = true; }
    else if (angle > PI8 && angle <= 3*PI8) { keys.ArrowRight = true; keys.ArrowDown = true; isMovingRight = true; }
    else if (angle > 3*PI8 && angle <= 5*PI8) keys.ArrowDown = true;
    else if (angle > 5*PI8 && angle <= 7*PI8) { keys.ArrowLeft = true; keys.ArrowDown = true; isMovingLeft = true; }
    else if (angle > 7*PI8 || angle <= -7*PI8) { keys.ArrowLeft = true; isMovingLeft = true; }
    else if (angle > -7*PI8 && angle <= -5*PI8) { keys.ArrowLeft = true; keys.ArrowUp = true; isMovingLeft = true; }
    else if (angle > -5*PI8 && angle <= -3*PI8) keys.ArrowUp = true;
    else if (angle > -3*PI8 && angle <= -PI8) { keys.ArrowRight = true; keys.ArrowUp = true; isMovingRight = true; }

    if (isMovingLeft) characterAssets.player.lastDirection = 'left'; else if (isMovingRight) characterAssets.player.lastDirection = 'right';
}

function updatePlayer() {
    let prevX = player.x, prevY = player.y;
    if (keys.ArrowUp) player.y -= player.speed; if (keys.ArrowDown) player.y += player.speed;
    if (keys.ArrowLeft) player.x -= player.speed; if (keys.ArrowRight) player.x += player.speed;
    player.x = Math.max(0, Math.min(gridWidth - player.size, player.x)); player.y = Math.max(0, Math.min(gridHeight - player.size, player.y));
    let cx = Math.floor(player.x + player.size / 2); let cy = Math.floor(player.y + player.size / 2);
    let gridValue = grid[cy * gridWidth + cx]; let isSafeGrid = (gridValue === 0 || gridValue === 3 || gridValue === 4);
    let isSafeBorder = (player.x <= 0 || player.x >= gridWidth - player.size || player.y <= 0 || player.y >= gridHeight - player.size);
    let isSafeZone = isSafeGrid || isSafeBorder;

    if (!isSafeZone) {
        if (!player.isDrawing) { player.isDrawing = true; player.path.push({ x: Math.floor(prevX + player.size / 2), y: Math.floor(prevY + player.size / 2) }); }
        let last = player.path[player.path.length - 1]; if (last.x !== cx || last.y !== cy) player.path.push({ x: cx, y: cy });
    } else {
        if (player.isDrawing) { player.path.push({ x: cx, y: cy }); processCapture(); player.isDrawing = false; player.path = []; }
    }
}

function updateEnemy() {
    if (enemy.speedX < 0) characterAssets.currentEnemy.lastDirection = 'left'; else if (enemy.speedX > 0) characterAssets.currentEnemy.lastDirection = 'right';
    let currentDx = 0;
    if (currentStageIndex === 2) {
        let speedMag = stages[currentStageIndex].enemySpeed; let angleOffset = (Math.random() - 0.5) * 0.05; 
        let dx = (player.x + player.size/2) - enemy.x; let dy = (player.y + player.size/2) - enemy.y;
        let targetAngle = Math.atan2(dy, dx); let currentAngle = Math.atan2(enemy.speedY, enemy.speedX);
        let diff = targetAngle - currentAngle; while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2;
        angleOffset += Math.sign(diff) * Math.min(Math.abs(diff), 0.015); currentAngle += angleOffset;
        enemy.speedX = Math.cos(currentAngle) * speedMag; enemy.speedY = Math.sin(currentAngle) * speedMag; currentDx = enemy.speedX; 
    } else { currentDx = enemy.speedX; }

    if (currentDx < 0) characterAssets.currentEnemy.lastDirection = 'left'; else if (currentDx > 0) characterAssets.currentEnemy.lastDirection = 'right';

    let r = enemy.size / 2.5; let cx = Math.floor(enemy.x); let cy = Math.floor(enemy.y);
    if (currentStageIndex === 2) {
        let hitWhiteLine = false;
        let minX = Math.max(0, Math.floor(cx - r)); let maxX = Math.min(gridWidth - 1, Math.ceil(cx + r));
        let minY = Math.max(0, Math.floor(cy - r)); let maxY = Math.min(gridHeight - 1, Math.ceil(cy + r));
        for(let y = minY; y <= maxY; y++) {
            for(let x = minX; x <= maxX; x++) {
                let dxx = x - cx; let dyy = y - cy;
                if(dxx*dxx + dyy*dyy <= r*r) { if(grid[y * gridWidth + x] === 4) { eraseWhiteLine(x, y); hitWhiteLine = true; } }
            }
        }
        if (hitWhiteLine) { playShockSound(); renderGridToBg(); }
    }

    let checkX = Math.floor(enemy.x + enemy.speedX + (enemy.speedX > 0 ? r : -r)); let checkY = Math.floor(enemy.y + enemy.speedY + (enemy.speedY > 0 ? r : -r));
    let isWall = (v) => v === 0 || v === 3 || v === 4; let hitX = false, hitY = false;
    if (checkX < 0 || checkX >= gridWidth || isWall(grid[cy * gridWidth + checkX])) hitX = true;
    if (checkY < 0 || checkY >= gridHeight || isWall(grid[checkY * gridWidth + cx])) hitY = true;
    if (!hitX && !hitY && checkX >= 0 && checkX < gridWidth && checkY >= 0 && checkY < gridHeight) { if (isWall(grid[checkY * gridWidth + checkX])) { hitX = true; hitY = true; } }
    if (hitX) enemy.speedX *= -1; if (hitY) enemy.speedY *= -1;
    enemy.x += enemy.speedX; enemy.y += enemy.speedY;
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('uiDesc').innerHTML = t.desc;
    document.getElementById('startMsg').innerText = t.startMsg;
    document.getElementById('gameDescLink').innerText = t.link;
    document.getElementById('subscribeLink').innerText = t.subscribe;
    document.getElementById('uiStage').innerText = t.stage;
    document.getElementById('uiArea').innerText = t.area;
    document.getElementById('uiGoal').innerText = t.goal;
    document.getElementById('uiTime').innerText = t.time;

    if (!ctx) return;
    setupStateSoundSources(); 
    setupInputListeners();
    requestAnimationFrame(gameLoop);
});