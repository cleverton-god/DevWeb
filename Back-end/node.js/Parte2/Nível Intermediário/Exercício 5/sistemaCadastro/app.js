const usuarios = require('./usuarios');

usuarios.criarUsuario("João", 25);
usuarios.criarUsuario("Maria", 30);
usuarios.criarUsuario("Carlos", 22);

console.log("\n=== LISTA DE USUÁRIOS ===");
console.log(usuarios.listarUsuarios());

console.log("\n=== BUSCAR USUÁRIO ===");
const usuarioEncontrado = usuarios.buscarUsuario("Maria");

if (usuarioEncontrado) {
    console.log("Usuário encontrado:", usuarioEncontrado);
} else {
    console.log("Usuário não encontrado.");
}
