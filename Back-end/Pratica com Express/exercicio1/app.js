const express = require("express");
const app = express();

const PORT = 3000;

app.get("/sobre", (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Sobre o Sistema</title>
        </head>
        <body>
          <h1>Sistema de Cadastro</h1>
        </body>
      </html>
    `);
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});