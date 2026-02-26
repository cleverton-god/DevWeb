const express = require("express");
const app = express();

const PORT = 3000;

const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500.00 },
    { id: 2, nome: 'Mouse', preco: 50.00 },
    { id: 3, nome: 'Teclado', preco: 150.00 }
];

app.get('/produtos', (req, res) => {
    res.json(produtos); 
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});