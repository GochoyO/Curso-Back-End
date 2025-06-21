
const mongoose = require("mongoose");
require('dotenv').config();
const {DB_URI} = process.env;
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("La conexión a mongo a sido exitosa 🚀");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); // Termina el proceso si no se puede conectar
  }
};

module.exports = connectDB; // Exporta la función connectDB para usarla en otros archivos
