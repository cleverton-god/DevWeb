const operacoes = require('./utils/operacoes');
const { validarNumero } = require('./utils/validacoes');

const numero1 = 10;
const numero2 = 5;

if (validarNumero(numero1) && validarNumero(numero2)) {

    console.log("=== RESULTADOS ===");
    console.log("Soma:", operacoes.somar(numero1, numero2));
    console.log("Subtração:", operacoes.subtrair(numero1, numero2));
    console.log("Multiplicação:", operacoes.multiplicar(numero1, numero2));
    console.log("Divisão:", operacoes.dividir(numero1, numero2));

} else {
    console.log("Erro: Um ou ambos os valores não são números válidos.");
}