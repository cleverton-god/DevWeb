const imagemPrincipal = document.getElementById("imagem-principal");
const miniaturas = document.querySelectorAll(".mini");

miniaturas.forEach(img => {
    img.addEventListener("click", () => {
        imagemPrincipal.src = img.src.replace("w=200", "w=900");
    });
});
