// Aguarda o HTML carregar antes de acessar os elementos
document.addEventListener("DOMContentLoaded", () => {

  /* ===== Seleção de elementos ===== */
  const btnParanormal = document.getElementById("btnParanormal");
  const btnEmergencia = document.getElementById("btnEmergencia");
  const statusSistema = document.getElementById("statusSistema");

  /* ===== Eventos ===== */

  // Botão: Testar Sistema Paranormal
  btnParanormal.addEventListener("click", () => {
    alert("⚠️ ALERTA PARANORMAL ⚠️\nO sistema detectou uma presença estranha...");
  });

  // Botão: Ativar Protocolo de Emergência
  btnEmergencia.addEventListener("click", () => {
    statusSistema.innerText = "🚨 PROTOCOLO DE EMERGÊNCIA ATIVADO 🚨";
  });

});
