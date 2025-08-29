const botaoRevelarPalavras = document.querySelector('#botao-palavrachave');

botaoRevelarPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const areaResultado = document.querySelector('#resultado-palavrachave');
    const palavrasCerta =  RecebendoTexto(texto);

    areaResultado.textContent = palavrasCerta.join(", ");
}

function RecebendoTexto(texto) {
    let palavras =  texto.split(/\P{L}+/u);
    return palavras;
}