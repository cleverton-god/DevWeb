const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    const urlAcessada = req.url;
    
    const metodoHttp = req.method;

    console.log(`URL acessada: ${urlAcessada} | Método: ${metodoHttp}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(`Você acessou a URL: ${urlAcessada} usando o método ${metodoHttp}`);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
