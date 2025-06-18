const express = require("express");
const app = express();

//Middleware para parsear el cuerpo de las peticiones JSON
// Esto permite que el servidor pueda entender los datos JSON enviados en el cuerpo de las peticiones
app.use(express.json());

//Lista de productos simulada
// Esta lista es un arreglo de objetos, cada uno representando un producto con un id, nombre y precio
let productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
];

// Middleware para registrar las rutas y métodos de acceso
// Este middleware se ejecuta en cada solicitud y muestra en la consola la ruta y el método HTTP utilizado
app.use((req, res, next) => {
  console.log(
    `El usuario accedio a la ruta ${req.url} con el metodo ${req.method}`
  );
  next(); // Llama a next() para pasar al siguiente middleware o ruta, esto es importante para que la solicitud continúe su procesamiento
});

// Rutas del servidor
// Esta ruta maneja las solicitudes GET a la raíz del servidor
app.get("/", (req, res) => {
  res.send("Bienvenido a mi servidor");
});

// Esta ruta maneja las solicitudes GET a la lista de productos
// Aquí se devuelve la lista de productos en formato JSON
app.get("/productos", (req, res) => {
  /*
    // Convertir el arreglo de productos a una cadena JSON
    // Esto es una forma alternativa de enviar la respuesta, pero no es necesario
    // ya que Express maneja automáticamente la conversión a JSON cuando se usa res.json()
        let productosString = JSON.stringify(productos);
        res.status(200).send(productosString);
    */

  res.json(productos); // Enviar la lista de productos como respuesta en formato JSON
  console.log("Se accedio a la lista de productos");
});

// Esta ruta maneja las solicitudes POST para agregar un nuevo producto
// Aquí se espera que el cuerpo de la solicitud contenga los datos del nuevo producto
app.post("/productos", (req, res) => {
  const nuevoProducto = req.body; // Obtener el nuevo producto del cuerpo de la solicitud
  nuevoProducto.id = Date.now(); // Asignar un ID único basado en la marca de tiempo actual
  productos.push(nuevoProducto); // Agregar el nuevo producto a la lista de productos
  res.status(201).json(nuevoProducto); //Codigo 201 representa que se creo un elemento
  console.log(`El producto nuevo se guardo correctamente ${nuevoProducto}`);
});

//Esto actualizara un producto que ya existe
app.put("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id); // Obtener el ID del producto desde los parámetros de la URL y convertirlo a un número entero en caso de que sea necesario
  const index = productos.findIndex((p) => p.id === id); //Retorna un -1 si el elemento no existe o coincide

  console.log("Hasta aca todo bien", productos[index], index); // Verificar si el producto con el ID especificado existe en la lista de productos

  if (index !== -1) {
    productos[index] = { ...productos[index], ...req.body }; // Actualizar el producto existente con los nuevos datos del cuerpo de la solicitud
    // El operador spread (...) se utiliza para combinar el producto existente con los nuevos datos
    // Esto permite actualizar solo los campos que se envían en la solicitud, manteniendo los demás campos intactos
    console.log("Producto actualizado:", productos[index]); // Mostrar el producto actualizado en la consola
    // Responder con el producto actualizado
    res.status(200).json(productos[index]);
  } else {
    res.status(404).json({ mensaje: "Producto no encontrado" }); // Si el producto no se encuentra, responder con un error 404
  }
});

// Esta ruta maneja las solicitudes DELETE para eliminar un producto por su ID
app.delete("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id); // Obtener el ID del producto desde los parámetros de la URL y convertirlo a un número entero
  const index = productos.findIndex((p) => p.id === id); // Buscar el índice del producto con el ID especificado

  if (index !== -1) {
    const eliminado = productos.splice(index, 1); // Eliminar el producto del arreglo utilizando splice, que modifica el arreglo original y devuelve un nuevo arreglo con los elementos eliminados
    // El primer argumento de splice es el índice desde donde se eliminará, y el segundo argumento es la cantidad de elementos a eliminar
    res.json({ mensaje: "Elemento borrado con exito", Elemento: eliminado }); // Responder con un mensaje de éxito y el elemento eliminado
    console.log("Producto eliminado:", eliminado); // Mostrar el producto eliminado en la consola
  } else {
    res.status(404).json({ MessageError: "el elemento no fue encontrado" }); // Si el producto no se encuentra, responder con un error 404
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
