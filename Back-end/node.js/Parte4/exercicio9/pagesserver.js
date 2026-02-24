const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  // Permitir apenas método GET
  if (method !== "GET") {
    res.writeHead(405, { "Content-Type": "text/html" });
    res.end("<h1>405 - Método não permitido</h1>");
    return;
  }

  let filePath = "";

  if (url === "/" || url === "/home") {
    filePath = path.join(__dirname, "pages", "index.html");
  } 
  else if (url === "/sobre") {
    filePath = path.join(__dirname, "pages", "sobre.html");
  } 
  else if (url === "/contato") {
    filePath = path.join(__dirname, "pages", "contato.html");
  } 
  else {
    filePath = path.join(__dirname, "pages", "404.html");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500 - Erro interno do servidor</h1>");
    } else {
      res.writeHead(url === "/naoexiste" ? 404 : 200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});