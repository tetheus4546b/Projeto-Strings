const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const areaResultado = document.querySelector('#resultado-palavrachave');
    const palavrasCerta =  RecebendoTexto(texto);

    areaResultado.textContent = palavrasCerta.join(", ");
}

function RecebendoTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}