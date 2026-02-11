function calcularPotencia(base, expoente) {
  let resultado = 1;

  for (let i = 0; i < expoente; i++) {
    resultado = resultado * base;
  }

  return resultado;
}

const base = Number(prompt("Digite a base:"));
const expoente = Number(prompt("Digite o expoente (inteiro e positivo):"));

const resposta = calcularPotencia(base, expoente);
console.log("Resultado:", resposta);
