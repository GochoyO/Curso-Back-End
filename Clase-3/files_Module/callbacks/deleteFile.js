const fs = require("node:fs");

//Como eliminar un archivo con file system en js

fs.unlink("nuevoArchivo.txt", (err) => {
  if (err) {
    console.log("No se pudo eliminar el archivo", err);
    return;
  }
  console.log("El archivo se elimino correctamente");
});
