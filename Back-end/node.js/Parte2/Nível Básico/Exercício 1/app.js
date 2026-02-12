const operacoes = require("./operacoes");

console.log("Soma:", operacoes.somar(10, 5));
console.log("Subtração:", operacoes.subtrair(10, 5));
console.log("Multiplicação:", operacoes.multiplicar(10, 5));
console.log("Divisão:", operacoes.dividir(10, 5));

console.log("Divisão por zero:", operacoes.dividir(10, 0));
