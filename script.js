const botaoMostraPalavras = document.querySelector('#botao');

botaoMostraPalavras.addEventListener('click', revelarAsPalavras);

function revelarAsPalavras() {
    const texto = document.querySelector('#colocar-os-textos').value;
    const campoResultado = document.querySelector('#resposta-do-texto');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}