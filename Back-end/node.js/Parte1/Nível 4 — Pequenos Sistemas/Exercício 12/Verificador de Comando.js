const comando = process.argv[2];

if (comando === "atacar") {
  console.log("⚔️ Você atacou o inimigo!");
} else if (comando === "defender") {
  console.log("🛡️ Você se defendeu do ataque!");
} else if (comando === "fugir") {
  console.log("🏃 Você fugiu da batalha!");
} else {
  console.log("❌ Comando inválido. Use: atacar, defender ou fugir.");
}
