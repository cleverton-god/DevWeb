
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("btnAtualizar");

let modalExcluir = null;
let usuarioParaExcluir = null;

document.addEventListener('DOMContentLoaded', function() {
    modalExcluir = new bootstrap.Modal(document.getElementById('modalExcluir'));
    carregarUsuarios();
});

botao.addEventListener("click", carregarUsuarios);

async function carregarUsuarios() {
    mensagem.textContent = "Carregando...";
    mensagem.className = "alert alert-info text-center";
    mensagem.style.display = "block";

    try {
        const resposta = await fetch("/api/usuarios");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar usuários");
        }

        const usuarios = await resposta.json();

        renderizarUsuarios(usuarios);

        mensagem.style.display = "none";
    } catch (erro) {
        // Mostrar erro em vermelho
        mensagem.textContent = "Erro ao carregar usuários: " + erro.message;
        mensagem.className = "alert alert-danger text-center";
        mensagem.style.display = "block";
        console.error(erro);
    }
}

function renderizarUsuarios(usuarios) {
    lista.innerHTML = "";

    if (usuarios.length === 0) {
        lista.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    <i class="bi bi-inbox" style="font-size: 2rem;"></i>
                    <p class="mb-0 mt-2">Nenhum usuário cadastrado</p>
                </td>
            </tr>
        `;
        return;
    }

    usuarios.forEach((usuario) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.idade} anos</td>
            <td>${usuario.email}</td>
            <td>
                <a href="/editar/${usuario.id}" class="btn btn-sm btn-warning me-1">
                    <i class="bi bi-pencil"></i> Editar
                </a>
                <button class="btn btn-sm btn-danger" onclick="confirmarExclusao(${usuario.id}, '${usuario.nome}')">
                    <i class="bi bi-trash"></i> Excluir
                </button>
            </td>
        `;
        lista.appendChild(tr);
    });
}

function confirmarExclusao(id, nome) {
    usuarioParaExcluir = id;
    document.getElementById("nomeExcluir").textContent = nome;
    modalExcluir.show();
}

document.getElementById("btnConfirmarExclusao").addEventListener("click", async function() {
    if (!usuarioParaExcluir) return;

    try {
        const resposta = await fetch(`/api/usuarios/${usuarioParaExcluir}`, {
            method: "DELETE"
        });

        if (!resposta.ok) {
            const erro = await resposta.json();
            throw new Error(erro.erro || "Erro ao excluir usuário");
        }

        modalExcluir.hide();
        
        // Mostrar sucesso em verde
        mensagem.textContent = "Usuário excluído com sucesso!";
        mensagem.className = "alert alert-success text-center";
        mensagem.style.display = "block";

        carregarUsuarios();

    } catch (erro) {
        // Mostrar erro em vermelho
        mensagem.textContent = "Erro ao excluir usuário: " + erro.message;
        mensagem.className = "alert alert-danger text-center";
        mensagem.style.display = "block";
        console.error(erro);
    }
});

