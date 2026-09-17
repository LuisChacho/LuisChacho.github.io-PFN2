let currentQuestionIndex = 0;
let userAnswers = {};
let warningCount = 0;
const MAX_WARNINGS = 3;
let timerInterval = null;
let totalSeconds = 60 * 60; // 60 minutos

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const examApp = document.getElementById('exam-app');
const resultScreen = document.getElementById('result-screen');

const btnStart = document.getElementById('btn-start');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');
const btnFullscreenToggle = document.getElementById('btn-fullscreen-toggle');

const questionNumber = document.getElementById('question-number');
const questionTopic = document.getElementById('question-topic');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerText = document.getElementById('timer-text');

const reactivesGrid = document.getElementById('reactives-grid');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressPercent = document.getElementById('progress-percent');

btnStart.addEventListener('click', startExam);
btnPrev.addEventListener('click', () => navigate(-1));
btnNext.addEventListener('click', () => navigate(1));
btnFinish.addEventListener('click', () => {
  if (confirm("¿Estás seguro de que deseas finalizar tu examen ahora?")) {
    finishExam("Evaluación completada voluntariamente por el estudiante.");
  }
});

btnFullscreenToggle.addEventListener('click', toggleFullScreen);

function startExam() {
  requestFullScreen();
  startScreen.classList.add('hidden');
  examApp.classList.remove('hidden');

  buildGrid();
  renderQuestion();
  startTimer();
  setupSecurity();
}

function buildGrid() {
  reactivesGrid.innerHTML = '';
  questionsBank.forEach((q, index) => {
    const btn = document.createElement('button');
    btn.className = 'grid-btn';
    btn.innerText = index + 1;
    btn.id = `grid-btn-${index}`;
    btn.onclick = () => {
      currentQuestionIndex = index;
      renderQuestion();
    };
    reactivesGrid.appendChild(btn);
  });
}

function renderQuestion() {
  const q = questionsBank[currentQuestionIndex];
  
  questionNumber.innerText = `Pregunta ${currentQuestionIndex + 1} de ${questionsBank.length}`;
  questionTopic.innerText = `Tema: ${q.topic}`;
  questionText.innerHTML = q.q;

  optionsContainer.innerHTML = '';
  const badges = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, i) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    if (userAnswers[q.id] === i) {
      optDiv.classList.add('selected');
    }

    optDiv.innerHTML = `
      <div class="option-badge">${badges[i]}</div>
      <div class="option-label">${optText}</div>
    `;

    optDiv.onclick = () => selectOption(q.id, i);
    optionsContainer.appendChild(optDiv);
  });

  btnPrev.disabled = currentQuestionIndex === 0;
  btnNext.innerText = (currentQuestionIndex === questionsBank.length - 1) ? 'Finalizar' : 'Siguiente';

  updateGridAndProgress();

  if (window.katex) {
    katex.renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false}
      ]
    });
  }
}

function selectOption(qId, optionIndex) {
  userAnswers[qId] = optionIndex;
  renderQuestion();
}

function navigate(direction) {
  const nextIndex = currentQuestionIndex + direction;
  if (nextIndex >= 0 && nextIndex < questionsBank.length) {
    currentQuestionIndex = nextIndex;
    renderQuestion();
  } else if (nextIndex >= questionsBank.length) {
    finishExam("Evaluación completada.");
  }
}

function updateGridAndProgress() {
  const answeredCount = Object.keys(userAnswers).length;
  const percentage = Math.round((answeredCount / questionsBank.length) * 100);

  progressBarFill.style.width = `${percentage}%`;
  progressPercent.innerText = `${percentage}%`;

  questionsBank.forEach((q, index) => {
    const btn = document.getElementById(`grid-btn-${index}`);
    btn.className = 'grid-btn';
    
    if (userAnswers[q.id] !== undefined) {
      btn.classList.add('answered');
    }
    if (index === currentQuestionIndex) {
      btn.classList.add('current');
    }
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    totalSeconds--;
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    timerText.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      finishExam("Tiempo límite de 60 minutos agotado.");
    }
  }, 1000);
}

function setupSecurity() {
  window.addEventListener('blur', registerViolation);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) registerViolation();
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      registerViolation();
    }
  });

  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('cut', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());

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
  alert(`⚠️ ADVERTENCIA DE SEGURIDAD (${warningCount}/${MAX_WARNINGS})\nSe ha detectado una acción prohibida (cambio de pestaña, salir de pantalla completa o tecla no autorizada).`);

  if (warningCount >= MAX_WARNINGS) {
    finishExam("Examen bloqueado y finalizado automáticamente por violaciones reiteradas de seguridad.");
  }
}

function requestFullScreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    requestFullScreen();
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function finishExam(reason) {
  clearInterval(timerInterval);
  examApp.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  let score = 0;
  questionsBank.forEach(q => {
    if (userAnswers[q.id] === q.correct) {
      score++;
    }
  });

  document.getElementById('result-reason').innerText = reason;
  document.getElementById('final-score').innerText = score;
  const pct = ((score / questionsBank.length) * 100).toFixed(1);
  document.getElementById('final-percentage').innerText = `${pct}% de rendimiento global`;
}