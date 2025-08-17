const botaoMostraPalavras = document.querySelector('#pressionar');

botaoMostraPalavras.addEventListener('click', Revelar-palavras);

function Revelar-palavras() {
    const texto = document.querySelector('#colocar-no-texto').value;
    const campoResultado = document.querySelector('#resposta-do-extrator');
    const palavrasChave = processamento(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processamento(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}