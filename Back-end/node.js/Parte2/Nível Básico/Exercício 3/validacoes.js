function validarNome(nome) {
    if (typeof nome !== "string") {
        return "Nome precisa ser um texto.";
    }

    if (nome.trim().length < 3) {
        return "Nome deve ter pelo menos 3 letras.";
    }

    return "Nome válido!";
}

function validarIdade(idade) {
    if (typeof idade !== "number") {
        return "Idade precisa ser um número.";
    }

    if (idade <= 0) {
        return "Idade deve ser maior que 0.";
    }

    return "Idade válida!";
}

module.exports = {
    validarNome,
    validarIdade
};
