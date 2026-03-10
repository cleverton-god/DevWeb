
let usuarios = [];
let proximoId = 1;

/* -------------------------
   FUNÇÕES AUXILIARES
-------------------------- */

function buscarUsuarioPorId(id) {
    return usuarios.find(u => u.id === id);
}

/* -------------------------
   FUNÇÕES DE LÓGICA
-------------------------- */

function listarUsuarios() {
    return usuarios;
}

function criarUsuario(nome, idade, email) {
    // Validação de nome vazio
    if (!nome || nome.trim() === "") {
        throw new Error("Nome é obrigatório");
    }

    // Nome deve ter no mínimo 3 caracteres
    if (nome.trim().length < 3) {
        throw new Error("Nome deve ter no mínimo 3 caracteres");
    }

    // Validação de idade obrigatória
    if (idade === undefined || idade === null) {
        throw new Error("Idade é obrigatória");
    }

    // Idade não pode ser negativa
    if (idade < 0) {
        throw new Error("Idade inválida");
    }

    // Idade não pode ser maior que 120
    if (idade > 120) {
        throw new Error("Idade não pode ser maior que 120");
    }

    // Email obrigatório
    if (!email || email.trim() === "") {
        throw new Error("Email é obrigatório");
    }

    // Email deve conter @
    if (!email.includes("@")) {
        throw new Error("Email deve conter @");
    }

    const novoUsuario = {
        id: proximoId++,
        nome: nome.trim(),
        idade,
        email: email.trim()
    };

    usuarios.push(novoUsuario);

    return novoUsuario;
}

function atualizarUsuario(id, nome, idade, email) {
    const usuario = buscarUsuarioPorId(id);

    if (!usuario) {
        return null;
    }

    // Validação de nome
    if (nome !== undefined && nome !== null) {
        if (nome.trim() === "") {
            throw new Error("Nome é obrigatório");
        }
        if (nome.trim().length < 3) {
            throw new Error("Nome deve ter no mínimo 3 caracteres");
        }
        usuario.nome = nome.trim();
    }

    // Validação de idade
    if (idade !== undefined && idade !== null) {
        if (idade < 0) {
            throw new Error("Idade inválida");
        }
        if (idade > 120) {
            throw new Error("Idade não pode ser maior que 120");
        }
        usuario.idade = idade;
    }

    // Validação de email
    if (email !== undefined && email !== null) {
        if (email.trim() === "") {
            throw new Error("Email é obrigatório");
        }
        if (!email.includes("@")) {
            throw new Error("Email deve conter @");
        }
        usuario.email = email.trim();
    }

    return usuario;
}

function deletarUsuario(id) {
    const index = usuarios.findIndex(u => u.id === id);

    if (index === -1) {
        return false;
    }

    usuarios.splice(index, 1);

    return true;
}

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};

