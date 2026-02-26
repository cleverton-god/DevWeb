const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;
const usuarios = [];

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/quantidade", (req, res) => {
  console.log(`Quantidade de usuários: ${usuarios.length}`);
  res.json({ quantidade: usuarios.length });
});

app.post("/usuarios", (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});