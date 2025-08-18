const botaoRevelarPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const textoDigitado = document.querySelector('#entrada-de-texto').value;
    const Resultadofinal = document.querySelector('#resultado-palavrachave');
    const palavrasCertas = processamentoDosTextos(texto);

    Resultadofinal.textContent = palavrasCertas.join(", ");
}

function processamentoDosTextos(texto) {
    let palavrasChave = textoDigitado.split(/\P{L}+/u);
    return palavrasChave;
}