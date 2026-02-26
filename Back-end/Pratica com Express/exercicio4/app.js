const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json());

const produtos = [
  { id: 1, nome: "Mouse", preco: 50 },
  { id: 2, nome: "Teclado", preco: 120 },
  { id: 3, nome: "Monitor", preco: 800 }
];
let contadorId = 1;

app.post("/produtos", (req, res) => {
  const produto = req.body;
  produto.id = contadorId++;
  produtos.push(produto);
  res.status(201).json(produto);
});

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) return res.status(404).send("Produto não encontrado");

  res.json(produto);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});