const botaoRevelarPalavras = document.querySelector('#botao-palavrachave');

botaoRevelarPalavras.addEventListener('click', reveladorDePalavrachave);

function reveladorDePalavrachave() {
    const textoDigitado = document.querySelector('#entrada-de-texto').value;
    const Resultadofinal = document.querySelector('#resultado-palavrachave');
    const palavrasCertas = processamentoDosTextos(textoDigitado);

    Resultadofinal.textContent = palavrasCertas.join(", ");
}

function processamentoDosTextos(textoDigitado) {
    let palavrasChave = textoDigitado.split(/\P{L}+/u);
    return palavrasChave;
}