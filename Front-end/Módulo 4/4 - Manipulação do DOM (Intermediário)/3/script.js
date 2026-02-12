let alunos = [];

function renderizar() {
    const ul = document.getElementById("lista");
    ul.innerHTML = "";

    alunos.forEach((aluno, index) => {
        const li = document.createElement("li");
        li.textContent = `${aluno.nome} - ${aluno.idade} anos`;

        const btn = document.createElement("button");
        btn.textContent = "Excluir";
        btn.onclick = () => excluir(index);

        li.appendChild(btn);
        ul.appendChild(li);
    });
}

function cadastrar() {
    const nome = document.getElementById("nome").value;
    const idade = Number(document.getElementById("idade").value);

    if (!nome || idade === "") return;

    // 🚫 Impede idade negativa (validação extra)
    if (idade < 0) {
        alert("A idade não pode ser negativa!");
        return;
    }

    alunos.push({ nome, idade });
    renderizar();
}

function excluir(i) {
    alunos = alunos.filter((_, index) => index !== i);
    renderizar();
}

document.getElementById("btnCadastrar").addEventListener("click", cadastrar);
