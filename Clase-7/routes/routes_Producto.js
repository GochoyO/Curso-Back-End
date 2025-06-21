const express = require("express"); // Opcional para usar express
const router = express.Router(); // Crea un enrutador de Express
const {
  buscarProductos,
  buscarProductosId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/controller_Product"); // Importa las funciones del controlador

//Ruta para obtener todos los productos
router.get("/", buscarProductos);
//Ruta para obtener todos los productos
router.get("/:id", buscarProductosId);
//Ruta para crear un nuevo producto
router.post("/", crearProducto);
//Ruta para actualizar un producto por ID
router.put("/:id", actualizarProducto);
//Ruta para eliminar un producto por ID
router.delete("/:id", eliminarProducto);

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros archivos
