const fs = require('fs');
const path = require('path');

const caminhoUsuarios = path.join(__dirname, '../usuarios.json');

function carregarUsuarios() {
    if (!fs.existsSync(caminhoUsuarios)) {
        return [];
    }

    const dados = fs.readFileSync(caminhoUsuarios, 'utf8');
    return JSON.parse(dados);
}

function salvarUsuarios(lista) {
    fs.writeFileSync(caminhoUsuarios, JSON.stringify(lista, null, 2));
}

module.exports = { carregarUsuarios, salvarUsuarios };
