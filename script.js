const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', revelar-palavrachave);

function revelar-palavrachave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}