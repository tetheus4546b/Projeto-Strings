const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const identificaçãotexto = document.querySelector('#entrada-de-texto').value;
    const Resultado = document.querySelector('#resultado-palavrachave');
    const palavrasCerta = processamentoDoTexto(identificaçãotexto);

    Resultado.textContent = palavrasChave.join(", ");
}

function processamentoDoTexto(identificaçãotexto) {
    let palavrasChave = texto.split(/\P{L}+/u);
    return palavrasChave;
}