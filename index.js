// BANCO COMPLETO DE 30 PREGUNTAS DE FÍSICA PARA ACCESO UNIVERSITARIO
const questionsBank = [
    // 1. Unidades de medida en el SI y conversiones (1-3)
    {
        id: 1,
        topic: "Unidades de Medida en el SI",
        question: "1. ¿Cuál de las siguientes magnitudes corresponde a una unidad fundamental en el Sistema Internacional (SI)?",
        options: ["A) Newton (N)", "B) Julio (J)", "C) Kelvin (K)", "D) Vatio (W)"],
        answer: 2,
        explanation: "El Kelvin (K) es una de las 7 unidades fundamentales del SI que mide la temperatura termodinámica. Las demás son derivadas."
    },
    {
        id: 2,
        topic: "Conversiones de Unidades",
        question: "2. Una velocidad de 72 km/h equivale expresada en metros por segundo (m/s) en el SI a:",
        options: ["A) 15 m/s", "B) 20 m/s", "C) 25 m/s", "D) 30 m/s"],
        answer: 1,
        explanation: "Para convertir de km/h a m/s se divide entre 3.6: 72 / 3.6 = 20 m/s."
    },
    {
        id: 3,
        topic: "Conversiones de Unidades",
        question: "3. Si la masa de un objeto es de 0.05 kg, ¿cuál es su valor equivalente en gramos?",
        options: ["A) 5 g", "B) 50 g", "C) 500 g", "D) 0.5 g"],
        answer: 1,
        explanation: "Como 1 kg = 1000 g, multiplicamos 0.05 kg × 1000 = 50 g."
    },

    // 2. Movimiento y trayectoria (4-6)
    {
        id: 4,
        topic: "Movimiento y Trayectoria",
        question: "4. Una partícula se desplaza partiendo del punto A, recorre un circuito cerrado y vuelve exactamente al mismo punto A. Indique el desplazamiento neto del objeto.",
        options: ["A) Igual a la longitud total de la trayectoria", "B) Cero", "C) Mayor que la distancia recorrida", "D) Indeterminado"],
        answer: 1,
        explanation: "El desplazamiento es el vector posición final menos posición inicial. Si el punto final e inicial coinciden, el desplazamiento vectorialmente es cero."
    },
    {
        id: 5,
        topic: "Movimiento y Trayectoria",
        question: "5. ¿Qué diferencia conceptual existe entre distancia recorrida y desplazamiento?",
        options: [
            "A) La distancia es un vector y el desplazamiento es un escalar.",
            "B) La distancia es una magnitud escalar y el desplazamiento es una magnitud vectorial.",
            "C) Ambas son magnitudes vectoriales pero con distinto módulo.",
            "D) No existe ninguna diferencia, son términos equivalentes."
        ],
        answer: 1,
        explanation: "La distancia es la longitud de la trayectoria (escalar), mientras que el desplazamiento define el cambio neto de posición mediante un vector."
    },
    {
        id: 6,
        topic: "Movimiento y Trayectoria",
        question: "6. Si la trayectoria de un móvil es rectilínea sin cambiar el sentido del movimiento, el módulo del desplazamiento es:",
        options: ["A) Menor que la distancia recorrida", "B) Igual a la distancia recorrida", "C) Cero", "D) El doble de la distancia recorrida"],
        answer: 1,
        explanation: "En un movimiento rectilíneo y unidireccional, la longitud de la trayectoria efectuada coincide numéricamente con el módulo del desplazamiento."
    },

    // 3. MRU (7-9)
    {
        id: 7,
        topic: "Movimiento Rectilíneo Uniforme (MRU)",
        question: "7. Un vehículo se desplaza en MRU con una velocidad constante de 15 m/s durante 40 segundos. ¿Qué distancia logra recorrer?",
        options: ["A) 400 m", "B) 500 m", "C) 600 m", "D) 750 m"],
        answer: 2,
        explanation: "Aplicando la ecuación del MRU d = v × t: d = 15 m/s × 40 s = 600 m."
    },
    {
        id: 8,
        topic: "Movimiento Rectilíneo Uniforme (MRU)",
        question: "8. En una gráfica Posición vs. Tiempo (x - t) de un cuerpo que experimenta MRU, la pendiente de la recta representa:",
        options: ["A) La aceleración", "B) La velocidad", "C) La fuerza ejercida", "D) La distancia acumulada"],
        answer: 1,
        explanation: "En una gráfica posición-tiempo, la pendiente corresponde a la razón de cambio Δx/Δt, que es la velocidad del móvil."
    },
    {
        id: 9,
        topic: "Movimiento Rectilíneo Uniforme (MRU)",
        question: "9. Dos automóviles A y B parten de un mismo punto en el mismo sentido con velocidades constantes de 20 m/s y 30 m/s. ¿Qué separación existe entre ellos a los 10 segundos?",
        options: ["A) 50 m", "B) 100 m", "C) 150 m", "D) 300 m"],
        answer: 1,
        explanation: "Distancia A = 20×10 = 200 m. Distancia B = 30×10 = 300 m. Separación = 300 m - 200 m = 100 m."
    },

    // 4. MRUV (10-12)
    {
        id: 10,
        topic: "Movimiento Rectilíneo Uniformemente Variado (MRUV)",
        question: "10. Un móvil parte del reposo y se acelera uniformemente a razón de 3 m/s². ¿Cuál será su velocidad al cabo de 6 segundos?",
        options: ["A) 9 m/s", "B) 12 m/s", "C) 18 m/s", "D) 24 m/s"],
        answer: 2,
        explanation: "Utilizando v_f = v_0 + a × t con v_0 = 0: v_f = 0 + (3 m/s² × 6 s) = 18 m/s."
    },
    {
        id: 11,
        topic: "Movimiento Rectilíneo Uniformemente Variado (MRUV)",
        question: "11. Un vehículo frena con una desaceleración constante de 4 m/s² hasta detenerse por completo en 5 segundos. ¿Con qué velocidad inicial circulaba?",
        options: ["A) 10 m/s", "B) 15 m/s", "C) 20 m/s", "D) 25 m/s"],
        answer: 2,
        explanation: "De v_f = v_0 - a × t, dado que v_f = 0: v_0 = a × t = 4 m/s² × 5 s = 20 m/s."
    },
    {
        id: 12,
        topic: "Movimiento Rectilíneo Uniformemente Variado (MRUV)",
        question: "12. ¿Qué distancia recorre un objeto que parte del reposo y se acelera a 2 m/s² durante 10 segundos?",
        options: ["A) 50 m", "B) 100 m", "C) 150 m", "D) 200 m"],
        answer: 1,
        explanation: "Usando d = v_0 × t + 0.5 × a × t² con v_0 = 0: d = 0.5 × 2 × (10)² = 100 m."
    },

    // 5. MCU (13-15)
    {
        id: 13,
        topic: "Movimiento Circular Uniforme (MCU)",
        question: "13. En el Movimiento Circular Uniforme (MCU), la magnitud que modifica continuamente la dirección de la velocidad tangencial se denomina:",
        options: ["A) Aceleración angular", "B) Aceleración centrípeta", "C) Fuerza tangencial", "D) Velocidad escalar"],
        answer: 1,
        explanation: "La aceleración centrípeta está dirigida hacia el centro de la trayectoria y es responsable de modificar la dirección de la velocidad."
    },
    {
        id: 14,
        topic: "Movimiento Circular Uniforme (MCU)",
        question: "14. Un disco gira realizando 120 revoluciones por minuto (rpm). Su velocidad angular expresada en rad/s es aproximada a:",
        options: ["A) 2π rad/s", "B) 4π rad/s", "C) 6π rad/s", "D) 8π rad/s"],
        answer: 1,
        explanation: "120 rpm = 120 rev / 60 s = 2 rev/s. Multiplicando por 2π rad/rev da 4π rad/s."
    },
    {
        id: 15,
        topic: "Movimiento Circular Uniforme (MCU)",
        question: "15. Si el período (T) de rotación de un móvil en MCU es de 0.2 segundos, su frecuencia (f) de giro es:",
        options: ["A) 2 Hz", "B) 4 Hz", "C) 5 Hz", "D) 10 Hz"],
        answer: 2,
        explanation: "La frecuencia es el inverso del período f = 1 / T = 1 / 0.2 s = 5 Hz."
    },

    // 6. Caída Libre (16-18)
    {
        id: 16,
        topic: "Caída Libre",
        question: "16. Se deja caer un objeto desde el reposo desde lo alto de una torre. Despreciando la resistencia del aire (g = 10 m/s²), ¿qué velocidad posee tras 3 segundos de caída?",
        options: ["A) 15 m/s", "B) 20 m/s", "C) 30 m/s", "D) 45 m/s"],
        answer: 2,
        explanation: "En caída libre v = g × t = 10 m/s² × 3 s = 30 m/s."
    },
    {
        id: 17,
        topic: "Caída Libre",
        question: "17. Una piedra se lanza verticalmente hacia arriba con una velocidad inicial de 20 m/s (g = 10 m/s²). El tiempo alcanzado para su altura máxima es de:",
        options: ["A) 1 s", "B) 2 s", "C) 3 s", "D) 4 s"],
        answer: 1,
        explanation: "En el punto más alto v_f = 0. De v_f = v_0 - g × t -> t = v_0 / g = 20 / 10 = 2 s."
    },
    {
        id: 18,
        topic: "Caída Libre",
        question: "18. En el vacío, si se sueltan desde la misma altura de forma simultánea una pluma y una esfera de plomo:",
        options: [
            "A) La esfera cae primero por tener mayor masa.",
            "B) La pluma cae primero por menor resistencia.",
            "C) Ambos cuerpos llegan al suelo al mismo tiempo.",
            "D) Depende de la superficie de contacto."
        ],
        answer: 2,
        explanation: "Al no existir resistencia del aire en el vacío, todos los cuerpos sufren la misma aceleración de la gravedad e impactan al mismo tiempo."
    },

    // 7. Movimiento Parabólico (19-21)
    {
        id: 19,
        topic: "Movimiento Parabólico",
        question: "19. En un tiro parabólico, en el punto de altura máxima de la trayectoria, el valor de la componente vertical de la velocidad (Vy) es:",
        options: ["A) Igual a la velocidad inicial total", "B) Cero", "C) Máximo", "D) Dependiente del ángulo"],
        answer: 1,
        explanation: "En la cúspide de la parábola, el móvil deja de subir y comienza a descender, anulándose temporalmente la componente vertical Vy = 0."
    },
    {
        id: 20,
        topic: "Movimiento Parabólico",
        question: "20. El alcance horizontal máximo en un movimiento de proyectiles (manteniendo fija la velocidad inicial) se obtiene con un ángulo de lanzamiento de:",
        options: ["A) 30°", "B) 45°", "C) 60°", "D) 90°"],
        answer: 1,
        explanation: "La fórmula de alcance horizontal contiene sen(2θ). El valor máximo de seno ocurre a 90°, lo que implica 2θ = 90° -> θ = 45°."
    },
    {
        id: 21,
        topic: "Movimiento Parabólico",
        question: "21. En el movimiento parabólico sin fricción de aire, la componente horizontal de la velocidad (Vx) a lo largo del tiempo:",
        options: [
            "A) Permanece constante (MRU).",
            "B) Aumenta continuamente.",
            "C) Disminuye progresivamente hasta hacerse cero.",
            "D) Varía según la gravedad."
        ],
        answer: 0,
        explanation: "En el eje horizontal no actúa ninguna fuerza externa (fuerza de aceleración es cero), de modo que el movimiento en 'x' se comporta como un MRU puro."
    },

    // 8. Fuerzas (22-24)
    {
        id: 22,
        topic: "Fuerzas y Dinámica",
        question: "22. La unidad de medida de la fuerza en el Sistema Internacional es el Newton (N), el cual es equivalente a:",
        options: ["A) kg · m / s", "B) kg · m / s²", "C) kg · m² / s²", "D) g · cm / s²"],
        answer: 1,
        explanation: "Por la segunda ley de Newton F = m × a, las unidades correspondientes son kg × m/s² = 1 N."
    },
    {
        id: 23,
        topic: "Fuerzas y Dinámica",
        question: "23. La fuerza de fricción o rozamiento que se opone al inicio del movimiento de un objeto en reposo se conoce como:",
        options: ["A) Fricción cinética", "B) Fuerza normal", "C) Fricción estática", "D) Tensión"],
        answer: 2,
        explanation: "La fricción estática actúa previniendo el deslizamiento relativo entre dos superficies en reposo."
    },
    {
        id: 24,
        topic: "Fuerzas y Dinámica",
        question: "24. Un objeto descansa sobre una mesa horizontal. La fuerza perpendicular ejercida por la superficie sobre el cuerpo se denomina:",
        options: ["A) Peso", "B) Tensión", "C) Fuerza Normal", "D) Empuje"],
        answer: 2,
        explanation: "La Fuerza Normal (N) es la fuerza de reacción ejercida por una superficie perpendicular sobre un cuerpo apoyado en ella."
    },

    // 9. Leyes de Newton (25-27)
    {
        id: 25,
        topic: "Leyes de Newton",
        question: "25. Un cuerpo mantendrá su estado de reposo o de movimiento rectilíneo uniforme a menos que actúe sobre él una fuerza neta no nula. Este enunciado corresponde a:",
        options: ["A) Primera Ley de Newton (Inercia)", "B) Segunda Ley de Newton", "C) Tercera Ley de Newton", "D) Ley de Gravitación"],
        answer: 0,
        explanation: "Es la definición formal de la Primera Ley de Newton o Principio de Inercia."
    },
    {
        id: 26,
        topic: "Leyes de Newton",
        question: "26. Al aplicar una fuerza neta de 50 N sobre un cuerpo de 10 kg de masa, la aceleración producida equivale a:",
        options: ["A) 2 m/s²", "B) 5 m/s²", "C) 10 m/s²", "D) 500 m/s²"],
        answer: 1,
        explanation: "Usando F = m × a -> a = F / m = 50 N / 10 kg = 5 m/s²."
    },
    {
        id: 27,
        topic: "Leyes de Newton",
        question: "27. Cuando el cuerpo A ejerce una fuerza sobre el cuerpo B, el cuerpo B ejerce simultáneamente una fuerza de igual magnitud y sentido opuesto sobre A. Esto se conoce como:",
        options: ["A) Principio de Inercia", "B) Ley Fundamental de la Dinámica", "C) Principio de Acción y Reacción", "D) Ley de Conservación de Energía"],
        answer: 2,
        explanation: "Corresponde a la Tercera Ley de Newton o Principio de Acción y Reacción."
    },

    // 10. Trabajo, Potencia y Energía (28-30)
    {
        id: 28,
        topic: "Trabajo, Potencia y Energía",
        question: "28. Un bloque es arrastrado 5 metros sobre una superficie horizontal mediante una fuerza paralela al desplazamiento de 20 N. ¿Qué trabajo se ha realizado?",
        options: ["A) 40 J", "B) 80 J", "C) 100 J", "D) 200 J"],
        answer: 2,
        explanation: "El trabajo mecánico es W = F × d × cos(0°) = 20 N × 5 m × 1 = 100 Julios (J)."
    },
    {
        id: 29,
        topic: "Trabajo, Potencia y Energía",
        question: "29. ¿Cuál es la energía cinética de un móvil de masa 2 kg que avanza con una velocidad constante de 4 m/s?",
        options: ["A) 8 J", "B) 16 J", "C) 32 J", "D) 64 J"],
        answer: 1,
        explanation: "La Energía Cinética es Ec = 0.5 × m × v² = 0.5 × 2 kg × (4 m/s)² = 16 Julios (J)."
    },
    {
        id: 30,
        topic: "Trabajo, Potencia y Energía",
        question: "30. La rapidez con la que se realiza un trabajo mecánico se define técnicamente como:",
        options: ["A) Fuerza", "B) Impulso", "C) Potencia", "D) Presión"],
        answer: 2,
        explanation: "La Potencia (medida en Vatios o Watts) expresa la cantidad de trabajo realizado por unidad de tiempo P = W / t."
    }
];

// STATE MANAGEMENT
const EXAM_TOTAL_TIME_SECONDS = 30 * 90; // 30 questions * 90 seconds = 2700s (45 minutes)
let state = {
    studentName: "",
    currentQuestionIndex: 0,
    userAnswers: new Array(questionsBank.length).fill(null),
    timeRemaining: EXAM_TOTAL_TIME_SECONDS,
    isExamSubmitted: false,
    startTime: null,
    timerInterval: null
};

// DOM ELEMENTS
const welcomeModal = document.getElementById('welcome-modal');
const examApp = document.getElementById('exam-app');
const resultsModal = document.getElementById('results-modal');
const studentNameInput = document.getElementById('student-name');
const btnStart = document.getElementById('btn-start');
const displayStudentName = document.getElementById('display-student-name');
const timerDisplay = document.getElementById('timer-display');
const timerCard = document.getElementById('timer-card');
const questionGrid = document.getElementById('question-grid');
const answeredCounter = document.getElementById('answered-counter');
const questionTopic = document.getElementById('question-topic');
const questionNumberDisplay = document.getElementById('question-number-display');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSubmitExam = document.getElementById('btn-submit-exam');
const btnRestart = document.getElementById('btn-restart');

// INITIALIZATION & EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    initKioskSecurity();
    checkLocalStorageState();

    btnStart.addEventListener('click', handleStartExam);
    btnPrev.addEventListener('click', goToPreviousQuestion);
    btnNext.addEventListener('click', goToNextQuestion);
    btnSubmitExam.addEventListener('click', confirmSubmitExam);
    btnRestart.addEventListener('click', resetExamState);
});

// KIOSK MODE & ANTI-CHEATING PROTECTION SECURITY
function initKioskSecurity() {
    // Prevent Right Click Context Menu
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Prevent Copy / Cut / Paste / Select
    document.addEventListener('copy', (e) => e.preventDefault());
    document.addEventListener('cut', (e) => e.preventDefault());
    document.addEventListener('paste', (e) => e.preventDefault());

    // Prevent Keyboard Shortcuts (PrintScreen, F12, Ctrl+Shift+I, Ctrl+C, Ctrl+U, etc.)
    document.addEventListener('keydown', (e) => {
        // Prevent PrintScreen key
        if (e.key === 'PrintScreen') {
            e.preventDefault();
            alert('Las capturas de pantalla están deshabilitadas en esta evaluación.');
        }

        // Prevent Ctrl+P, Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
        if (
            (e.ctrlKey && (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
            e.key === 'F12'
        ) {
            e.preventDefault();
        }
    });

    // Detect Fullscreen Change and enforce lock
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && !state.isExamSubmitted && examApp.classList.contains('hidden') === false) {
            // Re-request fullscreen if exam is ongoing
            requestFullscreen();
        }
    });
}

function requestFullscreen() {
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
    } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
    }
}

function exitFullscreenMode() {
    if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
    }
}

// PERSISTENCE & AUTOSAVE (LOCAL STORAGE)
function checkLocalStorageState() {
    const savedState = localStorage.getItem('physics_exam_state');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            if (!parsed.isExamSubmitted) {
                // Restore state
                state = parsed;
                welcomeModal.classList.add('hidden');
                examApp.classList.remove('hidden');
                displayStudentName.textContent = state.studentName;
                startTimer();
                renderQuestionGrid();
                loadQuestion(state.currentQuestionIndex);
                requestFullscreen();
            } else {
                // Show results if previously finished
                state = parsed;
                welcomeModal.classList.add('hidden');
                showResultsModal();
            }
        } catch (e) {
            console.error("Error cargando estado de almacenamiento:", e);
        }
    }
}

function saveStateToLocalStorage() {
    localStorage.setItem('physics_exam_state', JSON.stringify(state));
}

// EXAM FLOW CONTROLLERS
function handleStartExam() {
    const name = studentNameInput.value.trim();
    if (!name) {
        alert("Por favor, ingrese su nombre completo para comenzar.");
        return;
    }

    state.studentName = name;
    state.startTime = Date.now();
    displayStudentName.textContent = name;

    welcomeModal.classList.add('hidden');
    examApp.classList.remove('hidden');

    requestFullscreen();
    saveStateToLocalStorage();
    startTimer();
    renderQuestionGrid();
    loadQuestion(0);
}

function startTimer() {
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        saveStateToLocalStorage();
        updateTimerDisplay();

        if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            alert("¡El tiempo del examen ha expirado! Sus respuestas se enviarán automáticamente.");
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = formatted;

    if (state.timeRemaining < 300) { // Less than 5 minutes left
        timerCard.classList.add('warning');
    }
}

// RENDER QUESTION GRID & NAVIGATION
function renderQuestionGrid() {
    questionGrid.innerHTML = '';
    let answeredCount = 0;

    questionsBank.forEach((_, idx) => {
        const btn = document.createElement('button');
        btn.classList.add('grid-btn');
        btn.textContent = idx + 1;

        if (idx === state.currentQuestionIndex) {
            btn.classList.add('active');
        }

        if (state.userAnswers[idx] !== null) {
            btn.classList.add('answered');
            answeredCount++;
        }

        btn.addEventListener('click', () => {
            saveAnswer();
            state.currentQuestionIndex = idx;
            loadQuestion(idx);
        });

        questionGrid.appendChild(btn);
    });

    answeredCounter.textContent = `${answeredCount} / ${questionsBank.length} Resp.`;
}

function loadQuestion(index) {
    state.currentQuestionIndex = index;
    const q = questionsBank[index];

    questionTopic.textContent = `Tema: ${q.topic}`;
    questionNumberDisplay.textContent = `Pregunta ${index + 1} de ${questionsBank.length}`;
    questionText.textContent = q.question;

    optionsContainer.innerHTML = '';
    const prefixes = ["A", "B", "C", "D"];

    q.options.forEach((optText, optIdx) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option-item');
        if (state.userAnswers[index] === optIdx) {
            optionDiv.classList.add('selected');
        }

        optionDiv.innerHTML = `
            <div class="option-prefix">${prefixes[optIdx]}</div>
            <div class="option-label">${optText.replace(/^[A-D]\)\s*/, '')}</div>
        `;

        optionDiv.addEventListener('click', () => {
            state.userAnswers[index] = optIdx;
            saveStateToLocalStorage();
            loadQuestion(index);
            renderQuestionGrid();
        });

        optionsContainer.appendChild(optionDiv);
    });

    // Update Navigation Buttons State
    btnPrev.disabled = index === 0;
    btnNext.textContent = index === questionsBank.length - 1 ? "Finalizar" : "Siguiente →";

    renderQuestionGrid();
}

function saveAnswer() {
    saveStateToLocalStorage();
}

function goToPreviousQuestion() {
    if (state.currentQuestionIndex > 0) {
        loadQuestion(state.currentQuestionIndex - 1);
    }
}

function goToNextQuestion() {
    if (state.currentQuestionIndex < questionsBank.length - 1) {
        loadQuestion(state.currentQuestionIndex + 1);
    } else {
        confirmSubmitExam();
    }
}

function confirmSubmitExam() {
    const unanswered = state.userAnswers.filter(ans => ans === null).length;
    let message = "¿Está seguro de que desea finalizar y entregar el examen?";
    if (unanswered > 0) {
        message = `Tiene ${unanswered} pregunta(s) sin responder. ¿Está seguro de finalizar?`;
    }

    if (confirm(message)) {
        submitExam();
    }
}

function submitExam() {
    clearInterval(state.timerInterval);
    state.isExamSubmitted = true;
    saveStateToLocalStorage();

    examApp.classList.add('hidden');
    exitFullscreenMode();
    showResultsModal();
}

// SHOW RESULTS & DETAILED FEEDBACK
function showResultsModal() {
    resultsModal.classList.remove('hidden');
    document.getElementById('result-student-name').textContent = `Reporte de: ${state.studentName}`;

    let score = 0;
    questionsBank.forEach((q, idx) => {
        if (state.userAnswers[idx] === q.answer) {
            score++;
        }
    });

    const percentage = Math.round((score / questionsBank.length) * 100);
    const timeSpentSeconds = EXAM_TOTAL_TIME_SECONDS - state.timeRemaining;
    const minutesSpent = Math.floor(timeSpentSeconds / 60);
    const secondsSpent = timeSpentSeconds % 60;

    document.getElementById('score-val').textContent = `${score} / ${questionsBank.length}`;
    document.getElementById('percent-val').textContent = `${percentage}%`;
    document.getElementById('time-spent-val').textContent = `${minutesSpent}m ${secondsSpent}s`;

    // Render Detailed Feedback List
    const feedbackList = document.getElementById('feedback-list');
    feedbackList.innerHTML = '';

    questionsBank.forEach((q, idx) => {
        const userAnsIdx = state.userAnswers[idx];
        const isCorrect = userAnsIdx === q.answer;
        const prefixes = ["A", "B", "C", "D"];

        const userAnsText = userAnsIdx !== null ? q.options[userAnsIdx] : "Sin responder";
        const correctAnsText = q.options[q.answer];

        const item = document.createElement('div');
        item.classList.add('feedback-item');
        item.innerHTML = `
            <div class="feedback-header ${isCorrect ? 'correct' : 'incorrect'}">
                <span>Pregunta ${idx + 1}: ${q.topic}</span>
                <span>${isCorrect ? '✓ Correcto (+1.0)' : '✗ Incorrecto (0.0)'}</span>
            </div>
            <p style="font-size: 0.95rem; font-weight: 600; margin-bottom: 6px;">${q.question}</p>
            <p style="font-size: 0.85rem; color: #475569;"><strong>Tu respuesta:</strong> ${userAnsText}</p>
            ${!isCorrect ? `<p style="font-size: 0.85rem; color: #16a34a;"><strong>Respuesta correcta:</strong> ${correctAnsText}</p>` : ''}
            <div class="feedback-explanation">
                <strong>Justificación pedagógica:</strong> ${q.explanation}
            </div>
        `;

        feedbackList.appendChild(item);
    });
}

function resetExamState() {
    if (confirm("¿Desea reiniciar completamente el simulador? Se borrarán las respuestas guardadas.")) {
        localStorage.removeItem('physics_exam_state');
        location.reload();
    }
}
