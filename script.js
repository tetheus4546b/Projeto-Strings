const botaoRevelarPalavras = document.querySelector('#botao-palavrachave');

botaoRevelarPalavras.addEventListener('click', indicarPalavrasChave);

function indicarPalavrasChave() {
    const Refomular = document.querySelector('#entrada-de-texto').value;
    const areaResultado = document.querySelector('#resultado-palavrachave');
    const palavrasCerta =  RecebendoTexto(Refomular);

    areaResultado.textContent = palavrasCerta.join(", ");
}

function RecebendoTexto(texto) {
    let palavrasReveladas =  texto.split(/\P{L}+/u);
    return palavrasReveladas;
}