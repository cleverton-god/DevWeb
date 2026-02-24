const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Página inicial');
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});