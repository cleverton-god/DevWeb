const express = require('express');
const app = express();

app.use(express.json());

let produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 150 }
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  res.json(produto);
});

app.put('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const novosDados = req.body;

  const index = produtos.findIndex(produto => produto.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  produtos[index] = { ...produtos[index], ...novosDados };

  res.json(produtos[index]);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});