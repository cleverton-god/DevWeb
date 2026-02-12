let notas = [];

for (let i = 0; i < 5; i++) {
  const nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`));
  notas.push(nota);

  if (nota >= 7) {
    console.log(`Aluno ${i + 1}: Aprovado`);
  } else {
    console.log(`Aluno ${i + 1}: Reprovado`);
  }
}
