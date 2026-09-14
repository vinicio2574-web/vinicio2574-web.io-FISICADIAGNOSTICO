// ESTADO GENERAL DE LA APLICACIÓN
let idx = 0;
let userAnswers = {};
let violations = 0;
let timeLeft = 3610; // 1 HORA Y 10 SEGUNDOS
let timerId = null;

// ELEMENTOS DEL DOM
const overlayStart = document.getElementById('start-overlay');
const overlayBlock = document.getElementById('block-overlay');
const btnStart = document.getElementById('btn-start');
const btnUnlock = document.getElementById('btn-unlock');
const alertBanner = document.getElementById('alert-banner');

const qNumber = document.getElementById('q-number');
const qTopic = document.getElementById('q-topic');
const qText = document.getElementById('q-text');
const optionsBox = document.getElementById('options-box');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');

const timerEl = document.getElementById('timer');
const progVal = document.getElementById('prog-val');
const progressBar = document.getElementById('progress-bar');
const questionsGrid = document.getElementById('questions-grid');

// INICIALIZACIÓN DE LA EVALUACIÓN
document.addEventListener('DOMContentLoaded', () => {
    initGrid();
    loadQuestion(idx);
    setupSecurity();

    btnStart.addEventListener('click', () => {
        enterFullscreen();
        overlayStart.classList.add('hidden');
        startTimer();
    });

    btnUnlock.addEventListener('click', () => {
        overlayBlock.classList.add('hidden');
        enterFullscreen();
    });
});

function enterFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
        if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    }
}

// BARRERAS DE SEGURIDAD Y BLOQUEO DE KIOSKO
function setupSecurity() {
    // Deshabilitar menú contextual y eventos de copiado
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());

    // Bloqueo de atajos de teclado y capturas de pantalla
    window.addEventListener('keydown', e => {
        if (e.key === 'PrintScreen' || e.keyCode === 44 || e.key === 'F12' || (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p'))) {
            e.preventDefault();
            triggerViolation();
        }
    });

    // Control de pérdida de foco / cambio de pestaña
    window.addEventListener('blur', triggerViolation);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) triggerViolation();
    });

    // Control de salida de pantalla completa
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && overlayStart.classList.contains('hidden')) {
            overlayBlock.classList.remove('hidden');
        }
    });
}

function triggerViolation() {
    violations++;
    alertBanner.classList.remove('hidden');
    setTimeout(() => alertBanner.classList.add('hidden'), 3500);
}

// MANEJO DEL TEMPORIZADOR
function startTimer() {
    if (timerId) return;
    timerId = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        timerEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            finishExam();
        }
    }, 1000);
}

// RENDERIZADO DE LA PREGUNTA
function loadQuestion(i) {
    const q = questions[i];
    qNumber.textContent = `Pregunta ${i + 1} de ${questions.length}`;
    qTopic.textContent = q.topic;
    qText.textContent = q.question;

    optionsBox.innerHTML = '';
    q.options.forEach((opt, oIdx) => {
        const item = document.createElement('div');
        item.className = `opt-card ${userAnswers[i] === oIdx ? 'active' : ''}`;
        item.innerHTML = `
            <input type="radio" name="opt" id="opt-${oIdx}" ${userAnswers[i] === oIdx ? 'checked' : ''}>
            <label for="opt-${oIdx}">${opt}</label>
        `;
        item.addEventListener('click', () => {
            userAnswers[i] = oIdx;
            loadQuestion(i);
            updateProgress();
        });
        optionsBox.appendChild(item);
    });

    btnPrev.disabled = i === 0;
    btnNext.textContent = i === questions.length - 1 ? "Revisar Respuestas" : "Siguiente";
    updateGrid();
}

function updateProgress() {
    const count = Object.keys(userAnswers).length;
    progVal.textContent = `${count} / ${questions.length}`;
    progressBar.style.width = `${(count / questions.length) * 100}%`;
}

function initGrid() {
    questionsGrid.innerHTML = '';
    questions.forEach((_, i) => {
        const btn = document.createElement('div');
        btn.className = 'map-num';
        btn.textContent = i + 1;
        btn.addEventListener('click', () => {
            idx = i;
            loadQuestion(idx);
        });
        questionsGrid.appendChild(btn);
    });
}

function updateGrid() {
    const btns = questionsGrid.querySelectorAll('.map-num');
    btns.forEach((btn, i) => {
        btn.className = 'map-num';
        if (i === idx) btn.classList.add('active');
        if (userAnswers[i] !== undefined) btn.classList.add('filled');
    });
}

// NAVEGACIÓN ENTRE PREGUNTAS
btnPrev.addEventListener('click', () => {
    if (idx > 0) { idx--; loadQuestion(idx); }
});

btnNext.addEventListener('click', () => {
    if (idx < questions.length - 1) { idx++; loadQuestion(idx); }
});

btnFinish.addEventListener('click', () => {
    if (confirm("¿Estás seguro de que deseas finalizar la evaluación?")) {
        finishExam();
    }
});

// PANTALLA DE RESULTADOS FINALES
function finishExam() {
    clearInterval(timerId);
    document.getElementById('panel-exam').classList.add('hidden');
    document.getElementById('panel-side').classList.add('hidden');
    document.getElementById('panel-results').classList.remove('hidden');

    let score = 0;
    const reviewBox = document.getElementById('review-box');
    reviewBox.innerHTML = '';

    questions.forEach((q, i) => {
        const ok = userAnswers[i] === q.answer;
        if (ok) score++;

        const card = document.createElement('div');
        card.className = `review-card ${ok ? 'ok' : 'fail'}`;
        card.innerHTML = `
            <p style="font-weight:600; font-size:0.9rem;">${i + 1}. ${q.question}</p>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.3rem;">
                Tu respuesta: <strong>${userAnswers[i] !== undefined ? q.options[userAnswers[i]] : 'Sin responder'}</strong> 
                ${ok ? '✓' : '✗ (Correcta: ' + q.options[q.answer] + ')'}
            </p>
        `;
        reviewBox.appendChild(card);
    });

    document.getElementById('res-score').textContent = `${score} / ${questions.length}`;
    document.getElementById('res-percent').textContent = `${((score / questions.length) * 100).toFixed(1)}%`;
    document.getElementById('res-violations').textContent = violations;
}