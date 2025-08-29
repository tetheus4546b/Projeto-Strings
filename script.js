const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', RevelarTodasPalavrasChave);

function RevelarTodasPalavrasChave() {
    const identificaçãotexto = document.querySelector('#entrada-de-texto').value;
    const Resultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processamentoDoTexto(identificaçãotexto);

    Resultado.textContent = palavrasChave.join(", ");
}

function processamentoDoTexto(identificaçãotexto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}