// Service - Camada de lógica de negócios
const produtos = require('../data/produtos');

// Obter todos os produtos
function getAll() {
  return produtos;
}

// Obter produto por ID
function getById(id) {
  return produtos.find(p => p.id === id);
}

// Criar novo produto
function create(data) {
  const { nome, descricao, preco, categoria, emEstoque } = data;

  // Gerar ID automático
  const novoId = produtos.length > 0 
    ? Math.max(...produtos.map(p => p.id)) + 1 
    : 1;

  const novoProduto = {
    id: novoId,
    nome: nome.trim(),
    descricao: descricao.trim(),
    preco: preco,
    categoria: categoria.trim(),
    emEstoque: emEstoque !== undefined ? Boolean(emEstoque) : true
  };

  produtos.push(novoProduto);
  return novoProduto;
}

// Atualizar produto
function update(id, data) {
  const { nome, descricao, preco, categoria, emEstoque } = data;
  const produtoIndex = produtos.findIndex(p => p.id === id);

  if (produtoIndex === -1) {
    return null;
  }

  produtos[produtoIndex] = {
    id: id,
    nome: nome.trim(),
    descricao: descricao.trim(),
    preco: preco,
    categoria: categoria.trim(),
    emEstoque: emEstoque !== undefined ? Boolean(emEstoque) : produtos[produtoIndex].emEstoque
  };

  return produtos[produtoIndex];
}

// Excluir produto
function remove(id) {
  const produtoIndex = produtos.findIndex(p => p.id === id);

  if (produtoIndex === -1) {
    return null;
  }

  return produtos.splice(produtoIndex, 1)[0];
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};

