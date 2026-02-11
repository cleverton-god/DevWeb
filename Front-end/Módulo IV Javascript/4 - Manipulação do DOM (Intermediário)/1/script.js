let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((texto, index) => {
        const li = document.createElement("li");
        li.textContent = texto;

        const btn = document.createElement("button");
        btn.textContent = "Remover";
        btn.onclick = () => remover(index);

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");

    if (input.value.trim() === "") return;

    tarefas.push(input.value);
    salvar();
    renderizar();
    input.value = "";
}

function remover(i) {
    tarefas.splice(i, 1);
    salvar();
    renderizar();
}

document.getElementById("btnAdd").addEventListener("click", adicionarTarefa);

renderizar();
