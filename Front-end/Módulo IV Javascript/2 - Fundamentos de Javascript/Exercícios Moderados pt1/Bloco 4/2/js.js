const valor = Number(prompt("Digite um número:"));

if (valor > 0) {
  console.log("Quadrado:", valor ** 2);
} else if (valor < 0) {
  console.log("Número inválido! É negativo.");
} else {
  console.log("O número é zero.");
}
