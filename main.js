/**
	* 1. TRANSLATIONS & CONSTANTS
*/
const translations = {
    ru: {
        docTitle: "Скорость реакции", toastCopied: "Скопировано!", formTitleNew: "Запись за День", formTitleEdit: "Изменение Дня", btnSaveNew: "Сохранить", btnSaveEdit: "Обновить",
        btnTests: "⏱ Тесты", btnRules: "📜 Правила", btnSettings: "⚙ Настройки", lblF1: "Formula 1 (5 средних):", phF1: "Напр: 210 215 205...", lblF1False: "Formula 1 - Фальшстарты:",
        lblHb: "Human Bench (5 средних):", phHb: "Напр: 195 200 190...", lblHbFalse: "Human Bench - Фальшстарты:", phNewTask: "Что-то еще...", btnAdd: "Добавить",
        lblWeekend: "Выходной", btnClear: "Очистить", btnCancel: "Отменить", hdrStats: "Статистика", chartReaction: "График результатов (Активные дни)",
        chartFs: "Фальшстарты (Активные дни)", hdrHistory: "История", thDay: "День", thType: "Тип", thTotal: "Общее (Ср / Мин / Макс)", thF1: "F1 (Ср / Мин / Макс)",
        thHb: "HB (Ср / Мин / Макс)", thFs: "ФС (F1/HB)", thTasks: "Задачи", thActions: "Действия", lblAfMode: "Авто-сохранение:", afAttempt: "Каждая попытка",
        afEach: "Каждое среднее (1)", afFull5: "Сразу весь блок (5 шт)", afOff: "Выключено", btnTest1: "Human Bench", btnTest2: "Валттери Боттас (F1)", btnTest3: "Синий цвет (Не кликать)",
        btnTest4: "На звук", lblHideText: "Скрыть текст", lblHideSession: "Скрыть попытки", lblHidePanel: "Скрыть панель", btnTestFs: "⛶ На весь экран", btnTestClose: "✖ Закрыть", 
        hdrRulesModal: "ПРАВИЛА", hdrSettingsModal: "НАСТРОЙКИ", hdrReg1: "Общие правила", thRegParam: "Параметр", thRegNorm: "Требование", tdRegMin: "Минимум в день",
        tdRegMinVal: "50 тестов реакции", tdRegReg: "Регулярность", tdRegRegVal: "Без пропусков, 1 выходной в неделю обязателен", tdRegSurplus: "Лишние попытки",
        tdRegSurplusVal: "Не идут в общую статистику", hdrReg2: "Как проходить тесты", thRegTest: "Тест", thRegSpec: "Спецификация", tdRegF1Spec: "5 попыток (один полный блок)",
        tdRegHbSpec: "5 попыток (один полный блок)", tdRegCalc: "Расчет", tdRegCalcVal: "Среднее, минимум и максимум из двух тестов", hdrReg3: "Норма в osu! и Kovaak's",
        thRegDisc: "Дисциплина", thRegReq: "Требование", thRegStat: "Статус", tdRegOsuReq: "Сессия от 30 мин (AR > 11, не ниже)", statusOsuOpt: "Опционально", tdRegKovReq: "Плейлист Reactive Tracking от 30 мин",
        tdRegKovReqVal: "Обязательно", hdrReg4: "Сроки и пропуски", thRegCat: "Категория", thRegCond: "Условия", tdRegDur: "Длительность", tdRegDurVal: "3 месяца (08.09.2026 — 11.09.2026)",
        tdRegRetake: "Пропуски", tdRegRetakeVal: "Если день пропущен или не доделан — требуется отработка", hdrReg5: "Ранги реакции", thRankTime: "Время (мс)", thRankRank: "Ранг",
        thRankRef: "Референс", r1Name: "Мировой уровень", r1Desc: "Киберспортсмены, пилоты F1", r2Name: "Элита", r2Desc: "Топ-геймеры, пилоты истребителей",
        r3Name: "Продвинутый", r3Desc: "Опытные игроки, спортсмены", r4Name: "Норма", r4Desc: "Средний показатель", r5Name: "Ниже среднего",
        r5Desc: "Усталость, недостаток сна", r6Name: "Медленно", r6Desc: "Сильная усталость, расфокус", hdrReg6: "Внешний вид и цвета", hdrThemeMain: "Системные цвета UI",
        lblThemeBg: "Фон страницы:", lblThemePanel: "Фон панелей:", lblThemeControl: "Кнопки и поля:", lblThemeBorder: "Границы и линии:", lblThemeText: "Основной текст:", lblThemeTextMuted: "Вторичный текст:", lblThemeAcc1: "Главный акцент (UI/F1):", lblThemeAcc2: "Второй акцент (HB):",
        btnResetTheme: "Сбросить цвета UI", hdrThemeTests: "Цвета тестов реакции", lblTestIdle: "Ожидание (Idle):", lblTestWaiting: "Подготовка (Wait):", lblTestReady: "Срабатывание (Ready):",
        lblTestFail: "Ошибка/Фальшстарт:", lblTestBlue: "Ложный сигнал (No-Go):", lblTestF1Light: "Огни F1 (Старт):", btnResetTestColors: "Сбросить цвета тестов", hdrRegAudio: "Звук для аудио-теста",
        audioCustomDesc: "Загрузите локальный аудиофайл (MP3, WAV, OGG) для тренировки без задержек.", btnUploadAudio: "🎵 Загрузить аудио", btnPreviewAudio: "▶ Прослушать", btnResetAudio: "🔄 Вернуть стандартный звук",
        hdrReg8: "Данные и экспорт", btnRenumber: "🔢 Перенумеровать дни по порядку", btnExportData: "📥 Скачать JSON", btnImportData: "📤 Загрузить JSON", btnClearData: "Удалить все данные",
        rankNoData: "Нет данных", rankTitleToday: "Ранг:", rankTitlePrefix: "Ранг (", overallStats: "Общая статистика", dayWord: "День", fromDayWord: "от Дня",
        avgText: "Ср:", minText: "Мин:", maxText: "Макс:", weekBtnHide: "[ Скрыть неделю ]", weekBtnShow: "[ Неделя ]", weeklyAvgAct: "Среднее за 7 дней", overLastDays1: "За последние ",
        overLastDays2: " активных дней", fsTotalAct: "Фальшстарты (всего)", weeklyTotalAct: "ФС за 7 дней", stability: "Вариативность", deltaMaxMin: "Разброс (Макс - Мин)",
        weeklyAvgDelta: "Средний разброс за 7 дней", noSavedData: "Нет сохраненных данных", latestCompleted: "Текущий день", viewDay: "Просмотр:", compareDay: "Сравнить:",
        restDayMark: " (Выходной)", typeRest: "Выходной", typeActive: "Активный", tasksDayTitle: "Задачи за День ", taskCompleted: "Выполнено", taskNotCompleted: "Пропущено", viewTasksTitle: "Задачи",
        clickToViewTasks: "Нажмите для просмотра задач", errFileLarge: "Превышен лимит размера (макс 5 МБ).", audioLoaded: "Аудио загружено", errAudioDecode: "Ошибка декодирования аудио.",
        resetStockMsg: "Восстановлен базовый синтезированный тон", curAudio: "Активный источник:", stockAudioTone: "Синтезированный тон (950 Гц)", autoAddMode: "Авто-сохранение:", delItemConfirm: "Удалить пункт?",
        valNumRequired: "Введите валидные числовые значения через пробел.", dayOverwrite: "Данные за этот день существуют. Перезаписать?", daySaved: "Сохранено", delDayConfirm: "Удалить запись безвозвратно?",
        renumberConfirm: "Перенумеровать дни последовательно?", daysRenumbered: "Нумерация обновлена", backupDl: "Резервная копия экспортирована", importSuccess: "Импорт завершен", errJsonFormat: "Некорректная структура JSON.",
        errJsonRead: "Ошибка чтения:", clearHistoryConfirm: "Удалить всю историю?", testColorsReset: "Цвета тестов сброшены", testEmpty: "пусто", testAttemptPrefix: "Попытка:",
        testInSession: "в серии", testAccumulated: "Серий готово", msgClickStart: "Нажмите для запуска", subMsgClassic: "Базовый тест", subMsgF1: "Ожидайте отключения всех огней",
        subMsgNoGo: "Зеленый — клик. Синий — пропуск.", subMsgAudio: "Реакция на звуковой сигнал", msgWaitGreen: "Ожидание сигнала...", msgClickNow: "КЛИК",
        msgLightsOn: "Стартовые огни...", msgGo: "СТАРТ", msgWait: "Ожидание...", msgBlueStop: "СТОП (СИНИЙ)", msgGoodAvoid: "Успешный пропуск", subMsgClickCont: "Клик для продолжения", msgListen: "Слушайте...", subMsgNoColor: "Цвет не меняется",
        msgTooSoon: "Фальшстарт", subMsgTryAgain: "Клик для перезапуска", msgMistakeBlue: "Срабатывание на ложный сигнал", msg5AvgDone: "🎯 5/5 СЕРИЙ ЗАВЕРШЕНО", noteNoGoIgnore: "Тест на селективное внимание, не учитывается в общей статистике.",
        noteAudioIgnore: "Тест слуховой реакции, не учитывается в общей статистике.", noteFull5Add: "Блок внесен в форму.", noteEachAdd: "Все средние значения добавлены в форму.", noteAttemptAdd: "Все попытки внесены в форму.",
        noteOffAdd: "Автосохранение отключено.", titleSetDone: "Серия из 5 попыток завершена", lblSetAvg: "Среднее серии:", lblAll5Avgs: "Значения серии:",
        lblTotalBlockAvg: "Итоговое среднее блока:", lblClickNewSet: "Клик для старта новой серии", toast5BlockComplete: "Блок завершен", noteAdded: " (внесено)", noteWillAdd: " (будет внесено после 5/5)",
        noteAttemptAdded: " (внесено)", titleSeriesDone: "Серия завершена. Среднее:", lblAvgsCollected: "Накоплено серий:", lblClickNextSet: "Клик для следующей серии", toastAvgRecorded: "Зафиксировано", noteAttemptRecorded: " (сохранено)", msUnit: "мс"
	},
    en: {
        docTitle: "Reaction Speed", toastCopied: "Copied!", formTitleNew: "Add Day Entry", formTitleEdit: "Edit Day Entry", btnSaveNew: "Save", btnSaveEdit: "Update",
        btnTests: "⏱ Tests", btnRules: "📜 Rules", btnSettings: "⚙ Settings", lblF1: "Formula 1 (5 avgs):", phF1: "E.g.: 210 215 205...", lblF1False: "Formula 1 - False Starts:",
        lblHb: "Human Bench (5 avgs):", phHb: "E.g.: 195 200 190...", lblHbFalse: "Human Bench - False Starts:", phNewTask: "Add custom task...", btnAdd: "Add",
        lblWeekend: "Rest day", btnClear: "Clear", btnCancel: "Cancel", hdrStats: "Statistics", chartReaction: "Performance (Active Days)", chartFs: "False Starts (Active Days)",
        hdrHistory: "History", thDay: "Day", thType: "Type", thTotal: "Total (Avg / Min / Max)", thF1: "F1 (Avg / Min / Max)", thHb: "HB (Avg / Min / Max)", thFs: "FS (F1/HB)", thTasks: "Tasks",
        thActions: "Actions", lblAfMode: "Auto-save:", afAttempt: "Every attempt", afEach: "Each average (1)", afFull5: "Full block (5 avgs)", afOff: "Disabled", btnTest1: "Human Bench",
        btnTest2: "Valtteri Bottas (F1)", btnTest3: "Blue color (No-Go)", btnTest4: "Audio Test", lblHideText: "Hide text", lblHideSession: "Hide session info", lblHidePanel: "Hide top panel",
        btnTestFs: "⛶ Fullscreen", btnTestClose: "✖ Close", hdrRulesModal: "RULES", hdrSettingsModal: "SETTINGS", hdrReg1: "General Protocol", thRegParam: "Parameter", thRegNorm: "Standard",
        tdRegMin: "Daily minimum", tdRegMinVal: "50 reaction attempts", tdRegReg: "Consistency", tdRegRegVal: "No missed days, 1 mandatory rest day/week",
        tdRegSurplus: "Excess attempts", tdRegSurplusVal: "Excluded from overall statistics", hdrReg2: "Execution Protocol", thRegTest: "Test", thRegSpec: "Specification", tdRegF1Spec: "5 attempts (1 full block)",
        tdRegHbSpec: "5 attempts (1 full block)", tdRegCalc: "Calculation", tdRegCalcVal: "Mean, min, max across both tests", hdrReg3: "osu! and Kovaak's Norms", thRegDisc: "Discipline",
        thRegReq: "Requirement", thRegStat: "Status", tdRegOsuReq: "30+ min session (AR > 11 strictly)", statusOsuOpt: "Optional", tdRegKovReq: "Reactive Tracking playlist 30+ min", tdRegKovReqVal: "Mandatory",
        hdrReg4: "Timeline", thRegCat: "Category", thRegCond: "Condition", tdRegDur: "Duration", tdRegDurVal: "3 months (08.09.2026 — 11.09.2026)",
        tdRegRetake: "Missed sessions", tdRegRetakeVal: "Mandatory make-up session", hdrReg5: "Reaction Tiers", thRankTime: "Latency (ms)", thRankRank: "Tier",
        thRankRef: "Benchmark", r1Name: "World Class", r1Desc: "Esports pros, F1 drivers", r2Name: "Elite", r2Desc: "High-tier gamers, fighter pilots", r3Name: "Advanced",
        r3Desc: "Trained players, athletes", r4Name: "Standard", r4Desc: "Average baseline", r5Name: "Below Average", r5Desc: "Fatigue, lack of sleep",
        r6Name: "Degraded", r6Desc: "Severe exhaustion, low focus", hdrReg6: "Visual Appearance", hdrThemeMain: "Main UI Colors",
        lblThemeBg: "Background:", lblThemePanel: "Panels:", lblThemeControl: "Buttons & Fields:", lblThemeBorder: "Borders & Lines:", lblThemeText: "Primary Text:", lblThemeTextMuted: "Secondary Text:", lblThemeAcc1: "Primary Accent (UI/F1):", lblThemeAcc2: "Secondary Accent (HB):",
        btnResetTheme: "Reset UI Colors", hdrThemeTests: "Reaction Test Colors", lblTestIdle: "Idle state:", lblTestWaiting: "Wait state:", lblTestReady: "Trigger (Ready):",
        lblTestFail: "Error / False start:", lblTestBlue: "No-Go (Blue):", lblTestF1Light: "F1 Lights (Launch):", btnResetTestColors: "Reset Test Colors", hdrRegAudio: "Audio Test Source",
        audioCustomDesc: "Upload an audio file (MP3, WAV, OGG) to bypass browser synthesis latency.", btnUploadAudio: "🎵 Upload Audio", btnPreviewAudio: "▶ Test Play", btnResetAudio: "🔄 Reset to Stock Tone",
        hdrReg8: "Data Management", btnRenumber: "🔢 Renumber days sequentially", btnExportData: "📥 Export JSON", btnImportData: "📤 Import JSON", btnClearData: "Purge All Data",
        rankNoData: "No data", rankTitleToday: "Rank:", rankTitlePrefix: "Rank (", overallStats: "Combined", dayWord: "Day", fromDayWord: "vs Day", avgText: "Avg:",
        minText: "Min:", maxText: "Max:", weekBtnHide: "[ Hide Week ]", weekBtnShow: "[ Week ]", weeklyAvgAct: "Weekly average", overLastDays1: "Over past ", overLastDays2: " active days",
        fsTotalAct: "Total False Starts", weeklyTotalAct: "7-Day Total FS", stability: "Spread", deltaMaxMin: "Range (Max - Min)", weeklyAvgDelta: "7-Day Avg Range", noSavedData: "No records found",
        latestCompleted: "Latest Day", viewDay: "Inspect:", compareDay: "Compare:", restDayMark: " (Rest)", typeRest: "Rest", typeActive: "Active", tasksDayTitle: "Tasks for Day ", taskCompleted: "Done",
        taskNotCompleted: "Incomplete", viewTasksTitle: "Tasks", clickToViewTasks: "Inspect tasks", errFileLarge: "File exceeds 5MB limit.", audioLoaded: "Audio loaded successfully", errAudioDecode: "Failed to decode audio file.",
        resetStockMsg: "Stock 950Hz tone restored", curAudio: "Active source:", stockAudioTone: "Synthesized Tone (950Hz)", autoAddMode: "Auto-save mode:", delItemConfirm: "Delete task?", valNumRequired: "Input valid space-delimited numbers.",
        dayOverwrite: "Record exists. Overwrite entry?", daySaved: "Saved", delDayConfirm: "Delete this day permanently?", renumberConfirm: "Renumber all entries sequentially?", daysRenumbered: "Renumbering applied",
        backupDl: "Backup exported", importSuccess: "Import completed", errJsonFormat: "Invalid JSON format.", errJsonRead: "Parse error:", clearHistoryConfirm: "Erase entire dataset?",
        testColorsReset: "Test colors restored", testEmpty: "empty", testAttemptPrefix: "Try:", testInSession: "in set", testAccumulated: "Sets completed", msgClickStart: "Click to start", subMsgClassic: "Standard reaction test",
        subMsgF1: "Wait for lights out", subMsgNoGo: "Green — click. Blue — do not click.", subMsgAudio: "Auditory reaction", msgWaitGreen: "Wait for signal...", msgClickNow: "CLICK",
        msgLightsOn: "Staging lights...", msgGo: "GO", msgWait: "Hold...", msgBlueStop: "HOLD (BLUE)", msgGoodAvoid: "Correctly withheld", subMsgClickCont: "Click to advance", msgListen: "Listening...",
        subMsgNoColor: "Color remains static", msgTooSoon: "False start", subMsgTryAgain: "Click to retry", msgMistakeBlue: "Failed No-Go condition", msg5AvgDone: "🎯 5/5 SETS COMPLETED",
        noteNoGoIgnore: "Inhibition control metric; excluded from main log.", noteAudioIgnore: "Auditory metric; excluded from main log.", noteFull5Add: "Full block committed to form.", noteEachAdd: "All averages committed to form.",
        noteAttemptAdd: "All raw attempts committed to form.", noteOffAdd: "Auto-save is disabled.", titleSetDone: "Set of 5 attempts finalized", lblSetAvg: "Set Average:", lblAll5Avgs: "Set values:",
        lblTotalBlockAvg: "Block Cumulative Average:", lblClickNewSet: "Click anywhere to initialize next block", toast5BlockComplete: "Block finalized", noteAdded: " (committed)", noteWillAdd: " (pending 5/5)",
        noteAttemptAdded: " (committed)", titleSeriesDone: "Set finalized. Average:", lblAvgsCollected: "Sets recorded:", lblClickNextSet: "Click for subsequent set", toastAvgRecorded: "Recorded", noteAttemptRecorded: " (saved)", msUnit: "ms"
	}
};

const defaultTheme = { 
    bg: '#000000', 
    panel: '#121212', 
    control: '#1e1e1e', 
    border: '#282828',
    text: '#f3f3f3', 
    textMuted: '#9e9e9e',
    acc1: '#4cc2ff', 
    acc2: '#79b8ff' 
};

const defaultTestColors = { 
    idle: '#181818', 
    waiting: '#8a1c14', 
    ready: '#107c41', 
    fail: '#a80000', 
    blue: '#004b98',
    f1Light: '#e81123'
};

const defaultTasks = ["Osu HRDTHD (30 мин)", "Kovaak's (30 мин)"];

/**
	* 2. CORE UTILS & SAFE STORAGE
*/
function safeStorageGet(key, fallback) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
		} catch (e) {
        console.error(`Storage read error for "${key}":`, e);
        return fallback;
	}
}

function safeStorageSet(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
        console.error(`Storage write error for "${key}":`, e);
	}
}

function sanitizeExperimentData(data) {
    if (!Array.isArray(data)) return [];
    return data.map(d => {
        const isRest = d.isWeekend === true || d.isWeekend === 'true' || d.isWeekend === 1;
        if (isRest) {
            return {
                ...d,
                isWeekend: true,
                f1Raw: '',
                hbRaw: '',
                f1: { mean: 0, min: 0, max: 0, falseStarts: 0 },
                hb: { mean: 0, min: 0, max: 0, falseStarts: 0 },
                total: { mean: 0, min: 0, max: 0 }
			};
		}
        return {
            ...d,
            isWeekend: false
		};
	});
}

function escapeHTML(str) {
    if (typeof str !== 'string') return '' + str;
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
	}[tag] || tag));
}

let currentLang = localStorage.getItem('reactionLang') || 'ru';
let autoFillMode = localStorage.getItem('reactionAutoFillMode') || 'each';
function t(key) { return (translations[currentLang] && translations[currentLang][key]) ? translations[currentLang][key] : key; }

let experimentData = sanitizeExperimentData(safeStorageGet('reactionExperimentData', []));
safeStorageSet('reactionExperimentData', experimentData);

let customTheme = Object.assign({}, defaultTheme, safeStorageGet('reactionCustomTheme', defaultTheme));
let customTestColors = Object.assign({}, defaultTestColors, safeStorageGet('reactionTestColors', defaultTestColors));
let tasksConfig = safeStorageGet('reactionTasksConfig', defaultTasks);

let editIndex = -1;
let reactionChartInstance = null;
let falseStartsChartInstance = null;

/**
	* 3. DOM CACHE
*/
const DOM = {};
function initDOMCache() {
    DOM.formTitle = document.getElementById('formTitleText');
    DOM.dayNumber = document.getElementById('input-day-number');
    DOM.f1Results = document.getElementById('f1-results');
    DOM.f1False = document.getElementById('f1-false');
    DOM.hbResults = document.getElementById('hb-results');
    DOM.hbFalse = document.getElementById('hb-false');
    DOM.isWeekend = document.getElementById('is-weekend');
    DOM.newTaskInput = document.getElementById('new-task-input');
    DOM.tasksList = document.getElementById('dynamic-tasks-list');
    DOM.saveBtn = document.getElementById('saveBtn');
    DOM.clearBtn = document.getElementById('clearInputBtn');
    DOM.cancelEditBtn = document.getElementById('cancelEditBtn');
    DOM.targetDaySelect = document.getElementById('target-day-select');
    DOM.compareDaySelect = document.getElementById('compare-day-select');
    DOM.latestStats = document.getElementById('latest-stats');
    DOM.historyBody = document.getElementById('history-body');
    DOM.toast = document.getElementById('toast');
    DOM.currentRankDisplay = document.getElementById('currentRankDisplay');
    DOM.testArea = document.getElementById('test-area');
    DOM.testMessage = document.getElementById('test-message');
    DOM.testSubmessage = document.getElementById('test-submessage');
    DOM.testSessionInfo = document.getElementById('test-session-info');
    DOM.f1LightsContainer = document.getElementById('f1-lights');
    DOM.f1Lights = document.querySelectorAll('.f1-light');
    DOM.testModalContent = document.getElementById('test-modal-content');
    DOM.audioStatus = document.getElementById('audio-custom-status');
    DOM.autoFillSelect = document.getElementById('test-autofill-mode');
}

/**
	* 4. TOAST NOTIFICATIONS
*/
let toastTimeout = null;
function showToast(message) {
    if (!DOM.toast) return;
    DOM.toast.textContent = message;
    DOM.toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => DOM.toast.classList.remove('show'), 2000);
}

function copyVal(val, el) {
    navigator.clipboard.writeText(val).then(() => {
        const originalColor = el.style.color;
        el.style.color = 'var(--accent-cyan)';
        showToast(`${t('toastCopied')} ${val}`);
        setTimeout(() => { el.style.color = originalColor; }, 300);
	}).catch(() => {});
}

/**
	* 5. MODAL MANAGER
*/
const ModalManager = {
    activeModal: null,
	
    open(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        this.activeModal = modal;
        modal.style.display = 'flex';
        void modal.offsetWidth;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
	},
	
    close(modalOrId) {
        const modal = typeof modalOrId === 'string' ? document.getElementById(modalOrId) : modalOrId;
        if (!modal) return;
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
            if (this.activeModal === modal) {
                this.activeModal = null;
                document.body.style.overflow = '';
			}
		}, 120);
	},
	
    init() {
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) this.close(overlay);
			});
		});
		
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                if (this.activeModal.id === 'testModalOverlay') {
                    TestEngine.closeWindow();
					} else {
                    this.close(this.activeModal);
				}
			}
		});
	}
};

/**
	* 6. AUDIO SYSTEM
*/
const AudioSystem = {
    ctx: null,
    customBuffer: null,
    customName: localStorage.getItem('reactionCustomAudioName') || '',
	
    getContext() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.ctx = new AudioContext();
		}
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        return this.ctx;
	},
	
    init() {
        const base64 = localStorage.getItem('reactionCustomAudioBase64');
        if (base64) {
            try {
                const binaryString = atob(base64.split(',')[1] || base64);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
                const ctx = this.getContext();
                if (ctx) {
                    ctx.decodeAudioData(bytes.buffer.slice(0), (decoded) => {
                        this.customBuffer = decoded;
                        this.updateUI();
						}, () => {
                        this.customBuffer = null;
                        this.updateUI();
					});
				}
				} catch (e) {
                this.customBuffer = null;
                this.updateUI();
			}
			} else {
            this.updateUI();
		}
	},
	
    play() {
        try {
            const ctx = this.getContext();
            if (!ctx) return;
            if (this.customBuffer) {
                const source = ctx.createBufferSource();
                source.buffer = this.customBuffer;
                source.connect(ctx.destination);
                source.start(0);
                return;
			}
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(950, now);
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.008);
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.linearRampToValueAtTime(0.25, now + 0.001);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.08);
			} catch (e) {
            console.error("Audio error:", e);
		}
	},
	
    handleUpload(file) {
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            alert(t('errFileLarge'));
            return;
		}
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            const ctx = this.getContext();
            const arrayBufferReader = new FileReader();
            arrayBufferReader.onload = (abEvent) => {
                ctx.decodeAudioData(abEvent.target.result, (decoded) => {
                    this.customBuffer = decoded;
                    this.customName = file.name;
                    localStorage.setItem('reactionCustomAudioBase64', base64);
                    localStorage.setItem('reactionCustomAudioName', file.name);
                    this.updateUI();
                    showToast(`${t('audioLoaded')}: "${file.name}"`);
                    this.play();
				}, () => alert(t('errAudioDecode')));
			};
            arrayBufferReader.readAsArrayBuffer(file);
		};
        reader.readAsDataURL(file);
	},
	
    resetStock() {
        this.customBuffer = null;
        this.customName = '';
        localStorage.removeItem('reactionCustomAudioBase64');
        localStorage.removeItem('reactionCustomAudioName');
        this.updateUI();
        showToast(t('resetStockMsg'));
        this.play();
	},
	
    updateUI() {
        if (!DOM.audioStatus) return;
        if (this.customName && this.customBuffer) {
            DOM.audioStatus.innerHTML = `<span style="color:var(--accent-cyan);">🎵 ${t('curAudio')}</span> ${escapeHTML(this.customName)}`;
			} else {
            DOM.audioStatus.innerHTML = `<span style="color:var(--accent-teal);">⚡ ${t('curAudio')} ${t('stockAudioTone')}</span>`;
		}
	}
};

/**
	* 7. THEME & LOCALIZATION ENGINE
*/
function applyThemeCSS() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', customTheme.bg);
    root.style.setProperty('--panel-bg', customTheme.panel);
    root.style.setProperty('--control-bg', customTheme.control || '#1e1e1e');
    root.style.setProperty('--border', customTheme.border);
    root.style.setProperty('--text-main', customTheme.text);
    root.style.setProperty('--text-muted', customTheme.textMuted || '#9e9e9e');
    root.style.setProperty('--accent-cyan', customTheme.acc1);
    root.style.setProperty('--accent-teal', customTheme.acc2);
    root.style.setProperty('--f1-light-color', customTestColors.f1Light || '#e81123');
    updateCharts();
}

function loadThemeInputs() {
    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val;
	};
    setVal('color-bg', customTheme.bg);
    setVal('color-panel', customTheme.panel);
    setVal('color-control', customTheme.control || '#1e1e1e');
    setVal('color-border', customTheme.border);
    setVal('color-text', customTheme.text);
    setVal('color-text-muted', customTheme.textMuted || '#9e9e9e');
    setVal('color-accent1', customTheme.acc1);
    setVal('color-accent2', customTheme.acc2);
	
    setVal('color-test-idle', customTestColors.idle);
    setVal('color-test-waiting', customTestColors.waiting);
    setVal('color-test-ready', customTestColors.ready);
    setVal('color-test-fail', customTestColors.fail);
    setVal('color-test-blue', customTestColors.blue);
    setVal('color-test-f1', customTestColors.f1Light || '#e81123');
}

function updateThemeFromInputs() {
    customTheme = {
        bg: document.getElementById('color-bg').value,
        panel: document.getElementById('color-panel').value,
        control: document.getElementById('color-control').value,
        border: document.getElementById('color-border').value,
        text: document.getElementById('color-text').value,
        textMuted: document.getElementById('color-text-muted').value,
        acc1: document.getElementById('color-accent1').value,
        acc2: document.getElementById('color-accent2').value
	};
    safeStorageSet('reactionCustomTheme', customTheme);
    applyThemeCSS();
}

function updateTestColorsFromInputs() {
    customTestColors = {
        idle: document.getElementById('color-test-idle').value,
        waiting: document.getElementById('color-test-waiting').value,
        ready: document.getElementById('color-test-ready').value,
        fail: document.getElementById('color-test-fail').value,
        blue: document.getElementById('color-test-blue').value,
        f1Light: document.getElementById('color-test-f1').value
	};
    safeStorageSet('reactionTestColors', customTestColors);
    if (TestEngine.state === 'IDLE' || TestEngine.state === 'FINISHED') {
        DOM.testArea.style.backgroundColor = customTestColors.idle;
	}
    applyThemeCSS();
}

function resetTheme() {
    customTheme = Object.assign({}, defaultTheme);
    safeStorageSet('reactionCustomTheme', customTheme);
    loadThemeInputs();
    applyThemeCSS();
}

function resetTestColors() {
    customTestColors = Object.assign({}, defaultTestColors);
    safeStorageSet('reactionTestColors', customTestColors);
    loadThemeInputs();
    if (TestEngine.state === 'IDLE' || TestEngine.state === 'FINISHED') {
        DOM.testArea.style.backgroundColor = customTestColors.idle;
	}
    applyThemeCSS();
    showToast(t('testColorsReset'));
}

function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('reactionLang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    document.documentElement.lang = currentLang;
    document.title = t('docTitle');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
		}
	});
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
		}
	});
    if (DOM.formTitle) DOM.formTitle.innerText = editIndex > -1 ? t('formTitleEdit') : t('formTitleNew');
    if (DOM.saveBtn) DOM.saveBtn.innerText = editIndex > -1 ? t('btnSaveEdit') : t('btnSaveNew');
    AudioSystem.updateUI();
    TestEngine.reset();
    updateDashboard();
}

/**
	* 8. REACTION TEST FSM
*/
const TestEngine = {
    state: 'IDLE',
    currentType: 1,
    startTime: 0,
    timerId: null,
    blueTimerId: null,
    f1IntervalId: null,
	
    attempts: { 1: [], 2: [], 3: [], 4: [] },
    averages: { 1: [], 2: [], 3: [], 4: [] },
	
    init() {
        if (DOM.testArea) {
            DOM.testArea.addEventListener('pointerdown', () => this.handleAction());
		}
	},
	
    setType(type) {
        this.currentType = Number(type);
        document.querySelectorAll('[data-test-type]').forEach(btn => {
            btn.classList.toggle('test-active-btn', Number(btn.dataset.testType) === this.currentType);
		});
        DOM.testArea.classList.toggle('f1-mode', this.currentType === 2);
        this.reset();
	},
	
    reset() {
        this.clearTimers();
        this.state = 'IDLE';
        DOM.testArea.classList.remove('finished', 'failed');
        DOM.testArea.style.backgroundColor = customTestColors.idle;
        DOM.f1LightsContainer.style.display = this.currentType === 2 ? 'flex' : 'none';
        DOM.f1Lights.forEach(l => l.classList.remove('on'));
		
        DOM.testMessage.innerText = t('msgClickStart');
        const subMessages = { 1: t('subMsgClassic'), 2: t('subMsgF1'), 3: t('subMsgNoGo'), 4: t('subMsgAudio') };
        DOM.testSubmessage.innerText = subMessages[this.currentType] || '';
        this.updateSessionInfo();
	},
	
    clearTimers() {
        clearTimeout(this.timerId);
        clearTimeout(this.blueTimerId);
        cancelAnimationFrame(this.f1IntervalId);
	},
	
    handleAction() {
        switch (this.state) {
            case 'IDLE':
            case 'FINISHED':
            case 'FAILED':
			this.startWaiting();
			break;
            case 'WAITING':
			this.triggerEarlyFail();
			break;
            case 'BLUE_ACTIVE':
			this.triggerBlueMistake();
			break;
            case 'READY':
			this.recordReaction();
			break;
		}
	},
	
    startWaiting() {
        if (this.averages[this.currentType].length >= 5 && this.attempts[this.currentType].length === 0) {
            this.averages[this.currentType] = [];
            this.updateSessionInfo();
		}
		
        DOM.testArea.classList.remove('finished', 'failed');
        this.clearTimers();
		
        if (this.currentType === 1) {
            this.state = 'WAITING';
            DOM.testArea.style.backgroundColor = customTestColors.waiting;
            DOM.testMessage.innerText = t('msgWaitGreen');
            DOM.testSubmessage.innerText = '';
            this.timerId = setTimeout(() => this.triggerReady(), Math.random() * 3000 + 2000);
			} else if (this.currentType === 2) {
            this.state = 'WAITING';
            DOM.testArea.style.backgroundColor = customTestColors.idle;
            DOM.testMessage.innerText = t('msgLightsOn');
            DOM.testSubmessage.innerText = '';
            DOM.f1Lights.forEach(l => l.classList.remove('on'));
			
            let lightIndex = 0;
            let lastTick = performance.now();
            const f1Loop = () => {
                const now = performance.now();
                if (now - lastTick >= 1000) {
                    if (lightIndex < 5) {
                        DOM.f1Lights[lightIndex].classList.add('on');
                        lightIndex++;
                        lastTick = now;
						} else {
                        this.timerId = setTimeout(() => {
                            DOM.f1Lights.forEach(l => l.classList.remove('on'));
                            this.triggerReady(t('msgGo'));
						}, Math.random() * 2000 + 1000);
                        return;
					}
				}
                this.f1IntervalId = requestAnimationFrame(f1Loop);
			};
            this.f1IntervalId = requestAnimationFrame(f1Loop);
			} else if (this.currentType === 3) {
            this.state = 'WAITING';
            DOM.testArea.style.backgroundColor = customTestColors.waiting;
            DOM.testMessage.innerText = t('msgWait');
            DOM.testSubmessage.innerText = '';
            this.timerId = setTimeout(() => {
                if (Math.random() < 0.3) {
                    this.state = 'BLUE_ACTIVE';
                    DOM.testArea.style.backgroundColor = customTestColors.blue;
                    DOM.testMessage.innerText = t('msgBlueStop');
                    this.blueTimerId = setTimeout(() => {
                        if (this.state === 'BLUE_ACTIVE') {
                            DOM.testMessage.innerText = t('msgGoodAvoid');
                            DOM.testSubmessage.innerText = t('subMsgClickCont');
                            DOM.testArea.style.backgroundColor = customTestColors.idle;
                            DOM.testArea.classList.add('finished');
                            this.state = 'FINISHED';
						}
					}, 1500);
					} else {
                    this.triggerReady();
				}
			}, Math.random() * 3000 + 2000);
			} else if (this.currentType === 4) {
            this.state = 'WAITING';
            DOM.testArea.style.backgroundColor = customTestColors.idle;
            DOM.testMessage.innerText = t('msgListen');
            DOM.testSubmessage.innerText = t('subMsgNoColor');
            AudioSystem.getContext();
            this.timerId = setTimeout(() => {
                AudioSystem.play();
                this.triggerReady();
			}, Math.random() * 3000 + 2000);
		}
	},
	
    triggerReady(customMsg) {
        this.state = 'READY';
        this.startTime = performance.now();
        if (this.currentType !== 2 && this.currentType !== 4) {
            DOM.testArea.style.backgroundColor = customTestColors.ready;
		}
        DOM.testMessage.innerText = customMsg || t('msgClickNow');
	},
	
    triggerEarlyFail() {
        this.clearTimers();
        this.state = 'FAILED';
        DOM.testArea.classList.add('failed');
        DOM.testArea.style.backgroundColor = customTestColors.fail;
        DOM.testMessage.innerText = t('msgTooSoon');
        DOM.testSubmessage.innerText = t('subMsgTryAgain');
	},
	
    triggerBlueMistake() {
        this.clearTimers();
        this.state = 'FAILED';
        DOM.testArea.classList.add('failed');
        DOM.testArea.style.backgroundColor = customTestColors.fail;
        DOM.testMessage.innerText = t('msgMistakeBlue');
        DOM.testSubmessage.innerText = t('subMsgTryAgain');
	},
	
    recordReaction() {
        const reactionTime = Math.round(performance.now() - this.startTime);
        this.state = 'FINISHED';
        DOM.testArea.classList.add('finished');
        DOM.testArea.style.backgroundColor = customTestColors.idle;
		
        const ms = t('msUnit');
        this.attempts[this.currentType].push(reactionTime);
		
        if (autoFillMode === 'attempt' && this.currentType <= 2) {
            pushResultsToInput(this.currentType, [reactionTime]);
		}
		
        if (this.attempts[this.currentType].length === 5) {
            const avg = Math.round(this.attempts[this.currentType].reduce((a, b) => a + b, 0) / 5);
            this.averages[this.currentType].push(avg);
			
            if (this.currentType <= 2) {
                if (autoFillMode === 'each') pushResultsToInput(this.currentType, [avg]);
                else if (autoFillMode === 'full5' && this.averages[this.currentType].length === 5) {
                    pushResultsToInput(this.currentType, [...this.averages[this.currentType]]);
				}
			}
            this.attempts[this.currentType] = [];
			
            if (this.averages[this.currentType].length === 5) {
                const totalAvg = Math.round(this.averages[this.currentType].reduce((a, b) => a + b, 0) / 5);
                DOM.testMessage.innerHTML = t('msg5AvgDone');
				
                let autoFillNote = '';
                if (this.currentType === 3) autoFillNote = t('noteNoGoIgnore');
                else if (this.currentType === 4) autoFillNote = t('noteAudioIgnore');
                else if (autoFillMode === 'full5') autoFillNote = t('noteFull5Add');
                else if (autoFillMode === 'each') autoFillNote = t('noteEachAdd');
                else if (autoFillMode === 'attempt') autoFillNote = t('noteAttemptAdd');
                else autoFillNote = t('noteOffAdd');
				
                DOM.testSubmessage.innerHTML = `
				<div style="background: var(--control-bg); border: 1px solid #2ea043; border-radius: var(--radius-md); padding: 12px 16px; margin-top: 12px; display: inline-block;">
				<div style="color: #4ade80; font-weight: 700; font-size: 1.1em;">🏆 ${t('titleSetDone')}</div>
				<div style="color: #fff; font-size: 13px; margin-top: 4px;">${t('lblSetAvg')} <strong>${avg} ${ms}</strong></div>
				<div style="color: var(--text-main); font-size: 12px; margin-top: 2px;">${t('lblAll5Avgs')} [<strong>${this.averages[this.currentType].join(', ')}</strong> ${ms}]</div>
				<div style="color: var(--accent-cyan); font-weight: 700; font-size: 13.5px; margin-top: 4px;">${t('lblTotalBlockAvg')} ${totalAvg} ${ms}</div>
				</div>
				<div style="margin-top: 8px; font-size: 11.5px; opacity: 0.9; color: var(--accent-cyan);">${autoFillNote}<br>${t('lblClickNewSet')}</div>`;
                showToast(`${t('toast5BlockComplete')} (${totalAvg} ${ms})`);
				} else {
                DOM.testMessage.innerText = `${reactionTime} ${ms}`;
                let eachNote = '';
                if (this.currentType <= 2) {
                    if (autoFillMode === 'each') eachNote = t('noteAdded');
                    else if (autoFillMode === 'full5') eachNote = t('noteWillAdd');
                    else if (autoFillMode === 'attempt') eachNote = t('noteAttemptAdded');
				}
                DOM.testSubmessage.innerHTML = `
				<div style="background: var(--control-bg); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 8px 14px; margin-top: 10px; display: inline-block;">
				<div style="color: var(--accent-cyan); font-weight: 700; font-size: 1.05em;">⚡ ${t('titleSeriesDone')} ${avg} ${ms}${eachNote}</div>
				<div style="color: var(--text-main); font-size: 12px; margin-top: 2px;">${t('lblAvgsCollected')} <strong>${this.averages[this.currentType].length}/5</strong> [${this.averages[this.currentType].join(', ')}]</div>
				</div>
				<div style="margin-top: 6px; font-size: 11.5px; opacity: 0.8;">${t('lblClickNextSet')}</div>`;
                showToast(`${t('toastAvgRecorded')} (${avg} ${ms})`);
			}
			} else {
            const attemptSuffix = (autoFillMode === 'attempt' && this.currentType <= 2) ? t('noteAttemptRecorded') : '';
            DOM.testMessage.innerText = `${reactionTime} ${ms}`;
            DOM.testSubmessage.innerText = `${t('testAttemptPrefix')} ${this.attempts[this.currentType].length}/5${attemptSuffix}. ${t('subMsgClickCont')}`;
		}
		
        this.updateSessionInfo();
	},
	
    updateSessionInfo() {
        if (!DOM.testSessionInfo) return;
        const attempts = this.attempts[this.currentType] || [];
        const averages = this.averages[this.currentType] || [];
        const attemptsList = attempts.length > 0 ? attempts.join(', ') : t('testEmpty');
        DOM.testSessionInfo.innerHTML = `${t('testAttemptPrefix')} ${attempts.length}/5 ${t('testInSession')} [${attemptsList}] | ${t('testAccumulated')} (${averages.length}/5): [${averages.join(', ')}]`;
	},
	
    openWindow() {
        ModalManager.open('testModalOverlay');
        this.setType(1);
	},
	
    closeWindow() {
        ModalManager.close('testModalOverlay');
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
        this.reset();
	}
};

function pushResultsToInput(type, values) {
    if (type !== 1 && type !== 2) return;
    const input = type === 2 ? DOM.f1Results : DOM.hbResults;
    if (!input || !values || !values.length) return;
    const current = input.value.trim() ? input.value.trim().split(/\s+/) : [];
    values.forEach(v => current.push(v));
    input.value = current.join(' ');
    checkFormInputs();
}

/**
	* 9. TASKS MANAGEMENT
*/
function renderTasksList() {
    if (!DOM.tasksList) return;
    DOM.tasksList.innerHTML = '';
    const fragment = document.createDocumentFragment();
    tasksConfig.forEach((task, idx) => {
        const div = document.createElement('div');
        div.className = 'checkbox-group';
        div.style.cssText = 'justify-content: space-between; margin-bottom: 4px;';
        div.innerHTML = `
		<div style="display:flex; align-items:center; gap:8px;">
		<input type="checkbox" id="task-${idx}" class="dynamic-task-checkbox" data-taskname="${escapeHTML(task)}">
		<label for="task-${idx}">${escapeHTML(task)}</label>
		</div>
		<button class="action-btn btn-danger" data-action="remove-task" data-index="${idx}">✖</button>`;
        fragment.appendChild(div);
	});
    DOM.tasksList.appendChild(fragment);
}

function addTask() {
    const val = DOM.newTaskInput.value.trim();
    if (val && !tasksConfig.includes(val)) {
        tasksConfig.push(val);
        safeStorageSet('reactionTasksConfig', tasksConfig);
        DOM.newTaskInput.value = '';
        renderTasksList();
	}
}

function removeTask(idx) {
    if (confirm(`${t('delItemConfirm')} "${tasksConfig[idx]}"?`)) {
        tasksConfig.splice(idx, 1);
        safeStorageSet('reactionTasksConfig', tasksConfig);
        renderTasksList();
	}
}

/**
	* 10. CRUD & DATA CALCULATIONS
*/
function calculateStats(arr) {
    if (!arr || !arr.length) return { mean: 0, min: 0, max: 0 };
    return {
        mean: parseFloat((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2)),
        min: Math.min(...arr),
        max: Math.max(...arr)
	};
}

function getNextSuggestedDay() {
    if (!experimentData.length) return 1;
    const days = new Set(experimentData.map(d => d.day));
    let day = 1;
    while (days.has(day)) day++;
    return day;
}

function saveDay() {
    const isWeekend = DOM.isWeekend.checked;
    const targetDay = parseInt(DOM.dayNumber.value, 10) || getNextSuggestedDay();
	
    let f1Raw = DOM.f1Results.value.trim();
    let hbRaw = DOM.hbResults.value.trim();
    let f1Input = f1Raw.split(/\s+/).map(Number).filter(n => !isNaN(n) && n > 0);
    let hbInput = hbRaw.split(/\s+/).map(Number).filter(n => !isNaN(n) && n > 0);
	
    if (!isWeekend && (!f1Input.length || !hbInput.length)) {
        alert(t('valNumRequired'));
        return;
	}
	
    let f1Stats = { mean: 0, min: 0, max: 0, falseStarts: 0 };
    let hbStats = { mean: 0, min: 0, max: 0, falseStarts: 0 };
    let total = { mean: 0, min: 0, max: 0 };
	
    if (!isWeekend) {
        f1Stats = f1Input.length ? calculateStats(f1Input) : { mean: 0, min: 0, max: 0 };
        f1Stats.falseStarts = parseInt(DOM.f1False.value, 10) || 0;
		
        hbStats = hbInput.length ? calculateStats(hbInput) : { mean: 0, min: 0, max: 0 };
        hbStats.falseStarts = parseInt(DOM.hbFalse.value, 10) || 0;
		
        const hasBoth = f1Input.length > 0 && hbInput.length > 0;
        total = hasBoth ? {
            mean: parseFloat(((f1Stats.mean + hbStats.mean) / 2).toFixed(2)),
            min: parseFloat(((f1Stats.min + hbStats.min) / 2).toFixed(2)),
            max: parseFloat(((f1Stats.max + hbStats.max) / 2).toFixed(2))
			} : {
            mean: f1Stats.mean || hbStats.mean || 0,
            min: f1Stats.min || hbStats.min || 0,
            max: f1Stats.max || hbStats.max || 0
		};
		} else {
        f1Raw = '';
        hbRaw = '';
	}
	
    const tasksState = {};
    document.querySelectorAll('.dynamic-task-checkbox').forEach(cb => {
        tasksState[cb.getAttribute('data-taskname')] = cb.checked;
	});
	
    const dayRecord = {
        day: targetDay,
        f1Raw,
        hbRaw,
        f1: f1Stats,
        hb: hbStats,
        total,
        isWeekend,
        tasks: tasksState
	};
	
    const existingIndex = experimentData.findIndex(d => d.day === targetDay);
    if (existingIndex > -1 && existingIndex !== editIndex) {
        if (!confirm(t('dayOverwrite'))) return;
        experimentData[existingIndex] = dayRecord;
		} else if (editIndex > -1) {
        experimentData[editIndex] = dayRecord;
		} else {
        experimentData.push(dayRecord);
	}
	
    experimentData.sort((a, b) => a.day - b.day);
    safeStorageSet('reactionExperimentData', experimentData);
    showToast(t('daySaved'));
    resetForm();
    updateDashboard();
}

function editDay(index) {
    editIndex = index;
    const data = experimentData[index];
    if (!data) return;
	
    DOM.f1Results.value = data.f1Raw || '';
    DOM.hbResults.value = data.hbRaw || '';
    DOM.f1False.value = (data.f1 && !data.isWeekend) ? data.f1.falseStarts : 0;
    DOM.hbFalse.value = (data.hb && !data.isWeekend) ? data.hb.falseStarts : 0;
    DOM.isWeekend.checked = !!data.isWeekend;
	
    document.querySelectorAll('.dynamic-task-checkbox').forEach(cb => {
        const tName = cb.getAttribute('data-taskname');
        if (data.tasks) cb.checked = !!data.tasks[tName];
        else {
            if (tName.includes('Osu')) cb.checked = !!data.osu;
            if (tName.includes('Kovaak')) cb.checked = !!data.kovaaks;
		}
	});
	
    DOM.formTitle.innerText = t('formTitleEdit');
    DOM.dayNumber.value = data.day;
    DOM.saveBtn.innerText = t('btnSaveEdit');
    DOM.cancelEditBtn.style.display = 'block';
    DOM.clearBtn.classList.remove('visible');
}

function deleteDay(index) {
    if (!experimentData[index]) return;
    if (confirm(t('delDayConfirm'))) {
        experimentData.splice(index, 1);
        safeStorageSet('reactionExperimentData', experimentData);
        cancelEdit();
        updateDashboard();
	}
}

function renumberDaysSequentially() {
    if (!experimentData.length) return;
    if (confirm(t('renumberConfirm'))) {
        experimentData.sort((a, b) => a.day - b.day);
        experimentData.forEach((d, i) => d.day = i + 1);
        safeStorageSet('reactionExperimentData', experimentData);
        updateDashboard();
        resetForm();
        showToast(t('daysRenumbered'));
	}
}

function exportDataJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(experimentData, null, 2));
    const anchor = document.createElement('a');
    anchor.setAttribute("href", dataStr);
    anchor.setAttribute("download", `reaction_stats_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    showToast(t('backupDl'));
}

function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            if (Array.isArray(parsed) && parsed.every(d => typeof d.day === 'number' && d.total)) {
                experimentData = sanitizeExperimentData(parsed);
                experimentData.sort((a, b) => a.day - b.day);
                safeStorageSet('reactionExperimentData', experimentData);
                updateDashboard();
                resetForm();
                showToast(t('importSuccess'));
				} else {
                alert(t('errJsonFormat'));
			}
			} catch (err) {
            alert(`${t('errJsonRead')} ${err.message}`);
		}
	};
    reader.readAsText(file);
    event.target.value = '';
}

function clearAllData() {
    if (confirm(t('clearHistoryConfirm'))) {
        localStorage.removeItem('reactionExperimentData');
        experimentData = [];
        ModalManager.close('settingsModalOverlay');
        ModalManager.close('rulesModalOverlay');
        init();
	}
}

function cancelEdit() {
    editIndex = -1;
    resetForm();
}

function resetForm() {
    DOM.f1Results.value = '';
    DOM.hbResults.value = '';
    DOM.f1False.value = '0';
    DOM.hbFalse.value = '0';
    DOM.isWeekend.checked = false;
    document.querySelectorAll('.dynamic-task-checkbox').forEach(cb => cb.checked = false);
    DOM.formTitle.innerText = t('formTitleNew');
    DOM.dayNumber.value = getNextSuggestedDay();
    DOM.saveBtn.innerText = t('btnSaveNew');
    DOM.cancelEditBtn.style.display = 'none';
    checkFormInputs();
}

function checkFormInputs() {
    if (editIndex > -1) return;
    const hasData = DOM.f1Results.value.trim().length > 0 ||
	DOM.hbResults.value.trim().length > 0 ||
	DOM.f1False.value !== '0' ||
	DOM.hbFalse.value !== '0' ||
	DOM.isWeekend.checked;
    DOM.clearBtn.classList.toggle('visible', hasData);
}

function clearCurrentInput() {
    DOM.f1Results.value = '';
    DOM.hbResults.value = '';
    DOM.f1False.value = '0';
    DOM.hbFalse.value = '0';
    DOM.isWeekend.checked = false;
    document.querySelectorAll('.dynamic-task-checkbox').forEach(cb => cb.checked = false);
    checkFormInputs();
}

function getGrowthHTML(current, initial, label = '') {
    if (!current || !initial || isNaN(current) || isNaN(initial) || initial <= 0 || current <= 0) return '';
    const percent = ((current - initial) / initial) * 100;
    const cls = percent <= 0 ? 'positive' : 'negative';
    const prefix = percent > 0 ? '+' : '';
    return `<span class="growth ${cls}">${prefix}${percent.toFixed(2)}% ${label}</span>`;
}

function updateCurrentRank(latestMean) {
    const rows = [1, 2, 3, 4, 5, 6].map(n => document.getElementById(`rank-${n}`));
    rows.forEach(row => { if (row) row.classList.remove('rank-highlight'); });
	
    if (!latestMean) {
        DOM.currentRankDisplay.innerHTML = `${t('rankTitleToday')} <span>${t('rankNoData')}</span>`;
        return;
	}
	
    let rankName = '';
    let targetIdx = -1;
    if (latestMean < 150) { rankName = t('r1Name'); targetIdx = 0; }
    else if (latestMean < 180) { rankName = t('r2Name'); targetIdx = 1; }
    else if (latestMean < 210) { rankName = t('r3Name'); targetIdx = 2; }
    else if (latestMean < 250) { rankName = t('r4Name'); targetIdx = 3; }
    else if (latestMean <= 300) { rankName = t('r5Name'); targetIdx = 4; }
    else { rankName = t('r6Name'); targetIdx = 5; }
	
    if (targetIdx !== -1 && rows[targetIdx]) rows[targetIdx].classList.add('rank-highlight');
    DOM.currentRankDisplay.innerHTML = `${t('rankTitlePrefix')}${latestMean} ${t('msUnit')}): <span>${rankName}</span>`;
}

function showDayTasks(index) {
    const d = experimentData[index];
    if (!d) return;
    let html = `<h3>${t('tasksDayTitle')}${d.day}</h3><ul style="margin-top:8px; list-style:none; padding:0;">`;
    if (d.tasks) {
        for (const [tName, isDone] of Object.entries(d.tasks)) {
            const status = isDone
			? `<span style="color:#4ade80; font-weight:600;">${t('taskCompleted')}</span>`
			: `<span style="color:#ff5252;">${t('taskNotCompleted')}</span>`;
            html += `<li style="padding:6px 0; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;"><span>${escapeHTML(tName)}</span> ${status}</li>`;
		}
		} else {
        const osuDone = d.osu ? 1 : 0;
        const kovDone = d.kovaaks ? 1 : 0;
        html += `<li style="padding:6px 0; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;"><span>Osu! HRDTHD (30 min)</span> ${osuDone ? t('taskCompleted') : t('taskNotCompleted')}</li>`;
        html += `<li style="padding:6px 0; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;"><span>Kovaak's (30 min)</span> ${kovDone ? t('taskCompleted') : t('taskNotCompleted')}</li>`;
	}
    html += `</ul>`;
	
    let taskModal = document.getElementById('taskModalOverlay');
    if (!taskModal) {
        taskModal = document.createElement('div');
        taskModal.className = 'modal-overlay';
        taskModal.id = 'taskModalOverlay';
        taskModal.innerHTML = `<div class="modal-content" style="max-width:440px;"><div class="modal-header"><h1 style="font-size:15px; margin-bottom:0;" data-i18n="viewTasksTitle">${t('viewTasksTitle')}</h1><button class="close-modal" data-action="close-task-modal">✕</button></div><div class="modal-body" id="taskModalBody"></div></div>`;
        document.body.appendChild(taskModal);
	}
    document.getElementById('taskModalBody').innerHTML = html;
    ModalManager.open('taskModalOverlay');
}

/**
	* 11. DASHBOARD & CHARTS
*/
function updateDashboard() {
    const ms = t('msUnit');
    if (!experimentData.length) {
        DOM.targetDaySelect.innerHTML = '';
        DOM.compareDaySelect.innerHTML = '';
        DOM.latestStats.innerHTML = `<p style="color: var(--text-main); grid-column: 1/-1; text-align: center;">${t('noSavedData')}</p>`;
        DOM.historyBody.innerHTML = `<tr><td colspan="8">${t('noSavedData')}</td></tr>`;
        updateCurrentRank(null);
        updateCharts();
        return;
	}
	
    const currentTargetVal = DOM.targetDaySelect.value;
    const currentCompareVal = DOM.compareDaySelect.value;
    let targetOpts = `<option value="latest">${t('latestCompleted')}</option>`;
    let compareOpts = '';
	
    experimentData.forEach((d, idx) => {
        const mark = d.isWeekend ? t('restDayMark') : '';
        targetOpts += `<option value="${idx}">${t('viewDay')} ${t('dayWord')} ${d.day}${mark}</option>`;
        compareOpts += `<option value="${idx}">${t('compareDay')} ${t('dayWord')} ${d.day}${mark}</option>`;
	});
	
    DOM.targetDaySelect.innerHTML = targetOpts;
    DOM.compareDaySelect.innerHTML = compareOpts;
	
    const activeDays = experimentData.filter(d => !d.isWeekend && d.total && d.total.mean > 0);
    const firstActiveIdx = experimentData.findIndex(d => !d.isWeekend && d.total && d.total.mean > 0);
    const defaultCompareIdx = firstActiveIdx !== -1 ? firstActiveIdx : 0;
	
    let latestActiveIdx = -1;
    for (let i = experimentData.length - 1; i >= 0; i--) {
        if (!experimentData[i].isWeekend && experimentData[i].total && experimentData[i].total.mean > 0) {
            latestActiveIdx = i;
            break;
		}
	}
    if (latestActiveIdx === -1) latestActiveIdx = experimentData.length - 1;
	
    if (currentTargetVal !== '') DOM.targetDaySelect.value = currentTargetVal;
    if (currentCompareVal !== '' && parseInt(currentCompareVal, 10) < experimentData.length) {
        DOM.compareDaySelect.value = currentCompareVal;
		} else {
        DOM.compareDaySelect.value = defaultCompareIdx;
	}
	
    let targetIdx = DOM.targetDaySelect.value !== 'latest' && DOM.targetDaySelect.value !== '' ? parseInt(DOM.targetDaySelect.value, 10) : latestActiveIdx;
    let compareIdx = DOM.compareDaySelect.value !== '' ? parseInt(DOM.compareDaySelect.value, 10) : defaultCompareIdx;
	
    if (isNaN(targetIdx) || targetIdx >= experimentData.length) targetIdx = latestActiveIdx;
    if (isNaN(compareIdx) || compareIdx >= experimentData.length) compareIdx = defaultCompareIdx;
	
    const latest = experimentData[targetIdx];
    const compareTarget = experimentData[compareIdx];
    const label = `${t('fromDayWord')} ${compareTarget.day}`;
    
    const totalF1FS = activeDays.reduce((sum, d) => sum + (d.f1 ? d.f1.falseStarts || 0 : 0), 0);
    const totalHBFS = activeDays.reduce((sum, d) => sum + (d.hb ? d.hb.falseStarts || 0 : 0), 0);
    
    const last7Active = activeDays.slice(-7);
	
    const validTotal = last7Active.filter(d => d.total && d.total.mean > 0);
    const validF1 = last7Active.filter(d => d.f1 && d.f1.mean > 0);
    const validHB = last7Active.filter(d => d.hb && d.hb.mean > 0);
	
    const weekMean = validTotal.length ? (validTotal.reduce((sum, d) => sum + d.total.mean, 0) / validTotal.length).toFixed(2) : 0;
    const weekMeanF1 = validF1.length ? (validF1.reduce((sum, d) => sum + d.f1.mean, 0) / validF1.length).toFixed(2) : 0;
    const weekMeanHB = validHB.length ? (validHB.reduce((sum, d) => sum + d.hb.mean, 0) / validHB.length).toFixed(2) : 0;
    const weekTotalFS = last7Active.reduce((sum, d) => sum + (d.f1 ? d.f1.falseStarts || 0 : 0) + (d.hb ? d.hb.falseStarts || 0 : 0), 0);
    const weekMeanDelta = validTotal.length ? (validTotal.reduce((sum, d) => sum + (d.total.max - d.total.min), 0) / validTotal.length).toFixed(2) : 0;
    const dayDelta = (latest && !latest.isWeekend && latest.total && latest.total.mean) ? (latest.total.max - latest.total.min).toFixed(2) : '0';
	
    const latestMeanDisplay = (latest && !latest.isWeekend && latest.total && latest.total.mean) ? `${latest.total.mean} ${ms}` : '—';
    const latestMinMaxDisplay = (latest && !latest.isWeekend && latest.total && latest.total.mean) ? `${t('minText')} ${latest.total.min} ${ms} | ${t('maxText')} ${latest.total.max} ${ms}` : '—';
    const f1MeanDisplay = (latest && !latest.isWeekend && latest.f1 && latest.f1.mean) ? `${latest.f1.mean} ${ms}` : '—';
    const f1MinMaxDisplay = (latest && !latest.isWeekend && latest.f1 && latest.f1.mean) ? `${t('minText')} ${latest.f1.min} ${ms} | ${t('maxText')} ${latest.f1.max} ${ms}` : '—';
    const hbMeanDisplay = (latest && !latest.isWeekend && latest.hb && latest.hb.mean) ? `${latest.hb.mean} ${ms}` : '—';
    const hbMinMaxDisplay = (latest && !latest.isWeekend && latest.hb && latest.hb.mean) ? `${t('minText')} ${latest.hb.min} ${ms} | ${t('maxText')} ${latest.hb.max} ${ms}` : '—';
	
    const growthTotal = (latest && !latest.isWeekend && compareTarget && !compareTarget.isWeekend) ? getGrowthHTML(latest.total?.mean, compareTarget.total?.mean, label) : '';
    const growthF1 = (latest && !latest.isWeekend && compareTarget && !compareTarget.isWeekend) ? getGrowthHTML(latest.f1?.mean, compareTarget.f1?.mean, label) : '';
    const growthHB = (latest && !latest.isWeekend && compareTarget && !compareTarget.isWeekend) ? getGrowthHTML(latest.hb?.mean, compareTarget.hb?.mean, label) : '';
	
    DOM.latestStats.innerHTML = `
	<div class="stat-card">
	<div>${t('overallStats')} (${t('dayWord')} ${latest.day}) <span style="font-size:0.75em; color:var(--accent-cyan); cursor:pointer; float:right;" data-action="toggle-weekly" data-target="weekly-total">${t('weekBtnShow')}</span></div>
	<div class="stat-value">${t('avgText')} <span class="copyable" data-action="copy" data-val="${latest.isWeekend ? 0 : (latest.total?.mean || 0)}">${latestMeanDisplay}</span></div>
	<div class="stat-subtext">${latestMinMaxDisplay}</div>
	${growthTotal}
	<div id="weekly-total" style="display:none; margin-top:8px; padding-top:6px; border-top:1px solid var(--border);">
	<div style="color: var(--accent-cyan); font-weight:600; font-size:0.85em;">${t('weeklyAvgAct')}</div>
	<div style="font-size:1.05em; font-weight:700; color:var(--text-main);">${weekMean} ${ms}</div>
	<div style="font-size:0.8em; color:var(--text-muted);">${t('overLastDays1')}${validTotal.length}${t('overLastDays2')}</div>
	</div>
	</div>
	<div class="stat-card">
	<div>Formula 1 (${t('dayWord')} ${latest.day}) <span style="font-size:0.75em; color:var(--accent-cyan); cursor:pointer; float:right;" data-action="toggle-weekly" data-target="weekly-f1">${t('weekBtnShow')}</span></div>
	<div class="stat-value">${t('avgText')} <span class="copyable" data-action="copy" data-val="${latest.isWeekend ? 0 : (latest.f1?.mean || 0)}">${f1MeanDisplay}</span></div>
	<div class="stat-subtext">${f1MinMaxDisplay}</div>
	${growthF1}
	<div id="weekly-f1" style="display:none; margin-top:8px; padding-top:6px; border-top:1px solid var(--border);">
	<div style="color: var(--accent-cyan); font-weight:600; font-size:0.85em;">${t('weeklyAvgAct')}</div>
	<div style="font-size:1.05em; font-weight:700; color:var(--text-main);">${weekMeanF1} ${ms}</div>
	<div style="font-size:0.8em; color:var(--text-muted);">${t('overLastDays1')}${validF1.length}${t('overLastDays2')}</div>
	</div>
	</div>
	<div class="stat-card">
	<div>Human Bench (${t('dayWord')} ${latest.day}) <span style="font-size:0.75em; color:var(--accent-cyan); cursor:pointer; float:right;" data-action="toggle-weekly" data-target="weekly-hb">${t('weekBtnShow')}</span></div>
	<div class="stat-value">${t('avgText')} <span class="copyable" data-action="copy" data-val="${latest.isWeekend ? 0 : (latest.hb?.mean || 0)}">${hbMeanDisplay}</span></div>
	<div class="stat-subtext">${hbMinMaxDisplay}</div>
	${growthHB}
	<div id="weekly-hb" style="display:none; margin-top:8px; padding-top:6px; border-top:1px solid var(--border);">
	<div style="color: var(--accent-cyan); font-weight:600; font-size:0.85em;">${t('weeklyAvgAct')}</div>
	<div style="font-size:1.05em; font-weight:700; color:var(--text-main);">${weekMeanHB} ${ms}</div>
	<div style="font-size:0.8em; color:var(--text-muted);">${t('overLastDays1')}${validHB.length}${t('overLastDays2')}</div>
	</div>
	</div>
	<div class="stat-card">
	<div>${t('fsTotalAct')} <span style="font-size:0.75em; color:var(--accent-cyan); cursor:pointer; float:right;" data-action="toggle-weekly" data-target="weekly-fs">${t('weekBtnShow')}</span></div>
	<div class="stat-value"><span class="copyable" data-action="copy" data-val="${totalF1FS + totalHBFS}">${totalF1FS + totalHBFS}</span></div>
	<div class="stat-subtext">F1: ${totalF1FS} | HB: ${totalHBFS}</div>
	<div id="weekly-fs" style="display:none; margin-top:8px; padding-top:6px; border-top:1px solid var(--border);">
	<div style="color: var(--accent-cyan); font-weight:600; font-size:0.85em;">${t('weeklyTotalAct')}</div>
	<div style="font-size:1.05em; font-weight:700; color:var(--text-main);">${weekTotalFS}</div>
	<div style="font-size:0.8em; color:var(--text-muted);">${t('overLastDays1')}${last7Active.length}${t('overLastDays2')}</div>
	</div>
	</div>
	<div class="stat-card">
	<div>${t('stability')} (${t('dayWord')} ${latest.day}) <span style="font-size:0.75em; color:var(--accent-cyan); cursor:pointer; float:right;" data-action="toggle-weekly" data-target="weekly-stability">${t('weekBtnShow')}</span></div>
	<div class="stat-value">${(latest && !latest.isWeekend && latest.total && latest.total.mean) ? `${dayDelta} ${ms}` : '—'}</div>
	<div class="stat-subtext">${t('deltaMaxMin')}</div>
	<div id="weekly-stability" style="display:none; margin-top:8px; padding-top:6px; border-top:1px solid var(--border);">
	<div style="color: var(--accent-cyan); font-weight:600; font-size:0.85em;">${t('weeklyAvgDelta')}</div>
	<div style="font-size:1.05em; font-weight:700; color:var(--text-main);">${weekMeanDelta} ${ms}</div>
	<div style="font-size:0.8em; color:var(--text-muted);">${t('overLastDays1')}${validTotal.length}${t('overLastDays2')}</div>
	</div>
	</div>`;
	
    DOM.historyBody.innerHTML = '';
    const frag = document.createDocumentFragment();
    [...experimentData].reverse().forEach((d) => {
        const actualIndex = experimentData.indexOf(d);
        const totalT = tasksConfig.length;
        let tasksRender = '';
        if (d.tasks) {
            const doneT = Object.values(d.tasks).filter(Boolean).length;
            tasksRender = `<span class="copyable" data-action="view-tasks" data-index="${actualIndex}" title="${t('clickToViewTasks')}">${doneT}/${totalT}</span>`;
			} else {
            const osuDone = d.osu ? 1 : 0;
            const kovDone = d.kovaaks ? 1 : 0;
            tasksRender = `<span class="copyable" data-action="view-tasks" data-index="${actualIndex}">${osuDone + kovDone}/${totalT}</span>`;
		}
        const typeLabel = d.isWeekend ? `<span style="color:var(--accent-teal); font-weight:600;">${t('typeRest')}</span>` : t('typeActive');
		
        const totalCell = (!d.isWeekend && d.total && d.total.mean) ? `<strong>${d.total.mean} ${ms}</strong> / ${d.total.min} / ${d.total.max}` : '—';
        const f1Cell = (!d.isWeekend && d.f1 && d.f1.mean) ? `${d.f1.mean} / ${d.f1.min} / ${d.f1.max}` : '—';
        const hbCell = (!d.isWeekend && d.hb && d.hb.mean) ? `${d.hb.mean} / ${d.hb.min} / ${d.hb.max}` : '—';
        const fsCell = !d.isWeekend ? `${d.f1 ? d.f1.falseStarts || 0 : 0} / ${d.hb ? d.hb.falseStarts || 0 : 0}` : '—';
		
        const tr = document.createElement('tr');
        if (d.isWeekend) {
            tr.style.opacity = '0.6';
            tr.style.background = 'rgba(255,255,255,0.02)';
		}
        tr.innerHTML = `
		<td>${d.day}</td>
		<td>${typeLabel}</td>
		<td>${totalCell}</td>
		<td>${f1Cell}</td>
		<td>${hbCell}</td>
		<td>${fsCell}</td>
		<td>${tasksRender}</td>
		<td>
		<button class="action-btn btn-alt" data-action="edit-day" data-index="${actualIndex}">✎</button>
		<button class="action-btn btn-danger" data-action="delete-day" data-index="${actualIndex}">✖</button>
		</td>`;
        frag.appendChild(tr);
	});
    DOM.historyBody.appendChild(frag);
	
    const rankTarget = (latest && !latest.isWeekend && latest.total && latest.total.mean) ? latest : (activeDays.length ? activeDays[activeDays.length - 1] : null);
    updateCurrentRank(rankTarget && rankTarget.total && rankTarget.total.mean ? rankTarget.total.mean : null);
    updateCharts();
}

function updateCharts() {
    if (typeof Chart === 'undefined') return;
    const ms = t('msUnit');
    const activeData = experimentData.filter(d => !d.isWeekend && d.total && d.total.mean > 0);
    if (!activeData.length) return;
	
    const style = getComputedStyle(document.documentElement);
    const cText = style.getPropertyValue('--text-main').trim() || '#f3f3f3';
    const cBorder = style.getPropertyValue('--border').trim() || '#282828';
    const cAcc1 = style.getPropertyValue('--accent-cyan').trim() || '#4cc2ff';
    const cAcc2 = style.getPropertyValue('--accent-teal').trim() || '#79b8ff';
    const labels = activeData.map(d => `D${d.day}`);
	
    const reactionEl = document.getElementById('reactionChart');
    if (reactionEl) {
        if (reactionChartInstance) {
            reactionChartInstance.data.labels = labels;
            reactionChartInstance.data.datasets[0].data = activeData.map(d => d.total.mean);
            reactionChartInstance.data.datasets[0].borderColor = cText;
            reactionChartInstance.data.datasets[0].backgroundColor = 'transparent';
            reactionChartInstance.data.datasets[1].data = activeData.map(d => d.f1 ? d.f1.mean : 0);
            reactionChartInstance.data.datasets[1].borderColor = cAcc1;
            reactionChartInstance.data.datasets[2].data = activeData.map(d => d.hb ? d.hb.mean : 0);
            reactionChartInstance.data.datasets[2].borderColor = cAcc2;
            reactionChartInstance.options.color = cText;
            reactionChartInstance.options.scales.x.ticks.color = cText;
            reactionChartInstance.options.scales.y.ticks.color = cText;
            reactionChartInstance.options.scales.x.grid.color = cBorder;
            reactionChartInstance.options.scales.y.grid.color = cBorder;
            reactionChartInstance.update('none');
			} else {
            reactionChartInstance = new Chart(reactionEl.getContext('2d'), {
                type: 'line',
                data: {
                    labels,
                    datasets: [
                        { label: t('thTotal').split(' ')[0], data: activeData.map(d => d.total.mean), borderColor: cText, backgroundColor: 'transparent', borderWidth: 1.5, fill: false, tension: 0.1, pointRadius: 2, pointHoverRadius: 4 },
                        { label: 'F1', data: activeData.map(d => d.f1 ? d.f1.mean : 0), borderColor: cAcc1, borderWidth: 1.2, borderDash: [4, 4], tension: 0.1, pointRadius: 0 },
                        { label: 'HB', data: activeData.map(d => d.hb ? d.hb.mean : 0), borderColor: cAcc2, borderWidth: 1.2, borderDash: [4, 4], tension: 0.1, pointRadius: 0 }
					]
				},
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    color: cText,
                    scales: {
                        y: { grid: { color: cBorder }, ticks: { color: cText, callback: v => v + ' ' + ms } },
                        x: { grid: { color: cBorder }, ticks: { color: cText } }
					},
                    plugins: { legend: { labels: { color: cText, font: { size: 11 } } }, tooltip: { mode: 'index', intersect: false } }
				}
			});
		}
	}
	
    const fsEl = document.getElementById('falseStartsChart');
    if (fsEl) {
        if (falseStartsChartInstance) {
            falseStartsChartInstance.data.labels = labels;
            falseStartsChartInstance.data.datasets[0].data = activeData.map(d => d.f1 ? d.f1.falseStarts : 0);
            falseStartsChartInstance.data.datasets[0].backgroundColor = cAcc1;
            falseStartsChartInstance.data.datasets[1].data = activeData.map(d => d.hb ? d.hb.falseStarts : 0);
            falseStartsChartInstance.data.datasets[1].backgroundColor = cAcc2;
            falseStartsChartInstance.options.color = cText;
            falseStartsChartInstance.options.scales.x.ticks.color = cText;
            falseStartsChartInstance.options.scales.y.ticks.color = cText;
            falseStartsChartInstance.options.scales.x.grid.color = cBorder;
            falseStartsChartInstance.options.scales.y.grid.color = cBorder;
            falseStartsChartInstance.update('none');
			} else {
            falseStartsChartInstance = new Chart(fsEl.getContext('2d'), {
                type: 'bar',
                data: {
                    labels,
                    datasets: [
                        { label: 'F1', data: activeData.map(d => d.f1 ? d.f1.falseStarts : 0), backgroundColor: cAcc1, borderRadius: 2 },
                        { label: 'HB', data: activeData.map(d => d.hb ? d.hb.falseStarts : 0), backgroundColor: cAcc2, borderRadius: 2 }
					]
				},
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    color: cText,
                    scales: {
                        y: { stacked: true, grid: { color: cBorder }, ticks: { color: cText, stepSize: 1 } },
                        x: { stacked: true, grid: { color: cBorder }, ticks: { color: cText } }
					},
                    plugins: { legend: { labels: { color: cText, font: { size: 11 } } } }
				}
			});
		}
	}
}

/**
	* 12. EVENT BINDING & INITIALIZATION
*/
function bindGlobalEvents() {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-action]');
        if (!target) return;
        const action = target.dataset.action;
		
        if (action === 'open-tests') TestEngine.openWindow();
        else if (action === 'open-rules') ModalManager.open('rulesModalOverlay');
        else if (action === 'open-settings') ModalManager.open('settingsModalOverlay');
        else if (action === 'toggle-lang') toggleLanguage();
        else if (action === 'close-modal') ModalManager.close(target.closest('.modal-overlay'));
        else if (action === 'close-test') TestEngine.closeWindow();
        else if (action === 'close-task-modal') ModalManager.close('taskModalOverlay');
        else if (action === 'remove-task') removeTask(Number(target.dataset.index));
        else if (action === 'edit-day') editDay(Number(target.dataset.index));
        else if (action === 'delete-day') deleteDay(Number(target.dataset.index));
        else if (action === 'view-tasks') showDayTasks(Number(target.dataset.index));
        else if (action === 'copy') copyVal(target.dataset.val, target);
        else if (action === 'toggle-weekly') {
            const container = document.getElementById(target.dataset.target);
            if (container) {
                const isHidden = container.style.display === 'none';
                container.style.display = isHidden ? 'block' : 'none';
                target.innerText = isHidden ? t('weekBtnHide') : t('weekBtnShow');
			}
		}
	});
	
    const testTypeContainer = document.getElementById('testTypeBtnsContainer');
    if (testTypeContainer) {
        testTypeContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-test-type]');
            if (btn) TestEngine.setType(btn.dataset.testType);
		});
	}
	
    if (DOM.autoFillSelect) {
        DOM.autoFillSelect.addEventListener('change', (e) => {
            autoFillMode = e.target.value;
            localStorage.setItem('reactionAutoFillMode', autoFillMode);
            const modeNames = { attempt: t('afAttempt'), each: t('afEach'), full5: t('afFull5'), off: t('afOff') };
            showToast(`${t('autoAddMode')} ${modeNames[autoFillMode]}`);
		});
	}
	
    const bindCheck = (id, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', fn);
	};
	
    bindCheck('hide-test-text', (e) => DOM.testArea.classList.toggle('hide-text', e.target.checked));
    bindCheck('hide-test-session-info', (e) => DOM.testModalContent.classList.toggle('hide-session-info', e.target.checked));
    bindCheck('hide-test-header', (e) => DOM.testModalContent.classList.toggle('hide-header', e.target.checked));
	
    const fsBtn = document.getElementById('fullscreenTestBtn');
    if (fsBtn) {
        fsBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) DOM.testModalContent.requestFullscreen().catch(() => {});
            else document.exitFullscreen().catch(() => {});
		});
	}
	
    if (DOM.saveBtn) DOM.saveBtn.addEventListener('click', saveDay);
    if (DOM.clearBtn) DOM.clearBtn.addEventListener('click', clearCurrentInput);
    if (DOM.cancelEditBtn) DOM.cancelEditBtn.addEventListener('click', cancelEdit);
    
    const addTaskBtn = document.getElementById('addTaskBtn');
    if (addTaskBtn) addTaskBtn.addEventListener('click', addTask);
    
    document.querySelectorAll('.form-input-watch').forEach(inp => inp.addEventListener('input', checkFormInputs));
    if (DOM.isWeekend) DOM.isWeekend.addEventListener('change', checkFormInputs);
	
    if (DOM.targetDaySelect) DOM.targetDaySelect.addEventListener('change', updateDashboard);
    if (DOM.compareDaySelect) DOM.compareDaySelect.addEventListener('change', updateDashboard);
	
    document.querySelectorAll('.theme-grid input[type="color"]').forEach(input => {
        input.addEventListener('change', () => {
            if (input.id.startsWith('color-test')) updateTestColorsFromInputs();
            else updateThemeFromInputs();
		});
	});
	
    const bindBtn = (id, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', fn);
	};
	
    bindBtn('resetThemeBtn', resetTheme);
    bindBtn('resetTestColorsBtn', resetTestColors);
    bindBtn('uploadAudioBtn', () => document.getElementById('custom-audio-input').click());
    bindBtn('previewAudioBtn', () => AudioSystem.play());
    bindBtn('resetAudioBtn', () => AudioSystem.resetStock());
	
    const audioInput = document.getElementById('custom-audio-input');
    if (audioInput) {
        audioInput.addEventListener('change', (e) => {
            AudioSystem.handleUpload(e.target.files[0]);
            e.target.value = '';
		});
	}
	
    bindBtn('renumberBtn', renumberDaysSequentially);
    bindBtn('exportBtn', exportDataJSON);
    bindBtn('importBtn', () => document.getElementById('import-file-input').click());
	
    const importInput = document.getElementById('import-file-input');
    if (importInput) importInput.addEventListener('change', handleFileImport);
	
    bindBtn('clearAllDataBtn', clearAllData);
}

function init() {
    initDOMCache();
    ModalManager.init();
    TestEngine.init();
    AudioSystem.init();
    loadThemeInputs();
    applyThemeCSS();
    renderTasksList();
    bindGlobalEvents();
    resetForm();
    updateDashboard();
    applyLanguage();
	
    if (DOM.autoFillSelect) DOM.autoFillSelect.value = autoFillMode;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
	} else {
    init();
}