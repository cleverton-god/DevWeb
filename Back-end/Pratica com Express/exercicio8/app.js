const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

let livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
  { id: 2, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 },
  { id: 3, titulo: "1984", autor: "George Orwell", ano: 1949 }
];

app.get('/livros', (req, res) => res.json(livros));

app.get('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find(l => l.id === id);
  if (!livro) return res.status(404).json({ mensagem: "Livro não encontrado" });
  res.json(livro);
});

app.post('/livros', (req, res) => {
  const { titulo, autor, ano } = req.body;
  if (!titulo || !autor || !ano) return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });

  const novoLivro = {
    id: livros.length ? livros[livros.length - 1].id + 1 : 1,
    titulo, autor, ano
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex(l => l.id === id);
  if (index === -1) return res.status(404).json({ mensagem: "Livro não encontrado" });

  livros[index] = { ...livros[index], ...req.body };
  res.json(livros[index]);
});

app.delete('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex(l => l.id === id);
  if (index === -1) return res.status(404).json({ mensagem: "Livro não encontrado" });

  livros.splice(index, 1);
  res.json({ mensagem: `Livro com id ${id} removido com sucesso` });
});

app.listen(3000, () => console.log('API Biblioteca rodando na porta 3000'));