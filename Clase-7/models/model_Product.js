const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true, // Elimina espacios en blanco al inicio y al final
  },
  precio: {
    type: Number,
    required: true,
    min: 0, // Asegura que el precio no sea negativo
  },
  descripcion: {
    type: String,
    required: true,
    trim: true, // Elimina espacios en blanco al inicio y al final
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product; // Exporta el modelo Product para usarlo en otros archivos
