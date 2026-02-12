let vetor = [];

while (vetor.length < 10) {
  const num = Math.floor(Math.random() * 100) + 1;

  if (!vetor.includes(num)) {
    vetor.push(num);
  }
}

console.log(vetor);
