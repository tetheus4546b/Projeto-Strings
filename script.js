const botaoRevelarPalavras = document.querySelector('#botao-palavrachave');

botaoRevelarPalavras.addEventListener('click', revelar-palavrachave);

function revelar-palavrachave() {
    const textoDigitado = document.querySelector('#entrada-de-texto').value;
    const Resultadofinal = document.querySelector('#resultado-palavrachave');
    const palavrasCertas = processamento-dos-textos(texto);

    Resultadofinal.textContent = palavrasChave.join(", ");
}

function processamento-dos-textos(texto) {
    let palavrasChave = texto.split(/\P{L}+/u);
    return palavrasChave;
}