const express = require("express");
const app = express();

const usuariosRoutes = require("./routes/usuarios");

app.use(express.json());
app.use(express.static("public"));
app.use(usuariosRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
