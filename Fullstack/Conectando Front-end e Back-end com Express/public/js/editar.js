const form = document.getElementById("formEditar");
const mensagem = document.getElementById("mensagem");

// Obter o ID da URL
const urlParams = new URLSearchParams(window.location.search);
const id = window.location.pathname.split('/').pop();

document.addEventListener('DOMContentLoaded', async function() {
    await carregarUsuario();
});

async function carregarUsuario() {
    try {
        const resposta = await fetch(`/api/usuarios/${id}`);

        if (!resposta.ok) {
            throw new Error("Usuário não encontrado");
        }

        const usuario = await resposta.json();

        document.getElementById("id").value = usuario.id;
        document.getElementById("nome").value = usuario.nome;
        document.getElementById("idade").value = usuario.idade;

    } catch (erro) {
        mensagem.textContent = erro.message;
        mensagem.className = "alert alert-danger mt-3 text-center";
        mensagem.style.display = "block";
        
        setTimeout(() => {
            window.location.href = "/lista";
        }, 2000);
    }
}

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);

    const usuario = {
        nome,
        idade
    };

    try {
        const resposta = await fetch(`/api/usuarios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if (!resposta.ok) {
            const erro = await resposta.json();
            throw new Error(erro.erro || "Erro ao atualizar usuário");
        }

        const dados = await resposta.json();

        mensagem.textContent = "Usuário atualizado com sucesso!";
        mensagem.className = "alert alert-success mt-3 text-center";
        mensagem.style.display = "block";

        setTimeout(() => {
            window.location.href = "/lista";
        }, 1500);

    } catch (erro) {
        mensagem.textContent = erro.message;
        mensagem.className = "alert alert-danger mt-3 text-center";
        mensagem.style.display = "block";
        console.error(erro);
    }
});
