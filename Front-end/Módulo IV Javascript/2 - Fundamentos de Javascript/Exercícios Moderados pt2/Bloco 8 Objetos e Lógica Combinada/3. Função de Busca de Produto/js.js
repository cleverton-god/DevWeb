function buscarProduto(nomeProduto) {
  for (let item of produtos) {
    if (item.nome.toLowerCase() === nomeProduto.toLowerCase()) {
      return item; 
    }
  }
  return null; 
}

const pesquisa = prompt("Digite o nome de um produto para buscar:");
const resultado = buscarProduto(pesquisa);

console.log(resultado);
