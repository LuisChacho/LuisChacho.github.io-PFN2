let currentQuestionIndex = 0;
let userAnswers = {};
let warningCount = 0;
const MAX_WARNINGS = 3;
let timerInterval = null;
let totalSeconds = 90 * 60; // 90 minutos para 50 preguntas

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const examScreen = document.getElementById('exam-screen');
const resultScreen = document.getElementById('result-screen');

const btnStart = document.getElementById('btn-start');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerDisplay = document.getElementById('timer');
const progressDisplay = document.getElementById('progress');
const warnCountDisplay = document.getElementById('warn-count');

// Inicializar la aplicación
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
  setupSecurity();
}

// Renderizado de Pregunta
function renderQuestion() {
  const q = questionsBank[currentQuestionIndex];
  progressDisplay.innerText = `Pregunta ${currentQuestionIndex + 1} de ${questionsBank.length}`;
  questionText.innerText = `${q.id}. ${q.q}`;

  optionsContainer.innerHTML = '';
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (userAnswers[q.id] === index) {
      btn.classList.add('selected');
    }
    btn.innerText = opt;
    btn.onclick = () => selectOption(q.id, index);
    optionsContainer.appendChild(btn);
  });

  btnPrev.disabled = currentQuestionIndex === 0;
  btnNext.innerText = (currentQuestionIndex === questionsBank.length - 1) ? 'Finalizar' : 'Siguiente';
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

// Temporizador de 90 Minutos
function startTimer() {
  timerInterval = setInterval(() => {
    totalSeconds--;
    saveState();

    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    timerDisplay.innerText = `Tiempo restante: ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      finishExam("El tiempo reglamentario ha finalizado.");
    }
  }, 1000);
}

// Capas de Seguridad y Control de Entorno
function setupSecurity() {
  // 1. Bloqueo de cambio de pestaña/ventana (Visibility/Blur)
  window.addEventListener('blur', registerViolation);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) registerViolation();
  });

  // 2. Control de Salida de Pantalla Completa
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      registerViolation();
    }
  });

  // 3. Deshabilitar Clic Derecho y Selección
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('cut', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());

  // 4. Bloqueo de Teclas F12, Ctrl+Shift+I, Alt+Tab / Capturas
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
  alert(`⚠️ ¡ADVERTENCIA de Seguridad (${warningCount}/${MAX_WARNINGS})!\nSe ha detectado una acción no permitida (salida de pantalla completa, cambio de pestaña o tecla restringida).`);

  if (warningCount >= MAX_WARNINGS) {
    finishExam("Examen cancelado automáticamente por acumular el número máximo de advertencias de seguridad.");
  }
}

function requestFullScreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  }
}

// Persistencia de datos local (Auto-guardado)
function saveState() {
  const state = {
    userAnswers,
    currentQuestionIndex,
    warningCount,
    totalSeconds
  };
  localStorage.setItem('physics_exam_state', JSON.stringify(state));
}

function loadSavedState() {
  const saved = localStorage.getItem('physics_exam_state');
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
  localStorage.removeItem('physics_exam_state');

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
  document.getElementById('final-percentage').innerText = `Porcentaje de aciertos: ${percentage}%`;

  if (document.exitFullscreen && document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
}