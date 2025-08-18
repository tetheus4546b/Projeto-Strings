const botaoRevelarPalavras = document.querySelector('#botao-palavrachave');

botaoRevelarPalavras.addEventListener('click', revelador-de-palavrachave);

function revelador-de-palavrachave() {
    const textoDigitado = document.querySelector('#entrada-de-texto').value;
    const Resultadofinal = document.querySelector('#resultado-palavrachave');
    const palavrasCertas = processamento-dos-textos(textoDigitado);

    Resultadofinal.textContent = palavrasCertas.join(", ");
}

function processamento-dos-textos(textoDigitado) {
    let palavrasChave = textoDigitado.split(/\P{L}+/u);
    return palavrasChave;
}