import ora from "ora";

console.log("\n📦 Biblioteca escolhida: ORA");
console.log("📌 Serve para criar spinners (animações de carregamento) no terminal.\n");

const spinner = ora("Processando dados...").start();

setTimeout(() => {
  spinner.succeed("Processamento concluído com sucesso! ✅");
}, 3000);