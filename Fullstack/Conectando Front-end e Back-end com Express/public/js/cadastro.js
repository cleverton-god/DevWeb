const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);

    const usuario = {
        nome,
        idade
    };

    try {
        const resposta = await fetch("/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if (!resposta.ok) {
            const erro = await resposta.json();
            throw new Error(erro.erro || "Erro ao cadastrar usuário");
        }

        const dados = await resposta.json();

        mensagem.textContent = `Usuário ${dados.usuario.nome} cadastrado com sucesso!`;
        mensagem.className = "alert alert-success mt-3 text-center";
        mensagem.style.display = "block";

        form.reset();

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
