const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

const produtos = [];

app.post("/produtos", (req, res) => {
  const produto = req.body;
  produtos.push(produto);
  res.status(201).json(produto);
});

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});