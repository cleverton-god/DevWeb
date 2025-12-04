document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('listaDeItens');
    let contadorDeItens = 4; 

    function handleRemoveButtonClick(event) {
        if (event.target && event.target.matches('.removerBtn')) {
            const itemParaRemover = event.target.parentNode;

            itemParaRemover.remove();
            
            console.log(`Item "${itemParaRemover.textContent.trim()}" removido.`);
        }
    }

    lista.addEventListener('click', handleRemoveButtonClick);

});
