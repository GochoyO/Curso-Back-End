//Esta es la forma de declarar un modulo en cjs
const fs = require("node:fs");
//Esta forma sirve para nuevas declaraciones mjs
// import * as fs from 'node:fs';
const contenido = "Hola, este es un nuevo contenido para el archivo";
fs.writeFile("nuevoArchivo.txt", contenido, "utf-8", (err) => {
  if (err) {
    console.log("El archivo no se pudo crear:", err);
    return;
  }
  console.log("Se creo el archivo con exito y se le introdujo el contenido");
});
