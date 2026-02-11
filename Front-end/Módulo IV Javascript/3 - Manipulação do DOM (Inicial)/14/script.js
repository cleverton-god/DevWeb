function filtrarLista() {
    const input = document.getElementById("busca");
    const filtro = input.value.toLowerCase();
    const itens = document.querySelectorAll("#lista li");
  
    itens.forEach(item => {
      const texto = item.textContent.toLowerCase();
      if (texto.includes(filtro)) {
        item.style.display = "block";   
      } else {
        item.style.display = "none";
      }
    });
  }
  