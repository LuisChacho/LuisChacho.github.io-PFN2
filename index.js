// Estado Global de la Aplicación
let currentQuestionIndex = 0;
let userAnswers = {};
let warningCount = 0;
const MAX_WARNINGS = 3;
let timerInterval = null;
let totalSeconds = 90 * 60; // 90 minutos para las 50 preguntas

// Elementos UI
const startScreen = document.getElementById('start-screen');
const examScreen = document.getElementById('exam-screen');
const resultScreen = document.getElementById('result-screen');

const btnStart = document.getElementById('btn-start');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const questionNum = document.getElementById('question-num');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const timerDisplay = document.getElementById('timer');
const progressStep = document.getElementById('progress-step');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');
const warnCountDisplay = document.getElementById('warn-count');

// Inicialización
btnStart.addEventListener('click', startExam);
btnPrev.addEventListener('click', prevQuestion);
btnNext.addEventListener('click', nextQuestion);

function startExam() {
  requestFullScreen();
  loadSavedState();

  startScreen.classList.add('hidden');
  examScreen.classList.remove('hidden');

  renderQuestion();
  startTimer();
  setupSecuritySystems();
}

// Renderizado de Pregunta y Opciones
function renderQuestion() {
  const q = questionsBank[currentQuestionIndex];
  const total = questionsBank.length;
  const pct = Math.round(((currentQuestionIndex + 1) / total) * 100);

  questionNum.innerText = `Pregunta ${String(currentQuestionIndex + 1).padStart(2, '0')}`;
  questionText.innerText = q.q;

  progressStep.innerText = `Pregunta ${currentQuestionIndex + 1} de ${total}`;
  progressPercent.innerText = `${pct}% completado`;
  progressFill.style.width = `${pct}%`;

  optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, index) => {
    const card = document.createElement('div');
    card.className = 'option-card';
    if (userAnswers[q.id] === index) {
      card.classList.add('selected');
    }

    card.innerHTML = `
      <div class="option-indicator">${letters[index]}</div>
      <div class="option-label">${opt}</div>
    `;

    card.onclick = () => selectOption(q.id, index);
    optionsContainer.appendChild(card);
  });

  btnPrev.disabled = currentQuestionIndex === 0;
  btnNext.innerText = (currentQuestionIndex === total - 1) ? 'Finalizar Examen' : 'Siguiente →';
}

function selectOption(questionId, optionIndex) {
  userAnswers[questionId] = optionIndex;
  saveState();
  renderQuestion();
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questionsBank.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    finishExam("Evaluación completada por el estudiante.");
  }
}

// Temporizador Regresivo
function startTimer() {
  timerInterval = setInterval(() => {
    totalSeconds--;
    saveState();

    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      finishExam("El tiempo reglamentario de 90 minutos ha finalizado.");
    }
  }, 1000);
}

// Capas de Seguridad Activas (Proctoring)
function setupSecuritySystems() {
  // 1. Control de Visibilidad y Foco
  window.addEventListener('blur', registerViolation);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) registerViolation();
  });

  // 2. Control de Salida de Pantalla Completa
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && !examScreen.classList.contains('hidden')) {
      registerViolation();
    }
  });

  // 3. Inhabilitación de Portapapeles y Menú Contextual
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('cut', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());

  // 4. Bloqueo de Atajos Teclado e Inspección
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
      (e.ctrlKey && e.key === 'u') ||
      e.key === 'PrintScreen'
    ) {
      e.preventDefault();
      registerViolation();
    }
  });
}

function registerViolation() {
  warningCount++;
  warnCountDisplay.innerText = warningCount;
  
  alert(`⚠️ ADVERTENCIA DE SEGURIDAD (${warningCount}/${MAX_WARNINGS})\nSe ha detectado una acción no permitida (salida de pantalla completa, cambio de pestaña o atajo restrinjido).`);

  if (warningCount >= MAX_WARNINGS) {
    finishExam("Examen cancelado automáticamente por acumular el límite de infracciones de seguridad.");
  }
}

function requestFullScreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  }
}

// Persistencia de Estado
function saveState() {
  const state = {
    userAnswers,
    currentQuestionIndex,
    warningCount,
    totalSeconds
  };
  localStorage.setItem('physics_exam_pro_state', JSON.stringify(state));
}

function loadSavedState() {
  const saved = localStorage.getItem('physics_exam_pro_state');
  if (saved) {
    const state = JSON.parse(saved);
    userAnswers = state.userAnswers || {};
    currentQuestionIndex = state.currentQuestionIndex || 0;
    warningCount = state.warningCount || 0;
    totalSeconds = state.totalSeconds || (90 * 60);
    warnCountDisplay.innerText = warningCount;
  }
}

// Cierre y Calificación
function finishExam(reason) {
  clearInterval(timerInterval);
  localStorage.removeItem('physics_exam_pro_state');

  examScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  let score = 0;
  questionsBank.forEach(q => {
    if (userAnswers[q.id] === q.correct) {
      score++;
    }
  });

  document.getElementById('result-reason').innerText = reason;
  document.getElementById('final-score').innerText = score;
  const percentage = ((score / questionsBank.length) * 100).toFixed(1);
  document.getElementById('final-percentage').innerText = `${percentage}%`;

  if (document.exitFullscreen && document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
}