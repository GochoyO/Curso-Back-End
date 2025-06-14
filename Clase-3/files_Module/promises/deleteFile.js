const fsPromises = require("node:fs/promises");
const path = require("node:path");

const ruta = path.join(__dirname, "nuevoArchivo.txt");
console.log(ruta);

async function eliminarArchivosConPromises() {
  try {
    await fsPromises.unlink(ruta);
    console.log("El archivo se elimino correctamente");
  } catch (err) {
    console.log("Hubo un error al eliminar el archivo", err);
  }
}

eliminarArchivosConPromises();
