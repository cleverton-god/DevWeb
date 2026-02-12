let produtos = [
  { nome: "Teclado", preco: 120, emEstoque: true },
  { nome: "Mouse", preco: 80, emEstoque: false },
  { nome: "Monitor", preco: 900, emEstoque: true }
];

for (let item of produtos) {
  console.log(`Produto: ${item.nome} — Preço: R$ ${item.preco}`);
}
