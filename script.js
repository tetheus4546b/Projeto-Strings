const botaoRevelarPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', revelar-palavrachave);

function revelar-palavrachave() {
    const textoDigitado = document.querySelector('#entrada-de-texto').value;
    const Resultadofinal = document.querySelector('#resultado-palavrachave');
    const palavrasCertas = processamento-dos-textos(texto);

    Resultadofinal.textContent = palavrasChave.join(", ");
}

function processamento-dos-textos(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}