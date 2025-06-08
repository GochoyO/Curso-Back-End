console.log("Hola, CCOL, desde JavaScript!");

// Tipos de datos Comunes en JavaScript
// Números
let numeroEntero = 42; // Entero
let numeroDecimal = 3.1416; // Decimal
console.log(typeof numeroEntero); // Imprime "number"

// Cadenas de texto
let cadenaTexto = "Hola, mundo!"; // Cadena de texto
console.log(typeof cadenaTexto); // Imprime "string"

// Booleanos
let esVerdadero = true; // Verdadero
let esFalso = false; // Falso
console.log(typeof esVerdadero); // Imprime "boolean"

// Objetos
let persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true,
};
console.log(typeof persona); // Imprime "object"

//undifined
let variableSinDefinir; // Variable sin definir
console.log(typeof variableSinDefinir); // Imprime "undefined"

// Null
let variableNula = null; // Variable nula
console.log(typeof variableNula); // Imprime "object" (esto es un comportamiento histórico de JavaScript)

// Definición de variables
var x = 10; // Variable global (no recomendada en ES6+)
let y = 20; // Variable de bloque (recomendada en ES6+)
y = 30; // Reasignación de variable
const z = 40; // Constante (no se puede reasignar)
// z = 50; // Esto causará un error, ya que 'z' es una constante
console.log(x, y, z); // Imprime 10, 30, 40

// Operadores Aritméticos
let a = 5;
let b = 3;

let suma = a + b; // Suma
let resta = a - b; // Resta
let multiplicacion = a * b; // Multiplicación
let division = a / b; // División
let modulo = a % b; // Módulo (resto de la división)
//Mostrar resultados
console.log("Suma:", suma); // Imprime "Suma: 8"
console.log("Resta:", resta); // Imprime "Resta: 2"
console.log("Multiplicación:", multiplicacion); // Imprime "Multiplicación: 15"
console.log("División:", division); // Imprime "División: 1.6666666666666667"
console.log("Módulo:", modulo); // Imprime "Módulo: 2"

// Operadores de Comparación (Nos retornan un valor booleano true o false)
let x1 = 10;
let y1 = 20;

let esIgual = x1 == y1; // Igualdad (valor)
let esIgualEstrictamente = x1 === y1; // Igualdad estricta (valor y tipo)
let esDiferente = x1 != y1; // Diferencia (valor)
let esDiferenteEstrictamente = x1 !== y1; // Diferencia estricta (valor y tipo)

let esMayor = x1 > y1; // Mayor que
let esMenor = x1 < y1; // Menor que
let esMayorOIgual = x1 >= y1; // Mayor o igual que
let esMenorOIgual = x1 <= y1; // Menor o igual que
// Mostrar resultados de comparación
console.log("Es igual:", esIgual); // Imprime "Es igual: false"
console.log("Es igual estrictamente:", esIgualEstrictamente); // Imprime "Es igual estrictamente: false"
console.log("Es diferente:", esDiferente); // Imprime "Es diferente: true"
console.log("Es diferente estrictamente:", esDiferenteEstrictamente); // Imprime "Es diferente estrictamente: true"
console.log("Es mayor:", esMayor); // Imprime "Es mayor: false"
console.log("Es menor:", esMenor); // Imprime "Es menor: true"
console.log("Es mayor o igual:", esMayorOIgual); // Imprime "Es mayor o igual: false"
console.log("Es menor o igual:", esMenorOIgual); // Imprime "Es menor o igual: true"

// Operadores Lógicos
let a1 = true;
let b1 = false;

let and = a1 && b1; // AND lógico (Y)
let or = a1 || b1; // OR lógico (O)
let not = !a1; // NOT lógico (NO)
// Mostrar resultados lógicos
console.log("AND lógico:", and); // Imprime "AND lógico: false"
console.log("OR lógico:", or); // Imprime "OR lógico: true"
console.log("NOT lógico:", not); // Imprime "NOT lógico: false"

//Ejercicio practico (Qué numero es mayor?)
let numero1 = 15;
let numero2 = 16;

if (numero1 > numero2) {
  console.log("El número 1 es mayor que el número 2");
} else {
  console.log("El número 2 es mayor que el número 1");
}
