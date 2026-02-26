// 🟢 ETAPA 1 — Servidor Operacional
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando!');
});

// 🟢 ETAPA 2 — Primeira Rota de API
app.get('/status', (req, res) => {
  res.json({
    sistema: 'API de Usuários',
    versao: '1.0.0',
    status: 'online'
  });
});

// 🟢 ETAPA 3 — Armazenamento em Memória
let usuarios = [
    { nome: 'João Silva', idade: 25 },
  { nome: 'Maria Oliveira', idade: 30 },
  { nome: 'Carlos Santos', idade: 22 }
];

// 🟡 ETAPA 4 — Criando Cadastro (POST)
app.post('/usuarios', (req, res) => {
  const { nome, idade } = req.body;
  if (!nome || typeof nome !== 'string' || !idade || typeof idade !== 'number') {
    return res.status(400).json({ mensagem: 'Dados inválidos: nome deve ser texto e idade número' });
  }
  const novoUsuario = { nome, idade };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// 🟡 ETAPA 5 — Listando Dados (GET)
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// 🟡 ETAPA 6 — Buscando Usuário Específico
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= usuarios.length) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
  res.json(usuarios[id]);
});

// 🟠 ETAPA 7 — Removendo Usuários
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= usuarios.length) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
  usuarios.splice(id, 1);
  res.json({ mensagem: `Usuário de id ${id} removido com sucesso` });
});

// 🔴 ETAPA 8 — API Completa (Desafio Final)
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= usuarios.length) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
  const { nome, idade } = req.body;
  if ((nome && typeof nome !== 'string') || (idade && typeof idade !== 'number')) {
    return res.status(400).json({ mensagem: 'Dados inválidos: nome deve ser texto e idade número' });
  }
  usuarios[id] = { ...usuarios[id], ...req.body };
  res.json(usuarios[id]);
});

app.listen(3000, () => {
  console.log('API de Usuários rodando na porta 3000');
});