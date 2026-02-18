const fs = require('fs');
const path = require('path');

const caminhoLog = path.join(__dirname, '../logs.txt');

function registrarLog(mensagem) {
    const dataHora = new Date().toLocaleString('pt-BR');
    const texto = `[${dataHora}] ${mensagem}\n`;

    fs.appendFileSync(caminhoLog, texto, 'utf8');
}

module.exports = { registrarLog };
