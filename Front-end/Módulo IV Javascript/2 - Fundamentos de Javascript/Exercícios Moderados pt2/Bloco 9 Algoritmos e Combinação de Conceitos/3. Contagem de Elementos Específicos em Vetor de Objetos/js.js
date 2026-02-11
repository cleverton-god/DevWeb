let produtos = [
    { nome: "Mouse", preco: 50, emEstoque: true },
    { nome: "Teclado", preco: 120, emEstoque: false },
    { nome: "Monitor", preco: 800, emEstoque: true }
];

function contarEmEstoque(lista) {
    let total = 0;

    for (let item of lista) {
        if (item.emEstoque === true) {
            total++;
        }
    }

    return total;
}

console.log("Produtos em estoque:", contarEmEstoque(produtos));
