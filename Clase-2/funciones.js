// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

// let saludoPersonalizado = saludar("Juan");
// console.log(saludoPersonalizado);

// function sumar(a, b) {
//   return a + b;
// }
// let resultadoSuma = sumar(5, 3);
// let ultimaSuma = resultadoSuma + 23;
// console.log(ultimaSuma);

//Arrow function
const saludarArrow = (nombre) => {
  return `Hola, ${nombre}`;
};

let saludoArrow = saludarArrow("Ana");
console.log(saludoArrow);

// Arrow function con una sola línea
const saludoCorto = (nombre) => `Hola, ${nombre}`;
let saludoCortoResultado = saludoCorto("Luis");
console.log(saludoCortoResultado);
