document.getElementById("finalizar").addEventListener("click", () => {
    let respostasMarcadas = document.querySelectorAll("input:checked");
    let acertos = 0;
  
    respostasMarcadas.forEach(resp => {
      if (resp.value === "1") {
        acertos++;
      }
    });
  
    document.getElementById("resultado").textContent =
      `Você acertou ${acertos} de 3 perguntas!`;
  });
  