function ehPalindromo(texto) {
    let limpo = texto.toLowerCase().replace(/ /g, "");

    let invertido = limpo.split("").reverse().join("");

    return limpo === invertido;
}

console.log("arara:", ehPalindromo("arara"));
console.log("radar:", ehPalindromo("radar"));
console.log("casa:", ehPalindromo("casa"));
