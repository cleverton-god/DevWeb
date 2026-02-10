/* ==================================================
   INICIALIZAÇÃO
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  cacheDOM();
  inicializarSistema();
  registrarEventos();
});

/* ==================================================
   CACHE DE ELEMENTOS
================================================== */
const DOM = {};

function cacheDOM() {
  DOM.btnParanormal = document.getElementById("btnParanormal");
  DOM.btnEmergencia = document.getElementById("btnEmergencia");
  DOM.btnAlertaMaximo = document.getElementById("btnAlertaMaximo");
  DOM.statusSistema = document.getElementById("statusSistema");
  DOM.botoesDetalhes = document.querySelectorAll(".btn-detalhes");
}

/* ==================================================
   ESTADO GLOBAL DO SISTEMA
================================================== */
const estadoSistema = {
  emergenciaAtiva: false,
  alertaMaximoAtivo: false,
  testeEmExecucao: false,
  resultadoCritico: false
};

/* ==================================================
   CONFIGURAÇÃO INICIAL
================================================== */
function inicializarSistema() {
  atualizarStatus("🟢 Sistema operando normalmente.");
}

/* ==================================================
   REGISTRO DE EVENTOS
================================================== */
function registrarEventos() {
  DOM.btnParanormal.addEventListener("click", executarTesteParanormal);
  DOM.btnEmergencia.addEventListener("click", alternarEmergencia);
  DOM.btnAlertaMaximo.addEventListener("click", alternarAlertaMaximo);

  DOM.botoesDetalhes.forEach((botao) => {
    botao.addEventListener("click", () =>
      alternarDetalhesCriatura(botao)
    );
  });
}

/* ==================================================
   UTILIDADES
================================================== */
function atualizarStatus(texto, classe = "") {
  DOM.statusSistema.innerText = texto;
  DOM.statusSistema.className = `mt-4 fw-semibold ${classe}`;
}

function bloquearBotao(botao, bloquear = true) {
  botao.disabled = bloquear;
}

function trocarTextoBotao(botao, texto) {
  botao.innerText = texto;
}

function logSistema(mensagem) {
  console.log(`[SISTEMA] ${mensagem}`);
}

/* ==================================================
   TESTE DO SISTEMA PARANORMAL
================================================== */
function executarTesteParanormal() {
  if (estadoSistema.testeEmExecucao) return;

  estadoSistema.testeEmExecucao = true;
  bloquearBotao(DOM.btnParanormal, true);

  logSistema("Teste paranormal iniciado");
  iniciarVarredura();

  setTimeout(analisarResultadoParanormal, 2500);
  setTimeout(finalizarTesteParanormal, 6000);
}

function iniciarVarredura() {
  atualizarStatus("🔍 Iniciando varredura paranormal...", "text-warning");
}

function analisarResultadoParanormal() {
  const resultado = obterResultadoParanormal();

  estadoSistema.resultadoCritico = resultado.critico;
  atualizarStatus(resultado.mensagem, resultado.classe);
  logSistema(resultado.log);
}

function finalizarTesteParanormal() {
  if (estadoSistema.resultadoCritico) {
    iniciarContencao();
  } else {
    encerrarTeste();
  }
}

function iniciarContencao() {
  logSistema("Procedimentos de contenção iniciados");

  atualizarStatus(
    "🛑 Procedimentos de contenção em andamento...",
    "text-warning"
  );

  setTimeout(concluirContencao, 3000);
}

function concluirContencao() {
  atualizarStatus(
    "✅ Ameaça contida com sucesso.",
    "text-success"
  );

  logSistema("Ameaça contida");

  setTimeout(encerrarTeste, 2500);
}

function encerrarTeste() {
  atualizarStatus("🟢 Sistema operando normalmente.");
  bloquearBotao(DOM.btnParanormal, false);

  estadoSistema.testeEmExecucao = false;
  estadoSistema.resultadoCritico = false;

  logSistema("Teste paranormal encerrado");
}

function obterResultadoParanormal() {
  const resultados = [
    {
      mensagem: "✅ Nenhuma ameaça encontrada.",
      classe: "text-success",
      critico: false,
      log: "Nenhuma anomalia detectada"
    },
    {
      mensagem: "⚠️ Presença anômala detectada!",
      classe: "text-danger",
      critico: true,
      log: "Anomalia identificada"
    },
    {
      mensagem: "👁️ Entidade hostil detectada.",
      classe: "text-danger",
      critico: true,
      log: "Entidade hostil observada"
    }
  ];

  return resultados[Math.floor(Math.random() * resultados.length)];
}

/* ==================================================
   PROTOCOLO DE EMERGÊNCIA
================================================== */
function alternarEmergencia() {
  estadoSistema.emergenciaAtiva
    ? desativarEmergencia()
    : ativarEmergencia();
}

function ativarEmergencia() {
  estadoSistema.emergenciaAtiva = true;

  atualizarStatus("🚨 PROTOCOLO DE EMERGÊNCIA ATIVADO 🚨", "text-danger");
  document.body.classList.add("emergencia");
  document.body.classList.add("isolamento");

  trocarTextoBotao(
    DOM.btnEmergencia,
    "Desativar Protocolo de Emergência"
  );

  DOM.btnEmergencia.classList.replace("btn-danger", "btn-outline-danger");
  logSistema("Emergência ativada e setores isolados");
}

function desativarEmergencia() {
  estadoSistema.emergenciaAtiva = false;

  atualizarStatus("🟢 Sistema operando normalmente.");
  document.body.classList.remove("emergencia", "isolamento");

  trocarTextoBotao(
    DOM.btnEmergencia,
    "Ativar Protocolo de Emergência"
  );

  DOM.btnEmergencia.classList.replace("btn-outline-danger", "btn-danger");
  logSistema("Emergência desativada");
}

/* ==================================================
   MODO ALERTA MÁXIMO
================================================== */
function alternarAlertaMaximo() {
  estadoSistema.alertaMaximoAtivo
    ? desativarAlertaMaximo()
    : ativarAlertaMaximo();
}

function ativarAlertaMaximo() {
  estadoSistema.alertaMaximoAtivo = true;

  document.body.classList.add("alerta-maximo");
  atualizarStatus("🔴 MODO ALERTA MÁXIMO ATIVADO 🔴", "text-danger");

  trocarTextoBotao(
    DOM.btnAlertaMaximo,
    "Desativar Alerta Máximo"
  );

  DOM.btnAlertaMaximo.classList.replace("btn-warning", "btn-dark");
  logSistema("Alerta máximo ativado");
}

function desativarAlertaMaximo() {
  estadoSistema.alertaMaximoAtivo = false;

  document.body.classList.remove("alerta-maximo");
  atualizarStatus("🟢 Sistema operando normalmente.");

  trocarTextoBotao(
    DOM.btnAlertaMaximo,
    "Modo Alerta Máximo"
  );

  DOM.btnAlertaMaximo.classList.replace("btn-dark", "btn-warning");
  logSistema("Alerta máximo desativado");
}

/* ==================================================
   DETALHES DAS CRIATURAS
================================================== */
function alternarDetalhesCriatura(botao) {
  const detalhes = botao.previousElementSibling;
  const ativo = detalhes.classList.toggle("ativo");

  trocarTextoBotao(
    botao,
    ativo ? "Ocultar Detalhes" : "Mostrar Detalhes"
  );

  logSistema(
    ativo
      ? "Detalhes da criatura exibidos"
      : "Detalhes da criatura ocultos"
  );
}
