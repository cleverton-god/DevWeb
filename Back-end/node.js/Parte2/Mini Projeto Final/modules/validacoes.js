function validarNome(nome) {
    return typeof nome === 'string' && nome.trim().length > 0;
}

function validarIdade(idade) {
    return !isNaN(idade) && Number(idade) > 0;
}

module.exports = { validarNome, validarIdade };
