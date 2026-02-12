let tempo = 0;
let intervalo = null;
let rodando = false;

function startPause() {
    if (!rodando) {
        intervalo = setInterval(() => {
            tempo++;
            document.getElementById("display").textContent = tempo;
        }, 1000);

        rodando = true;
    } else {
        clearInterval(intervalo);
        rodando = false;
    }
}

function resetar() {
    clearInterval(intervalo);
    tempo = 0;
    rodando = false;
    document.getElementById("display").textContent = "0";
}

document.getElementById("btnStartPause").addEventListener("click", startPause);
document.getElementById("btnReset").addEventListener("click", resetar);
