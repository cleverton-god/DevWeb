console.log("o sistema foi iniciado.");
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnParanormal");

  btn.addEventListener("click", () => {
    alert("⚠️ ALERTA PARANORMAL ⚠️\nO sistema detectou uma presença estranha...");
  });
});
