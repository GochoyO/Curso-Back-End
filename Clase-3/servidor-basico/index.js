const http = require("node:http");

const HOST = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(
    "El usuario accedio a nuestra api por medio del metodo",
    req.method,
    "por la url: ",
    req.url
  );
  res.statusCode = 200;
   // res.setHeader("Content-Type", "text/plain");
   //   res.end("Hola desde mi servidor");
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hola desde mi servidor</h1>");
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}/`);
});
