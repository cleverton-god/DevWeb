import generateName from "sillyname";
import chalk from "chalk";

const nome1 = generateName();
const nome2 = generateName();
const nome3 = generateName();

console.log(chalk.yellow("🎲 Nomes gerados aleatoriamente:\n"));

console.log(chalk.green(nome1));
console.log(chalk.blue(nome2));
console.log(chalk.red(nome3));