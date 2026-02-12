const senhaCorreta = "1234";
let senhaDigitada;

while (true) {
  senhaDigitada = prompt("Digite a senha:");

  if (senhaDigitada === senhaCorreta) {
    console.log("Acesso permitido");
    break;
  } else {
    console.log("Senha incorreta");
  }
}
