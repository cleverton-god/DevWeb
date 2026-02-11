const usuarios = [];

function criarUsuario(nome, idade) {
    const novoUsuario = {
        nome,
        idade
    };

    usuarios.push(novoUsuario);
    console.log(`Usuário ${nome} criado com sucesso!`);
}

function listarUsuarios() {
    return usuarios;
}

function buscarUsuario(nome) {
    return usuarios.find(usuario => usuario.nome === nome);
}

module.exports = {
    criarUsuario,
    listarUsuarios,
    buscarUsuario
};
