const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const escrita = document.querySelector('#entrada-de-texto').value;
    const areaResultado = document.querySelector('#resultado-palavrachave');
    const palavrasCerta =  RecebendoTexto(escrita);

    areaResultado.textContent = palavrasCerta.join(", ");
}

function RecebendoTexto(escrita) {
    let palavrasChave = escrita.split(/\P{L}+/u);
    return palavrasChave;
}