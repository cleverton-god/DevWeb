const express = require('express');
const router = express.Router();
const produtosService = require('../services/produtosService');
const { validarProduto } = require('../utils/validacao');

// GET /produtos - Listar todos os produtos
router.get('/', (req, res) => {
  const produtos = produtosService.getAll();
  
  res.status(200).json({
    sucesso: true,
    quantidade: produtos.length,
    dados: produtos
  });
});

// GET /produtos/:id - Buscar produto por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtosService.getById(id);

  if (!produto) {
    return res.status(404).json({
      sucesso: false,
      mensagem: 'Produto não encontrado'
    });
  }

  res.status(200).json({
    sucesso: true,
    dados: produto
  });
});

// POST /produtos - Criar novo produto
router.post('/', (req, res) => {
  const { nome, descricao, preco, categoria, emEstoque } = req.body;

  // Validação usando utilitário
  const erros = validarProduto({ nome, descricao, preco, categoria });

  if (erros.length > 0) {
    return res.status(400).json({
      sucesso: false,
      erros: erros
    });
  }

  const novoProduto = produtosService.create({ nome, descricao, preco, categoria, emEstoque });

  res.status(201).json({
    sucesso: true,
    mensagem: 'Produto criado com sucesso',
    dados: novoProduto
  });
});

// PUT /produtos/:id - Atualizar produto
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  // Verificar se produto existe
  const produtoExistente = produtosService.getById(id);
  if (!produtoExistente) {
    return res.status(404).json({
      sucesso: false,
      mensagem: 'Produto não encontrado'
    });
  }

  const { nome, descricao, preco, categoria, emEstoque } = req.body;

  // Validação usando utilitário
  const erros = validarProduto({ nome, descricao, preco, categoria });

  if (erros.length > 0) {
    return res.status(400).json({
      sucesso: false,
      erros: erros
    });
  }

  const produtoAtualizado = produtosService.update(id, { nome, descricao, preco, categoria, emEstoque });

  res.status(200).json({
    sucesso: true,
    mensagem: 'Produto atualizado com sucesso',
    dados: produtoAtualizado
  });
});

// DELETE /produtos/:id - Excluir produto
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const produtoRemovido = produtosService.remove(id);

  if (!produtoRemovido) {
    return res.status(404).json({
      sucesso: false,
      mensagem: 'Produto não encontrado'
    });
  }

  res.status(200).json({
    sucesso: true,
    mensagem: 'Produto excluído com sucesso',
    dados: produtoRemovido
  });
});

module.exports = router;

