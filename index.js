const questions = [
  // 1. Simplificación de expresiones algebraicas (3 PREGUNTAS)
  {
    id: 1,
    question: "Simplifica la siguiente expresión aplicando propiedades de exponentes: $$\\frac{(2^3 \\cdot 2^4)^2}{2^{10}}$$",
    options: ["$$2^4$$", "$$2^2$$", "$$2^6$$", "$$2^8$$"],
    answer: 0
  },
  {
    id: 2,
    question: "Al simplificar el radical $$\\sqrt[3]{a^6 \\cdot b^9 \\cdot c^{12}}$$, se obtiene:",
    options: ["$$a^2 b^3 c^4$$", "$$a^3 b^3 c^4$$", "$$a^2 b^2 c^3$$", "$$a^3 b^6 c^9$$"],
    answer: 0
  },
  {
    id: 3,
    question: "Reduce a su forma más simple la expresión: $$\\left( \\frac{x^{-2} y^3}{x^4 y^{-1}} \\right)^{-1}$$",
    options: ["$$\\frac{x^6}{y^4}$$", "$$\\frac{y^4}{x^6}$$", "$$\\frac{x^2}{y^2}$$", "$$x^6 y^4$$"],
    answer: 0
  },

  // 2. Jerarquía de operadores (3 PREGUNTAS)
  {
    id: 4,
    question: "Calcula el valor numérico exacto de: $$12 - 3 \\times (4 - 2^2) + 8 \\div 2$$",
    options: ["16", "12", "8", "20"],
    answer: 0
  },
  {
    id: 5,
    question: "Resuelve respetando la jerarquía operacional: $$5 + 2 \\times [3 + 2 \\times (8 - 5)] - 4^2$$",
    options: ["7", "11", "15", "23"],
    answer: 0
  },
  {
    id: 6,
    question: "Determina el resultado final de la expresión: $$18 \\div 3 \\times 2 + 5 - (10 - 4 \\div 2)$$",
    options: ["9", "12", "15", "7"],
    answer: 0
  },

  // 3. Expresiones algebraicas (5 PREGUNTAS - Sin suma ni división de polinomios)
  {
    id: 7,
    question: "Al desarrollar el producto notable $$(2x - 3y)^2$$, el resultado es:",
    options: ["$$4x^2 - 12xy + 9y^2$$", "$$4x^2 - 9y^2$$", "$$4x^2 + 12xy + 9y^2$$", "$$2x^2 - 6xy + 3y^2$$"],
    answer: 0
  },
  {
    id: 8,
    question: "Factoriza completamente el siguiente trinomio: $$x^2 - 7x + 12$$",
    options: ["$$(x - 4)(x - 3)$$", "$$(x + 4)(x + 3)$$", "$$(x - 6)(x + 1)$$", "$$(x - 12)(x + 1)$$"],
    answer: 0
  },
  {
    id: 9,
    question: "Calcula el valor numérico de la expresión $$E = 2x^3 - 3x^2 + 4x - 5$$ para $$x = -1$$:",
    options: ["-14", "-6", "-4", "2"],
    answer: 0
  },
  {
    id: 10,
    question: "Al factorizan la expresión $$9x^2 - 16$$, obtenemos:",
    options: ["$$(3x - 4)(3x + 4)$$", "$$(3x - 4)^2$$", "$$(9x - 4)(x + 4)$$", "$$(3x + 4)^2$$"],
    answer: 0
  },
  {
    id: 11,
    question: "Si $$a + b = 5$$ y $$a \\cdot b = 6$$, calcula el valor numérico de $$a^2 + b^2$$:",
    options: ["13", "25", "19", "12"],
    answer: 0
  },

  // 4. Ecuaciones de primer grado y planteamiento (6 PREGUNTAS)
  {
    id: 12,
    question: "Encuentra el valor de $$x$$ en la ecuación: $$3(x - 2) + 4 = 2(x + 5)$$",
    options: ["12", "10", "8", "14"],
    answer: 0
  },
  {
    id: 13,
    question: "Resuelve la ecuación fraccionaria: $$\\frac{2x - 1}{3} = \\frac{x + 4}{2}$$",
    options: ["14", "10", "7", "12"],
    answer: 0
  },
  {
    id: 14,
    question: "La suma de tres números enteros consecutivos es igual a 72. ¿Cuál es el número mayor?",
    options: ["25", "24", "23", "26"],
    answer: 0
  },
  {
    id: 15,
    question: "Un padre tiene el triple de la edad de su hijo. Si la suma de sus edades es 48 años, ¿cuántos años tiene el hijo?",
    options: ["12 años", "16 años", "14 años", "10 años"],
    answer: 0
  },
  {
    id: 16,
    question: "El perímetro de un rectángulo es de 36 cm. Si el largo supera al ancho en 4 cm, ¿cuánto mide el largo?",
    options: ["11 cm", "7 cm", "12 cm", "10 cm"],
    answer: 0
  },
  {
    id: 17,
    question: "Si a la mitad de un número se le resta 5, se obtiene la tercera parte del mismo número. ¿Cuál es el número?",
    options: ["30", "24", "18", "36"],
    answer: 0
  },

  // 5. Sistema de ecuaciones con dos incógnitas (1 PREGUNTA)
  {
    id: 18,
    question: "Resuelve el sistema y determina el valor de $$x + y$$:\n$$\\begin{cases} 2x + y = 11 \\\\ x - y = 1 \\end{cases}$$",
    options: ["7", "5", "8", "6"],
    answer: 0
  },

  // 6. Cálculo de edades (3 PREGUNTAS)
  {
    id: 19,
    question: "Ana tiene 24 años y su edad es el doble de la que tenía María cuando Ana tenía la edad que María tiene ahora. ¿Qué edad tiene María?",
    options: ["18 años", "16 años", "20 años", "12 años"],
    answer: 0
  },
  {
    id: 20,
    question: "Hace 5 años, la edad de Luis era el cuádruple de la edad de Carlos. Dentro de 5 años, solo será el doble. ¿Qué edad tiene Carlos actualmente?",
    options: ["10 años", "15 años", "20 años", "25 años"],
    answer: 0
  },
  {
    id: 21,
    question: "Dentro de 12 años, la edad de Sofía será el triple de su edad actual. ¿Cuál es su edad presente?",
    options: ["6 años", "8 años", "4 años", "9 años"],
    answer: 0
  },

  // 7. Razones y proporciones (4 PREGUNTAS)
  {
    id: 22,
    question: "La razón entre dos números es $3:5$. Si la suma de ambos es 64, ¿cuál es el número mayor?",
    options: ["40", "24", "35", "45"],
    answer: 0
  },
  {
    id: 23,
    question: "En una academia, la relación entre hombres y mujeres es de 4 a 7. Si hay 28 hombres, ¿cuántas mujeres hay?",
    options: ["49", "42", "56", "35"],
    answer: 0
  },
  {
    id: 24,
    question: "Calcula el valor de $$x$$ en la proporción: $$\\frac{x}{12} = \\frac{15}{20}$$",
    options: ["9", "8", "10", "6"],
    answer: 0
  },
  {
    id: 25,
    question: "Dos cantidades son directamente proporcionales. Si cuando la primera vale 18 la segunda vale 24, ¿cuánto valdrá la primera cuando la segunda valga 40?",
    options: ["30", "28", "32", "36"],
    answer: 0
  },

  // 8. Regla de 3 compuesta (3 PREGUNTAS)
  {
    id: 26,
    question: "Si 6 obreros construyen una pared en 10 días trabajando 8 horas diarias, ¿cuántos días tardarán 8 obreros en construir la misma pared trabajando 6 horas diarias?",
    options: ["10 días", "8 días", "12 días", "6 días"],
    answer: 0
  },
  {
    id: 27,
    question: "9 grifos abiertos durante 10 horas diarias consumen 300 litros de agua. ¿Cuántos litros consumirán 15 grifos abiertos durante 8 horas diarias?",
    options: ["400 litros", "350 litros", "450 litros", "500 litros"],
    answer: 0
  },
  {
    id: 28,
    question: "Para alimentar a 12 caballos durante 5 días se necesitan 60 kg de alimento. ¿Cuántos kg de alimento se necesitarán para 18 caballos durante 8 días?",
    options: ["144 kg", "120 kg", "160 kg", "180 kg"],
    answer: 0
  },

  // 9. Porcentajes y proporcionalidad (5 PREGUNTAS)
  {
    id: 29,
    question: "Un artículo cuesta $120. Si se le aplica un descuento del 20% y luego un recargo del 10%, ¿cuál es su precio final?",
    options: ["$105.60", "$108.00", "$112.00", "$100.00"],
    answer: 0
  },
  {
    id: 30,
    question: "¿Cuál es la media proporcional entre 4 y 16?",
    options: ["8", "10", "6", "12"],
    answer: 0
  },
  {
    id: 31,
    question: "Halla la tercera proporcional entre 12 y 18:",
    options: ["27", "24", "30", "21"],
    answer: 0
  },
  {
    id: 32,
    question: "El 35% de un número es 140. ¿Cuál es el 50% de dicho número?",
    options: ["200", "250", "180", "220"],
    answer: 0
  },
  {
    id: 33,
    question: "En una tienda, un producto que costaba $80 subió a $100. ¿En qué porcentaje aumentó su precio?",
    options: ["25%", "20%", "30%", "15%"],
    answer: 0
  },

  // 10. Media aritmética (2 PREGUNTAS)
  {
    id: 34,
    question: "La media aritmética de cuatro números es 15. Si se añade un quinto número, la media pasa a ser 16. ¿Cuál es el valor del quinto número?",
    options: ["20", "18", "22", "24"],
    answer: 0
  },
  {
    id: 35,
    question: "Un estudiante tiene las siguientes notas: 14, 16, 12 y 18. ¿Qué nota debe obtener en su quinto examen para que su promedio final sea 16?",
    options: ["20", "18", "19", "17"],
    answer: 0
  },

  // 11. Combinación, Variación y Permutación (5 PREGUNTAS)
  {
    id: 36,
    question: "¿De cuántas maneras distintas se pueden sentar 5 personas en una fila de 5 asientos?",
    options: ["120", "24", "60", "720"],
    answer: 0
  },
  {
    id: 37,
    question: "En un grupo de 8 personas, ¿cuántos comités de 3 personas se pueden formar?",
    options: ["56", "336", "112", "24"],
    answer: 0
  },
  {
    id: 38,
    question: "¿Cuántos números de 3 cifras diferentes se pueden formar con los dígitos {1, 2, 3, 4, 5}?",
    options: ["60", "125", "20", "120"],
    answer: 0
  },
  {
    id: 39,
    question: "En una carrera con 6 competidores, ¿de cuántas formas se pueden ocupar los tres primeros lugares (oro, plata y bronce)?",
    options: ["120", "20", "216", "720"],
    answer: 0
  },
  {
    id: 40,
    question: "Un examen consta de 10 preguntas y el alumno debe responder 8. ¿De cuántas formas puede seleccionarlas?",
    options: ["45", "90", "80", "10"],
    answer: 0
  },

  // BLOQUE DE REFUERZO DE LOS TEMAS SELECCIONADOS (10 PREGUNTAS ADICIONALES)
  {
    id: 41,
    question: "Simplifica la expresión con radical y potencia: $$\\sqrt{\\frac{32x^5}{2x}}$$",
    options: ["$$4x^2$$", "$$2x^2$$", "$$4x^4$$", "$$16x^2$$"],
    answer: 0
  },
  {
    id: 42,
    question: "Calcula el valor numérico de: $$15 - [2 + 3 \\times (6 - 2^2)] + 10 \\div 5$$",
    options: ["9", "11", "7", "13"],
    answer: 0
  },
  {
    id: 43,
    question: "Factoriza la expresión dada: $$16x^2 - 25$$",
    options: ["$$(4x - 5)(4x + 5)$$", "$$(4x - 5)^2$$", "$$(8x - 5)(2x + 5)$$", "$$(16x - 1)(x + 25)$$"],
    answer: 0
  },
  {
    id: 44,
    question: "Si el doble de un número aumentado en 7 equivale a su triple disminuido en 5, ¿cuál es el número?",
    options: ["12", "10", "14", "8"],
    answer: 0
  },
  {
    id: 45,
    question: "La edad de Pedro excede a la de Juan en 8 años. Si hace 4 años la suma de sus edades era 28 años, ¿cuántos años tiene Juan actualmente?",
    options: ["14 años", "22 años", "12 años", "16 años"],
    answer: 0
  },
  {
    id: 46,
    question: "En un recipiente la cantidad de agua y vino está en relación de 2 a 3. Si se agregan 10 litros de agua, la relación pasa a ser de 4 a 3. ¿Cuántos litros de vino hay?",
    options: ["15 litros", "10 litros", "20 litros", "30 litros"],
    answer: 0
  },
  {
    id: 47,
    question: "4 impresoras imprimen 100 libros en 6 días. ¿Cuántas impresoras iguales se necesitarán para imprimir 50 libros en 2 días?",
    options: ["6 impresoras", "8 impresoras", "4 impresoras", "10 impresoras"],
    answer: 0
  },
  {
    id: 48,
    question: "Halla la cuarta proporcional entre 6, 9 y 10:",
    options: ["15", "12", "18", "20"],
    answer: 0
  },
  {
    id: 49,
    question: "La media de 5 números es 20. Si se retira un número que vale 12, ¿cuál es la nueva media aritmética?",
    options: ["22", "21", "23", "20"],
    answer: 0
  },
  {
    id: 50,
    question: "¿De cuántas maneras distintas se pueden ordenar en una repisa 4 libros de Matemática y 2 de Física si los de la misma materia deben estar juntos?",
    options: ["96", "48", "24", "144"],
    answer: 0
  }
];