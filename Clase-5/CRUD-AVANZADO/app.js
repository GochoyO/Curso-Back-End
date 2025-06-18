const express = require("express");
const fsPromises = require("node:fs/promises");
const path = require("node:path");

const app = express(); //Creando instancia
const PORT = 3000;

app.use(express.json()); //Nos va a permitir usar req.body

app.use((req, res, next) => {
  console.log(
    `El usuario accedio a la ruta ${req.url}, con el metodo ${req.method}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Bienvenido a mi servidor");
});

//Read (GET) de nuestra aplicacion CRUD
app.get("/productos", async (req, res) => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "datos.json"),
      "utf-8"
    );
    const datajson = JSON.parse(data);

    res.json(datajson);
  } catch (err) {
    console.log(`Error al leer el archivo ${err}`);
    res.status(500).json({ mensajeError: "Error interno del servidor" });
  }
});

//CREATE (POST) de nuestro CRUD
app.post("/productos", async (req, res) => {
  try {
    const nuevoProducto = req.body;
    if (!nuevoProducto.nombre && !nuevoProducto.precio) {
      return res.status(400).send("Datos son invalidos");
    }

    nuevoProducto.id = Date.now(); // un identificador simpe unico
    const producto = await fsPromises.readFile(
      path.join(__dirname, "datos.json"),
      "utf-8"
    );
    const productoJson = JSON.parse(producto);

    productoJson.push(nuevoProducto);

    await fsPromises.writeFile(
      path.join(__dirname, "datos.json"),
      JSON.stringify(productoJson, null, 2)
    );

    res.status(201).send("El producto se agrego correctamente");
    console.log(`Se agrego el producto ${nuevoProducto}`);
  } catch (err) {
    console.log(`Ocurrio un error al escribir el archivo ${err}`);
    res.status(500).send("Error interno del servidor");
  }
});

//
//UPDATE (PUT) de nuestro CRUD
app.post("/productos", async (req, res) => {
  try {
    const nuevoProducto = req.body;
    if (!nuevoProducto.nombre && !nuevoProducto.precio) {
      return res.status(400).send("Datos son invalidos");
    }

    nuevoProducto.id = Date.now(); // un identificador simpe unico
    const producto = await fsPromises.readFile(
      path.join(__dirname, "datos.json"),
      "utf-8"
    );
    const productoJson = JSON.parse(producto);

    productoJson.push(nuevoProducto);

    await fsPromises.putFile(
      path.join(__dirname, "datos.json"),
      JSON.stringify(productoJson, null, 2)
    );

    res.status(201).send("El producto se agrego correctamente");
    console.log(`Se agrego el producto ${nuevoProducto}`);
  } catch (err) {
    console.log(`Ocurrio un error al escribir el archivo ${err}`);
    res.status(500).send("Error interno del servidor");
  }
});
app.listen(PORT, () => {
  console.log(`El server se ejecuta en http://localhost:${PORT}`);
});
