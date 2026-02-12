function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }

    let media = soma / notas.length;
    return media;
}

let notasAluno = [8, 7, 9.5, 6];

console.log("Média do aluno:", calcularMedia(notasAluno));
