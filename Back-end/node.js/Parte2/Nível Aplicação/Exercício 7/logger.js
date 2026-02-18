const fs = require('fs');
const path = require('path');

const caminhoLog = path.join(__dirname, 'logs.txt');

function registrarLog(mensagem) {
    const dataHora = new Date().toLocaleString('pt-BR');

    const textoLog = `[${dataHora}] ${mensagem}\n`;

    fs.appendFileSync(caminhoLog, textoLog, 'utf8');
}

module.exports = { registrarLog };
