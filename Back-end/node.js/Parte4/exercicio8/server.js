const http = require('http');

const usuarios = ['Ana', 'Carlos', 'Mariana']; 

const server = http.createServer((req, res) => {
  console.log('URL:', req.url);
  console.log('Método:', req.method);

  if (req.url === '/usuarios') {

    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(usuarios));
    }

    else if (req.method === 'POST') {
      usuarios.push('Novo Usuário'); 
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.end('Usuário criado');
    }

    else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Método não permitido');
    }

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Rota não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});