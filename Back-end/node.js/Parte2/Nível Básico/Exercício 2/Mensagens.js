const autorSistema = "Cleverton Rosa";

function boasVindas(nome) {
    return `Olá, ${nome}! Seja bem-vindo ao sistema.`;
}

function despedida(nome) {
    return `Até logo, ${nome}! Volte sempre.`;
}

module.exports = {
    boasVindas,
    despedida,
    autorSistema
};
