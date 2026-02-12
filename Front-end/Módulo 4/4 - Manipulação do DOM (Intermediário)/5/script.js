const perguntas = [
    { pergunta: "Quanto é 2 + 2?", alternativas: ["3", "4", "5"], correta: 1 },
    { pergunta: "Qual é a capital do Brasil?", alternativas: ["Rio de Janeiro", "Brasília", "São Paulo"], correta: 1 },
    { pergunta: "Qual cor é primária?", alternativas: ["Verde", "Amarelo", "Vermelho"], correta: 2 },
    { pergunta: "Qual é o maior planeta?", alternativas: ["Terra", "Marte", "Júpiter"], correta: 2 },
    { pergunta: "HTML é?", alternativas: ["Linguagem de marcação", "Banco de dados", "Sistema operacional"], correta: 0 }
];

let ponto = 0;
let indice = 0;

const divQuiz = document.getElementById("quiz");
const btnReiniciar = document.getElementById("btnReiniciar");

function renderizar() {
    if (indice >= perguntas.length) {
        let msg = "";
        if (ponto <= 2) msg = "Ruim";
        else if (ponto <= 4) msg = "Bom";
        else msg = "Excelente!";

        divQuiz.innerHTML = `<h3>Resultado: ${ponto}/5</h3><h4>${msg}</h4>`;
        return;
    }

    const q = perguntas[indice];
    divQuiz.innerHTML = `<h3>${q.pergunta}</h3>`;

    q.alternativas.forEach((alt, i) => {
        const btn = document.createElement("button");
        btn.textContent = alt;
        btn.classList.add("quiz-btn");
        btn.onclick = () => responder(i);
        divQuiz.appendChild(btn);
    });
}

function responder(i) {
    if (i === perguntas[indice].correta) ponto++;
    indice++;
    renderizar();
}

function reiniciar() {
    ponto = 0;
    indice = 0;
    renderizar();
}

btnReiniciar.addEventListener("click", reiniciar);

renderizar();
