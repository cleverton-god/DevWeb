import generateName from "sillyname";
import chalk from "chalk";

console.log(chalk.yellow("\n🎮 Criando personagens...\n"));

for (let i = 1; i <= 3; i++) {
  const nome = generateName();
  console.log(chalk.green(`Personagem ${i}: ${nome}`));
}

console.log(chalk.blue("\n✨ Todos os personagens foram criados com sucesso!\n"));