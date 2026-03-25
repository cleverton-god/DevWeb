
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("btnAtualizar");
const totalUsuarios = document.getElementById("totalUsuarios");

let modalExcluir = null;
let usuarioParaExcluir = null;

async function contarUsuarios() {
    const totalUsuarios = document.getElementById("totalUsuarios");

    try {
        const resposta = await fetch("/api/usuarios/total");

        if (!resposta.ok) {
            throw new Error("Erro ao contar usuários");
        }

        const dados = await resposta.json();

        const total = Number(dados.total);

        if (!totalUsuarios || !totalUsuarios.parentElement) return;

        totalUsuarios.textContent = total;
        totalUsuarios.style.color = total > 0 ? "#fff" : "#ff6b6b";

        totalUsuarios.parentElement.style.background =
            total > 0
                ? "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
                : "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";

    } catch (erro) {
        console.error("Erro no contador:", erro);

        if (totalUsuarios) {
            totalUsuarios.textContent = "Erro";
            totalUsuarios.style.color = "#ff6b6b";
        }
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    modalExcluir = new bootstrap.Modal(document.getElementById('modalExcluir'));
    const filtro = document.getElementById('filtro');
    filtro.addEventListener('keyup', function() {
        filtrarUsuarios(this.value.toLowerCase());
    });
    await Promise.all([contarUsuarios(), carregarUsuarios()]);
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
                <a href="usuario.html?id=${usuario.id}" class="btn btn-sm btn-info me-1">
                    <i class="bi bi-eye"></i> Detalhes
                </a>
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

    // Reaplica filtro atual se existir
    const filtro = document.getElementById('filtro');
    if (filtro.value) {
        filtrarUsuarios(filtro.value.toLowerCase());
    }
}

function filtrarUsuarios(termo) {
    const trs = lista.querySelectorAll('tr');
    let visiveis = 0;

    trs.forEach(tr => {
        if (tr.cells.length > 1) { // Skip header/empty
            const texto = Array.from(tr.cells).map(cell => cell.textContent.toLowerCase()).join(' ');
            if (texto.includes(termo)) {
                tr.style.display = '';
                visiveis++;
            } else {
                tr.style.display = 'none';
            }
        }
    });

    // Show/hide "nenhum encontrado"
    if (visiveis === 0 && termo) {
        lista.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    <i class="bi bi-search" style="font-size: 2rem;"></i>
                    <p class="mb-0 mt-2">Nenhum usuário encontrado para "${termo}"</p>
                </td>
            </tr>
        `;
    }
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
            let erro = "Erro ao excluir usuário";
            try {
                const erroData = await resposta.json();
                erro = erroData.erro || erro;
            } catch(e) {
                // 204 no content - ignore
            }
            throw new Error(erro);
        }

        modalExcluir.hide();
        
        // Mostrar sucesso em verde
        mensagem.textContent = "Usuário excluído com sucesso!";
        mensagem.className = "alert alert-success text-center";
        mensagem.style.display = "block";

        setTimeout(() => {
            carregarUsuarios();
            contarUsuarios();
        }, 500);

    } catch (erro) {
        // Mostrar erro em vermelho
        mensagem.textContent = "Erro ao excluir usuário: " + erro.message;
        mensagem.className = "alert alert-danger text-center";
        mensagem.style.display = "block";
        console.error(erro);
    }
});

