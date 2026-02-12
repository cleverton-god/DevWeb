const nota = Number(prompt("Digite a nota final:"));
const faltas = Number(prompt("Digite o número de faltas (0 a 100):"));

if (nota >= 7 && faltas <= 25) {
  console.log("Aprovado!");
} else if (nota < 7 && faltas <= 25) {
  console.log("Reprovado por nota.");
} else if (faltas > 25) {
  console.log("Reprovado por faltas.");
}
