//Importanto todos los modulos necesarios
const express = require("express");
const Producto = require("./models/producto");
//const conectDB = require("./config/db");
const connectDB = require("./config/db");

//Crear la instancia de express
const app = express();
const PORT = 3000;

//Conectar a la base de datos
connectDB();

//Middleware para parsear cuerpos de la peticion en formato JSON
app.use(express.json());
//Middleware para saber en que ruta y con que etodo accedio un usario
app.use((req, res, next) => {
  console.log(
    `el usuario accedio a la ruta ${req.url} y con el metodo ${req.method}`
  );
  next();           //una vez que esto se ejecute va a seguir por su via normal
});

//Endpoint para lectura (R crud) y se hace con el metodo get
app.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find(); // Obtener todos los productos de la base de datos: find()
    res.json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: "error al obtener los productos de la base de datos :C",
    });
  }
});

//Endpoint para escritura (C crud) y se hace con el metodo post
app.post("/productos", async (req, res) => {
  try {
    // if(!req.body.nombre || !req.body.precio || !req.body.descripcion){
    //     res.status(400).json({mensaje: "No se puede completar el guardado revisa tus datos"})
    // }
    const nuevoProducto = new Producto(req.body); // Crear una instancia del modelo Producto con los datos del cuerpo de la petición
    await nuevoProducto.save(); // Guardar el nuevo producto en la base de datos
    res
      .status(201)
      .json({ mensaje: "El producto se creo y guardo en la DB con exito" });
  } catch (error) {
    res.status(400).json({ error: "error al crear el producto" }); // Manejo de errores si ocurre un problema al guardar el producto
  }
});

//Metodo PUT para actualizar un dato (U crud)
app.put("/productos/:id", async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body
    ); // Buscar el producto por ID y actualizarlo con los datos del cuerpo de la petición
    // Si no se encuentra el producto, findByIdAndUpdate devuelve null
    if (!productoActualizado) {
      res.status(404).json({ error: "producto no encontrado" });
    }
    res.json(productoActualizado); // Responder con el producto actualizado
  } catch (err) {
    res.status(400).json({ mensaje: "error al actualizar el producto" });
  }
});

//Metodo DELETE para eliminar un producto (D crud)
app.delete("/productos/:id", async (req, res) => {
  try {
    const productoEliminar = await Producto.findByIdAndDelete(
      req.params.id,
      req.body
    ); // Buscar el producto por ID y lo elimina con el id
    // Si no se encuentra el producto, findByIdAndDelete devuelve null
    if (!productoEliminado) {
      res.status(404).json({ error: "producto no encontrado" });
    }
    res.json(productoEliminado); // Responder con el producto eliminado ok
  } catch (err) {
    res.status(400).json({ mensaje: "error al elminar producto" });
  }
});

//Inicializar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
