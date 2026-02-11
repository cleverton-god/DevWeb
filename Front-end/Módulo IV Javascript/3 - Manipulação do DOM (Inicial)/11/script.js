let pontos = 10;

const atributos = {
    forca: 0,
    agilidade: 0,
    inteligencia: 0
};

const pontosRestantes = document.getElementById("pontosRestantes");
const resultado = document.getElementById("resultado");

const botoesMais = document.querySelectorAll(".mais");
const botoesMenos = document.querySelectorAll(".menos");

function atualizarTela() {
    pontosRestantes.textContent = `Pontos restantes: ${pontos}`;
    document.getElementById("forca").textContent = atributos.forca;
    document.getElementById("agilidade").textContent = atributos.agilidade;
    document.getElementById("inteligencia").textContent = atributos.inteligencia;
}

// +1
botoesMais.forEach(botao => {
    botao.addEventListener("click", () => {
        const atributo = botao.getAttribute("data-atributo");

        if (pontos > 0) {
            atributos[atributo]++;
            pontos--;
            atualizarTela();
        }
    });
});

// –1
botoesMenos.forEach(botao => {
    botao.addEventListener("click", () => {
        const atributo = botao.getAttribute("data-atributo");

        if (atributos[atributo] > 0) {
            atributos[atributo]--;
            pontos++;
            atualizarTela();
        }
    });
});

document.getElementById("confirmar").addEventListener("click", () => {
    if (pontos > 0) {
        resultado.textContent = "Você ainda tem pontos para distribuir!";
        resultado.style.color = "red";
    } else {
        resultado.innerHTML = `
            <p><strong>Distribuição Final:</strong></p>
            <p>Força: ${atributos.forca}</p>
            <p>Agilidade: ${atributos.agilidade}</p>
            <p>Inteligência: ${atributos.inteligencia}</p>
        `;
        resultado.style.color = "black";
    }
});
