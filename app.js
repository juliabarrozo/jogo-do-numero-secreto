let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = "Você descobriu o número secreto com ${tentativas} ${palavraTentativa}"
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar')
    } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', 'O número secreto é maior')
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor')
        }
        tentativas ++

    }
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random () * numeroLimite + 1);
}
function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}