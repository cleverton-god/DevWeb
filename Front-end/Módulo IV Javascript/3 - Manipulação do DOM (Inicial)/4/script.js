const valor = document.getElementById("valor");
const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");

let contador = 0;

btnMais.addEventListener("click", () => {
  contador++;
  valor.textContent = contador;
});

btnMenos.addEventListener("click", () => {
  contador--;
  valor.textContent = contador;
});
