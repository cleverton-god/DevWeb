// Validação de dados dos produtos

function validarProduto(data) {
  const erros = [];
  const { nome, descricao, preco, categoria } = data;

  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    erros.push('Nome é obrigatório');
  }

  if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
    erros.push('Descrição é obrigatória');
  }

  if (preco === undefined || typeof preco !== 'number' || preco <= 0) {
    erros.push('Preço deve ser um número maior que zero');
  }

  if (!categoria || typeof categoria !== 'string' || categoria.trim() === '') {
    erros.push('Categoria é obrigatória');
  }

  return erros;
}

module.exports = {
  validarProduto
};

