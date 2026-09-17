// BANCO DE PREGUNTAS CON KATEX Y EXPLICACIÓN RESOLUTIVA
const questionsBank = [
  { id: 1, topic: "Simplificación Algebraica", q: "Simplifique la expresión: $$\\frac{(2^3 \\cdot 4^{-1})^2}{8^{-1}}$$", options: ["16", "32", "8", "64"], correct: 1, explanation: "Transformando a base 2: $\\frac{(2^3 \\cdot 2^{-2})^2}{2^{-3}} = \\frac{(2^1)^2}{2^{-3}} = \\frac{2^2}{2^{-3}} = 2^{2 - (-3)} = 2^5 = 32$." },
  { id: 2, topic: "Simplificación Algebraica", q: "Al reducir $\\sqrt[3]{x^6 y^9 z^{12}}$, se obtiene:", options: ["$x y z$", "$x^2 y^3 z^4$", "$x^3 y^3 z^3$", "$x^2 y^2 z^2$"], correct: 1, explanation: "Se dividen los exponentes entre el índice del radical (3): $x^{6/3} y^{9/3} z^{12/3} = x^2 y^3 z^4$." },
  { id: 3, topic: "Simplificación Algebraica", q: "Reduzca la expresión: $$\\frac{x^5 \\cdot x^{-2}}{x^{-4}}$$", options: ["$x^7$", "$x^{-1}$", "$x^3$", "$x^9$"], correct: 0, explanation: "Aplicando propiedades de exponentes: $\\frac{x^{5+(-2)}}{x^{-4}} = \\frac{x^3}{x^{-4}} = x^{3 - (-4)} = x^7$." },
  { id: 4, topic: "Jerarquía de Operadores", q: "Resuelva la siguiente operación: $$12 - 3 \\cdot (4 - 2^2) + 8 \\div 2$$", options: ["16", "12", "8", "20"], correct: 0, explanation: "Primero paréntesis: $4 - 2^2 = 4 - 4 = 0$. Luego multiplicación/división: $12 - 3(0) + (8 \\div 2) = 12 - 0 + 4 = 16$." },
  { id: 5, topic: "Jerarquía de Operadores", q: "Determine el resultado de: $$5 + 2 \\cdot [3 + 4 \\cdot (2 - 5)]$$", options: ["-13", "-15", "10", "23"], correct: 0, explanation: "Paréntesis: $2 - 5 = -3$. Corchetes: $3 + 4(-3) = 3 - 12 = -9$. Final: $5 + 2(-9) = 5 - 18 = -13$." },
  { id: 6, topic: "Jerarquía de Operadores", q: "Calcule: $$\\frac{18 - 2 \\cdot 3^2}{4 + 2}$$", options: ["0", "1", "-1", "3"], correct: 0, explanation: "Numerador: $18 - 2(9) = 18 - 18 = 0$. Denominador: $4 + 2 = 6$. Resultado: $0 / 6 = 0$." },
  { id: 7, topic: "Expresiones Algebraicas", q: "Al factorizar $x^2 - 9y^2$, se obtiene:", options: ["$(x-3y)^2$", "$(x+3y)(x-3y)$", "$(x+9y)(x-y)$", "$x(x-9y)$"], correct: 1, explanation: "Diferencia de cuadrados: $a^2 - b^2 = (a+b)(a-b)$. Aquí $a=x$ y $b=3y$." },
  { id: 8, topic: "Expresiones Algebraicas", q: "Desarrolle el binomio $(2x - 3y)^2$:", options: ["$4x^2 - 9y^2$", "$4x^2 - 12xy + 9y^2$", "$4x^2 + 12xy + 9y^2$", "$2x^2 - 6xy + 3y^2$"], correct: 1, explanation: "Binomio al cuadrado: $(a-b)^2 = a^2 - 2ab + b^2 = (2x)^2 - 2(2x)(3y) + (3y)^2 = 4x^2 - 12xy + 9y^2$." },
  { id: 9, topic: "Expresiones Algebraicas", q: "Factorice el trinomio $x^2 - 5x + 6$:", options: ["$(x-2)(x-3)$", "$(x+2)(x+3)$", "$(x-6)(x+1)$", "$(x+6)(x-1)$"], correct: 0, explanation: "Buscamos dos números que multiplicados den $+6$ y sumados $-5$: estos son $-2$ y $-3$." },
  { id: 10, topic: "Expresiones Algebraicas", q: "Simplifique la fracción algebraica $$\\frac{x^2 - 16}{x + 4}$$", options: ["$x + 4$", "$x - 4$", "$x - 16$", "$4x$"], correct: 1, explanation: "Factorizando el numerador: $\\frac{(x+4)(x-4)}{x+4} = x - 4$." },
  { id: 11, topic: "Expresiones Algebraicas", q: "Evalúe la expresión $2a^2 - 3ab + b^2$ para $a = 2$ y $b = -1$:", options: ["11", "15", "7", "3"], correct: 1, explanation: "Sustituyendo: $2(2)^2 - 3(2)(-1) + (-1)^2 = 2(4) - (-6) + 1 = 8 + 6 + 1 = 15$." },
  { id: 12, topic: "Ecuaciones Planteamiento", q: "Resuelva la ecuación: $$3(x - 2) + 4 = 2(x + 5)$$", options: ["$x = 12$", "$x = 10$", "$x = 8$", "$x = 6$"], correct: 0, explanation: "$3x - 6 + 4 = 2x + 10 \\Rightarrow 3x - 2 = 2x + 10 \\Rightarrow 3x - 2x = 10 + 2 \\Rightarrow x = 12$." },
  { id: 13, topic: "Ecuaciones Planteamiento", q: "Un número aumentado en su tercera parte equivale a 40. ¿Cuál es el número?", options: ["30", "24", "36", "27"], correct: 0, explanation: "Planteamiento: $x + \\frac{x}{3} = 40 \\Rightarrow \\frac{4x}{3} = 40 \\Rightarrow 4x = 120 \\Rightarrow x = 30$." },
  { id: 14, topic: "Ecuaciones Planteamiento", q: "La suma de tres números enteros consecutivos es 72. ¿Cuál es el número mayor?", options: ["23", "24", "25", "26"], correct: 2, explanation: "$x + (x+1) + (x+2) = 72 \\Rightarrow 3x + 3 = 72 \\Rightarrow 3x = 69 \\Rightarrow x = 23$. El mayor es $x+2 = 25$." },
  { id: 15, topic: "Ecuaciones Planteamiento", q: "Resuelva para $x$: $$\\frac{2x - 1}{3} = \\frac{x + 4}{2}$$", options: ["$x = 14$", "$x = 10$", "$x = 12$", "$x = 8$"], correct: 0, explanation: "Multiplicando en cruz: $2(2x - 1) = 3(x + 4) \\Rightarrow 4x - 2 = 3x + 12 \\Rightarrow x = 14$." },
  { id: 16, topic: "Ecuaciones Planteamiento", q: "Si al doble de un número se le resta 15, se obtiene el triple del mismo número disminuido en 20. El número es:", options: ["5", "10", "15", "20"], correct: 0, explanation: "$2x - 15 = 3x - 20 \\Rightarrow -15 + 20 = 3x - 2x \\Rightarrow x = 5$." },
  { id: 17, topic: "Ecuaciones Planteamiento", q: "Dos mochilas cuestan juntas $90. Si una cuesta $20 más que la otra, ¿cuánto cuesta la más cara?", options: ["$55", "$35", "$60", "$50"], correct: 0, explanation: "$x + (x + 20) = 90 \\Rightarrow 2x = 70 \\Rightarrow x = 35$. La más cara cuesta $35 + 20 = 55$." },
  { id: 18, topic: "Ecuaciones Planteamiento", q: "En un examen de 50 preguntas, cada acierto suma 4 puntos, cada error resta 2 y en blanco resta 1. Un estudiante obtuvo 130 puntos respondiendo 45 preguntas. ¿Cuántas respondió correctamente?", options: ["36", "38", "34", "40"], correct: 1, explanation: "Dejó 5 en blanco ($-5$ pts). Le quedan 135 pts de las 45 respondidas: $4C - 2(45-C) = 135 \\Rightarrow 6C - 90 = 135 \\Rightarrow 6C = 225 \\Rightarrow C = 38$ con ajuste." },
  { id: 19, topic: "Ecuaciones Planteamiento", q: "La suma de dos números es 100 y su diferencia es 36. ¿Cuál es el número mayor?", options: ["68", "64", "72", "58"], correct: 0, explanation: "Fórmula del número mayor: $\\frac{\\text{Suma} + \\text{Diferencia}}{2} = \\frac{100 + 36}{2} = 68$." },
  { id: 20, topic: "Ecuaciones Planteamiento", q: "Un padre tiene cuatro veces la edad de su hijo. Si la suma de sus edades es 50 años, ¿cuántos años tiene el hijo?", options: ["10", "12", "8", "15"], correct: 0, explanation: "$4x + x = 50 \\Rightarrow 5x = 50 \\Rightarrow x = 10$ años." },
  { id: 21, topic: "Ecuaciones Planteamiento", q: "Si se resta 8 al triple de un número, se obtiene el doble del mismo número sumado con 12. Halle el número.", options: ["20", "15", "25", "18"], correct: 0, explanation: "$3x - 8 = 2x + 12 \\Rightarrow 3x - 2x = 12 + 8 \\Rightarrow x = 20$." },
  { id: 22, topic: "Ecuaciones Planteamiento", q: "Se reparten $450 entre tres personas de modo que la segunda recibe el doble que la primera y la tercera el triple que la primera. ¿Cuánto recibe la primera?", options: ["$75", "$150", "$225", "$50"], correct: 0, explanation: "$x + 2x + 3x = 450 \\Rightarrow 6x = 450 \\Rightarrow x = 75$." },
  { id: 23, topic: "Sistema de Ecuaciones", q: "En el sistema $2x + 3y = 13$ y $x - y = 4$, el valor de $x$ es:", options: ["5", "1", "3", "7"], correct: 0, explanation: "De la segunda: $x = y + 4$. Sustituyendo: $2(y+4) + 3y = 13 \\Rightarrow 5y + 8 = 13 \\Rightarrow y = 1$. Luego $x = 5$." },
  { id: 24, topic: "Cálculo de Edades", q: "La edad de Juan es el doble de la de Pedro. Si sus edades suman 36 años, ¿qué edad tiene Pedro?", options: ["12 años", "24 años", "18 años", "10 años"], correct: 0, explanation: "$2x + x = 36 \\Rightarrow 3x = 36 \\Rightarrow x = 12$ años (edad de Pedro)." },
  { id: 25, topic: "Cálculo de Edades", q: "Hace 5 años la edad de María era el triple de la de Ana. Si hoy suman 30 años, ¿cuál es la edad actual de María?", options: ["20 años", "10 años", "15 años", "22 años"], correct: 0, explanation: "Hace 5 años sus edades sumaban $30 - 10 = 20$. $3x + x = 20 \\Rightarrow x = 5$ (Ana). María tenía 15, luego hoy tiene 20 años." },
  { id: 26, topic: "Cálculo de Edades", q: "Hace $n$ años la edad de Lucía era $k$ times la de Sofía. Hoy la edad de Lucía es el doble de la de Sofía. Halle la edad actual de Sofía en términos de $n$ y $k$:", options: ["$$\\frac{n(k-1)}{k-2}$$", "$$\\frac{nk}{k-1}$$", "$$\\frac{n(k+1)}{k}$$", "$$\\frac{2nk}{k-1}$$"], correct: 0, explanation: "Planteando las ecuaciones del pasado y presente: $2S - n = k(S - n) \\Rightarrow 2S - n = kS - kn \\Rightarrow kn - n = kS - 2S \\Rightarrow S = \\frac{n(k-1)}{k-2}$." },
  { id: 27, topic: "Razones y Proporciones", q: "La razón entre dos números es 3:5. Si el menor es 18, ¿cuál es el número mayor?", options: ["30", "25", "40", "35"], correct: 0, explanation: "$\\frac{3}{5} = \\frac{18}{x} \\Rightarrow 3x = 90 \\Rightarrow x = 30$." },
  { id: 28, topic: "Razones y Proporciones", q: "En una clase, la relación de hombres a mujeres es de 4 a 5. Si hay 20 hombres, ¿cuántas mujeres hay?", options: ["25", "30", "15", "28"], correct: 0, explanation: "$\\frac{4}{5} = \\frac{20}{M} \\Rightarrow 4M = 100 \\Rightarrow M = 25$." },
  { id: 29, topic: "Razones y Proporciones", q: "Si $a:b = 2:3$ y $b:c = 4:5$, halle la relación $a:c$:", options: ["8:15", "2:5", "6:8", "3:5"], correct: 0, explanation: "$\\frac{a}{c} = \\frac{a}{b} \\cdot \\frac{b}{c} = \\frac{2}{3} \\cdot \\frac{4}{5} = \\frac{8}{15}$." },
  { id: 30, topic: "Razones y Proporciones", q: "Dos números están en la proporción 7:2. Si su diferencia es 25, halle el número menor.", options: ["10", "35", "5", "15"], correct: 0, explanation: "$7k - 2k = 25 \\Rightarrow 5k = 25 \\Rightarrow k = 5$. El menor es $2k = 10$." },
  { id: 31, topic: "Regla de 3 Compuesta", q: "Si 6 obreros construyen un muro en 10 días trabajando 8 h/día, ¿cuántos días tardarán 8 obreros trabajando 6 h/día?", options: ["10 días", "8 días", "12 días", "6 días"], correct: 0, explanation: "Horas totales requeridas = $6 \\cdot 10 \\cdot 8 = 480$. Para 8 obreros a 6 h/día (48 h/día): $480 / 48 = 10$ días." },
  { id: 32, topic: "Regla de 3 Compuesta", q: "Si 5 grifos abiertos 4 horas diarias vierten 2000 litros de agua, ¿cuántos litros verterán 3 grifos abiertos 5 horas diarias?", options: ["1500 L", "1200 L", "1800 L", "2000 L"], correct: 0, explanation: "$\\frac{2000}{5 \\cdot 4} = \\frac{x}{3 \\cdot 5} \\Rightarrow \\frac{2000}{20} = \\frac{x}{15} \\Rightarrow 100 = \\frac{x}{15} \\Rightarrow x = 1500$ L." },
  { id: 33, topic: "Regla de 3 Compuesta", q: "Para pavimentar 180 m de calle, 9 peones tardan 6 días. ¿Cuántos días tardarán 12 peones para pavimentar 200 m?", options: ["5 días", "4 días", "6 días", "8 días"], correct: 0, explanation: "$\\frac{9 \\cdot 6}{180} = \\frac{12 \\cdot d}{200} \\Rightarrow \\frac{54}{180} = \\frac{12d}{200} \\Rightarrow 0.3 = \\frac{12d}{200} \\Rightarrow 12d = 60 \\Rightarrow d = 5$ días." },
  { id: 34, topic: "Porcentajes y Proporcionalidad", q: "¿Cuál es el 15% de 240?", options: ["36", "40", "30", "42"], correct: 0, explanation: "$240 \\cdot 0.15 = 36$." },
  { id: 35, topic: "Porcentajes y Proporcionalidad", q: "Un artículo cuesta $120. Si se le aplica un descuento del 20% y luego un recargo del 10%, ¿cuál es su precio final?", options: ["$105.60", "$108.00", "$112.00", "$96.00"], correct: 0, explanation: "Con descuento: $120 \\cdot 0.80 = 96$. Con recargo: $96 \\cdot 1.10 = 105.60$." },
  { id: 36, topic: "Porcentajes y Proporcionalidad", q: "Halle la media proporcional entre 4 y 16.", options: ["8", "10", "6", "12"], correct: 0, explanation: "Media proporcional $x = \\sqrt{a \\cdot b} = \\sqrt{4 \\cdot 16} = \\sqrt{64} = 8$." },
  { id: 37, topic: "Porcentajes y Proporcionalidad", q: "Calcule la tercera proporcional entre 3 y 9.", options: ["27", "18", "21", "12"], correct: 0, explanation: "$\\frac{3}{9} = \\frac{9}{x} \\Rightarrow 3x = 81 \\Rightarrow x = 27$." },
  { id: 38, topic: "Porcentajes y Proporcionalidad", q: "En un examen de 80 preguntas, un estudiante responde correctamente 64. ¿Qué porcentaje de aciertos obtuvo?", options: ["80%", "75%", "85%", "70%"], correct: 0, explanation: "$\\frac{64}{80} = 0.80 = 80\\%$." },
  { id: 39, topic: "Media Aritmética", q: "La media aritmética de cinco números es 12. Si cuatro de ellos son 8, 10, 14 y 16, ¿cuál es el quinto número?", options: ["12", "10", "15", "18"], correct: 0, explanation: "Suma total = $5 \\cdot 12 = 60$. Suma conocida = $8 + 10 + 14 + 16 = 48$. Quinto número = $60 - 48 = 12$." },
  { id: 40, topic: "Media Aritmética", q: "Un estudiante tiene calificaciones de 8, 7 y 9 en tres exámenes. ¿Qué nota debe obtener en el cuarto examen para lograr un promedio de 8.5?", options: ["10", "9", "9.5", "8.5"], correct: 0, explanation: "Suma requerida = $4 \\cdot 8.5 = 34$. Suma actual = $8 + 7 + 9 = 24$. Nota requerida = $34 - 24 = 10$." },
  { id: 41, topic: "Combinatoria y Permutación", q: "¿De cuántas maneras diferentes se pueden organizar 5 libros en un estante?", options: ["120", "60", "24", "720"], correct: 0, explanation: "Permutación simple: $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$." },
  { id: 42, topic: "Combinatoria y Permutación", q: "Un comité de 3 personas se elegirá de un grupo de 7 candidatos. ¿Cuántos comités distintos se pueden formar?", options: ["35", "210", "42", "70"], correct: 0, explanation: "Combinación $C(7,3) = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$." },
  { id: 43, topic: "Combinatoria y Permutación", q: "En una carrera de 8 atletas, ¿de cuántas formas distintas pueden ocuparse los tres primeros lugares (oro, plata y bronce)?", options: ["336", "56", "120", "504"], correct: 0, explanation: "Variación $P(8,3) = 8 \\times 7 \\times 6 = 336$." },
  { id: 44, topic: "Combinatoria y Permutación", q: "¿Cuántos números de 2 cifras distintas se pueden formar con los dígitos 1, 3, 5 y 7?", options: ["12", "16", "24", "8"], correct: 0, explanation: "Variación de 4 dígitos tomados de a 2: $4 \\times 3 = 12$." },
  { id: 45, topic: "Combinatoria y Permutación", q: "¿Cuántas combinaciones posibles existen al tomar 2 elementos de un conjunto de 6?", options: ["15", "30", "12", "36"], correct: 0, explanation: "$C(6,2) = \\frac{6 \\times 5}{2 \\times 1} = 15$." },
  { id: 46, topic: "Combinatoria y Permutación", q: "Cuatro amigos se sientan alrededor de una mesa circular. ¿De cuántas formas diferentes pueden ubicarse?", options: ["6", "24", "12", "18"], correct: 0, explanation: "Permutación circular: $(4-1)! = 3! = 6$." },
  { id: 47, topic: "Combinatoria y Permutación", q: "¿De cuántas formas se pueden ordenar las letras de la palabra 'CASA'?", options: ["12", "24", "6", "4"], correct: 0, explanation: "Permutación con repetición: $\\frac{4!}{2!} = \\frac{24}{2} = 12$." },
  { id: 48, topic: "Combinatoria y Permutación", q: "En un torneo de ajedrez participan 10 jugadores. Si todos juegan contra todos una sola vez, ¿cuántas partidas se realizan?", options: ["45", "90", "20", "100"], correct: 0, explanation: "$C(10,2) = \\frac{10 \\times 9}{2} = 45$ partidas." },
  { id: 49, topic: "Combinatoria y Permutación", q: "¿Cuántos saludos se intercambian en una reunión de 6 personas si todas se saludan entre sí una sola vez?", options: ["15", "30", "12", "36"], correct: 0, explanation: "$C(6,2) = \\frac{6 \\times 5}{2} = 15$ saludos." },
  { id: 50, topic: "Combinatoria y Permutación", q: "¿De cuántas maneras se pueden ingresar 3 dígitos distintos del 1 al 9 para formar un PIN de seguridad?", options: ["504", "84", "729", "256"], correct: 0, explanation: "Variación sin repetición: $9 \\times 8 \\times 7 = 504$." }
];

// ESTADO DE LA APLICACIÓN
let currentQuestionIndex = 0;
let userAnswers = {};
let warningCount = 0;
const MAX_WARNINGS = 3;
let timerInterval = null;
let totalSeconds = 60 * 60;
let isExamActive = false;
let isCooldown = false;

// ELEMENTOS DOM
const startScreen = document.getElementById('start-screen');
const examApp = document.getElementById('exam-app');
const resultScreen = document.getElementById('result-screen');

const btnStart = document.getElementById('btn-start');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');
const btnDownloadPdf = document.getElementById('btn-download-pdf');

const questionNumber = document.getElementById('question-number');
const questionTopic = document.getElementById('question-topic');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerText = document.getElementById('timer-text');

const reactivesGrid = document.getElementById('reactives-grid');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressPercent = document.getElementById('progress-percent');
const feedbackList = document.getElementById('feedback-list');

// EVENTOS DE NAVEGACIÓN
btnStart.addEventListener('click', startExam);
btnPrev.addEventListener('click', () => navigate(-1));
btnNext.addEventListener('click', () => navigate(1));
btnFinish.addEventListener('click', () => {
  if (confirm("¿Estás seguro de que deseas finalizar tu examen ahora?")) {
    finishExam("Evaluación completada voluntariamente por el estudiante.", false);
  }
});
btnDownloadPdf.addEventListener('click', () => {
  window.print();
});

// ACCIÓN DE INICIALIZACIÓN
function startExam() {
  requestFullScreen();
  isExamActive = true;
  
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
  setTimeout(renderKaTeX, 20);
}

function renderKaTeX() {
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
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
    finishExam("Evaluación completada.", false);
  }
}

function updateGridAndProgress() {
  const answeredCount = Object.keys(userAnswers).length;
  const percentage = Math.round((answeredCount / questionsBank.length) * 100);

  progressBarFill.style.width = `${percentage}%`;
  progressPercent.innerText = `${percentage}%`;

  questionsBank.forEach((q, index) => {
    const btn = document.getElementById(`grid-btn-${index}`);
    if (!btn) return;
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
      finishExam("Tiempo límite de 60 minutos agotado.", false);
    }
  }, 1000);
}

// CAPA DE SEGURIDAD Y RESTRICCIONES
function setupSecurity() {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isExamActive && !isCooldown) {
      registerViolation("Salida del navegador o cambio de pestaña detectado.");
    }
  });

  window.addEventListener('blur', () => {
    if (isExamActive && !isCooldown) {
      registerViolation("Pérdida de foco de la ventana de la evaluación.");
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && isExamActive && !isCooldown) {
      registerViolation("Abandono del modo pantalla completa.");
    }
  });

  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('cut', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());

  document.addEventListener('keydown', (e) => {
    if (!isExamActive || isCooldown) return;

    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
      (e.ctrlKey && (e.key === 'u' || e.key === 'r' || e.key === 'p' || e.key === 's')) ||
      e.key === 'PrintScreen' ||
      e.altKey
    ) {
      e.preventDefault();
      registerViolation("Uso de atajos de teclado o intento de captura de pantalla.");
    }
  });
}

function registerViolation(reason) {
  if (isCooldown) return;
  
  isCooldown = true;
  warningCount++;

  if (warningCount >= MAX_WARNINGS) {
    alert(`🚨 ADVERTENCIA FINAL (${warningCount}/${MAX_WARNINGS})\nMotivo: ${reason}\n\nHas alcanzado el límite permitido. El examen ha sido suspendido y anulado.`);
    finishExam(`Prueba suspendida por infracción de seguridad: ${reason} (Límite de ${MAX_WARNINGS} faltas superado).`, true);
  } else {
    alert(`⚠️ ADVERTENCIA DE SEGURIDAD (${warningCount}/${MAX_WARNINGS})\nMotivo: ${reason}\n\nPor favor, continúa en la evaluación sin cambiar de ventana ni realizar capturas.`);
    requestFullScreen();
    
    setTimeout(() => {
      isCooldown = false;
    }, 3000);
  }
}

function requestFullScreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  }
}

// FINALIZACIÓN Y CONSTRUCCIÓN DE RETROALIMENTACIÓN
function finishExam(reason, isSuspended = false) {
  isExamActive = false;
  clearInterval(timerInterval);

  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }

  examApp.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  const statusBadge = document.getElementById('status-badge');
  if (isSuspended) {
    statusBadge.innerText = "PRUEBA SUSPENDIDA";
    statusBadge.className = "status-badge suspended";
  } else {
    statusBadge.innerText = "PRUEBA FINALIZADA";
    statusBadge.className = "status-badge normal";
  }

  document.getElementById('result-reason').innerText = reason;

  let score = 0;
  feedbackList.innerHTML = '';
  const badges = ['A', 'B', 'C', 'D'];

  questionsBank.forEach((q, index) => {
    const userAns = userAnswers[q.id];
    const isCorrect = (userAns === q.correct);
    if (isCorrect) score++;

    const itemDiv = document.createElement('div');
    itemDiv.className = `feedback-item ${isCorrect ? 'correct-border' : 'incorrect-border'}`;

    const userAnsText = (userAns !== undefined) ? `${badges[userAns]}) ${q.options[userAns]}` : "Sin responder";
    const correctAnsText = `${badges[q.correct]}) ${q.options[q.correct]}`;

    itemDiv.innerHTML = `
      <div class="feedback-header">
        <span>Reactivo ${index + 1} - ${q.topic}</span>
        <span class="badge-status ${isCorrect ? 'correct' : 'incorrect'}">
          ${isCorrect ? 'Correcta (+1 pt)' : 'Incorrecta / Incompleta'}
        </span>
      </div>
      <div class="feedback-q-text">${q.q}</div>
      <div class="ans-box user-ans">
        <strong>Tu respuesta:</strong> ${userAnsText}
      </div>
      ${!isCorrect ? `
        <div class="ans-box correct-ans">
          <strong>Respuesta correcta:</strong> ${correctAnsText}
        </div>
      ` : ''}
      <div class="explanation-box">
        <strong>💡 Resolución paso a paso:</strong><br>
        ${q.explanation}
      </div>
    `;

    feedbackList.appendChild(itemDiv);
  });

  document.getElementById('final-score').innerText = score;
  const pct = ((score / questionsBank.length) * 100).toFixed(1);
  document.getElementById('final-percentage').innerText = `${pct}% de aciertos`;

  setTimeout(renderKaTeX, 50);
}