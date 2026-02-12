const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;

while (true) {
  palpite = Number(prompt("Adivinhe o número (1 a 10):"));

  if (palpite === numeroSecreto) {
    console.log("Parabéns! Você acertou!");
    break;
  } 
  else if (palpite > numeroSecreto) {
    console.log("Menor...");
  } 
  else {
    console.log("Maior...");
  }
}
