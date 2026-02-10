/* ==================================================
   INÍCIO DO SISTEMA
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  pegarElementos();
  configurarEventos();
  iniciarSistema();
  atualizarContadorCriaturas();
});

/* ==================================================
   ELEMENTOS DO DOM
================================================== */
let btnParanormal;
let btnEmergencia;
let btnAlertaMaximo;
let statusSistema;
let botoesDetalhes;
let totalCriaturas;
let cardsCriaturas;

/* Pega tudo do HTML uma única vez */
function pegarElementos() {
  btnParanormal = document.getElementById("btnParanormal");
  btnEmergencia = document.getElementById("btnEmergencia");
  btnAlertaMaximo = document.getElementById("btnAlertaMaximo");
  statusSistema = document.getElementById("statusSistema");
  botoesDetalhes = document.querySelectorAll(".btn-detalhes");

  totalCriaturas = document.getElementById("totalCriaturas");
  cardsCriaturas = document.querySelectorAll(".criatura-card");
}

/* ==================================================
   ESTADO DO SISTEMA
================================================== */
let emergenciaAtiva = false;
let alertaMaximoAtivo = false;
let testeEmAndamento = false;

/* ==================================================
   CONFIGURAÇÃO INICIAL
================================================== */
function iniciarSistema() {
  atualizarStatus("🟢 Sistema operando normalmente.");
}

/* ==================================================
   EVENTOS
================================================== */
function configurarEventos() {
  btnParanormal.addEventListener("click", testarSistema);
  btnEmergencia.addEventListener("click", alternarEmergencia);
  btnAlertaMaximo.addEventListener("click", alternarAlertaMaximo);

  botoesDetalhes.forEach((botao) => {
    botao.addEventListener("click", () =>
      mostrarOuOcultarDetalhes(botao)
    );
  });
}

/* ==================================================
   FUNÇÕES BÁSICAS
================================================== */
function atualizarStatus(texto) {
  statusSistema.innerText = texto;
}

function bloquearBotao(botao, bloquear) {
  botao.disabled = bloquear;
}

/* ==================================================
   CONTADOR DE CRIATURAS REGISTRADAS
================================================== */
function atualizarContadorCriaturas() {
  const quantidade = cardsCriaturas.length;
  totalCriaturas.innerText = quantidade;
}

/* ==================================================
   TESTE DO SISTEMA PARANORMAL
================================================== */
function testarSistema() {
  if (testeEmAndamento) return;

  testeEmAndamento = true;
  bloquearBotao(btnParanormal, true);

  atualizarStatus("🔍 Verificando atividade paranormal...");

  setTimeout(() => {
    const resultado = gerarResultado();
    mostrarResultado(resultado);

    setTimeout(() => {
      finalizarTeste();
    }, 3000);
  }, 2000);
}

/* Define o que aconteceu no teste */
function gerarResultado() {
  const possibilidades = [
    "nenhuma",
    "anomalia",
    "ameaça"
  ];

  const indice = Math.floor(Math.random() * possibilidades.length);
  return possibilidades[indice];
}

/* Mostra o resultado na tela */
function mostrarResultado(resultado) {
  if (resultado === "nenhuma") {
    atualizarStatus("✅ Nenhuma ameaça encontrada.");
  }

  if (resultado === "anomalia") {
    atualizarStatus("⚠️ Anomalia detectada. Monitorando...");
  }

  if (resultado === "ameaça") {
    atualizarStatus("🛑 Ameaça detectada! Contenção em andamento...");

    setTimeout(() => {
      atualizarStatus("✅ Ameaça contida com sucesso.");
    }, 2000);
  }
}

/* Finaliza o teste e volta ao normal */
function finalizarTeste() {
  atualizarStatus("🟢 Sistema operando normalmente.");
  bloquearBotao(btnParanormal, false);
  testeEmAndamento = false;
}

/* ==================================================
   PROTOCOLO DE EMERGÊNCIA
================================================== */
function alternarEmergencia() {
  emergenciaAtiva ? desativarEmergencia() : ativarEmergencia();
}

function ativarEmergencia() {
  emergenciaAtiva = true;
  document.body.classList.add("emergencia");
  atualizarStatus("🚨 PROTOCOLO DE EMERGÊNCIA ATIVADO 🚨");
  btnEmergencia.innerText = "Desativar Emergência";
}

function desativarEmergencia() {
  emergenciaAtiva = false;
  document.body.classList.remove("emergencia");
  atualizarStatus("🟢 Sistema operando normalmente.");
  btnEmergencia.innerText = "Ativar Protocolo de Emergência";
}

/* ==================================================
   ALERTA MÁXIMO
================================================== */
function alternarAlertaMaximo() {
  alertaMaximoAtivo ? desativarAlertaMaximo() : ativarAlertaMaximo();
}

function ativarAlertaMaximo() {
  alertaMaximoAtivo = true;
  document.body.classList.add("alerta-maximo");
  atualizarStatus("🔴 ALERTA MÁXIMO ATIVADO 🔴");
  btnAlertaMaximo.innerText = "Desativar Alerta Máximo";
}

function desativarAlertaMaximo() {
  alertaMaximoAtivo = false;
  document.body.classList.remove("alerta-maximo");
  atualizarStatus("🟢 Sistema operando normalmente.");
  btnAlertaMaximo.innerText = "Modo Alerta Máximo";
}

/* ==================================================
   DETALHES DAS CRIATURAS
================================================== */
function mostrarOuOcultarDetalhes(botao) {
  const detalhes = botao.previousElementSibling;
  const ativo = detalhes.classList.toggle("ativo");

  botao.innerText = ativo
    ? "Ocultar Detalhes"
    : "Mostrar Detalhes";
}
