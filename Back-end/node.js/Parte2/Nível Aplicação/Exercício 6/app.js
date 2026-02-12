const arquivo = require('./arquivo');

arquivo.criarArquivo('log.txt', 'Sistema iniciado com sucesso!');

const conteudo = arquivo.lerArquivo('log.txt');

console.log(conteudo);
