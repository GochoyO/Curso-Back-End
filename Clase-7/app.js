const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors"); // Importa el middleware CORS para manejar solicitudes de diferentes orígenes
const morgan = require("morgan"); // Importa el middleware Morgan para registrar las solicitudes entrantes

const productosRoutes = require("./routes/routes_Producto"); // Importa las rutas de productos

const app = express(); // Crea una instancia de Express
const PORT = 3000; // Define el puerto en el que se ejecutará la aplicación

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json()); // Permite que la aplicación maneje datos JSON en las solicitudes y acceder al metodo req.body
// Middleware para manejar las cors (Cross-Origin Resource Sharing)
app.use(cors()); // Permite que la aplicación acepte solicitudes de diferentes orígenes
// app.use(cors({origin: 'http://localhost:3000'})); // Permite solicitudes desde el origen especificado
// Middleware logger para registrar las solicitudes entrantes con MORGAN
app.use(morgan("dev")); // Registra las solicitudes entrantes en la consola

connectDB(); // Conecta a la base de datos MongoDB

app.get("/", (req, res) => {
  res.send("Si quieres acceder a nuestros visita la ruta /productos"); // Responde con un mensaje simple al acceder a la ruta raíz
});

app.use("/productos", productosRoutes); // Usa las rutas de productos para manejar las solicitudes a la ruta /productos

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada"); // Maneja las rutas no encontradas y responde con un mensaje de error
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); // Inicia el servidor y muestra un mensaje en la consola
});
