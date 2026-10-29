
/* ==========================================
   EJERCICIO 1: Transformar y filtrar
   ========================================== */

// Predicción:
// El resultado será [15, 24].
// El array original no cambiará.

const numeros = [2, 5, 3, 8, 1];

const multiplicados = numeros.map(numero => numero * 3);
const resultado = multiplicados.filter(numero => numero > 10);

console.log("Resultado:", resultado);

// Análisis:
// ¿Cambió el array numeros?
// No, porque map() y filter() crean un nuevo array.
// Lo comprobamos mostrando el array original.

console.log("Array original:", numeros);
/* ==========================================
   EJERCICIO 2: Invertir y buscar
   ========================================== */

// Predicción:
// El array invertido será ["estrella", "mar", "luna", "sol"].
// La primera palabra con más de 3 caracteres será "estrella".

const palabras = ["sol", "luna", "mar", "estrella"];

palabras.reverse();

const encontrada = palabras.find(palabra => palabra.length > 3);

console.log("Array invertido:", palabras);
console.log("Primera palabra con más de 3 caracteres:", encontrada);

// Análisis:
// Sin reverse(), find() habría encontrado "luna".
// reverse() modificó el array original y cambió el orden de búsqueda.

/* ==========================================
   EJERCICIO 3: Verificar, ordenar y buscar
   ========================================== */

// Predicción:
// some() devolverá true.
// Las personas quedarán ordenadas por edad ascendente.
// find() encontrará a Ana, de 25 años.

const personas = [
  { nombre: "Sara", edad: 31 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 15 }
];

const hayMenores = personas.some(persona => persona.edad < 18);

personas.sort((a, b) => a.edad - b.edad);

const primerAdulto = personas.find(persona => persona.edad >= 18);

console.log("¿Hay menores de edad?:", hayMenores);
console.log("Personas ordenadas:", personas);
console.log("Primera persona adulta:", primerAdulto);

// Análisis:
// Sin sort(), find() habría encontrado a Sara,
// porque era la primera persona del array con 18 años o más.
// El orden importa porque find() devuelve la primera coincidencia.

/* ==========================================
   EJERCICIO 4: Combinar y sumar
   ========================================== */

// Predicción:
// El array combinado será [3, 7, 2, 10, 5].
// La suma total será 27.
// Los arrays originales no cambiarán.

const a = [3, 7, 2];
const b = [10, 5];

const combinado = a.concat(b);
const suma = combinado.reduce((total, numero) => total + numero, 0);

console.log("Array combinado:", combinado);
console.log("Suma total:", suma);

// Análisis:
// concat() no modificó a ni b; creó un nuevo array.
// Podemos comprobarlo imprimiendo ambos arrays originales.

console.log("Array a original:", a);
console.log("Array b original:", b);

/* ==========================================
   EJERCICIO 5: Quitar y agregar elementos
   ========================================== */

// Predicción:
// shift() devolverá 10.
// unshift() devolverá 4.
// push() devolverá 5.
// El array final será [5, 20, 30, 40, 50].

const numerosEj5 = [10, 20, 30, 40];

const eliminado = numerosEj5.shift();
console.log("Elemento eliminado:", eliminado);

const longitudInicio = numerosEj5.unshift(5);
console.log("Longitud después de unshift:", longitudInicio);

const longitudFinal = numerosEj5.push(50);
console.log("Longitud después de push:", longitudFinal);

console.log("Array final:", numerosEj5);

// Análisis:
// unshift() y push() devuelven la nueva longitud del array,
// no el elemento que agregaron.

/* ==========================================
   EJERCICIO 6: Buscar y reemplazar
   ========================================== */

// Predicción:
// Sara será reemplazada por Camila y después por Valeria.
// Juan no se encontrará, por lo que el array no cambiará.

const nombresEj6 = ["Ana", "Luis", "Sara", "Pedro"];

const posicionSara = nombresEj6.indexOf("Sara");

if (posicionSara !== -1) {
  nombresEj6.fill("Camila", posicionSara, posicionSara + 1);
}

console.log("Después de fill:", nombresEj6);

const posicionCamila = nombresEj6.indexOf("Camila");

if (posicionCamila !== -1) {
  nombresEj6.splice(posicionCamila, 1, "Valeria");
}

console.log("Después de splice:", nombresEj6);

const posicionJuan = nombresEj6.indexOf("Juan");

if (posicionJuan !== -1) {
  nombresEj6.fill("Camila", posicionJuan, posicionJuan + 1);
}

console.log("Posición de Juan:", posicionJuan);
console.log("Array final:", nombresEj6);

// Análisis:
// Si usáramos splice(-1, 1, "Camila") sin comprobar
// la posición, reemplazaríamos el último elemento del array,
// porque el índice -1 señala el último elemento en splice().

/* ==========================================
   EJERCICIO 7: Filtrar y unir
   ========================================== */

// Predicción:
// Las frutas con la letra "a" serán manzana, pera y uva.
// El resultado final será "manzana, pera, uva".

const frutasEj7 = ["manzana", "kiwi", "pera", "uva"];

const frutasFiltradas = frutasEj7.filter(fruta => fruta.includes("a"));
const resultadoEj7 = frutasFiltradas.join(", ");

console.log("Frutas filtradas:", frutasFiltradas);
console.log("Resultado unido:", resultadoEj7);

// Análisis:
// No podemos filtrar después de usar join() de esta manera,
// porque join() convierte el array en un texto.
// filter() necesita trabajar con los elementos del array.

/* ==========================================
   EJERCICIO 8: Encontrar el máximo y verificar
   ========================================== */

// Predicción:
// El máximo de a será 9 y todos sus números serán positivos.
// El máximo de b será 4 y no todos sus números serán positivos.

const aEj8 = [4, 9, 2, 7];
const bEj8 = [4, -1, 2];

const maximoA = aEj8.reduce((maximo, numero) =>
  numero > maximo ? numero : maximo
);

const positivosA = aEj8.every(numero => numero > 0);

const maximoB = bEj8.reduce((maximo, numero) =>
  numero > maximo ? numero : maximo
);

const positivosB = bEj8.every(numero => numero > 0);

console.log("Máximo de a:", maximoA);
console.log("¿Todos los números de a son positivos?:", positivosA);

console.log("Máximo de b:", maximoB);
console.log("¿Todos los números de b son positivos?:", positivosB);

// Análisis:
// No indicamos un valor inicial para reduce().
// Por eso, utiliza el primer elemento como valor inicial
// y comienza a comparar desde el segundo elemento.

/* ==========================================
   EJERCICIO 9: Buscar por condición
   ========================================== */

// Predicción:
// El primer producto con precio mayor que 100
// estará en el índice 1.
// Si ninguno cumple la condición, el resultado será -1.

const productosEj9 = [
  { nombre: "Lápiz", precio: 50 },
  { nombre: "Cuaderno", precio: 120 },
  { nombre: "Libro", precio: 200 }
];

const indiceProducto = productosEj9.findIndex(
  producto => producto.precio > 100
);

console.log("Índice del producto:", indiceProducto);

if (indiceProducto !== -1) {
  console.log("Producto encontrado:", productosEj9[indiceProducto]);
} else {
  console.log("No se encontró ningún producto con ese precio.");
}

// Análisis:
// find() devolvería el objeto del primer producto que cumpla
// la condición, en lugar de devolver su índice.


/* ==========================================
   EJERCICIO 10: Transformar y verificar
   ========================================== */

// Predicción:
// a producirá [2, 5, 3.5, 6] y includes(5) será true.
// b producirá [2, 4.5] y includes(5) será false.

const aEj10 = [4, 10, 7, 12];
const bEj10 = [4, 9];

const mitadA = aEj10.map(numero => numero / 2);
const contieneCincoA = mitadA.includes(5);

const mitadB = bEj10.map(numero => numero / 2);
const contieneCincoB = mitadB.includes(5);

console.log("Array a dividido:", mitadA);
console.log("¿a contiene el número 5?:", contieneCincoA);

console.log("Array b dividido:", mitadB);
console.log("¿b contiene el número 5?:", contieneCincoB);

// Análisis:
// includes() busca un valor exacto, no una condición.
// Para comprobar una condición sobre los elementos,
// podemos utilizar some().


/* ==========================================
   EJERCICIO 11: Transformar y buscar
   ========================================== */

// Predicción:
// Todos los nombres quedarán en mayúsculas.
// El primer nombre con más de 6 caracteres será VALENTINA.

const nombresEj11 = ["ana", "luis", "valentina", "sara", "sebastian"];

const nombresMayusculas = nombresEj11.map(nombre => nombre.toUpperCase());

const nombreEncontrado = nombresMayusculas.find(
  nombre => nombre.length > 6
);

console.log("Nombres en mayúsculas:", nombresMayusculas);
console.log("Primer nombre con más de 6 caracteres:", nombreEncontrado);

// Análisis:
// map() crea un nuevo array con los nombres en mayúsculas.
// find() devuelve el primer nombre que cumple la condición.

/* ==========================================
   EJERCICIO 12: Ordenar y modificar
   ========================================== */

// Predicción:
// Las edades se ordenarán de mayor a menor.
// pop() eliminará el 8.
// push() agregará el 19 al final.

const edadesEj12 = [15, 32, 8, 21, 40];

edadesEj12.sort((a, b) => b - a);
console.log("Edades ordenadas:", edadesEj12);

const edadEliminada = edadesEj12.pop();
console.log("Edad eliminada:", edadEliminada);

edadesEj12.push(19);
console.log("Array final:", edadesEj12);

// Análisis:
// Usamos pop() porque, tras ordenar de mayor a menor,
// la edad más baja queda en la última posición.


/* ==========================================
   EJERCICIO 13: Verificar y filtrar
   ========================================== */

// Predicción:
// a tendrá true y los pares [4, 10, 8].
// b tendrá false y los pares [4, -2, 10].

const aEj13 = [4, 7, 10, 3, 8];
const bEj13 = [4, -2, 10];

const todosPositivosA = aEj13.every(numero => numero > 0);
const paresA = aEj13.filter(numero => numero % 2 === 0);

const todosPositivosB = bEj13.every(numero => numero > 0);
const paresB = bEj13.filter(numero => numero % 2 === 0);

console.log("¿Todos los números de a son positivos?:", todosPositivosA);
console.log("Números pares de a:", paresA);

console.log("¿Todos los números de b son positivos?:", todosPositivosB);
console.log("Números pares de b:", paresB);

// Análisis:
// every() devuelve false si al menos un número no cumple
// la condición. filter() conserva todos los números pares,
// incluidos los negativos.


/* ==========================================
   EJERCICIO 14: Calcular promedio y filtrar
   ========================================== */

// Predicción:
// El promedio será 120.
// Los precios menores que el promedio serán [80, 60, 90].

const preciosEj14 = [120, 80, 250, 60, 90];

if (preciosEj14.length > 0) {
  const sumaPrecios = preciosEj14.reduce(
    (total, precio) => total + precio,
    0
  );

  const promedio = sumaPrecios / preciosEj14.length;

  const menoresAlPromedio = preciosEj14.filter(
    precio => precio < promedio
  );

  console.log("Promedio:", promedio);
  console.log("Precios menores al promedio:", menoresAlPromedio);
} else {
  console.log("No se puede calcular el promedio de un array vacío.");
}

// Análisis:
// Si el array está vacío, no calculamos el promedio,
// porque no podemos dividir entre cero.


/* ==========================================
   EJERCICIO 15: Extraer y combinar
   ========================================== */

// Predicción:
// Los primeros tres colores serán rojo, azul y verde.
// El array combinado incluirá naranja y violeta.
// El array original permanecerá sin cambios.

const coloresEj15 = ["rojo", "azul", "verde", "amarillo", "negro"];
const coloresSecundarios = ["naranja", "violeta"];

const primerosColores = coloresEj15.slice(0, 3);
const coloresCombinados = primerosColores.concat(coloresSecundarios);

console.log("Primeros tres colores:", primerosColores);
console.log("Colores combinados:", coloresCombinados);

// Análisis:
// slice() crea un nuevo array y no modifica el original.
// Podemos comprobarlo mostrando coloresEj15.

console.log("Array original:", coloresEj15);
