const ataque = Number(process.argv[2]);
const defesa = Number(process.argv[3]);

if (isNaN(ataque) || isNaN(defesa)) {
    console.log("Por favor, insira valores numéricos válidos.");
} else {
    let dano = ataque - defesa;

    if (dano < 0) {
        dano = 0;
    }

    console.log("----- Resultado da Batalha -----");
    console.log(`Ataque do jogador: ${ataque}`);
    console.log(`Defesa do inimigo: ${defesa}`);
    console.log(`Dano causado: ${dano}`);
    console.log("--------------------------------");
}
