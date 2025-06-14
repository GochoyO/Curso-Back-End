const express = require("express");
const app = express(); //Creando una instancia para express (creamos la aplicacion)

const PORT = 3000;
const HOST = "localhost";

//Middleware para parsear el cuerpo de la peticion (body) en formato JSON
app.use(express.json()); // Esto es equivalente a la logica de res.on(data) y req.on(end) esto es una forma de decirle a express que vamos a recibir datos en formato JSON en el cuerpo de la peticion (body) y que los vamos a poder acceder directamente con req.body

//Ruta raiz acceder con metodo get
app.get("/", (req, res) => {
  //Simplica la respuesta enormemente
  res.send("Hola esta es mi API desde express");
});

//Ruta sobre mi (about)
app.get("/about", (req, res) => {
  console.log(`Se accedio a la ruta ${req.url} con el metodo ${req.method}`);
  const htmlResponse =
    "<h1>Cosas sobre mi</h1><ul><li>Me gusta la musica</li><li>Me gusta la tecnologia y el desarrollo</li></ul>";
  res.send(htmlResponse);
});

//Ruta sobre contacto (POST)
app.post("/contact", (req, res) => {
  console.log(`Se accedio a la ruta ${req.url} con el metodo ${req.method}`);
  //Gracias a app.use(express.json()) los datos del cuerpo de la peticion estan disponibles direcamente en el metodo body
  const contacData = req.body; //Esto ya se puede enviar a una base de datos
  console.log(`Los datos de contacto recibidos:`, contacData);

  const nombre = req.body.nombre; //Esto nos permite acceder a un parametro de nuestro body (OJO: El parametro tiene que tener el mismo nombre de lo que se envia);
  console.log(`Pueden mostrar directamente el valor de nombre con: ${nombre}`); //el nombre es una variable ahora de tipo string
  console.log(typeof nombre); //saber el tipo de dato

  //respuesta despues de recibir los datos
  res.send(
    `Gracias por contactarnos los datos recibidos fueron: ${JSON.stringify(
      contacData
    )}`
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
