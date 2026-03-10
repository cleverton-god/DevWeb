const express = require("express");
const path = require("path");
const app = express();

const usuariosRoutes = require("./routes/usuarios");

app.use(express.json());
app.use(express.static("public"));

// Rotas de API
app.use("/api/usuarios", usuariosRoutes);

// Rotas de páginas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/cadastro", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.get("/lista", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'lista.html'));
});

app.get("/editar/:id", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'editar.html'));
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
