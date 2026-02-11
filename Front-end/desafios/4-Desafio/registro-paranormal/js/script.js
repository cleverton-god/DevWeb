/* ==================================================
   TAREFA 11 - Conectar JavaScript ao Projeto
================================================== */

console.log("Sistema de Registro Paranormal iniciado com sucesso.");

document.addEventListener("DOMContentLoaded", () => {
  iniciarSistema();
  configurarEventos();
  atualizarContadorCriaturas();
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
   TAREFA 13 - Alterar Texto Dinamicamente
   TAREFA 14 - Manipular Classes CSS
================================================== */

let emergenciaAtiva = false;
let alertaMaximoAtivo = false;

function alternarEmergencia() {
  const btnEmergencia = document.getElementById("btnEmergencia");
  const statusSistema = document.getElementById("statusSistema");

  if (!emergenciaAtiva) {
    alertaMaximoAtivo = false;
    document.body.classList.remove("alerta-maximo");

    emergenciaAtiva = true;
    document.body.classList.add("emergencia");
    statusSistema.innerText =
      "🚨 PROTOCOLO DE EMERGÊNCIA ATIVADO 🚨";
    btnEmergencia.innerText = "Desativar Emergência";
  } else {
    emergenciaAtiva = false;
    document.body.classList.remove("emergencia");
    statusSistema.innerText =
      "🟢 Sistema operando normalmente.";
    btnEmergencia.innerText =
      "Ativar Protocolo de Emergência";
  }
}

function alternarAlertaMaximo() {
  alertaMaximoAtivo = !alertaMaximoAtivo;

  document.body.classList.toggle("alerta-maximo");
}


/* ==================================================
   TAREFA 15 - Mostrar e Ocultar Detalhes
================================================== */

function configurarDetalhes() {
  const botoesDetalhes =
    document.querySelectorAll(".btn-detalhes");

  botoesDetalhes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const detalhes =
        botao.previousElementSibling;
      const ativo =
        detalhes.classList.toggle("ativo");

      botao.innerText = ativo
        ? "Ocultar Detalhes"
        : "Mostrar Detalhes";
    });
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
  setTimeout(
    () => totalCriaturas.classList.remove("flash"),
    300
  );
}

/* ==================================================
   TAREFA 18 - Captura de Dados do Formulário
================================================== */

function configurarFormulario() {
  const form = document.getElementById("formCriatura");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nomeCriatura").value;
    const nivel = document.getElementById("nivelAmeaca").value;
    const descricao = document.getElementById("descricaoCriatura").value;

    const imagemInput = document.getElementById("imagemCriatura");
    const imagemArquivo = imagemInput.files[0];

    console.log("Nova Criatura Registrada:");
    console.log("Nome:", nome);
    console.log("Nível:", nivel);
    console.log("Descrição:", descricao);

    if (imagemArquivo) {
      console.log("Imagem enviada:", imagemArquivo.name);
    } else {
      console.log("Nenhuma imagem enviada.");
    }
  });
}

/* ==================================================
   INICIALIZAÇÃO
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

/* ==================================================
   MENU MOBILE
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const botao = document.getElementById("menuToggle");
  const menu = document.getElementById("menuNav");

  if (botao && menu) {
    botao.addEventListener("click", () => {
      menu.classList.toggle("active");

      // Troca ícone
      botao.textContent = menu.classList.contains("active") ? "✖" : "☰";
    });
  }

});
