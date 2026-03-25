const mensagem = document.getElementById("mensagem");
const containerUsuario = document.getElementById("container-usuario");

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (!id || isNaN(id) || Number(id) <= 0) {
        mostrarMensagem("ID inválido na URL. Use: usuario.html?id=1", "danger");
        return;
    }
    
    carregarUsuario(Number(id));
});

async function carregarUsuario(id) {
    mensagem.textContent = "Carregando detalhes do usuário...";
    mensagem.className = "alert alert-info text-center";
    mensagem.style.display = "block";
    containerUsuario.innerHTML = "";

    try {
        const resposta = await fetch(`/api/usuarios/${id}`);

        if (!resposta.ok) {
            let erroMsg = "Erro ao buscar usuário";
            if (resposta.status === 404) {
                erroMsg = "Usuário não encontrado";
            } else {
                try {
                    const erroData = await resposta.json();
                    erroMsg = erroData.erro || erroMsg;
                } catch(e) {}
            }
            throw new Error(erroMsg);
        }

        const usuario = await resposta.json();
        renderizarUsuario(usuario);
        mensagem.style.display = "none";

    } catch (erro) {
        mensagem.textContent = "Erro: " + erro.message;
        mensagem.className = "alert alert-danger text-center";
        mensagem.style.display = "block";
        console.error(erro);
    }
}

function renderizarUsuario(usuario) {
    containerUsuario.innerHTML = `
        <div class="card shadow">
            <div class="card-header bg-primary text-white text-center">
                <h2 class="mb-0"><i class="bi bi-person-circle"></i> ${usuario.nome}</h2>
                <p class="mb-0 opacity-75">ID: <span class="badge bg-light text-dark fs-6">${usuario.id}</span></p>
            </div>
            <div class="card-body text-center py-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="mb-4">
                            <i class="bi bi-person-badge-fill" style="font-size: 3rem; color: #667eea;"></i>
                            <h4 class="mt-3">Dados Pessoais</h4>
                            <p class="lead"><strong>Idade:</strong> ${usuario.idade} anos</p>
                        </div>
                        <div class="mb-4">
                            <i class="bi bi-envelope-fill" style="font-size: 3rem; color: #11998e;"></i>
                            <h4 class="mt-3">Contato</h4>
                            <p class="lead">${usuario.email}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <a href="/lista.html" class="btn btn-outline-primary">
                        <i class="bi bi-arrow-left"></i> Voltar para Lista
                    </a>
                </div>
            </div>
        </div>
    `;
}

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = `alert alert-${tipo} text-center`;
    mensagem.style.display = "block";
    containerUsuario.innerHTML = "";
}
