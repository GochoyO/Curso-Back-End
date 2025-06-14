const http = require("node:http");

const PORT = 3000;
const HOST = "localhost";
const htmlResponse =
  "<h1>Cosas sobre mi</h1><ul><li>Me gusta la musica</li><li>Me gusta la tecnologia y el desarrollo</li></ul>";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    console.log(
      `El usuario hizo una peticion a la ruta ${req.url} y el metodo ${req.method}`
    );
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.end("Esta es la ruta principal");
  } else if (req.url === "/about" && req.method === "GET") {
    console.log(
      `El usuario hizo una peticion a la ruta ${req.url} y el metodo ${req.method}`
    );
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end(htmlResponse);
  } else if (req.url === "/contact" && req.method === "POST") {
    console.log(
      `El usuario hizo una peticion a la ruta ${req.url} y el metodo ${req.method}`
    );
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); //Esto ya lo podemos guardar en una base de datos
      //const data = JSON.parse(body): //Convertir de text (string) a Object (Objeto)
      //const data = JSON.stringify(body); //Convertir de object a string
    });
    req.on("end", () => {
      console.log(`La data fue recibida ${body}`);
      res.writeHead(200, "OK", { "Content-Type": "text/plain" });
      res.end(`Datos recibidos correctamente - ${body}`);
    });
  } else {
    console.log(
      `El usuario hizo una peticion a la ruta ${req.url} y el metodo ${req.method}`
    );
    res.writeHead(404, "Bad Request", { "Content-Type": "text/html" });
    const regresa = "<h1>La pagina que estas buscando no existe</h1>";
    res.end(regresa);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`El servidor se ejecuta en: http://${HOST}:${PORT}`);
});
