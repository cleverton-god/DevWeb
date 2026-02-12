/* ==================================================
   TAREFA 11 - Conectar JavaScript ao Projeto
================================================== */

console.log("Sistema de Registro Paranormal iniciado com sucesso.");

document.addEventListener("DOMContentLoaded", () => {
  iniciarSistema();
  configurarEventos();
  atualizarContadorCriaturas();
  configurarMenuMobile();
});

/* ==================================================
   TAREFA 12 - Botão Testar Sistema Paranormal
================================================== */

let testeEmAndamento = false;

function testarSistema() {
  const btnParanormal = document.getElementById("btnParanormal");
  const statusSistema = document.getElementById("statusSistema");

  if (testeEmAndamento) return;

  testeEmAndamento = true;
  btnParanormal.disabled = true;
  statusSistema.innerText = "🔍 Verificando atividade paranormal...";

  setTimeout(() => {
    const possibilidades = ["nenhuma", "anomalia", "ameaça"];
    const resultado =
      possibilidades[Math.floor(Math.random() * possibilidades.length)];

    if (resultado === "nenhuma")
      statusSistema.innerText = "✅ Nenhuma ameaça encontrada.";

    if (resultado === "anomalia")
      statusSistema.innerText = "⚠️ Anomalia detectada. Monitorando...";

    if (resultado === "ameaça") {
      statusSistema.innerText =
        "🛑 Ameaça detectada! Contenção em andamento...";

      setTimeout(() => {
        statusSistema.innerText =
          "✅ Ameaça contida com sucesso.";
      }, 2000);
    }

    setTimeout(() => {
      statusSistema.innerText =
        "🟢 Sistema operando normalmente.";
      btnParanormal.disabled = false;
      testeEmAndamento = false;
    }, 3000);
  }, 2000);
}

/* ==================================================
   TAREFA 13 e 14 - Emergência e Alerta Máximo
================================================== */

let emergenciaAtiva = false;

function alternarEmergencia() {
  const btnEmergencia = document.getElementById("btnEmergencia");
  const statusSistema = document.getElementById("statusSistema");

  if (!emergenciaAtiva) {
    document.body.classList.remove("alerta-maximo");
    document.body.classList.add("emergencia");

    statusSistema.innerText =
      "🚨 PROTOCOLO DE EMERGÊNCIA ATIVADO 🚨";
    btnEmergencia.innerText = "Desativar Emergência";

    emergenciaAtiva = true;
  } else {
    document.body.classList.remove("emergencia");

    statusSistema.innerText =
      "🟢 Sistema operando normalmente.";
    btnEmergencia.innerText =
      "Ativar Protocolo de Emergência";

    emergenciaAtiva = false;
  }
}

function alternarAlertaMaximo() {
  document.body.classList.toggle("alerta-maximo");
}

/* ==================================================
   TAREFA 15 - Mostrar e Ocultar Detalhes (Event Delegation)
================================================== */

function configurarDetalhes() {
  const grid = document.getElementById("gridCriaturas");
  if (!grid) return;

  grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-detalhes")) {
      const botao = e.target;
      const detalhes =
        botao.parentElement.querySelector(".detalhes");

      const ativo = detalhes.classList.toggle("ativo");

      botao.innerText = ativo
        ? "Ocultar Detalhes"
        : "Mostrar Detalhes";
    }
  });
}

/* ==================================================
   TAREFA 16 - Contador de Criaturas
================================================== */

function atualizarContadorCriaturas() {
  const totalCriaturas =
    document.getElementById("totalCriaturas");

  const cards =
    document.querySelectorAll(".criatura-card");

  totalCriaturas.innerText = cards.length;

  totalCriaturas.classList.add("flash");
  setTimeout(() => {
    totalCriaturas.classList.remove("flash");
  }, 300);
}

/* ==================================================
   TAREFA 18 e 19 - Formulário + Criação Dinâmica
================================================== */

function configurarFormulario() {
  const form = document.getElementById("formCriatura");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome =
      document.getElementById("nomeCriatura").value;

    const nivel =
      document.getElementById("nivelAmeaca").value;

    const descricao =
      document.getElementById("descricaoCriatura").value;

    const fraquezas =
      document.getElementById("fraquezasCriatura").value;

    const estrategia =
      document.getElementById("estrategiaCriatura").value;

    const imagemInput =
      document.getElementById("imagemCriatura");

    const imagemArquivo = imagemInput.files[0];

    if (!imagemArquivo) return;

    const reader = new FileReader();

    reader.onload = function () {

      let classeNivel = "";

      if (nivel === "Baixo") classeNivel = "level-baixo";
      if (nivel === "Médio") classeNivel = "level-medio";
      if (nivel === "Alto") classeNivel = "level-alto";
      if (nivel === "Crítico") classeNivel = "level-critico";

      const novaColuna = document.createElement("div");
      novaColuna.className =
        "col-12 col-md-6 col-lg-4";

      novaColuna.innerHTML = `
        <div class="card criatura-card text-white h-100 shadow-sm">
          <img src="${reader.result}" class="card-img-top" alt="${nome}">
          <div class="card-body d-flex flex-column">

            <h5 class="card-title">
              Nome: ${nome}
            </h5>

            <p class="${classeNivel}">
              <strong>Nível de Ameaça:</strong> ${nivel}
            </p>

            <p class="card-text">
              ${descricao}
            </p>

            <div class="detalhes">
              <p><strong>Fraquezas:</strong> ${fraquezas}</p>
              <p><strong>Estratégia de combate:</strong> ${estrategia}</p>
            </div>

            <button type="button"
              class="btn btn-outline-info btn-detalhes mt-2">
              Mostrar Detalhes
            </button>

          </div>
        </div>
      `;

      document
        .getElementById("gridCriaturas")
        .appendChild(novaColuna);

      atualizarContadorCriaturas();
      form.reset();
    };

    reader.readAsDataURL(imagemArquivo);
  });
}

/* ==================================================
   MENU MOBILE
================================================== */

function configurarMenuMobile() {
  const botao = document.getElementById("menuToggle");
  const menu = document.getElementById("menuNav");

  if (!botao || !menu) return;

  botao.addEventListener("click", () => {
    menu.classList.toggle("active");
    botao.textContent =
      menu.classList.contains("active") ? "✖" : "☰";
  });
}

/* ==================================================
   CONFIGURAÇÃO GERAL
================================================== */

function iniciarSistema() {
  const statusSistema =
    document.getElementById("statusSistema");

  statusSistema.innerText =
    "🟢 Sistema operando normalmente.";
}

function configurarEventos() {
  document
    .getElementById("btnParanormal")
    .addEventListener("click", testarSistema);

  document
    .getElementById("btnEmergencia")
    .addEventListener("click", alternarEmergencia);

  document
    .getElementById("btnAlertaMaximo")
    .addEventListener("click", alternarAlertaMaximo);

  configurarDetalhes();
  configurarFormulario();
}
