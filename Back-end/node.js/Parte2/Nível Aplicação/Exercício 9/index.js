const { montarCaminho } = require('./caminhos');

const arquivo1 = montarCaminho('dados.txt');
const arquivo2 = montarCaminho('config.json');
const arquivo3 = montarCaminho('relatorio.pdf');

console.log("📄 Caminho 1:", arquivo1);
console.log("📄 Caminho 2:", arquivo2);
console.log("📄 Caminho 3:", arquivo3);
