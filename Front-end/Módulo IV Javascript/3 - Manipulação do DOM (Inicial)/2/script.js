const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
  p1.textContent = "Parágrafo 1 alterado!";
});

btn2.addEventListener("click", () => {
  p2.textContent = "Parágrafo 2 alterado!";
});

btn3.addEventListener("click", () => {
  p3.textContent = "Parágrafo 3 alterado!";
});
