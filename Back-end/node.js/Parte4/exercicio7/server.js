const http = require('http');

const server = http.createServer((req, res) => {
  console.log('URL:', req.url);
  console.log('Método HTTP:', req.method);

  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Você fez uma requisição GET!');
  } 
  else if (req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Você fez uma requisição POST!');
  } 
  else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Método não permitido.');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});