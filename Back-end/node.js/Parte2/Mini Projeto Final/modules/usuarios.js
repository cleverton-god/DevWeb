const { carregarUsuarios, salvarUsuarios } = require('./arquivos');
const { registrarLog } = require('./logger');
const { validarNome, validarIdade } = require('./validacoes');

let usuarios = carregarUsuarios();

function cadastrarUsuario(nome, idade) {
    if (!validarNome(nome) || !validarIdade(idade)) {
        console.log("❌ Dados inválidos.");
        return;
    }

    const usuario = {
        id: Date.now(),
        nome,
        idade: Number(idade)
    };

    usuarios.push(usuario);
    salvarUsuarios(usuarios);

    registrarLog(`Usuário cadastrado: ${nome}`);
    console.log("✅ Usuário cadastrado com sucesso!");
}

function listarUsuarios() {
    console.log("\n📋 LISTA DE USUÁRIOS");

    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }

    usuarios.forEach((u, i) => {
        console.log(`${i + 1}. ${u.nome} - ${u.idade} anos`);
    });

    registrarLog("Listagem de usuários");
}

function removerUsuario(indice) {
    if (indice < 1 || indice > usuarios.length) {
        console.log("❌ Usuário inválido.");
        return;
    }

    const removido = usuarios.splice(indice - 1, 1);

    salvarUsuarios(usuarios);
    registrarLog(`Usuário removido: ${removido[0].nome}`);

    console.log("🗑 Usuário removido.");
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios,
    removerUsuario
};
