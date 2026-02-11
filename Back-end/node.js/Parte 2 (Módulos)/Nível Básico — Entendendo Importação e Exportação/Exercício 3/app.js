const { validarNome, validarIdade } = require('./validacoes');

console.log("---- TESTE DE NOME ----");
console.log(validarNome("Jo"));      
console.log(validarNome("Maria"));   
console.log(validarNome(123));       

console.log("\n---- TESTE DE IDADE ----");
console.log(validarIdade(-5));       
console.log(validarIdade(0));        
console.log(validarIdade(25));     
console.log(validarIdade("18"));     
