const botaoRevelarPalavras = document.querySelector('#botao-palavrachave');

botaoRevelarPalavras.addEventListener('click', indicarPalavrasChave);

function indicarPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const areaResultado = document.querySelector('#resultado-palavrachave');
    const palavrasCerta =  RecebendoTexto(texto);

    areaResultado.textContent = palavrasCerta.join(", ");
}

function RecebendoTexto(texto) {
    let palavrasReveladas =  texto.split(/\P{L}+/u);
    return palavrasReveladas;
}