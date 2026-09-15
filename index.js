// BANCO DE PREGUNTAS - 50 REACTIVOS DE ALTA COMPLEJIDAD
const questionsData = [
    // Tema 1: Simplificación de expresiones algebraicas, potencias y radicación (4 preguntas)
    { 
        id: 1, 
        topic: "Simplificación Avanzada y Radicación", 
        text: "Simplifique la siguiente expresión exponencial para $x, y \\neq 0$: $$\\left( \\frac{16x^{-4} y^6}{81x^8 y^{-2}} \\right)^{-3/4}$$", 
        options: ["$\\frac{27x^9}{8y^6}$", "$\\frac{8x^9}{27y^6}$", "$\\frac{27x^3}{8y^3}$", "$\\frac{8x^3}{27y^3}$"], 
        correct: 0 
    },
    { 
        id: 2, 
        topic: "Simplificación Avanzada y Radicación", 
        text: "Determine el valor exacto de la expresión radical anidada: $$\\sqrt{12 + \\sqrt{12 + \\sqrt{12 + \\dots}}}$$", 
        options: ["$4$", "$3$", "$6$", "$2\\sqrt{3}$"], 
        correct: 0 
    },
    { 
        id: 3, 
        topic: "Simplificación Avanzada y Radicación", 
        text: "Racionalice el denominador y simplifique al máximo: $$\\frac{6}{\\sqrt{5} + \\sqrt{3} - \\sqrt{2}}$$ ", 
        options: ["$\\frac{\\sqrt{30} + 3\\sqrt{2} + 2\\sqrt{3}}{2}$", "$\\sqrt{5} + \\sqrt{3} + \\sqrt{2}$", "$\\frac{\\sqrt{30} - 3\\sqrt{2} + 2\\sqrt{3}}{4}$", "$\\sqrt{30} + \\sqrt{2}$"], 
        correct: 0 
    },
    { 
        id: 4, 
        topic: "Simplificación Avanzada y Radicación", 
        text: "Simplifique la siguiente suma exponencial: $$\\frac{2^{n+4} - 2 \\cdot 2^n}{2 \\cdot 2^{n+3}}$$ ", 
        options: ["$\\frac{7}{8}$", "$\\frac{14}{8}$", "$\\frac{3}{4}$", "$1$"], 
        correct: 0 
    },

    // Tema 2: Jerarquía de operadores complejos (4 preguntas)
    { 
        id: 5, 
        topic: "Jerarquía de Operadores Complejos", 
        text: "Evalúe el resultado de la siguiente expresión con fracciones continuas: $$2 - \\cfrac{1}{2 - \\cfrac{1}{2 - \\cfrac{1}{2}}}$$ ", 
        options: ["$\\frac{4}{3}$", "$\\frac{3}{2}$", "$\\frac{5}{3}$", "$\\frac{3}{4}$"], 
        correct: 0 
    },
    { 
        id: 6, 
        topic: "Jerarquía de Operadores Complejos", 
        text: "Determine el valor de: $$(-2)^4 - 3 \\cdot \\left[ 4^2 - 2 \\cdot (-3)^2 \\right] \\div (1 - 3)^2$$", 
        options: ["$\\frac{35}{2}$", "$\\frac{29}{2}$", "$19$", "$13$"], 
        correct: 0 
    },
    { 
        id: 7, 
        topic: "Jerarquía de Operadores Complejos", 
        text: "Calcule la siguiente suma finita de fracciones: $$\\sum_{k=1}^{4} \\frac{1}{k(k+1)} = \\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\frac{1}{3\\cdot 4} + \\frac{1}{4\\cdot 5}$$", 
        options: ["$\\frac{4}{5}$", "$\\frac{5}{6}$", "$\\frac{3}{4}$", "$\\frac{9}{10}$"], 
        correct: 0 
    },
    { 
        id: 8, 
        topic: "Jerarquía de Operadores Complejos", 
        text: "Calcule la mitad de la cuarta parte del triple de $2^{100}$:", 
        options: ["$3 \\cdot 2^{97}$", "$3 \\cdot 2^{98}$", "$3 \\cdot 2^{96}$", "$3 \\cdot 2^{99}$"], 
        correct: 0 
    },

    // Tema 3: Expresiones algebraicas y factorización avanzada (5 preguntas)
    { 
        id: 9, 
        topic: "Expresiones Algebraicas y Factorización", 
        text: "Si $x - \\frac{1}{x} = 4$, determine el valor exacto de $x^3 - \\frac{1}{x^3}$:", 
        options: ["$76$", "$64$", "$52$", "$72$"], 
        correct: 0 
    },
    { 
        id: 10, 
        topic: "Expresiones Algebraicas y Factorización", 
        text: "Factorice completamente en los números reales: $$x^4 + 4y^4$$", 
        options: ["$(x^2 + 2xy + 2y^2)(x^2 - 2xy + 2y^2)$", "$(x^2 + 2y^2)^2$", "$(x^2 - 2y^2)^2$", "$(x^2 + 2xy - 2y^2)(x^2 - 2xy - 2y^2)$"], 
        correct: 0 
    },
    { 
        id: 11, 
        topic: "Expresiones Algebraicas y Factorización", 
        text: "Simplifique la suma de fracciones algebraicas: $$\\frac{x+1}{x^2-x-6} + \\frac{x-2}{x^2-4x+3}$$", 
        options: ["$\\frac{2x^2-4x-5}{(x-3)(x+2)(x-1)}$", "$\\frac{2x+1}{(x-3)(x+2)}$", "$\\frac{2x^2+1}{(x-3)(x-1)}$", "$\\frac{x-1}{(x+2)(x-1)}$"], 
        correct: 0 
    },
    { 
        id: 12, 
        topic: "Expresiones Algebraicas y Factorización", 
        text: "Determine el término independiente del residuo al dividir $P(x) = 2x^4 - 3x^3 + x - 5$ entre $D(x) = x - 2$ usando el Teorema del Residuo:", 
        options: ["$5$", "$3$", "$-5$", "$-3$"], 
        correct: 0 
    },
    { 
        id: 13, 
        topic: "Expresiones Algebraicas y Factorización", 
        text: "Si $a + b + c = 0$, evalúe la identidad condicional: $$\\frac{a^3 + b^3 + c^3}{abc}$$", 
        options: ["$3$", "$1$", "$0$", "$-3$"], 
        correct: 0 
    },

    // Tema 4: Ecuaciones de primer grado y planteamientos complejos (6 preguntas)
    { 
        id: 14, 
        topic: "Ecuaciones y Planteamientos Complejos", 
        text: "Resuelva para $x$: $$\\frac{x-a}{b+c} + \\frac{x-b}{a+c} + \\frac{x-c}{a+b} = 3$$", 
        options: ["$a + b + c$", "$abc$", "$\\frac{a+b+c}{3}$", "$a + b - c$"], 
        correct: 0 
    },
    { 
        id: 15, 
        topic: "Ecuaciones y Planteamientos Complejos", 
        text: "Un tanque se llena con un grifo A en $4$ horas y con un grifo B en $6$ horas. Además, un desagüe C lo vacía en $12$ horas. Si se abren los tres simultáneamente estando el tanque vacío, ¿en cuánto tiempo se llenará?", 
        options: ["$3$ horas", "$2.5$ horas", "$4$ horas", "$3.5$ horas"], 
        correct: 0 
    },
    { 
        id: 16, 
        topic: "Ecuaciones y Planteamientos Complejos", 
        text: "Un comerciante compra cuadernos a $\$3$ cada uno. Vende la tercera parte a $\$5$ cada uno, la mitad del resto a $\$4$ y los sobrantes a $\$2$ cada uno. Si obtuvo una ganancia neta de $\$120$, ¿cuántos cuadernos compró?", 
        options: ["$180$", "$120$", "$240$", "$150$"], 
        correct: 0 
    },
    { 
        id: 17, 
        topic: "Ecuaciones y Planteamientos Complejos", 
        text: "Dos móviles A y B parten simultáneamente de dos ciudades distantes $450$ km, saliendo al encuentro con velocidades constantes de $60$ km/h y $90$ km/h respectivamente. ¿A qué distancia de la ciudad de origen de A se cruzarán?", 
        options: ["$180$ km", "$270$ km", "$150$ km", "$200$ km"], 
        correct: 0 
    },
    { 
        id: 18, 
        topic: "Ecuaciones y Planteamientos Complejos", 
        text: "En un examen de 50 preguntas, cada respuesta correcta suma 4 puntos, cada respuesta incorrecta resta 2 puntos y las no contestadas restan 1 punto. Un estudiante obtuvo 130 puntos respondiendo 45 preguntas. ¿Cuántas respondió correctamente?", 
        options: ["$36$", "$38$", "$34$", "$40$"], 
        correct: 0 
    },
    { 
        id: 19, 
        topic: "Ecuaciones y Planteamientos Complejos", 
        text: "Aumentar un número en sus $\\frac{3}{8}$ partes equivale a restarle $10$ a sus $\\frac{11}{4}$ partes. ¿Cuál es el número?", 
        options: ["$8$", "$16$", "$12$", "$24$"], 
        correct: 0 
    },

    // Tema 5: Sistemas de ecuaciones de orden superior (3 preguntas)
    { 
        id: 20, 
        topic: "Sistemas de Ecuaciones", 
        text: "Resuelva el sistema lineal de 3 variables y calcule $x \\cdot y \\cdot z$: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ 3x + 2y - z = 4 \\end{cases}$$", 
        options: ["$6$", "$8$", "$4$", "$12$"], 
        correct: 0 
    },
    { 
        id: 21, 
        topic: "Sistemas de Ecuaciones", 
        text: "Determine la condición para el parámetro $k$ para que el sistema NO tenga solución (sea incompatible): $$\\begin{cases} 2x + ky = 8 \\\\ 4x + 6y = 10 \\end{cases}$$", 
        options: ["$k = 3$", "$k = 6$", "$k \\neq 3$", "$k = 12$"], 
        correct: 0 
    },
    { 
        id: 22, 
        topic: "Sistemas de Ecuaciones", 
        text: "Un hotel tiene habitaciones dobles e individuales con un total de 45 habitaciones y 75 camas. ¿Cuántas habitaciones dobles hay?", 
        options: ["$30$", "$15$", "$25$", "$20$"], 
        correct: 0 
    },

    // Tema 6: Cálculo de edades analítico (4 preguntas)
    { 
        id: 23, 
        topic: "Cálculo de Edades Analítico", 
        text: "Dentro de $8$ años la edad de Roberto será el doble de la edad que tenía hace $10$ años. ¿Cuál es su edad actual?", 
        options: ["$28$ años", "$24$ años", "$32$ años", "$30$ años"], 
        correct: 0 
    },
    { 
        id: 24, 
        topic: "Cálculo de Edades Analítico", 
        text: "Tengo el triple de la edad que tú tenías cuando yo tenía la edad que tú tienes. Cuando tú tengas la edad que yo tengo, la suma de nuestras edades será 70 años. ¿Qué edad tengo?", 
        options: ["$30$ años", "$20$ años", "$25$ años", "$35$ años"], 
        correct: 0 
    },
    { 
        id: 25, 
        topic: "Cálculo de Edades Analítico", 
        text: "La suma de las edades de tres hermanos es 42 años. Sus edades están en progresión aritmética con razón de 3 años. ¿Cuál es la edad del mayor?", 
        options: ["$17$ años", "$14$ años", "$11$ años", "$18$ años"], 
        correct: 0 
    },
    { 
        id: 26, 
        topic: "Cálculo de Edades Analítico", 
        text: "Hace $n$ años la edad de Lucía era $k$ veces la edad de Sofía. Hoy la edad de Lucía es el doble de la de Sofía. Halle la edad actual de Sofía en términos de $n$ y $k$:", 
        options: ["$\\frac{n(k-1)}{k-2}$", "$\\frac{nk}{k-1}$", "$\\frac{n(k+1)}{k}$", "$\\frac{2nk}{k-1}$"], 
        correct: 0 
    },

    // Tema 7: Razones y proporciones complejas (4 preguntas)
    { 
        id: 27, 
        topic: "Razones y Proporciones", 
        text: "En una proporción geométrica continua, la suma de los términos extremos es 34 y la diferencia entre ellos es 16. Halle la media proporcional.", 
        options: ["$15$", "$12$", "$225$", "$16$"], 
        correct: 0 
    },
    { 
        id: 28, 
        topic: "Razones y Proporciones", 
        text: "Dos recipientes A y B contienen mezcla de alcohol y agua. En A la relación de alcohol a agua es $3:1$; en B es $1:5$. ¿En qué proporción se deben mezclar los contenidos de A y B para obtener una mezcla con partes iguales de alcohol y agua?", 
        options: ["$2:3$", "$3:4$", "$1:2$", "$3:2$"], 
        correct: 0 
    },
    { 
        id: 29, 
        topic: "Razones y Proporciones", 
        text: "La razón entre los cuadrados de dos números es $9:16$. Si el producto de ambos números es $108$, determine el menor de ellos.", 
        options: ["$9$", "$12$", "$6$", "$18$"], 
        correct: 0 
    },
    { 
        id: 30, 
        topic: "Razones y Proporciones", 
        text: "Sabiendo que $\\frac{A}{3} = \\frac{B}{5} = \\frac{C}{7}$ y que $A^2 + B^2 + C^2 = 333$, calcule el valor de $A + B + C$ (con $A,B,C > 0$):", 
        options: ["$45$", "$30$", "$60$", "$15$"], 
        correct: 0 
    },

    // Tema 8: Regla de 3 compuesta (4 preguntas)
    { 
        id: 31, 
        topic: "Regla de 3 Compuesta", 
        text: "Si 12 máquinas idénticas arman 60 motores en 8 días trabajando 9 h/día con una eficiencia del $80\\%$, ¿cuántas máquinas con $100\\%$ de eficiencia se necesitarán para armar 100 motores en 6 días trabajando 10 h/día?", 
        options: ["$16$ máquinas", "$20$ máquinas", "$12$ máquinas", "$18$ máquinas"], 
        correct: 0 
    },
    { 
        id: 32, 
        topic: "Regla de 3 Compuesta", 
        text: "Un contingente de 500 soldados tiene víveres para 60 días. Después de 20 días se retiran 100 soldados. ¿Para cuántos días más alcanzarán los víveres restantes?", 
        options: ["$50$ días", "$40$ días", "$60$ días", "$45$ días"], 
        correct: 0 
    },
    { 
        id: 33, 
        topic: "Regla de 3 Compuesta", 
        text: "Seis obreros abren una zanja de 20m de largo, 2m de ancho y 1m de profundidad en 8 días. ¿Cuántos días tardarán 12 obreros con el doble de rapidez en abrir una zanja en un terreno con el triple de dureza de 30m de largo, 3m de ancho y 2m de profundidad?", 
        options: ["$27$ días", "$18$ días", "$36$ días", "$24$ días"], 
        correct: 0 
    },
    { 
        id: 34, 
        topic: "Regla de 3 Compuesta", 
        text: "Una cuadrilla de 20 trabajadores puede construir una obra en 30 días. Si trabajan durante 10 días y luego se enferman 5 trabajadores, ¿con cuántos días de retraso se entregará la obra si el resto no aumenta su rendimiento?", 
        options: ["$6.67$ días", "$5$ días", "$8$ días", "$10$ días"], 
        correct: 0 
    },

    // Tema 9: Porcentajes, Mermas e Interés Compuesto/Simple (6 preguntas)
    { 
        id: 35, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "Un comerciante aumenta el precio de costo de un producto en un $40\\%$. Al venderlo otorga al cliente un descuento del $20\\%$. ¿Cuál es su porcentaje de ganancia real sobre el costo?", 
        options: ["$12\\%$", "$20\\%$", "$16\\%$", "$10\\%$"], 
        correct: 0 
    },
    { 
        id: 36, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "Si el radio de un círculo aumenta en un $30\\%$, ¿en qué porcentaje incrementa su área?", 
        options: ["$69\\%$", "$60\\%$", "$90\\%$", "$30\\%$"], 
        correct: 0 
    },
    { 
        id: 37, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "¿Cuál es la tercera proporcional entre los números $4$ y $12$?", 
        options: ["$36$", "$24$", "$16$", "$48$"], 
        correct: 0 
    },
    { 
        id: 38, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "Se deposita un capital de $\$5000$ a una tasa de interés simple anual del $8\\%$. ¿En cuántos años el capital se triplicará?", 
        options: ["$25$ años", "$20$ años", "$12.5$ años", "$30$ años"], 
        correct: 0 
    },
    { 
        id: 39, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "En una prueba de evaporación, una solución salina pierde el $20\\%$ de su agua en el primer proceso y el $25\\%$ del agua restante en un segundo proceso. ¿Qué porcentaje del volumen original de agua se ha evaporado en total?", 
        options: ["$40\\%$", "$45\\%$", "$35\\%$", "$50\\%$"], 
        correct: 0 
    },
    { 
        id: 40, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "Si el $a\\%$ de $b$ es $c$, y el $b\\%$ de $c$ es $a$, determine la relación correcta entre $b$ y $100$ (para $a,c \\neq 0$):", 
        options: ["$b = 100$", "$b = 10$", "$b = 50$", "$b = 200$"], 
        correct: 0 
    },

    // Tema 10: Estadísticos y Media Aritmética Ponderada (4 preguntas)
    { 
        id: 41, 
        topic: "Estadística y Media Ponderada", 
        text: "En un curso de 40 alumnos, el promedio general en matemática es 14. Las mujeres (que son 25) tienen un promedio de 15.2. ¿Cuál es el promedio de calificaciones de los varones?", 
        options: ["$12$", "$13$", "$11.8$", "$12.5$"], 
        correct: 0 
    },
    { 
        id: 42, 
        topic: "Estadística y Media Ponderada", 
        text: "La media aritmética de 100 números es 50. Si a los primeros 20 números se les suma 10 a cada uno y a los 80 restantes se les resta 5 a cada uno, ¿cuál será la nueva media aritmética?", 
        options: ["$48$", "$49$", "$52$", "$47$"], 
        correct: 0 
    },
    { 
        id: 43, 
        topic: "Estadística y Media Ponderada", 
        text: "La media armónica entre dos números $a$ y $b$ es $6$, mientras que su media aritmética es $8$. Determine el valor de su media geométrica:", 
        options: ["$4\\sqrt{3}$", "$48$", "$6\\sqrt{2}$", "$12$"], 
        correct: 0 
    },
    { 
        id: 44, 
        topic: "Estadística y Media Ponderada", 
        text: "El promedio de edad de 5 personas es 30 años. Ninguna de ellas es menor de 25 años. ¿Cuál es la máxima edad que podría tener una de ellas?", 
        options: ["$50$ años", "$45$ años", "$55$ años", "$60$ años"], 
        correct: 0 
    },

    // Tema 11: Combinatoria, Permutaciones con repetición y Probabilidad (6 preguntas)
    { 
        id: 45, 
        topic: "Combinatoria Avanzada", 
        text: "¿De cuántas maneras diferentes se pueden sentar 6 personas alrededor de una mesa circular si dos de ellas exigen estar siempre juntas?", 
        options: ["$48$", "$24$", "$120$", "$96$"], 
        correct: 0 
    },
    { 
        id: 46, 
        topic: "Combinatoria Avanzada", 
        text: "¿Cuántas palabras distintas (con o sin sentido) se pueden formar permutando todas las letras de la palabra $MATEMATICA$?", 
        options: ["$151200$", "$302400$", "$75600$", "$3628800$"], 
        correct: 0 
    },
    { 
        id: 47, 
        topic: "Combinatoria Avanzada", 
        text: "En un plano hay 10 puntos, de los cuales no hay 3 alineados. ¿Cuántos triángulos distintos se pueden formar uniendo tres de dichos puntos?", 
        options: ["$120$", "$720$", "$240$", "$90$"], 
        correct: 0 
    },
    { 
        id: 48, 
        topic: "Combinatoria Avanzada", 
        text: "Un examen consta de 10 preguntas. El estudiante debe responder exactamente 7 de ellas, pero las primeras 3 son obligatorias. ¿De cuántas formas distintas puede elegir sus respuestas?", 
        options: ["$35$", "$120$", "$210$", "$15$"], 
        correct: 0 
    },
    { 
        id: 49, 
        topic: "Combinatoria Avanzada", 
        text: "Se lanzan dos dados no trucados de 6 caras. ¿Cuál es la probabilidad de que la suma de los puntos obtenidos sea mayor o igual a 10?", 
        options: ["$\\frac{1}{6}$", "$\\frac{1}{12}$", "$\\frac{5}{36}$", "$\\frac{1}{4}$"], 
        correct: 0 
    },
    { 
        id: 50, 
        topic: "Combinatoria Avanzada", 
        text: "En una caja hay 5 bolas rojas y 4 bolas azules. Si se extraen 2 bolas al azar sin reemplazo, ¿cuál es la probabilidad de que ambas sean del mismo color?", 
        options: ["$\\frac{4}{9}$", "$\\frac{5}{18}$", "$\\frac{1}{2}$", "$\\frac{16}{81}$"], 
        correct: 0 
    }
];

// CONFIGURACIÓN DE EXAMEN
const TOTAL_TIME = 60 * 60; // 60 minutos en segundos
const STORAGE_KEY = "EVAL_NUMERICA_50Q_STATE_V2";

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

// PERSISTENCIA EN LOCALSTORAGE
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
            console.error("Error al cargar el estado previo:", e);
        }
    }
}

// EVENT LISTENERS
function setupEventListeners() {
    const btnStart = document.getElementById('btn-start-fullscreen');
    if (btnStart) btnStart.addEventListener('click', initFullscreen);
    
    const btnPrev = document.getElementById('btn-prev');
    if (btnPrev) btnPrev.addEventListener('click', () => navigate(-1));
    
    const btnNext = document.getElementById('btn-next');
    if (btnNext) btnNext.addEventListener('click', () => navigate(1));
    
    const btnFinish = document.getElementById('btn-finish-exam');
    if (btnFinish) btnFinish.addEventListener('click', confirmFinish);
    
    const btnRestart = document.getElementById('btn-restart-exam');
    if (btnRestart) btnRestart.addEventListener('click', restartExam);
}

// CAPAS DE SEGURIDAD Y MODO KIOSKO
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
    const overlay = document.getElementById('fullscreen-overlay');
    if (overlay) overlay.style.display = 'none';
}

function setupSecurity() {
    // Control de pantalla completa
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && !state.isFinished) {
            const overlay = document.getElementById('fullscreen-overlay');
            if (overlay) overlay.style.display = 'flex';
        }
    });

    // Control de pérdida de foco y cambio de pestaña
    window.addEventListener('visibilitychange', handleSecurityViolation);
    window.addEventListener('blur', handleSecurityViolation);
    
    // Bloqueo de menú contextual
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Bloqueo de teclas especiales e inspección
    document.addEventListener('keydown', e => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
            (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V' || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) ||
            e.key === 'PrintScreen'
        ) {
            e.preventDefault();
            registerInfraction("Atajo de teclado restringido");
        }
    });
}

function handleSecurityViolation() {
    if (!state.isFinished) {
        registerInfraction("Cambio de pestaña / Fuga de foco");
    }
}

function registerInfraction(reason) {
    state.infractions++;
    saveState();
    const banner = document.getElementById('infraction-banner');
    if (banner) {
        banner.style.display = 'block';
        setTimeout(() => { banner.style.display = 'none'; }, 4000);
    }
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
    
    if (timerEl) {
        timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    if (badgeEl && state.timeLeft <= 300) {
        badgeEl.classList.add('timer-warning');
    }
}

// RENDERIZADO DE PREGUNTAS
function renderQuestion() {
    const q = questionsData[state.currentIndex];
    const qNum = document.getElementById('question-number');
    const qTop = document.getElementById('question-topic');
    const qTxt = document.getElementById('question-text');

    if (qNum) qNum.textContent = `Pregunta ${String(state.currentIndex + 1).padStart(2, '0')} de ${questionsData.length}`;
    if (qTop) qTop.textContent = `Tema: ${q.topic}`;
    if (qTxt) qTxt.innerHTML = q.text;

    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
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
    }

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    if (btnPrev) btnPrev.disabled = state.currentIndex === 0;
    if (btnNext) btnNext.disabled = state.currentIndex === questionsData.length - 1;

    updateProgress();
    updateGridUI();

    if (window.renderMathInElement) {
        if (qTxt) {
            renderMathInElement(qTxt, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ]
            });
        }
        if (optionsContainer) {
            renderMathInElement(optionsContainer, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ]
            });
        }
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

// MAPA DE REACTIVOS Y NAVEGACIÓN
function renderGrid() {
    const grid = document.getElementById('reactive-grid');
    if (!grid) return;
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
    const pPct = document.getElementById('progress-percent');
    const pFill = document.getElementById('progress-fill');
    
    if (pPct) pPct.textContent = `${pct}%`;
    if (pFill) pFill.style.width = `${pct}%`;
}

// FINALIZACIÓN Y REPORTE
function confirmFinish() {
    const answeredCount = Object.keys(state.answers).length;
    const unanswered = questionsData.length - answeredCount;
    let msg = "¿Está seguro de finalizar la evaluación?";
    if (unanswered > 0) {
        msg += `\n⚠️ Tiene ${unanswered} pregunta(s) sin responder.`;
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
    const examScreen = document.getElementById('exam-screen');
    const timerDisplay = document.getElementById('timer-display');
    const resultsScreen = document.getElementById('results-screen');

    if (examScreen) examScreen.classList.add('hidden');
    if (timerDisplay) timerDisplay.classList.add('hidden');
    if (resultsScreen) resultsScreen.style.display = 'block';

    let score = 0;
    const reviewList = document.getElementById('review-list');
    if (reviewList) {
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
                <div class="q-title">${idx + 1}. ${q.text}</div>
                <div style="font-size: 0.9rem; color: var(--text-muted);">
                    Su respuesta: <strong>${userAns !== undefined ? letters[userAns] + ') ' + q.options[userAns] : 'Ninguna'}</strong><br>
                    Respuesta correcta: <strong style="color: var(--success);">${letters[q.correct]}) ${q.options[q.correct]}</strong>
                </div>
            `;
            reviewList.appendChild(item);
        });

        if (window.renderMathInElement) {
            renderMathInElement(reviewList, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ]
            });
        }
    }

    const resScore = document.getElementById('res-score');
    const resAccuracy = document.getElementById('res-accuracy');
    const resInfractions = document.getElementById('res-infractions');

    if (resScore) resScore.textContent = `${score}/${questionsData.length}`;
    if (resAccuracy) resAccuracy.textContent = `${Math.round((score / questionsData.length) * 100)}%`;
    if (resInfractions) resInfractions.textContent = state.infractions;
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