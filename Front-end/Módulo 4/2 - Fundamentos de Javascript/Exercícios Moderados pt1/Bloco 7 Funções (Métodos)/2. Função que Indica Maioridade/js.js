function verificarMaioridade(idade) {
  if (idade >= 18) {
    console.log("Maior de idade.");
  } else {
    console.log("Menor de idade.");
  }
}

const idadeUsuario = Number(prompt("Digite sua idade:"));
verificarMaioridade(idadeUsuario);
