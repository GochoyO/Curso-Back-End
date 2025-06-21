const Producto = require("../models/model_Product");
const mongoose = require("mongoose");
//buscar todos los productos

const buscarProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); // Busca todos los productos en la base de datos
    res.status(200).json(productos); // Responde con los productos encontrados
  } catch (error) {
    console.error("Error al buscar productos:", error);
    res.status(500).json({ message: "Error al buscar productos" });
  }
};

//buscar productos por el identificador

const buscarProductosId = async (req, res) => {
  const { id } = req.params;

  // Validar que el id sea un ObjectId válido de MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensaje: "El id no es válido o no existe" });
  }

  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.status(200).json(producto); // Responde con el producto encontrado
  } catch (error) {
    console.error("Error al buscar producto por Id:", error);
    res.status(500).json({ message: "Error al buscar producto por Id" });
  }
};



// Función para crear un nuevo producto
const crearProducto = async (req, res) => {
  const { nombre, precio, descripcion } = req.body; // Extrae los datos del cuerpo de la solicitud

  if (!nombre || !precio || !descripcion) {
    res.status(400).json({ mensaje: "Todos los parametros son requeridos" });
  }

  try {
    const nuevoProducto = new Producto({ nombre, precio, descripcion });

    await nuevoProducto.save(); //Para guardar los datos en nuestra database
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ mensaje: "Error al crear producto", err });
  }
};

//Función para actualizar un producto
const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, descripcion } = req.body; // Extrae los datos del cuerpo de la solicitud

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensaje: "El id no es valido o no existe" });
  }

  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      id,
      { nombre, precio, descripcion },
      { new: true, runValidators: true }
    );

    if (!productoActualizado) {
      return res
        .status(404)
        .json({ mensaje: "El elemeto que estas buscando no existe" });
    }

    res.status(200).json({
      mensaje: "El producto se actualizo correctamente",
      productoActualizado,
    });
  } catch (err) {
    res.status(500).json({ mensaje: "Error al actualizar el producto", err });
  }
};

// Función para eliminar un producto
const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensaje: "El id no es valido o no existe" });
  }

  try {
    const productoEliminado = await Producto.findByIdAndDelete(id);

    if (!productoEliminado) {
      return res
        .status(404)
        .json({ mensaje: "El elemeto que estas buscando no existe" });
    }

    res.status(200).json({
      mensaje: "El producto se elimino correctamente",
      productoEliminado,
    });
  } catch (err) {
    res.status(500).json({ mensaje: "Error al eliminar el producto", err });
  }
};

module.exports = {
  buscarProductos,
  buscarProductosId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
