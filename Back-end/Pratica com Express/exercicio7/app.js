const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')));

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
  if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
  res.json(produto);
});

app.post('/produtos', (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || preco == null) return res.status(400).json({ mensagem: "Nome e preço são obrigatórios" });

  const novoProduto = {
    id: produtos.length ? produtos[produtos.length - 1].id + 1 : 1,
    nome,
    preco
  };

  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

app.put('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const novosDados = req.body;
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ mensagem: "Produto não encontrado" });

  produtos[index] = { ...produtos[index], ...novosDados };
  res.json(produtos[index]);
});

app.delete('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ mensagem: "Produto não encontrado" });

  produtos.splice(index, 1);
  res.json({ mensagem: `Produto com id ${id} removido com sucesso` });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});