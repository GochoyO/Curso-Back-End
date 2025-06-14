const fs = require("node:fs");

//Metodo para leer un archivo externo con file system en js
fs.readFile("nuevoArchivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Ah ocurrido un problema al leer el archivo", err);
    return;
  }
  console.log("El archivo se a leido correctamente: ", data);
});
