const readline = require('readline');
const {
    cadastrarUsuario,
    listarUsuarios,
    removerUsuario
} = require('./modules/usuarios');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n===== SISTEMA DE REGISTROS =====");
    console.log("1 - Cadastrar usuário");
    console.log("2 - Listar usuários");
    console.log("3 - Remover usuário");
    console.log("0 - Sair");

    rl.question("Escolha uma opção: ", opcao => {
        switch (opcao) {

            case "1":
                rl.question("Nome: ", nome => {
                    rl.question("Idade: ", idade => {
                        cadastrarUsuario(nome, idade);
                        mostrarMenu();
                    });
                });
                break;

            case "2":
                listarUsuarios();
                mostrarMenu();
                break;

            case "3":
                listarUsuarios();
                rl.question("Número do usuário para remover: ", num => {
                    removerUsuario(Number(num));
                    mostrarMenu();
                });
                break;

            case "0":
                console.log("👋 Sistema encerrado.");
                rl.close();
                break;

            default:
                console.log("❌ Opção inválida.");
                mostrarMenu();
        }
    });
}

mostrarMenu();
