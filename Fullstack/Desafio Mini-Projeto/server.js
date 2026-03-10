const express = require('express');
const produtosRouter = require('./routes/produtos');

const app = express();
const PORT = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para logging de requisições
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Rota principal
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API de Produtos - Mini-Projeto',
    versao: '1.0.0',
    endpoints: {
      getTodos: 'GET /produtos',
      getPorId: 'GET /produtos/:id',
      post: 'POST /produtos',
      put: 'PUT /produtos/:id',
      delete: 'DELETE /produtos/:id'
    }
  });
});

// Usar rotas de produtos
app.use('/produtos', produtosRouter);

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: 'Rota não encontrada'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`API de Produtos - Desafio Mini-Projeto`);
  console.log(`Endpoints disponíveis:`);
  console.log(`  GET    /produtos     - Listar todos os produtos`);
  console.log(`  GET    /produtos/:id - Buscar produto por ID`);
  console.log(`  POST   /produtos     - Criar novo produto`);
  console.log(`  PUT    /produtos/:id - Atualizar produto`);
  console.log(`  DELETE /produtos/:id - Excluir produto`);
});

module.exports = app;

