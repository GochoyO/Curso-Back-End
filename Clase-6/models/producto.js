//Schema del producto
const mongoose = require("mongoose"); // Importar mongoose para crear el esquema del producto

//Crear el esquema del producto
const productSchema = new mongoose.Schema({
  nombre: {
    type: String, // Tipo de dato String para el nombre del producto
    required: true, // Campo obligatorio
    minlength: 3, // Longitud mínima de 3 caracteres
    maxlength: 50, // Longitud máxima de 50 caracteres
    trim: true, // Eliminar espacios en blanco al inicio y al final
  },
  precio: {
    type: Number, // Tipo de dato Number para el precio del producto
    required: true, // Campo obligatorio
    min: 0, // Precio mínimo de 0
    max: 1000000, // Precio máximo de 1,000,000
  },
  descripcion: {
    type: String, // Tipo de dato String para la descripción del producto
    maxlength: 200, // Longitud máxima de 200 caracteres
    minlength: 10, // Longitud mínima de 10 caracteres
    require: true, // Campo obligatorio
    trim: true, // Eliminar espacios en blanco al inicio y al final
  },
});

const Product = mongoose.model("Producto", productSchema); // Crear el modelo Producto a partir del esquema productSchema

// Exportar el modelo Producto para que pueda ser utilizado en otros archivos
module.exports = Product;
