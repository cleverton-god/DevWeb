const mensagem = document.getElementById("mensagem");
const containerEstatisticas = document.getElementById("container-estatisticas");

document.addEventListener('DOMContentLoaded', carregarEstatisticas);

async function carregarEstatisticas() {
    mensagem.textContent = "Carregando estatísticas...";
    mensagem.className = "alert alert-info text-center";
    mensagem.style.display = "block";
    containerEstatisticas.innerHTML = "";

    try {
        const resposta = await fetch("/api/usuarios/estatisticas");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar estatísticas");
        }

        const stats = await resposta.json() || { total: 0, media_idade: 0, maior_idade: 0, menor_idade: 0 };

        renderizarEstatisticas(stats);
        mensagem.style.display = "none";

    } catch (erro) {
        mensagem.textContent = "Erro ao carregar estatísticas: " + erro.message;
        mensagem.className = "alert alert-danger text-center";
        mensagem.style.display = "block";
        console.error(erro);
    }
}

function renderizarEstatisticas(stats) {
    containerEstatisticas.innerHTML = `
        <div class="row g-4">
            <div class="col-md-6 col-lg-3">
                <div class="card h-100 shadow">
                    <div class="card-body text-center p-4">
                        <i class="bi bi-people-fill" style="font-size: 3rem; color: #11998e;"></i>
                        <h3 class="card-title mt-3">${Math.round(Number(stats.total || 0))}</h3>
                        <p class="card-text text-muted">Total de Usuários</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card h-100 shadow">
                    <div class="card-body text-center p-4">
                        <i class="bi bi-graph-up" style="font-size: 3rem; color: #667eea;"></i>
                        <h3 class="card-title mt-3">${Number(stats.media_idade || 0).toFixed(1)} anos</h3>
                        <p class="card-text text-muted">Média de Idade</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card h-100 shadow">
                    <div class="card-body text-center p-4">
                        <i class="bi bi-arrow-up-circle" style="font-size: 3rem; color: #f093fb;"></i>
                        <h3 class="card-title mt-3">${Math.round(Number(stats.maior_idade || 0))} anos</h3>
                        <p class="card-text text-muted">Maior Idade</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card h-100 shadow">
                    <div class="card-body text-center p-4">
                        <i class="bi bi-arrow-down-circle" style="font-size: 3rem; color: #ff6b6b;"></i>
                        <h3 class="card-title mt-3">${Math.round(Number(stats.menor_idade || 0))} anos</h3>
                        <p class="card-text text-muted">Menor Idade</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-4">
            <a href="/lista.html" class="btn btn-primary">
                <i class="bi bi-list-ul"></i> Ver Lista de Usuários
            </a>
        </div>
    `;
}
