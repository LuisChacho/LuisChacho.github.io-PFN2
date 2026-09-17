// BANCO DE 50 PREGUNTAS TIPO UNL / PREUNIVERSITARIO
const questionsData = [
    // Tema 1: Simplificación y Radicación
    { id: 1, topic: "Simplificación y Radicación", text: "Simplifique la siguiente expresión exponencial para $x, y \\neq 0$: $$\\left( \\frac{16x^{-4} y^6}{81x^8 y^{-2}} \\right)^{-3/4}$$", options: ["$\\frac{27x^9}{8y^6}$", "$\\frac{8x^9}{27y^6}$", "$\\frac{27x^3}{8y^3}$", "$\\frac{8x^3}{27y^3}$"], correct: 0 },
    { id: 2, topic: "Simplificación y Radicación", text: "Determine el valor exacto de la expresión radical infinita anidada: $$\\sqrt{12 + \\sqrt{12 + \\sqrt{12 + \\dots}}}$$", options: ["$4$", "$3$", "$6$", "$2\\sqrt{3}$"], correct: 0 },
    { id: 3, topic: "Simplificación y Radicación", text: "Racionalice el denominador y simplifique al máximo: $$\\frac{6}{\\sqrt{5} + \\sqrt{3} - \\sqrt{2}}$$ ", options: ["$\\frac{\\sqrt{30} + 3\\sqrt{2} + 2\\sqrt{3}}{2}$", "$\\sqrt{5} + \\sqrt{3} + \\sqrt{2}$", "$\\frac{\\sqrt{30} - 3\\sqrt{2} + 2\\sqrt{3}}{4}$", "$\\sqrt{30} + \\sqrt{2}$"], correct: 0 },
    { id: 4, topic: "Simplificación y Radicación", text: "Simplifique la siguiente suma exponencial: $$\\frac{2^{n+4} - 2 \\cdot 2^n}{2 \\cdot 2^{n+3}}$$ ", options: ["$\\frac{7}{8}$", "$\\frac{14}{8}$", "$\\frac{3}{4}$", "$1$"], correct: 0 },

    // Tema 2: Jerarquía de operadores complejos
    { id: 5, topic: "Jerarquía de Operadores Complejos", text: "Evalúe el resultado de la siguiente expresión con fracciones continuas: $$2 - \\cfrac{1}{2 - \\cfrac{1}{2 - \\cfrac{1}{2}}}$$ ", options: ["$\\frac{4}{3}$", "$\\frac{3}{2}$", "$\\frac{5}{3}$", "$\\frac{3}{4}$"], correct: 0 },
    { id: 6, topic: "Jerarquía de Operadores Complejos", text: "Determine el valor de: $$(-2)^4 - 3 \\cdot \\left[ 4^2 - 2 \\cdot (-3)^2 \\right] \\div (1 - 3)^2$$", options: ["$\\frac{35}{2}$", "$\\frac{29}{2}$", "$19$", "$13$"], correct: 0 },
    { id: 7, topic: "Jerarquía de Operadores Complejos", text: "Calcule la suma finita de fracciones telescópicas: $$\\sum_{k=1}^{4} \\frac{1}{k(k+1)} = \\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\frac{1}{3\\cdot 4} + \\frac{1}{4\\cdot 5}$$", options: ["$\\frac{4}{5}$", "$\\frac{5}{6}$", "$\\frac{3}{4}$", "$\\frac{9}{10}$"], correct: 0 },
    { id: 8, topic: "Jerarquía de Operadores Complejos", text: "Calcule la mitad de la cuarta parte del triple de $2^{100}$:", options: ["$3 \\cdot 2^{97}$", "$3 \\cdot 2^{98}$", "$3 \\cdot 2^{96}$", "$3 \\cdot 2^{99}$"], correct: 0 },

    // Tema 3: Expresiones algebraicas y factorización
    { id: 9, topic: "Expresiones Algebraicas", text: "Si $x - \\frac{1}{x} = 4$, determine el valor exacto de $x^3 - \\frac{1}{x^3}$:", options: ["$76$", "$64$", "$52$", "$72$"], correct: 0 },
    { id: 10, topic: "Expresiones Algebraicas", text: "Factorice completamente en los números reales mediante el artificio de Sophie Germain: $$x^4 + 4y^4$$", options: ["$(x^2 + 2xy + 2y^2)(x^2 - 2xy + 2y^2)$", "$(x^2 + 2y^2)^2$", "$(x^2 - 2y^2)^2$", "$(x^2 + 2xy - 2y^2)(x^2 - 2xy - 2y^2)$"], correct: 0 },
    { id: 11, topic: "Expresiones Algebraicas", text: "Simplifique la suma de fracciones algebraicas: $$\\frac{x+1}{x^2-x-6} + \\frac{x-2}{x^2-4x+3}$$", options: ["$\\frac{2x^2-4x-5}{(x-3)(x+2)(x-1)}$", "$\\frac{2x+1}{(x-3)(x+2)}$", "$\\frac{2x^2+1}{(x-3)(x-1)}$", "$\\frac{x-1}{(x+2)(x-1)}$"], correct: 0 },
    { id: 12, topic: "Expresiones Algebraicas", text: "Determine el residuo de dividir $P(x) = 2x^4 - 3x^3 + x - 5$ entre $D(x) = x - 2$ mediante el Teorema del Residuo:", options: ["$5$", "$3$", "$-5$", "$-3$"], correct: 0 },
    { id: 13, topic: "Expresiones Algebraicas", text: "Si $a + b + c = 0$, evalúe la identidad condicional: $$\\frac{a^3 + b^3 + c^3}{abc}$$", options: ["$3$", "$1$", "$0$", "$-3$"], correct: 0 },

    // Tema 4: Ecuaciones y planteamientos complejos
    { id: 14, topic: "Ecuaciones Planteamiento", text: "Resuelva para $x$ en la ecuación paramétrica: $$\\frac{x-a}{b+c} + \\frac{x-b}{a+c} + \\frac{x-c}{a+b} = 3$$", options: ["$a + b + c$", "$abc$", "$\\frac{a+b+c}{3}$", "$a + b - c$"], correct: 0 },
    { id: 15, topic: "Ecuaciones Planteamiento", text: "Un tanque se llena con un grifo A en $4$ horas y con un grifo B en $6$ horas. Un desagüe C lo vacía en $12$ horas. Abriéndose los tres simultáneamente estando el tanque vacío, ¿en cuánto tiempo se llenará?", options: ["$3$ horas", "$2.5$ horas", "$4$ horas", "$3.5$ horas"], correct: 0 },
    { id: 16, topic: "Ecuaciones Planteamiento", text: "Un comerciante compra cuadernos a $\$3$ cada uno. Vende la tercera parte a $\$5$, la mitad del resto a $\$4$ y los sobrantes a $\$2$ cada uno. Si obtuvo una ganancia neta de $\$120$, ¿cuántos cuadernos compró?", options: ["$180$", "$120$", "$240$", "$150$"], correct: 0 },
    { id: 17, topic: "Ecuaciones Planteamiento", text: "Dos móviles A y B parten al encuentro desde dos ciudades distantes $450$ km con velocidades de $60$ km/h y $90$ km/h respectivamente. ¿A qué distancia de la ciudad de origen de A se cruzarán?", options: ["$180$ km", "$270$ km", "$150$ km", "$200$ km"], correct: 0 },
    { id: 18, topic: "Ecuaciones Planteamiento", text: "En un examen de 50 preguntas, cada acierto suma 4 puntos, cada error resta 2 y en blanco resta 1. Un estudiante obtuvo 130 puntos respondiendo 45 preguntas. ¿Cuántas respondió correctamente?", options: ["$36$", "$38$", "$34$", "$40$"], correct: 0 },
    { id: 19, topic: "Ecuaciones Planteamiento", text: "Aumentar un número en sus $\\frac{3}{8}$ partes equivale a restarle $10$ a sus $\\frac{11}{4}$ partes. ¿Cuál es el número?", options: ["$8$", "$16$", "$12$", "$24$"], correct: 0 },

    // Tema 5: Sistemas de ecuaciones
    { id: 20, topic: "Sistemas de Ecuaciones", text: "Resuelva el sistema lineal de 3 variables y calcule $x \\cdot y \\cdot z$: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ 3x + 2y - z = 4 \\end{cases}$$", options: ["$6$", "$8$", "$4$", "$12$"], correct: 0 },
    { id: 21, topic: "Sistemas de Ecuaciones", text: "Determine la condición para el parámetro $k$ para que el sistema NO tenga solución (sea incompatible): $$\\begin{cases} 2x + ky = 8 \\\\ 4x + 6y = 10 \\end{cases}$$", options: ["$k = 3$", "$k = 6$", "$k \\neq 3$", "$k = 12$"], correct: 0 },
    { id: 22, topic: "Sistemas de Ecuaciones", text: "Un hotel tiene habitaciones dobles e individuales con un total de 45 habitaciones y 75 camas. ¿Cuántas habitaciones dobles hay?", options: ["$30$", "$15$", "$25$", "$20$"], correct: 0 },

    // Tema 6: Cálculo de edades analítico
    { id: 23, topic: "Cálculo de Edades", text: "Dentro de $8$ años la edad de Roberto será el doble de la edad que tenía hace $10$ años. ¿Cuál es su edad actual?", options: ["$28$ años", "$24$ años", "$32$ años", "$30$ años"], correct: 0 },
    { id: 24, topic: "Cálculo de Edades", text: "Tengo el triple de la edad que tú tenías cuando yo tenía la edad que tú tienes. Cuando tengas la edad que yo tengo, la suma de nuestras edades será 70 años. ¿Qué edad tengo?", options: ["$30$ años", "$20$ años", "$25$ años", "$35$ años"], correct: 0 },
    { id: 25, topic: "Cálculo de Edades", text: "La suma de las edades de tres hermanos es 42 años. Sus edades están en progresión aritmética con razón de 3 años. ¿Cuál es la edad del mayor?", options: ["$17$ años", "$14$ años", "$11$ años", "$18$ años"], correct: 0 },
    { id: 26, topic: "Cálculo de Edades", text: "Hace $n$ años la edad de Lucía era $k$ veces la de Sofía. Hoy la edad de Lucía es el doble de la de Sofía. Halle la edad actual de Sofía en términos de $n$ y $k$:", options: ["$\\frac{n(k-1)}{k-2}$", "$\\frac{nk}{k-1}$", "$\\frac{n(k+1)}{k}$", "$\\frac{2nk}{k-1}$"], correct: 0 },

    // Tema 7: Razones y proporciones complejas
    { id: 27, topic: "Razones y Proporciones", text: "En una proporción geométrica continua, la suma de los términos extremos es 34 y la diferencia entre ellos es 16. Halle la media proporcional.", options: ["$15$", "$12$", "$225$", "$16$"], correct: 0 },
    { id: 28, topic: "Razones y Proporciones", text: "Dos recipientes A y B contienen mezcla de alcohol y agua. En A la relación es $3:1$; en B es $1:5$. ¿En qué proporción se deben mezclar para obtener partes iguales de alcohol y agua?", options: ["$2:3$", "$3:4$", "$1:2$", "$3:2$"], correct: 0 },
    { id: 29, topic: "Razones y Proporciones", text: "La razón entre los cuadrados de dos números es $9:16$. Si el producto de ambos números es $108$, determine el menor de ellos.", options: ["$9$", "$12$", "$6$", "$18$"], correct: 0 },
    { id: 30, topic: "Razones y Proporciones", text: "Sabiendo que $\\frac{A}{3} = \\frac{B}{5} = \\frac{C}{7}$ y que $A^2 + B^2 + C^2 = 333$, calcule $A + B + C$ (para $A,B,C > 0$):", options: ["$45$", "$30$", "$60$", "$15$"], correct: 0 },

    // Tema 8: Regla de 3 compuesta
    { id: 31, topic: "Regla de 3 Compuesta", text: "Si 12 máquinas arman 60 motores en 8 días trabajando 9 h/día con una eficiencia del $80\\%$, ¿cuántas máquinas al $100\\%$ de eficiencia armarán 100 motores en 6 días trabajando 10 h/día?", options: ["$16$ máquinas", "$20$ máquinas", "$12$ máquinas", "$18$ máquinas"], correct: 0 },
    { id: 32, topic: "Regla de 3 Compuesta", text: "Un contingente de 500 soldados tiene víveres para 60 días. Después de 20 días se retiran 100 soldados. ¿Para cuántos días más alcanzarán los víveres restantes?", options: ["$50$ días", "$40$ días", "$60$ días", "$45$ días"], correct: 0 },
    { id: 33, topic: "Regla de 3 Compuesta", text: "Seis obreros abren una zanja de 20m x 2m x 1m en 8 días. ¿Cuántos días tardarán 12 obreros del doble de rapidez en abrir una zanja con el triple de dureza de 30m x 3m x 2m?", options: ["$27$ días", "$18$ días", "$36$ días", "$24$ días"], correct: 0 },
    { id: 34, topic: "Regla de 3 Compuesta", text: "Una cuadrilla de 20 trabajadores construye una obra en 30 días. Si trabajan 10 días y se enferman 5 trabajadores, ¿con cuántos días de retraso entregarán la obra?", options: ["$6.67$ días", "$5$ días", "$8$ días", "$10$ días"], correct: 0 },

    // Tema 9: Porcentajes y proporcionalidad
    { id: 35, topic: "Porcentajes Avanzados", text: "Un comerciante aumenta el costo de un producto en un $40\\%$. Al venderlo otorga un descuento del $20\\%$. ¿Cuál es su porcentaje de ganancia real sobre el costo?", options: ["$12\\%$", "$20\\%$", "$16\\%$", "$10\\%$"], correct: 0 },
    { id: 36, topic: "Porcentajes Avanzados", text: "Si el radio de un círculo aumenta en un $30\\%$, ¿en qué porcentaje incrementa su área?", options: ["$69\\%$", "$60\\%$", "$90\\%$", "$30\\%$"], correct: 0 },
    { id: 37, topic: "Porcentajes Avanzados", text: "¿Cuál es la tercera proporcional entre los números $4$ y $12$?", options: ["$36$", "$24$", "$16$", "$48$"], correct: 0 },
    { id: 38, topic: "Porcentajes Avanzados", text: "Se deposita un capital de $\$5000$ a una tasa de interés simple anual del $8\\%$. ¿En cuántos años el capital se triplicará?", options: ["$25$ años", "$20$ años", "$12.5$ años", "$30$ años"], correct: 0 },
    { id: 39, topic: "Porcentajes Avanzados", text: "Una solución salina pierde el $20\\%$ de su agua por evaporación en el primer proceso y el $25\\%$ del resto en un segundo proceso. ¿Qué porcentaje total de agua se evaporó?", options: ["$40\\%$", "$45\\%$", "$35\\%$", "$50\\%$"], correct: 0 },
    { id: 40, topic: "Porcentajes Avanzados", text: "Si el $a\\%$ de $b$ es $c$, y el $b\\%$ de $c$ es $a$, determine la relación entre $b$ y $100$ ($a,c \\neq 0$):", options: ["$b = 100$", "$b = 10$", "$b = 50$", "$b = 200$"], correct: 0 },

    // Tema 10: Estadística y media ponderada
    { id: 41, topic: "Estadística Ponderada", text: "En un curso de 40 alumnos, el promedio en matemática es 14. Las 25 mujeres tienen un promedio de 15.2. ¿Cuál es el promedio de calificaciones de los varones?", options: ["$12$", "$13$", "$11.8$", "$12.5$"], correct: 0 },
    { id: 42, topic: "Estadística Ponderada", text: "La media aritmética de 100 números es 50. Si a los primeros 20 números se les suma 10 a cada uno y a los 80 restantes se les resta 5 a cada uno, ¿cuál será la nueva media?", options: ["$48$", "$49$", "$52$", "$47$"], correct: 0 },
    { id: 43, topic: "Estadística Ponderada", text: "La media armónica entre dos números es $6$ y su media aritmética es $8$. Determine el valor de su media geométrica:", options: ["$4\\sqrt{3}$", "$48$", "$6\\sqrt{2}$", "$12$"], correct: 0 },
    { id: 44, topic: "Estadística Ponderada", text: "El promedio de edad de 5 personas es 30 años. Ninguna de ellas es menor de 25 años. ¿Cuál es la máxima edad que podría tener una de ellas?", options: ["$50$ años", "$45$ años", "$55$ años", "$60$ años"], correct: 0 },

    // Tema 11: Combinatoria avanzada y probabilidad
    { id: 45, topic: "Combinatoria y Probabilidad", text: "¿De cuántas maneras diferentes se pueden sentar 6 personas alrededor de una mesa circular si dos de ellas exigen estar siempre juntas?", options: ["$48$", "$24$", "$120$", "$96$"], correct: 0 },
    { id: 46, topic: "Combinatoria y Probabilidad", text: "¿Cuántas palabras distintas (con o sin sentido) se pueden formar permutando todas las letras de la palabra $MATEMATICA$?", options: ["$151200$", "$302400$", "$75600$", "$3628800$"], correct: 0 },
    { id: 47, topic: "Combinatoria y Probabilidad", text: "En un plano hay 10 puntos, de los cuales no hay 3 alineados. ¿Cuántos triángulos distintos se pueden formar uniendo tres de dichos puntos?", options: ["$120$", "$720$", "$240$", "$90$"], correct: 0 },
    { id: 48, topic: "Combinatoria y Probabilidad", text: "Un examen consta de 10 preguntas. El estudiante debe responder 7, pero las primeras 3 son obligatorias. ¿De cuántas formas distintas puede elegir sus respuestas?", options: ["$35$", "$120$", "$210$", "$15$"], correct: 0 },
    { id: 49, topic: "Combinatoria y Probabilidad", text: "Se lanzan dos dados no trucados de 6 caras. ¿Cuál es la probabilidad de que la suma de los puntos obtenidos sea mayor o igual a 10?", options: ["$\\frac{1}{6}$", "$\\frac{1}{12}$", "$\\frac{5}{36}$", "$\\frac{1}{4}$"], correct: 0 },
    { id: 50, topic: "Combinatoria y Probabilidad", text: "En una caja hay 5 bolas rojas y 4 azules. Si se extraen 2 bolas al azar sin reemplazo, ¿cuál es la probabilidad de que ambas sean del mismo color?", options: ["$\\frac{4}{9}$", "$\\frac{5}{18}$", "$\\frac{1}{2}$", "$\\frac{16}{81}$"], correct: 0 }
];

// CONFIGURACIÓN DE EXAMEN
const TOTAL_TIME = 60 * 60; // 60 minutos
const STORAGE_KEY = "EVAL_NUMERICA_UNL_50Q_STATE";

// ESTADO GLOBAL
let state = {
    currentIndex: 0,
    answers: {},
    timeLeft: TOTAL_TIME,
    infractions: 0,
    isFinished: false
};

let timerInterval = null;

// INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderGrid();
    renderQuestion();
    setupSecurity();
    setupEventListeners();
    startTimer();
    preventBackNavigation();
});

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            state = JSON.parse(saved);
            if (state.isFinished) {
                showResultsScreen();
            }
        } catch (e) {
            console.error("Error al cargar el estado guardado:", e);
        }
    }
}

function setupEventListeners() {
    document.getElementById('btn-start-fullscreen').addEventListener('click', initFullscreen);
    document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('btn-next').addEventListener('click', () => navigate(1));
    document.getElementById('btn-finish-exam').addEventListener('click', confirmFinish);
    document.getElementById('btn-restart-exam').addEventListener('click', restartExam);
}

// SEGURIDAD Y PANTALLA COMPLETA
function initFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => console.log(err));
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    document.getElementById('fullscreen-overlay').style.display = 'none';
}

function setupSecurity() {
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && !state.isFinished) {
            document.getElementById('fullscreen-overlay').style.display = 'flex';
        }
    });

    window.addEventListener('visibilitychange', handleSecurityViolation);
    window.addEventListener('blur', handleSecurityViolation);
    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', e => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 's' || e.key === 'p')) ||
            e.key === 'PrintScreen'
        ) {
            e.preventDefault();
            registerInfraction("Atajo restringido detectado");
        }
    });
}

function handleSecurityViolation() {
    if (!state.isFinished) {
        registerInfraction("Cambio de pestaña / Pérdida de foco");
    }
}

function registerInfraction(reason) {
    state.infractions++;
    saveState();
    const banner = document.getElementById('infraction-banner');
    banner.style.display = 'block';
    setTimeout(() => { banner.style.display = 'none'; }, 4000);
}

function preventBackNavigation() {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
}

// TEMPORIZADOR
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (state.isFinished) return;

        if (state.timeLeft > 0) {
            state.timeLeft--;
            saveState();
            updateTimerUI();
        } else {
            clearInterval(timerInterval);
            finishExam();
        }
    }, 1000);
}

function updateTimerUI() {
    const minutes = Math.floor(state.timeLeft / 60);
    const seconds = state.timeLeft % 60;
    const timerEl = document.getElementById('timer');
    const badgeEl = document.getElementById('timer-display');
    
    timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (state.timeLeft <= 300) {
        badgeEl.classList.add('timer-warning');
    }
}

// RENDERIZADO DE PREGUNTAS
function renderQuestion() {
    const q = questionsData[state.currentIndex];
    document.getElementById('question-number').textContent = `Pregunta ${String(state.currentIndex + 1).padStart(2, '0')} de ${questionsData.length}`;
    document.getElementById('question-topic').textContent = `Tema: ${q.topic}`;
    document.getElementById('question-text').innerHTML = q.text;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, index) => {
        const isSelected = state.answers[q.id] === index;
        const optDiv = document.createElement('div');
        optDiv.className = `option-item ${isSelected ? 'selected' : ''}`;
        optDiv.onclick = () => selectOption(q.id, index);

        optDiv.innerHTML = `
            <div class="option-prefix">${letters[index]}</div>
            <div class="option-content">${optText}</div>
        `;
        optionsContainer.appendChild(optDiv);
    });

    document.getElementById('btn-prev').disabled = state.currentIndex === 0;
    document.getElementById('btn-next').disabled = state.currentIndex === questionsData.length - 1;

    updateProgress();
    updateGridUI();

    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('question-text'), {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ]
        });
        renderMathInElement(optionsContainer, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ]
        });
    }
}

function selectOption(qId, optionIndex) {
    state.answers[qId] = optionIndex;
    saveState();
    renderQuestion();
}

function navigate(dir) {
    const newIndex = state.currentIndex + dir;
    if (newIndex >= 0 && newIndex < questionsData.length) {
        state.currentIndex = newIndex;
        saveState();
        renderQuestion();
    }
}

function jumpToQuestion(index) {
    state.currentIndex = index;
    saveState();
    renderQuestion();
}

// MAPA DE REACTIVOS Y NAVEGACIÓN DIRECTA
function renderGrid() {
    const grid = document.getElementById('reactive-grid');
    grid.innerHTML = '';
    questionsData.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.id = `grid-item-${idx}`;
        item.textContent = idx + 1;
        item.onclick = () => jumpToQuestion(idx);
        grid.appendChild(item);
    });
}

function updateGridUI() {
    questionsData.forEach((q, idx) => {
        const item = document.getElementById(`grid-item-${idx}`);
        if (!item) return;
        item.className = 'grid-item';
        if (idx === state.currentIndex) item.classList.add('active');
        if (state.answers[q.id] !== undefined) item.classList.add('answered');
    });
}

function updateProgress() {
    const answeredCount = Object.keys(state.answers).length;
    const pct = Math.round((answeredCount / questionsData.length) * 100);
    document.getElementById('progress-percent').textContent = `${pct}%`;
    document.getElementById('progress-fill').style.width = `${pct}%`;
}

// FINALIZACIÓN Y REPORTE
function confirmFinish() {
    const answeredCount = Object.keys(state.answers).length;
    const unanswered = questionsData.length - answeredCount;
    let msg = "¿Está seguro de finalizar y entregar la evaluación?";
    if (unanswered > 0) {
        msg += `\n⚠️ Advertencia: Tiene ${unanswered} pregunta(s) sin responder.`;
    }
    if (confirm(msg)) {
        finishExam();
    }
}

function finishExam() {
    state.isFinished = true;
    saveState();
    showResultsScreen();
}

function showResultsScreen() {
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('timer-display').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    let score = 0;
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    questionsData.forEach((q, idx) => {
        const userAns = state.answers[q.id];
        const isCorrect = userAns === q.correct;
        if (isCorrect) score++;

        const item = document.createElement('div');
        item.className = 'review-item';

        let statusBadge = '';
        if (userAns === undefined) {
            statusBadge = `<span class="review-status status-unanswered">SIN RESPONDER</span>`;
        } else if (isCorrect) {
            statusBadge = `<span class="review-status status-correct">CORRECTO</span>`;
        } else {
            statusBadge = `<span class="review-status status-incorrect">INCORRECTO</span>`;
        }

        item.innerHTML = `
            ${statusBadge}
            <div class="q-title"><strong>${idx + 1}.</strong> ${q.text}</div>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-top: 6px;">
                Su respuesta: <strong>${userAns !== undefined ? letters[userAns] + ') ' + q.options[userAns] : 'Ninguna'}</strong><br>
                Respuesta correcta: <strong style="color: var(--success);">${letters[q.correct]}) ${q.options[q.correct]}</strong>
            </div>
        `;
        reviewList.appendChild(item);
    });

    document.getElementById('res-score').textContent = `${score}/${questionsData.length}`;
    document.getElementById('res-accuracy').textContent = `${Math.round((score / questionsData.length) * 100)}%`;
    document.getElementById('res-infractions').textContent = state.infractions;

    if (window.renderMathInElement) {
        renderMathInElement(reviewList, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ]
        });
    }
}

function restartExam() {
    localStorage.removeItem(STORAGE_KEY);
    state = {
        currentIndex: 0,
        answers: {},
        timeLeft: TOTAL_TIME,
        infractions: 0,
        isFinished: false
    };
    location.reload();
}