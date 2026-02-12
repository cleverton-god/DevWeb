function validarNumero(valor) {
    if (typeof valor !== "number" || isNaN(valor)) {
        return false;
    }
    return true;
}

module.exports = {
    validarNumero
};
