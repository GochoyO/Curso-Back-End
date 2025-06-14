const express = require("express");
const app = express(); 

const PORT = 3000;
const HOST = "localhost";


app.use(express.json()); //Middleware para parsear el cuerpo de la peticion (body) en formato JSON

app.get("/", (req, res) => {
  //con express todoes más facil
  res.send("Hola esta es mi API prncipal desde express");
});


//Ruta sobre contacto (POST)
app.post("/saludo-personalizado", (req, res) => {
  console.log(`Se accedio a la ruta ${req.url} con el metodo ${req.method}`);
  //Usando app.use(express.json()) 
  //respuesta despues de recibir los datos
   res.send(
    `Hola ${req.body.nombre}, tienes ${req.body.edad} años. ¡Bienvenida a nuestra API!`  
  );

  //JSON.stringify() convierte un objeto a un string
  //JSON.parse() convierte un string a un objeto
  //res.json() convierte un objeto a un string y lo envia como respuesta
  //res.send() envia un string como respuesta
});

//Rutas no encontradas (404)
app.use((req, res) => {
  console.log(`Se accedio a la ruta ${req.url} con el metodo ${res.method}`);
  const body = "404 - Recurso no encontrado en Express";
  res.status(404).send(body);
}); // Middleware para manejar rutas no encontradas (404) en Express

//Iniciar el servidor
app.listen(PORT, HOST, () => {
  console.log(`El servidor se esta ejecutando en: http://${HOST}:${PORT}`);
});
