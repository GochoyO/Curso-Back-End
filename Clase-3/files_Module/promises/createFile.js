const fsPromises = require("node:fs/promises");

async function crearArchivoConPromises() {
  const data = "Este es un archivo creado con promises en fs";
  try {
    await fsPromises.writeFile("nuevoArchivo.txt", data, "utf-8");
    console.log("El archivo se creo correctamente");
  } catch (err) {
    console.log("Hubo un error al crear el archivo: ", err);
  }
}

crearArchivoConPromises();
