// BANCO DE PREGUNTAS (30 PREGUNTAS DE FÍSICA APLICADA)
const questions = [
    { id: 1, topic: "Sistemas de Unidades", question: "¿Cuál es la unidad fundamental de masa en el Sistema Internacional (SI)?", options: ["Gramo (g)", "Kilogramo (kg)", "Libra (lb)", "Newton (N)"], answer: 1 },
    { id: 2, topic: "Cinemática", question: "Un vehículo se desplaza a una velocidad constante de 72 km/h. ¿Cuál es su equivalencia en m/s?", options: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"], answer: 1 },
    { id: 3, topic: "Cinemática", question: "¿Qué representa la pendiente de una gráfica de Posición vs. Tiempo (x vs. t)?", options: ["Aceleración", "Velocidad", "Fuerza", "Desplazamiento total"], answer: 1 },
    { id: 4, topic: "Cinemática", question: "Un objeto en caída libre cerca de la superficie terrestre experimenta una aceleración constante aproximadamente igual a:", options: ["0 m/s²", "9.8 m/s²", "100 m/s²", "Variable respecto a la masa"], answer: 1 },
    { id: 5, topic: "Dinámica", question: "Según la Primera Ley de Newton, un cuerpo mantendrá su estado de reposo o movimiento rectilíneo uniforme a menos que:", options: ["Se le aplique energía térmica", "Actúe una fuerza neta externa sobre él", "Aumente su masa", "Su aceleración sea distinta de cero"], answer: 1 },
    { id: 6, topic: "Dinámica", question: "¿Cuál es la expresión matemática de la Segunda Ley de Newton?", options: ["F = m / a", "F = m · a", "F = m · v", "F = 0.5 · m · a²"], answer: 1 },
    { id: 7, topic: "Dinámica", question: "La unidad de medida de la fuerza en el Sistema Internacional es el Newton (N), el cual equivale a:", options: ["kg · m/s", "kg · m/s²", "kg² · m/s", "g · cm/s²"], answer: 1 },
    { id: 8, topic: "Trabajo y Energía", question: "¿Qué trabajo realiza una fuerza de 50 N al desplazar un objeto una distancia de 4 metros en su misma dirección?", options: ["12.5 Joules", "200 Joules", "54 Joules", "100 Joules"], answer: 1 },
    { id: 9, topic: "Trabajo y Energía", question: "La energía asociada a la posición o configuración de un cuerpo respecto a un campo gravitatorio se denomina:", options: ["Energía Cinética", "Energía Potencial Gravitatoria", "Energía Térmica", "Energía Mecánica Total"], answer: 1 },
    { id: 10, topic: "Trabajo y Energía", question: "¿Cuál es la fórmula fundamental de la Energía Cinética?", options: ["E_c = m · g · h", "E_c = 1/2 · m · v²", "E_c = F · d", "E_c = m · v"], answer: 1 },
    { id: 11, topic: "Dinámica", question: "La Tercera Ley de Newton establece que a toda acción corresponde una reacción de igual magnitud pero en sentido:", options: ["Perpendicular", "Opuesto", "Tangencial", "Aleatorio"], answer: 1 },
    { id: 12, topic: "Cinemática", question: "En un Movimiento Circular Uniforme (MCU), la magnitud de la velocidad permanece constante, pero su dirección cambia continuamente debido a la:", options: ["Aceleración tangencial", "Aceleración centrípeta", "Fuerza de rozamiento", "Inercia"], answer: 1 },
    { id: 13, topic: "Trabajo y Potencia", question: "La Potencia Mecánica se define operacionalmente como la rapidez con la que se realiza:", options: ["Una fuerza", "Un trabajo", "Un cambio de aceleración", "Un impulso"], answer: 1 },
    { id: 14, topic: "Potencia", question: "La unidad de potencia en el Sistema Internacional es el Watt (W), que equivale a:", options: ["1 Joule / segundo", "1 Newton / metro", "1 Pascal · segundo", "1 Joule · segundo"], answer: 0 },
    { id: 15, topic: "Estática", question: "Para que un cuerpo rígido se encuentre en equilibrio de rotación, la suma de sus momentos de fuerza o torques debe ser igual a:", options: ["La masa total", "Cero", "La aceleración de la gravedad", "La fuerza normal"], answer: 1 },
    { id: 16, topic: "Hidrostática", question: "¿Cómo se define el concepto de Presión en la física de fluidos?", options: ["Fuerza multiplicada por Área", "Fuerza dividida entre Área", "Masa dividida entre Volumen", "Volumen por Densidad"], answer: 1 },
    { id: 17, topic: "Hidrostática", question: "El Principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba igual al:", options: ["Peso del cuerpo", "Peso del fluido desalojado", "Volumen del cuerpo", "Área de la base"], answer: 1 },
    { id: 18, topic: "Termodinámica", question: "¿A qué temperatura en la escala Kelvin equivale el cero absoluto en la escala Celsius (-273.15 °C)?", options: ["-273.15 K", "0 K", "273.15 K", "100 K"], answer: 1 },
    { id: 19, topic: "Termodinámica", question: "El mecanismo de transferencia de calor que no requiere de un medio material para propagarse se llama:", options: ["Conducción", "Convección", "Radiación", "Evaporación"], answer: 2 },
    { id: 20, topic: "Electrostática", question: "La Ley de Coulomb determina que la fuerza eléctrica entre dos cargas puntuales es inversamente proporcional al:", options: ["Cuadrado de la distancia entre ellas", "Producto de las cargas", "Valor de la constante dieléctrica", "Tiempo de interacción"], answer: 0 },
    { id: 21, topic: "Circuitos Eléctricos", question: "¿Cuál es la expresión matemática básica de la Ley de Ohm?", options: ["V = I · R", "V = I / R", "R = V · I", "I = V · R"], answer: 0 },
    { id: 22, topic: "Circuitos Eléctricos", question: "En un circuito eléctrico en serie, ¿qué magnitud permanece constante a través de todos los componentes?", options: ["El voltaje", "La corriente eléctrica (Intensidad)", "La resistencia total", "La potencia disipada"], answer: 1 },
    { id: 23, topic: "Ondas", question: "¿Cómo se denomina al tiempo que tarda una onda en completar un ciclo completo?", options: ["Frecuencia", "Longitud de onda", "Período", "Amplitud"], answer: 2 },
    { id: 24, topic: "Ondas", question: "La relación recíproca o inversa del período de una onda (1/T) se conoce como:", options: ["Amplitud", "Velocidad de fase", "Frecuencia", "Celeridad"], answer: 2 },
    { id: 25, topic: "Óptica", question: "El cambio de dirección que experimenta un rayo de luz al pasar de un medio transparente a otro con diferente índice de refracción se denomina:", options: ["Reflexión", "Refracción", "Difracción", "Polarización"], answer: 1 },
    { id: 26, topic: "Vectores", question: "Un vector tiene tres características fundamentales que lo definen por completo: magnitud, dirección y:", options: ["Masa", "Sentido", "Punto de corte", "Escalar"], answer: 1 },
    { id: 27, topic: "Vectores", question: "El producto escalar de dos vectores perpendiculares entre sí es siempre igual a:", options: ["Uno", "El producto de sus magnitudes", "Cero", "Un vector unitario"], answer: 2 },
    { id: 28, topic: "Conservación", question: "En un sistema aislado donde solo actúan fuerzas conservativas, se mantiene constante:", options: ["Solo la Energía Cinética", "La Energía Mecánica Total", "La masa del sistema", "La velocidad angular"], answer: 1 },
    { id: 29, topic: "Mecánica Celeste", question: "Las Leyes de Kepler describen el movimiento de los planetas alrededor del Sol. La primera ley establece que las órbitas son:", options: ["Circulares perfectas", "Elípticas", "Parabólicas", "Espirales"], answer: 1 },
    { id: 30, topic: "Física Moderna", question: "La constante de proporcionalidad fundamental en la física cuántica que relaciona la energía de un fotón con su frecuencia es la constante de:", options: ["Newton", "Planck", "Einstein", "Boltzmann"], answer: 1 }
];

// ESTADO DE LA APLICACIÓN Y PERSISTENCIA (localStorage)
let currentIndex = 0;
let userAnswers = JSON.parse(localStorage.getItem('eval_answers')) || {};
let violationsCount = parseInt(localStorage.getItem('eval_violations')) || 0;
let timeRemaining = parseInt(localStorage.getItem('eval_timer')) || 3600; // 60 minutos
let timerInterval = null;

// ELEMENTOS DEL DOM
const overlay = document.getElementById('fullscreen-overlay');
const btnEnter = document.getElementById('btn-enter');
const warningBanner = document.getElementById('warning-banner');

const questionNumber = document.getElementById('question-number');
const questionTopic = document.getElementById('question-topic');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');

const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('timer');
const questionMap = document.getElementById('question-map');

const examSection = document.getElementById('exam-section');
const sidebarSection = document.querySelector('.sidebar-section');
const resultsSection = document.getElementById('results-section');

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    initQuestionMap();
    renderQuestion(currentIndex);
    updateProgress();
    setupSecurityEvents();
});

// GESTIÓN DE PANTALLA COMPLETA Y KIOSKO
btnEnter.addEventListener('click', () => {
    enterFullscreen();
    overlay.classList.add('hidden');
    startTimer();
});

function enterFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.warn(`Error al activar pantalla completa: ${err.message}`);
        });
    }
}

// CONTROLES DE SEGURIDAD
function setupSecurityEvents() {
    // Detectar pérdida de foco / cambio de pestaña
    window.addEventListener('blur', () => {
        registerViolation();
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            registerViolation();
        }
    });

    // Deshabilitar menú contextual (Click derecho)
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Bloquear atajos de teclado de copia y captura
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'a')) {
            e.preventDefault();
        }
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });
}

function registerViolation() {
    violationsCount++;
    localStorage.setItem('eval_violations', violationsCount);
    warningBanner.classList.remove('hidden');
    setTimeout(() => warningBanner.classList.add('hidden'), 5000);
}

// TEMPORIZADOR
function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        timeRemaining--;
        localStorage.setItem('eval_timer', timeRemaining);
        
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishEvaluation();
        }
    }, 1000);
}

// RENDERIZADO DE PREGUNTAS
function renderQuestion(index) {
    const q = questions[index];
    questionNumber.textContent = `Pregunta ${index + 1} de ${questions.length}`;
    questionTopic.textContent = q.topic;
    questionText.textContent = q.question;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, optIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = `option-item ${userAnswers[index] === optIndex ? 'selected' : ''}`;
        optionDiv.innerHTML = `
            <input type="radio" name="opt" id="opt-${optIndex}" ${userAnswers[index] === optIndex ? 'checked' : ''}>
            <label for="opt-${optIndex}">${opt}</label>
        `;
        optionDiv.addEventListener('click', () => selectOption(index, optIndex));
        optionsContainer.appendChild(optionDiv);
    });

    // Estado de botones de navegación
    btnPrev.disabled = index === 0;
    btnNext.textContent = index === questions.length - 1 ? "Revisar / Guardar" : "Siguiente";
    updateMapHighlight();
}

function selectOption(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex;
    localStorage.setItem('eval_answers', JSON.stringify(userAnswers));
    renderQuestion(qIndex);
    updateProgress();
}

// NAVEGACIÓN
btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion(currentIndex);
    }
});

btnNext.addEventListener('click', () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion(currentIndex);
    }
});

// MAPA DE PREGUNTAS
function initQuestionMap() {
    questionMap.innerHTML = '';
    questions.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = `map-btn ${userAnswers[i] !== undefined ? 'answered' : ''}`;
        btn.textContent = i + 1;
        btn.addEventListener('click', () => {
            currentIndex = i;
            renderQuestion(currentIndex);
        });
        questionMap.appendChild(btn);
    });
}

function updateMapHighlight() {
    const buttons = questionMap.querySelectorAll('.map-btn');
    buttons.forEach((btn, i) => {
        btn.classList.remove('current');
        if (i === currentIndex) btn.classList.add('current');
        if (userAnswers[i] !== undefined) btn.classList.add('answered');
    });
}

function updateProgress() {
    const answeredCount = Object.keys(userAnswers).length;
    progressText.textContent = `${answeredCount} / ${questions.length}`;
    const percent = (answeredCount / questions.length) * 100;
    progressBar.style.width = `${percent}%`;
}

// FINALIZACIÓN Y CÁLCULO DE RESULTADOS
btnFinish.addEventListener('click', () => {
    if (confirm("¿Estás seguro de finalizar la evaluación? Una vez enviada no podrás cambiar tus respuestas.")) {
        finishEvaluation();
    }
});

function finishEvaluation() {
    clearInterval(timerInterval);
    examSection.classList.add('hidden');
    sidebarSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    let score = 0;
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    questions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        if (isCorrect) score++;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <p><strong>${i + 1}. ${q.question}</strong></p>
            <p>Tu respuesta: ${userAnswers[i] !== undefined ? q.options[userAnswers[i]] : '<em>Sin responder</em>'}</p>
            <p>Respuesta correcta: <strong>${q.options[q.answer]}</strong></p>
        `;
        reviewList.appendChild(reviewItem);
    });

    document.getElementById('score-val').textContent = `${score} / ${questions.length}`;
    document.getElementById('score-percent').textContent = `${((score / questions.length) * 100).toFixed(1)}%`;
    document.getElementById('security-violations').textContent = violationsCount;

    // Limpiar almacenamiento local al finalizar
    localStorage.removeItem('eval_answers');
    localStorage.removeItem('eval_timer');
    localStorage.removeItem('eval_violations');
}