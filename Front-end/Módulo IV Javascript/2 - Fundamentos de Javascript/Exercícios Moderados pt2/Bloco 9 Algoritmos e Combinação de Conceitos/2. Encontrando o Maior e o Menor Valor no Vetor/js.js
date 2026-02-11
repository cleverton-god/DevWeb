function encontrarMinMax(vetor) {
    let maior = vetor[0];
    let menor = vetor[0];

    for (let num of vetor) {
        if (num > maior) {
            maior = num;
        }
        if (num < menor) {
            menor = num;
        }
    }

    return { maior: maior, menor: menor };
}

let numeros = [10, 5, 20, 3, 15];

console.log(encontrarMinMax(numeros));
