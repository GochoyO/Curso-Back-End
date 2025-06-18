/**const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:Gocho25@cluster0.b1idthj.mongodb.net/<database>"; // Reemplaza con tu URI de conexión a MongoDB
**/
const mongoose = require('mongoose');
//const uri = "mongodb+srv://admin:Gocho25@cluster0.acoker7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = "mongodb+srv://admin:Gocho25@cluster0.bbwhvyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const options = {
  useNewUrlParser: true, // Opciones recomendadas para evitar advertencias de deprecación
  useUnifiedTopology: true, // Opciones recomendadas para evitar advertencias de deprecación
};

async function connectDB() {
  try {
    await mongoose.connect(uri, options); // Conectar a la base de datos MongoDB
    console.log("Conexión a la base de datos fue exitosa");
  } catch (error) {
    console.log("Error en la conexión de mongodb", error);
    process.exit(1); //Opcional: Terminar la aplicación si la conexión falla
  }
}

module.exports = connectDB; //exportar la función connectDB para que pueda ser utilizada en otros archivos
