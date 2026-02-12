const btnAdd = document.getElementById("btnRegistrar");
const registro = document.getElementById("registro");
const btnClear = document.getElementById("btnClear");


btnAdd.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Clique registrado:" + new Date();
  
    registro.appendChild(li);
});
btnClear.addEventListener("click", () => {
    registro.innerHTML = ""; 
});