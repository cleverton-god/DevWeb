/* ==================================================
   INÍCIO DO SISTEMA
   Este script controla:
   - Teste do sistema paranormal
   - Protocolo de emergência
   - Modo alerta máximo
   - Mostrar/ocultar detalhes das criaturas
   - Contador de criaturas registradas
================================================== */

// Espera o carregamento completo do DOM antes de iniciar
document.addEventListener("DOMContentLoaded", () => {
  pegarElementos();          // Captura todos os elementos do DOM
  configurarEventos();       // Associa eventos de clique aos botões
  iniciarSistema();          // Inicializa o sistema com status normal
  atualizarContadorCriaturas(); // Atualiza o contador de criaturas registradas
});

/* ==================================================
   VARIÁVEIS DO DOM
================================================== */
let btnParanormal, btnEmergencia, btnAlertaMaximo; // Botões principais
let statusSistema;        // Elemento que mostra o status do sistema
let botoesDetalhes;       // Botões que mostram detalhes das criaturas
let totalCriaturas;       // Contador de criaturas registradas
let cardsCriaturas;       // Todos os cards de criaturas

/* ==================================================
   ESTADO DO SISTEMA
================================================== */
let emergenciaAtiva = false;      // Flag para protocolo de emergência
let alertaMaximoAtivo = false;    // Flag para alerta máximo
let testeEmAndamento = false;     // Flag para teste paranormal

/* ==================================================
   FUNÇÃO PARA PEGAR ELEMENTOS DO DOM
================================================== */
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
   FUNÇÃO PARA INICIAR O SISTEMA
================================================== */
function iniciarSistema() {
  // Define o status inicial
  atualizarStatus("🟢 Sistema operando normalmente.");
}

/* ==================================================
   CONFIGURAÇÃO DE EVENTOS
================================================== */
function configurarEventos() {
  // Teste do sistema paranormal
  btnParanormal.addEventListener("click", testarSistema);

  // Alternar protocolo de emergência
  btnEmergencia.addEventListener("click", alternarEmergencia);

  // Alternar alerta máximo
  btnAlertaMaximo.addEventListener("click", alternarAlertaMaximo);

  // Botões de detalhes de cada criatura
  botoesDetalhes.forEach((botao) =>
    botao.addEventListener("click", () => mostrarOuOcultarDetalhes(botao))
  );
}

/* ==================================================
   FUNÇÕES BÁSICAS
================================================== */
// Atualiza o texto do status do sistema
function atualizarStatus(texto) {
  statusSistema.innerText = texto;
}

// Bloqueia ou libera um botão
function bloquearBotao(botao, bloquear) {
  botao.disabled = bloquear;
}

/* ==================================================
   CONTADOR DE CRIATURAS REGISTRADAS
================================================== */
function atualizarContadorCriaturas() {
  const quantidade = cardsCriaturas.length; // Conta os cards existentes
  totalCriaturas.innerText = quantidade;

  // Pequena animação de destaque
  totalCriaturas.classList.add("flash");
  setTimeout(() => totalCriaturas.classList.remove("flash"), 300);
}

/* ==================================================
   TESTE DO SISTEMA PARANORMAL
================================================== */
function testarSistema() {
  if (testeEmAndamento) return; // Evita cliques múltiplos
  testeEmAndamento = true;
  bloquearBotao(btnParanormal, true);

  atualizarStatus("🔍 Verificando atividade paranormal...");

  // Simula um atraso na verificação
  setTimeout(() => {
    const resultado = gerarResultado(); // Gera resultado aleatório
    mostrarResultado(resultado);       // Mostra na tela

    // Finaliza o teste após 3 segundos
    setTimeout(() => finalizarTeste(), 3000);
  }, 2000);
}

// Gera resultado aleatório do teste
function gerarResultado() {
  const possibilidades = ["nenhuma", "anomalia", "ameaça"];
  return possibilidades[Math.floor(Math.random() * possibilidades.length)];
}

// Exibe o resultado do teste na tela
function mostrarResultado(resultado) {
  if (resultado === "nenhuma")
    atualizarStatus("✅ Nenhuma ameaça encontrada.");

  if (resultado === "anomalia")
    atualizarStatus("⚠️ Anomalia detectada. Monitorando...");

  if (resultado === "ameaça") {
    atualizarStatus("🛑 Ameaça detectada! Contenção em andamento...");
    // Após 2 segundos, assume contenção
    setTimeout(() => atualizarStatus("✅ Ameaça contida com sucesso."), 2000);
  }
}

// Finaliza o teste e retorna ao status normal
function finalizarTeste() {
  atualizarStatus("🟢 Sistema operando normalmente.");
  bloquearBotao(btnParanormal, false);
  testeEmAndamento = false;
}

/* ==================================================
   PROTOCOLO DE EMERGÊNCIA
================================================== */
// Alterna entre ativar/desativar emergência
function alternarEmergencia() {
  emergenciaAtiva ? desativarEmergencia() : ativarEmergencia();
}

// Ativa protocolo de emergência
function ativarEmergencia() {
  // Desativa alerta máximo se estiver ativo
  alertaMaximoAtivo && desativarAlertaMaximo();

  emergenciaAtiva = true;
  document.body.classList.add("emergencia");
  atualizarStatus("🚨 PROTOCOLO DE EMERGÊNCIA ATIVADO 🚨");
  btnEmergencia.innerText = "Desativar Emergência";
}

// Desativa protocolo de emergência
function desativarEmergencia() {
  emergenciaAtiva = false;
  document.body.classList.remove("emergencia");
  atualizarStatus("🟢 Sistema operando normalmente.");
  btnEmergencia.innerText = "Ativar Protocolo de Emergência";
}

/* ==================================================
   ALERTA MÁXIMO
================================================== */
// Alterna entre ativar/desativar alerta máximo
function alternarAlertaMaximo() {
  alertaMaximoAtivo ? desativarAlertaMaximo() : ativarAlertaMaximo();
}

// Ativa alerta máximo
function ativarAlertaMaximo() {
  // Desativa emergência se estiver ativo
  emergenciaAtiva && desativarEmergencia();

  alertaMaximoAtivo = true;
  document.body.classList.add("alerta-maximo");
  atualizarStatus("🔴 ALERTA MÁXIMO ATIVADO 🔴");
  btnAlertaMaximo.innerText = "Desativar Alerta Máximo";
}

// Desativa alerta máximo
function desativarAlertaMaximo() {
  alertaMaximoAtivo = false;
  document.body.classList.remove("alerta-maximo");
  atualizarStatus("🟢 Sistema operando normalmente.");
  btnAlertaMaximo.innerText = "Modo Alerta Máximo";
}

/* ==================================================
   DETALHES DAS CRIATURAS
================================================== */
// Alterna entre mostrar e ocultar detalhes de cada criatura
function mostrarOuOcultarDetalhes(botao) {
  const detalhes = botao.previousElementSibling; // seleciona div .detalhes
  const ativo = detalhes.classList.toggle("ativo"); // adiciona ou remove classe

  // Atualiza o texto do botão
  botao.innerText = ativo ? "Ocultar Detalhes" : "Mostrar Detalhes";
}
