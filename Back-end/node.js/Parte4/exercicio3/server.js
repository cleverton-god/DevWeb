const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    const url = req.url;

    switch (url) {
        case '/':
            res.statusCode = 200;
            res.end('Página inicial');
            break;
        case '/sobre':
            res.statusCode = 200;
            res.end('Informações sobre o projeto: Este é um servidor simples.');
            break;
        case '/contato':
            res.statusCode = 200;
            res.end('Informações de contato: email@exemplo.com');
            break;
        default:
            res.statusCode = 404;
            res.end('Erro 404: Página não encontrada.');
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
