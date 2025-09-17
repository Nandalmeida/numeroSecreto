/*
Autor: Maria Fernanda de Almeida 
Data: 12/09/2025
Arquivo : appNumSecreto
Objetivo: Aplicar os conehcimentos sobre criação de funções e manipulações de array.
Descrição: Um jogo de advinhação que sorteia números de 1 até 10 para o usuário advinhar.
*/

// Espaço destinado para declaração das variáveis

let contagemTentativas;
let numeroSecreto;
let listaNumerosSecretos = []; // -> Uma lista que composta pelos números já sorteados
let chuteDoUsuario;
let selecionarTag;
let campoSelecionado;
let rangeMaximo = 10;

//Função principal
iniciarJogo();

// Espaço destinado para a organização das funções:
function iniciarJogo (){
    console.log(listaNumerosSecretos);
    function gerarNumeroSecreto (){
        let numeroAleatorio = parseInt(Math.random() * rangeMaximo + 1);
        if(listaNumerosSecretos.length == rangeMaximo){
            listaNumerosSecretos = [];
        }
        if(listaNumerosSecretos.includes(numeroAleatorio)){
            return gerarNumeroSecreto();
        }else{
            listaNumerosSecretos.push(numeroAleatorio)
            return numeroAleatorio;
        }

    }
    // Configurações básicas para iniciar o jogo.
    
    contagemTentativas = 1;
    numeroSecreto = gerarNumeroSecreto();
    alterarTextoPagina ('Jogo do número secreto', `Para começar chute um número de 1 a ${rangeMaximo}`);
} 

function verificarChute (){
    chuteDoUsuario = document.querySelector('input').value;
    if (chuteDoUsuario == numeroSecreto){
        alterarTextoPagina ('Parabéns!', `Você acertou o número secreto em ${contagemTentativas} ${palavraTentativas()}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { // -> Quando o usuário erra o chute é verificado se o número secreto é maior ou menor que o chute.
        if (chuteDoUsuario > numeroSecreto){
            alterarTextoPagina('Atenção', `O número secreto é menor que ${chuteDoUsuario}`);
        } else {
            alterarTextoPagina('Atenção', `O número secreto é maior que ${chuteDoUsuario}`);
        }
        limparCampo();
        contagemTentativas++;
    }
}

function limparCampo(){
    campoSelecionado = document.querySelector('input');
    campoSelecionado.value = '';
}

function reiniciarJogo(){
    document.getElementById('reiniciar').setAttribute('disabled',true);
    iniciarJogo(); 
    limparCampo();
}

function palavraTentativas(){
    return contagemTentativas > 1 ? 'tentativas' : 'tentativa';
}

function alterarTextoPagina (texto1, texto2){
    alterarTextoTag ('h1', texto1);
    alterarTextoTag ('p',texto2);
    
}

function alterarTextoTag (tagSelecionada,textoAcrescentado){
    selecionarTag = document.querySelector(tagSelecionada).innerHTML = textoAcrescentado;
   
}



