const quadrado = document.getElementById("quadrado");
const botao = document.getElementById("toggleBtn");

botao.addEventListener("click", () => {
  quadrado.classList.toggle("hidden");
});
