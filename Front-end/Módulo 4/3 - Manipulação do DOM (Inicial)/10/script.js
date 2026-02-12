const tabela = document.getElementById("tabela");
const btnAdd = document.getElementById("add");
const btnRemove = document.getElementById("remove");

let contador = 1;

btnAdd.addEventListener("click", () => {
    const novaLinha = tabela.insertRow(); 

    const cel1 = novaLinha.insertCell(); 
    const cel2 = novaLinha.insertCell();

    cel1.textContent = contador;
    cel2.textContent = "Linha adicionada";

    contador++;
});

btnRemove.addEventListener("click", () => {
    if (tabela.rows.length > 1) {
        tabela.deleteRow(-1); 
        contador--;
    }
});
