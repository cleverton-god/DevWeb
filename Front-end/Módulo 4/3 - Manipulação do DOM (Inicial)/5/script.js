const nomeInput = document.getElementById("nomeInput");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const lista = document.getElementById("listaNomes");

btnAdd.addEventListener("click", () => {
  const nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Digite um nome!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = nome;

  lista.appendChild(li);

  nomeInput.value = "";
  nomeInput.focus();
});

btnClear.addEventListener("click", () => {
  lista.innerHTML = ""; 
});
