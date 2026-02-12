const form = document.getElementById("form-contato");
const msgDiv = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("msg").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        msgDiv.textContent = "⚠ Preencha todos os campos!";
        msgDiv.className = "erro";
        msgDiv.style.display = "block";
        return;
    }

    msgDiv.textContent = "✔ Enviado com sucesso!";
    msgDiv.className = "sucesso";
    msgDiv.style.display = "block";

    form.reset();
});
