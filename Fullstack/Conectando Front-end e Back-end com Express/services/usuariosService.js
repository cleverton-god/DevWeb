const pool = require("../database/db");

let usuarios = [];
let proximoId = 1;

/* -------------------------
   FUNÇÕES AUXILIARES
-------------------------- */

async function buscarUsuarioPorId(id) {

    const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE id = $1",
        [id]
    );

    return resultado.rows[0];

}
async function filtrarPorIdade(idade) {

    const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE idade >= $1",
        [idade]
    );

    return resultado.rows[0];

}

async function ordenarNomes() {

    const resultado = await pool.query(
        "SELECT * FROM usuarios ORDER BY nome ASC"
    );

    return resultado.rows;
}

async function contarUsuarios() {
    try {
        const resultado = await pool.query("SELECT COUNT(*) FROM usuarios");
        return Number(resultado.rows[0].count);
    } catch (error) {
        throw new Error(`Erro ao contar usuários: ${error.message}`);
    }
}



/* -------------------------
   FUNÇÕES DE LÓGICA
-------------------------- */


async function estatisticasUsuarios() {
    const resultado = await pool.query(`
        SELECT 
            COUNT(*) AS total,
            COALESCE(AVG(idade), 0) AS media_idade,
            COALESCE(MAX(idade), 0) AS maior_idade,
            COALESCE(MIN(idade), 0) AS menor_idade
        FROM usuarios
    `);

    return resultado.rows[0] || { total: 0, media_idade: 0, maior_idade: 0, menor_idade: 0 };
}


async function listarUsuarios() {

    const resultado = await pool.query(
        "SELECT * FROM usuarios ORDER BY id"
    );

    return resultado.rows;
}



async function criarUsuario(nome, idade, email) {
    // Validação de nome vazio
    if (!nome || nome.trim() === "") {
        throw new Error("Nome é obrigatório");
    }

    // Nome deve ter no mínimo 3 caracteres
    if (nome.trim().length < 3) {
        throw new Error("Nome deve ter no mínimo 3 caracteres");
    }

    idade = Number(idade);
    // Validação de idade obrigatória
    if (isNaN(idade) || idade === undefined || idade === null) {
        throw new Error("Idade é obrigatória e deve ser número válido");
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

    const resultado = await pool.query(
        `
        INSERT INTO usuarios (nome, idade, email)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        [nome, idade, email]
    );

    return resultado.rows[0];
}

async function atualizarUsuario(id, nome, idade, email) {
    const usuario = await buscarUsuarioPorId(id);

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

    const resultado = await pool.query(
        `
        UPDATE usuarios
        SET nome = COALESCE($1, nome),
            idade = COALESCE($2, idade),
            email = COALESCE($3, email)
        WHERE id = $4
        RETURNING *
        `,
        [nome, idade, email, id]
    );

    return resultado.rows[0];
}

async function deletarUsuario(id) {

    const resultado = await pool.query(
        "DELETE FROM usuarios WHERE id = $1",
        [id]
    );

    return resultado.rowCount > 0;
}

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario,
    contarUsuarios,
    filtrarPorIdade,
    ordenarNomes,
    estatisticasUsuarios
};

