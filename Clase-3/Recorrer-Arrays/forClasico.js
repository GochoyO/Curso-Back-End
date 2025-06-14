//Como recorremos un array con un for clasico

/*
for(contador; condicion; incremento){
    //Bloque de codigo a ejecutar
}
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Acceder al arreglo atravez de un indice

// console.log(numeros[4]);

//Iterar un arreglo usando un bucle for

// console.log(numeros.length);

for (let i = 0; i < numeros.length; i++) {
  console.log(`El indice de el numero es: ${i} y el valor es: ${numeros[i]}`);
}
