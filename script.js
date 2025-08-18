const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', revelar-palavrachave);

function revelar-palavrachave() {
    const texto = document.querySelector('#Início-do-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processamento-dos-textos(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processamento-dos-textos(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}