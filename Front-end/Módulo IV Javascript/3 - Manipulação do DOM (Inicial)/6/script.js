const btnTema = document.getElementById("toggleTema");
const corpo = document.body;

btnTema.addEventListener("click", () => {
  corpo.classList.toggle("dark-mode");

  if (corpo.classList.contains("dark-mode")) {
    btnTema.textContent = "Modo Light";
  } else {
    btnTema.textContent = "Modo Dark";
  }
});
