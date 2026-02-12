const imagens = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

let pausado = false;
let intervalo = setInterval(proxima, 3000); 

function mostrar(i) {
    index = i;
    document.getElementById("principal").src = imagens[index];
}

function proxima() {
    index = (index + 1) % imagens.length;
    mostrar(index);
}

function pausar() {
    if (!pausado) {
        clearInterval(intervalo);
        pausado = true;
        document.getElementById("btnPause").textContent = "Retomar Auto-Troca";
    } else {
        intervalo = setInterval(proxima, 1000);
        pausado = false;
        document.getElementById("btnPause").textContent = "Pause Auto-Troca";
    }
}

document.getElementById("btnPause").addEventListener("click", pausar);

document.querySelectorAll(".thumb").forEach(thumb => {
    thumb.addEventListener("click", (e) => {
        const i = Number(e.target.getAttribute("data-index"));
        mostrar(i);
    });
});
