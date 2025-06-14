const fsPromises = require("node:fs/promises");

//Vamos a leer un archivo con fs promises
async function leerArchivoConPromises() {
  try {
    const data = await fsPromises.readFile("nuevoArchivo.txt", "utf-8");
    console.log("El archivo se leyo correctamente: ", data);
  } catch (err) {
    console.log("Hubo un error al intentar leer el archivo", err);
  }
}

leerArchivoConPromises();
