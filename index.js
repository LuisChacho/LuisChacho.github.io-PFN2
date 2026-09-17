// BANCO DE 50 PREGUNTAS TIPO UNL / ACCESO A LA U (Sin notaciones complejas como Sigma)
const questionsData = [
    // Tema 1: Simplificación y Radicación
    { id: 1, topic: "Simplificación y Radicación", text: "Simplifique la siguiente expresión exponencial para $x, y \\neq 0$: $$\\left( \\frac{16x^{-4} y^6}{81x^8 y^{-2}} \\right)^{-3/4}$$", options: ["$\\frac{27x^9}{8y^6}$", "$\\frac{8x^9}{27y^6}$", "$\\frac{27x^3}{8y^3}$", "$\\frac{8x^3}{27y^3}$"], correct: 0 },
    { id: 2, topic: "Simplificación y Radicación", text: "Determine el valor de la raíz infinita: $$\\sqrt{12 + \\sqrt{12 + \\sqrt{12 + \\dots}}}$$", options: ["$4$", "$3$", "$6$", "$2\\sqrt{3}$"], correct: 0 },
    { id: 3, topic: "Simplificación y Radicación", text: "Racionalice el denominador de la expresión: $$\\frac{6}{\\sqrt{5} + \\sqrt{3} - \\sqrt{2}}$$ ", options: ["$\\frac{\\sqrt{30} + 3\\sqrt{2} + 2\\sqrt{3}}{2}$", "$\\sqrt{5} + \\sqrt{3} + \\sqrt{2}$", "$\\frac{\\sqrt{30} - 3\\sqrt{2} + 2\\sqrt{3}}{4}$", "$\\sqrt{30} + \\sqrt{2}$"], correct: 0 },
    { id: 4, topic: "Simplificación y Radicación", text: "Simplifique la suma de potencias: $$\\frac{2^{n+4} - 2 \\cdot 2^n}{2 \\cdot 2^{n+3}}$$ ", options: ["$\\frac{7}{8}$", "$\\frac{14}{8}$", "$\\frac{3}{4}$", "$1$"], correct: 0 },

    // Tema 2: Jerarquía de operadores
    { id: 5, topic: "Jerarquía de Operadores", text: "Calcule el valor exacto de la siguiente fracción continua: $$2 - \\cfrac{1}{2 - \\cfrac{1}{2 - \\cfrac{1}{2}}}$$ ", options: ["$\\frac{4}{3}$", "$\\frac{3}{2}$", "$\\frac{5}{3}$", "$\\frac{3}{4}$"], correct: 0 },
    { id: 6, topic: "Jerarquía de Operadores", text: "Resuelva la siguiente cadena de operaciones combinadas: $$(-2)^4 - 3 \\cdot \\left[ 4^2 - 2 \\cdot (-3)^2 \\right] \\div (1 - 3)^2$$", options: ["$\\frac{35}{2}$", "$\\frac{29}{2}$", "$19$", "$13$"], correct: 0 },
    { id: 7, topic: "Jerarquía de Operadores", text: "Calcule el valor de la suma de las siguientes fracciones algebraicas: $$\\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\frac{1}{3\\cdot 4} + \\frac{1}{4\\cdot 5}$$", options: ["$\\frac{4}{5}$", "$\\frac{5}{6}$", "$\\frac{3}{4}$", "$\\frac{9}{10}$"], correct: 0 },
    { id: 8, topic: "Jerarquía de Operadores", text: "Calcule la mitad de la cuarta parte del triple de $2^{100}$:", options: ["$3 \\cdot 2^{97}$", "$3 \\cdot 2^{98}$", "$3 \\cdot 2^{96}$", "$3 \\cdot 2^{99}$"], correct: 0 },

    // Tema 3: Expresiones algebraicas y factorización
    { id: 9, topic: "Expresiones Algebraicas", text: "Si $x - \\frac{1}{x} = 4$, determine el valor exacto de $x^3 - \\frac{1}{x^3}$:", options: ["$76$", "$64$", "$52$", "$72$"], correct: 0 },
    { id: 10, topic: "Expresiones Algebraicas", text: "Factorice la expresión binomial: $$x^4 + 4y^4$$", options: ["$(x^2 + 2xy + 2y^2)(x^2 - 2xy + 2y^2)$", "$(x^2 + 2y^2)^2$", "$(x^2 - 2y^2)^2$", "$(x^2 + 2xy - 2y^2)(x^2 - 2xy - 2y^2)$"], correct: 0 },
    { id: 11, topic: "Expresiones Algebraicas", text: "Simplifique la siguiente suma de fracciones algebraicas: $$\\frac{x+1}{x^2-x-6} + \\frac{x-2}{x^2-4x+3}$$", options: ["$\\frac{2x^2-4x-5}{(x-3)(x+2)(x-1)}$", "$\\frac{2x+1}{(x-3)(x+2)}$", "$\\frac{2x^2+1}{(x-3)(x-1)}$", "$\\frac{x-1}{(x+2)(x-1)}$"], correct: 0 },
    { id: 12, topic: "Expresiones Algebraicas", text: "Determine el residuo de dividir el polinomio $P(x) = 2x^4 - 3x^3 + x - 5$ entre $x - 2$:", options: ["$5$", "$3$", "$-5$", "$-3$"], correct: 0 },
    { id: 13, topic: "Expresiones Algebraicas", text: "Si tres números $a, b, c$ cumplen que $a + b + c = 0$, calcule el valor de: $$\\frac{a^3 + b^3 + c^3}{abc}$$", options: ["$3$", "$1$", "$0$", "$-3$"], correct: 0 },

    // Tema 4: Ecuaciones y planteamientos
    { id: 14, topic: "Ecuaciones y Planteamientos", text: "Resuelva para $x$ la ecuación paramétrica: $$\\frac{x-a}{b+c} + \\frac{x-b}{a+c} + \\frac{x-c}{a+b} = 3$$", options: ["$a + b + c$", "$abc$", "$\\frac{a+b+c}{3}$", "$a + b - c$"], correct: 0 },
    { id: 15, topic: "Ecuaciones y Planteamientos", text: "Un tanque se llena con la llave A en $4$ horas y con la llave B en $6$ horas. Un desagüe C lo vacía en $12$ horas. Si se abren los tres al mismo tiempo estando el tanque vacío, ¿en cuántas horas se llenará?", options: ["$3$ horas", "$2.5$ horas", "$4$ horas", "$3.5$ horas"], correct: 0 },
    { id: 16, topic: "Ecuaciones y Planteamientos", text: "Un comerciante compra cuadernos a $\$3$ cada uno. Vende un tercio a $\$5$, la mitad del resto a $\$4$ y los demás a $\$2$. Si su ganancia total fue de $\$120$, ¿cuántos cuadernos compró?", options: ["$180$", "$120$", "$240$", "$150$"], correct: 0 },
    { id: 17, topic: "Ecuaciones y Planteamientos", text: "Dos autos A y B salen al encuentro desde dos ciudades separadas $450$ km con velocidades de $60$ km/h y $90$ km/h respectivamente. ¿A qué distancia del punto de partida de A se cruzarán?", options: ["$180$ km", "$270$ km", "$150$ km", "$200$ km"], correct: 0 },
    { id: 18, topic: "Ecuaciones y Planteamientos", text: "En un examen de 50 preguntas, cada respuesta correcta suma 4 puntos, cada incorrecta resta 2 y cada pregunta no contestada resta 1. Un estudiante obtuvo 130 puntos respondiendo 45 preguntas. ¿Cuántas acertó?", options: ["$36$", "$38$", "$34$", "$40$"], correct: 0 },
    { id: 19, topic: "Ecuaciones y Planteamientos", text: "Aumentar un número en sus $\\frac{3}{8}$ partes equivale a restarle $10$ a sus $\\frac{11}{4}$ partes. ¿Cuál es el número?", options: ["$8$", "$16$", "$12$", "$24$"], correct: 0 },

    // Tema 5: Sistemas de ecuaciones
    { id: 20, topic: "Sistemas de Ecuaciones", text: "Resuelva el sistema y halle el producto $x \\cdot y \\cdot z$: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ 3x + 2y - z = 4 \\end{cases}$$", options: ["$6$", "$8$", "$4$", "$12$"], correct: 0 },
    { id: 21, topic: "Sistemas de Ecuaciones", text: "Determine el valor de $k$ para que el siguiente sistema NO tenga solución: $$\\begin{cases} 2x + ky = 8 \\\\ 4x + 6y = 10 \\end{cases}$$", options: ["$k = 3$", "$k = 6$", "$k \\neq 3$", "$k = 12$"], correct: 0 },
    { id: 22, topic: "Sistemas de Ecuaciones", text: "Un hospedaje tiene habitaciones dobles e individuales. En total hay 45 habitaciones y 75 camas. ¿Cuántas habitaciones dobles existen?", options: ["$30$", "$15$", "$25$", "$20$"], correct: 0 },

    // Tema 6: Cálculo de edades
    { id: 23, topic: "Cálculo de Edades", text: "Dentro de $8$ años la edad de Juan será el doble de la que tenía hace $10$ años. ¿Cuál es su edad actual?", options: ["$28$ años", "$24$ años", "$32$ años", "$30$ años"], correct: 0 },
    { id: 24, topic: "Cálculo de Edades", text: "Tengo el triple de la edad que tú tenías cuando yo tenía la edad que tú tienes. Cuando tengas la edad que yo tengo, la suma de nuestras edades será 70 años. ¿Qué edad tengo?", options: ["$30$ años", "$20$ años", "$25$ años", "$35$ años"], correct: 0 },
    { id: 25, topic: "Cálculo de Edades", text: "La suma de las edades de tres hermanos es 42 años. Sus edades aumentan consecutivamente de 3 en 3 años. ¿Cuál es la edad del mayor?", options: ["$17$ años", "$14$ años", "$11$ años", "$18$ años"], correct: 0 },
    { id: 26, topic: "Cálculo de Edades", text: "Hace $n$ años la edad de Lucía era $k$ veces la de Sofía. Hoy la edad de Lucía es el doble de la de Sofía. Halle la edad actual de Sofía en términos de $n$ y $k$:", options: ["$\\frac{n(k-1)}{k-2}$", "$\\frac{nk}{k-1}$", "$\\frac{n(k+1)}{k}$", "$\\frac{2nk}{k-1}$"], correct: 0 },

    // Tema 7: Razones y proporciones
    { id: 27, topic: "Razones y Proporciones", text: "En una proporción geométrica continua, la suma de los términos extremos es 34 y su diferencia es 16. Halle la media proporcional.", options: ["$15$", "$12$", "$225$", "$16$"], correct: 0 },
    { id: 28, topic: "Razones y Proporciones", text: "Dos recipientes A y B tienen mezclas de alcohol y agua. En A la relación es $3:1$; en B es $1:5$. ¿En qué proporción se deben mezclar para obtener partes iguales de ambos componentes?", options: ["$2:3$", "$3:4$", "$1:2$", "$3:2$"], correct: 0 },
    { id: 29, topic: "Razones y Proporciones", text: "La razón entre los cuadrados de dos números es $9:16$. Si el producto de ambos números es $108$, determine el número menor.", options: ["$9$", "$12$", "$6$", "$18$"], correct: 0 },
    { id: 30, topic: "Razones y Proporciones", text: "Sabiendo que $\\frac{A}{3} = \\frac{B}{5} = \\frac{C}{7}$ y que $A^2 + B^2 + C^2 = 333$, calcule $A + B + C$ (con $A,B,C > 0$):", options: ["$45$", "$30$", "$60$", "$15$"], correct: 0 },

    // Tema 8: Regla de 3 compuesta
    { id: 31, topic: "Regla de 3 Compuesta", text: "Si 12 máquinas ensamblan 60 motores en 8 días trabajando 9 h/día con eficiencia del $80\\%$, ¿cuántas máquinas al $100\\%$ armarán 100 motores en 6 días trabajando 10 h/día?", options: ["$16$ máquinas", "$20$ máquinas", "$12$ máquinas", "$18$ máquinas"], correct: 0 },
    { id: 32, topic: "Regla de 3 Compuesta", text: "Un grupo de 500 personas tiene alimentos para 60 días. Luego de 20 días se retiran 100 personas. ¿Para cuántos días más durarán los alimentos sobrantes?", options: ["$50$ días", "$40$ días", "$60$ días", "$45$ días"], correct: 0 },
    { id: 33, topic: "Regla de 3 Compuesta", text: "Seis trabajadores excavan 20m de zanja en 8 días. ¿Cuántos días tardarán 12 trabajadores con el doble de rendimiento en hacer 30m del triple de dificultad?", options: ["$27$ días", "$18$ días", "$36$ días", "$24$ días"], correct: 0 },
    { id: 34, topic: "Regla de 3 Compuesta", text: "Un grupo de 20 obreros avanza una obra planificada para 30 días. Si a los 10 días se enferman 5 obreros, ¿con cuántos días de retraso terminarán?", options: ["$6.67$ días", "$5$ días", "$8$ días", "$10$ días"], correct: 0 },

    // Tema 9: Porcentajes y proporcionalidad
    { id: 35, topic: "Porcentajes", text: "Un comerciante aumenta el precio de costo de un bien en un $40\\%$. Al momento de venderlo otorga un descuento del $20\\%$. ¿Cuál es su porcentaje de ganancia real?", options: ["$12\\%$", "$20\\%$", "$16\\%$", "$10\\%$"], correct: 0 },
    { id: 36, topic: "Porcentajes", text: "Si el radio de un círculo aumenta en un $30\\%$, ¿en qué porcentaje incrementa su área?", options: ["$69\\%$", "$60\\%$", "$90\\%$", "$30\\%$"], correct: 0 },
    { id: 37, topic: "Porcentajes", text: "Halle la tercera proporcional entre los números $4$ y $12$:", options: ["$36$", "$24$", "$16$", "$48$"], correct: 0 },
    { id: 38, topic: "Porcentajes", text: "Se coloca un capital de $\$5000$ a una tasa del $8\\%$ anual simple. ¿En cuántos años el capital inicial se triplicará?", options: ["$25$ años", "$20$ años", "$12.5$ años", "$30$ años"], correct: 0 },
    { id: 39, topic: "Porcentajes", text: "Una mezcla pierde el $20\\%$ de su agua por evaporación en un primer proceso y el $25\\%$ de lo que queda en un segundo proceso. ¿Qué porcentaje de agua se perdió en total?", options: ["$40\\%$", "$45\\%$", "$35\\%$", "$50\\%$"], correct: 0 },
    { id: 40, topic: "Porcentajes", text: "Si el $a\\%$ de $b$ es $c$, y el $b\\%$ de $c$ es $a$, determine el valor exacto de $b$ ($a,c \\neq 0$):", options: ["$b = 100$", "$b = 10$", "$b = 50$", "$b = 200$"], correct: 0 },

    // Tema 10: Estadística y medias
    { id: 41, topic: "Estadística y Medias", text: "En un curso de 40 estudiantes, el promedio general es 14. Las 25 mujeres tienen un promedio de 15.2. ¿Cuál es el promedio de los hombres?", options: ["$12$", "$13$", "$11.8$", "$12.5$"], correct: 0 },
    { id: 42, topic: "Estadística y Medias", text: "El promedio de 100 datos es 50. Si a los primeros 20 datos se les suma 10 y a los 80 restantes se les resta 5, ¿cuál es el nuevo promedio?", options: ["$48$", "$49$", "$52$", "$47$"], correct: 0 },
    { id: 43, topic: "Estadística y Medias", text: "La media armónica de dos números es $6$ y su media aritmética es $8$. Calcule su media geométrica:", options: ["$4\\sqrt{3}$", "$48$", "$6\\sqrt{2}$", "$12$"], correct: 0 },
    { id: 44, topic: "Estadística y Medias", text: "El promedio de edad de 5 personas es 30 años. Ninguna es menor de 25 años. ¿Cuál es la máxima edad que podría tener una de ellas?", options: ["$50$ años", "$45$ años", "$55$ años", "$60$ años"], correct: 0 },

    // Tema 11: Combinatoria y probabilidad
    { id: 45, topic: "Combinatoria y Probabilidad", text: "¿De cuántas formas diferentes pueden sentarse 6 personas alrededor de una mesa circular si dos de ellas exigen estar siempre juntas?", options: ["$48$", "$24$", "$120$", "$96$"], correct: 0 },
    { id: 46, topic: "Combinatoria y Probabilidad", text: "¿Cuántas palabras con o sin sentido se pueden formar reordenando todas las letras de la palabra $MATEMATICA$?", options: ["$151200$", "$302400$", "$75600$", "$3628800$"], correct: 0 },
    { id: 47, topic: "Combinatoria y Probabilidad", text: "En un plano se ubican 10 puntos sin que existan 3 alineados. ¿Cuántos triángulos distintos se pueden formar uniendo tres puntos?", options: ["$120$", "$720$", "$240$", "$90$"], correct: 0 },
    { id: 48, topic: "Combinatoria y Probabilidad", text: "Un examen consta de 10 preguntas. Un alumno debe contestar 7, pero las 3 primeras son obligatorias. ¿De cuántas formas puede seleccionarlas?", options: ["$35$", "$120$", "$210$", "$15$"], correct: 0 },
    { id: 49, topic: "Combinatoria y Probabilidad", text: "Se lanzan dos dados de 6 caras. ¿Cuál es la probabilidad de que la suma de sus caras sea mayor o igual a 10?", options: ["$\\frac{1}{6}$", "$\\frac{1}{12}$", "$\\frac{5}{36}$", "$\\frac{1}{4}$"], correct: 0 },
    { id: 50, topic: "Combinatoria y Probabilidad", text: "En una urna hay 5 esferas rojas y 4 azules. Si se extraen 2 al azar sin reposición, ¿cuál es la probabilidad de que ambas sean del mismo color?", options: ["$\\frac{4}{9}$", "$\\frac{5}{18}$", "$\\frac{1}{2}$", "$\\frac{16}{81}$"], correct: 0 }
];

// CONFIGURACIÓN DE EXAMEN
const TOTAL_DURATION_SECONDS = 60 * 60; // 60 minutos
const STORAGE_KEY = "EVAL_NUMERICA_UNL_50Q_STATE";

// ESTADO GLOBAL
let state = {
    currentIndex: 0,
    answers: {},
    startTime: Date.now(),
    endTime: Date.now() + (TOTAL_DURATION_SECONDS * 1000),
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
            const parsed = JSON.parse(saved);
            state = parsed;
            
            // Si el tiempo absoluto de la prueba ya finalizó mientras estaba cerrado:
            if (Date.now() >= state.endTime && !state.isFinished) {
                finishExam();
            } else if (state.isFinished) {
                showResultsScreen();
            }
        } catch (e) {
            console.error("Error cargando el estado guardado:", e);
        }
    } else {
        // Primera ejecución: definir el tiempo exacto de fin
        state.startTime = Date.now();
        state.endTime = Date.now() + (TOTAL_DURATION_SECONDS * 1000);
        saveState();
    }
}

function setupEventListeners() {
    document.getElementById('btn-start-fullscreen').addEventListener('click', initFullscreen);
    document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('btn-next').addEventListener('click', () => navigate(1));
    document.getElementById('btn-finish-exam').addEventListener('click', confirmFinish);
    document.getElementById('btn-restart-exam').addEventListener('click', restartExam);
}

// MODO KIOSKO Y RESTRICCIONES DE SEGURIDAD EXTREMAS
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
    // 1. Detección de salida de pantalla completa
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && !state.isFinished) {
            document.getElementById('fullscreen-overlay').style.display = 'flex';
            registerInfraction("Salida de Pantalla Completa");
        }
    });

    // 2. Pérdida de foco / cambio de pestaña
    window.addEventListener('visibilitychange', () => {
        if (document.hidden && !state.isFinished) handleSecurityViolation();
    });
    window.addEventListener('blur', () => {
        if (!state.isFinished) handleSecurityViolation();
    });

    // 3. Bloqueo total de menú contextual (clic derecho)
    document.addEventListener('contextmenu', e => e.preventDefault());

    // 4. Bloqueo de selección de texto
    document.addEventListener('selectstart', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());

    // 5. Bloqueo de atajos de teclado, copiado y capturas de pantalla (PrtScr)
    document.addEventListener('keydown', e => {
        if (
            e.key === 'PrintScreen' ||
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'C' || e.key === 'c' || e.key === 'J' || e.key === 'j')) ||
            (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'a')) ||
            (e.metaKey && (e.key === 'c' || e.key === 'v' || e.key === 'a' || e.key === 's'))
        ) {
            e.preventDefault();
            // Limpiar el portapapeles en caso de intento de captura
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText('');
            }
            registerInfraction("Atajo no permitido o intento de captura/copia");
        }
    });

    // 6. Protección continua contra captura de pantalla eliminando foco de portapapeles
    window.addEventListener('keyup', e => {
        if (e.key === 'PrintScreen') {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText('');
            }
        }
    });
}

function handleSecurityViolation() {
    registerInfraction("Cambio de pestaña o aplicación");
}

function registerInfraction(reason) {
    if (state.isFinished) return;
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

// TEMPORIZADOR BASADO EN TIEMPO REAL ABSOLUTO (SIN DETENCIÓN)
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (state.isFinished) return;

        const now = Date.now();
        const remainingMs = state.endTime - now;
        const remainingSeconds = Math.max(0, Math.floor(remainingMs / 1000));

        updateTimerUI(remainingSeconds);

        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            finishExam();
        }
    }, 1000);
}

function updateTimerUI(secondsLeft) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    const timerEl = document.getElementById('timer');
    const badgeEl = document.getElementById('timer-display');
    
    if (timerEl) {
        timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    if (secondsLeft <= 300 && badgeEl) {
        badgeEl.classList.add('timer-warning');
    }
}

// RENDERIZADO Y INTERACCIÓN
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
    saveState(); // Guardado automático inmediato en cada clic
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

function confirmFinish() {
    const answeredCount = Object.keys(state.answers).length;
    const unanswered = questionsData.length - answeredCount;
    let msg = "¿Está seguro de finalizar y entregar la evaluación?";
    if (unanswered > 0) {
        msg += `\n⚠️ Advertencia: Aún tiene ${unanswered} pregunta(s) sin responder.`;
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
    location.reload();
}