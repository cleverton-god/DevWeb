let total = 0;
let preco;

while (true) {
  preco = Number(prompt("Digite o preço do produto (ou 1 para finalizar):"));

  if (preco === 1) {
    break;
  }

  total += preco;
}

console.log("Total da compra: R$", total);
