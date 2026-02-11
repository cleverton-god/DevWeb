function ehPositivo(numero) {
  return numero > 0;
}

const num = Number(prompt("Digite um número:"));

if (ehPositivo(num)) {
  console.log("O número é positivo.");
} else {
  console.log("O número NÃO é positivo.");
}
