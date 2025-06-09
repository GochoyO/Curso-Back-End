
let num1 = 10;
let num2 = 18;
let num3 = 2;
let num4 = 3;
let num5 = 22;
/*

let multiplicando = num1 * num3;        // multiplicación
let dividiendo = (num2+num3) / num1;    // suma y división
let promedio = (num1+num2+num3)/3;      // promedio de 3 numeros
let otro = combinado - restando;        //
  //
*/


//Funciones de flecha (Arrow Functions)
//suma
const sumando = (x, y, z) => x + y + z;
let resultadoSuma = sumando(num1, num2, num3);      // r:30
//resta
const restando = (y, z) => y -z;
let resultadoResta = restando(num2, num3);          // r: 16
//multiplica
const multiplicando = (x, z) => x *z;
let resultadoMultp = multiplicando(num1, num3);     // r:20
//divide
const dividiendo = (y, z) => y / z;
let resultadoDiv = dividiendo(num1, num3);          // r:5
//modulo
const modulo = (x, y) => x % y;
let resultadoModulo = modulo(num5, num4);            // r:1

//potencia
const potencia = (x, y) => x ** y;
let resultadoPotencia = potencia(num5, num4);            // r:10648

console.log("Total suma: ",resultadoSuma);
console.log("Total resta: ",resultadoResta);
console.log("Total multiplicación: ",resultadoMultp);
console.log("Total división: ",resultadoDiv);
console.log("Total modulo: ",resultadoModulo);
console.log("Total potencia: ",resultadoPotencia);


