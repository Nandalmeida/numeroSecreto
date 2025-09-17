/*let titulo = document.querySelector('h1');
//Inner HTML = dentro do HTML
titulo.innerHTML = "Jogo do número screto";

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número entre 1 e 10";*/

//Declaração de variáveis:
let rangeMax = 5; // Limita o jogo de 0 a 10
let listaNumerosGerados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



//Função principal:
//Criar uma funcionalidade
interagirHTML('h1',"Jogo do número Secreto");
interagirHTML('p',"Escolha um número entre 1 e 10");

function verificarChute(){
    //Escopo ou corpo da função.
    //Pegar informação do HTML
    let chuteUsuario = document.querySelector('input').value
    if (chuteUsuario == numeroSecreto){
        console.log("Chute: " + chuteUsuario);
        console.log("Número secreto: " + numeroSecreto);
        interagirHTML('h1', "Acertou!");
        palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        mensagemAcerto = `Parabéns! Você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
        interagirHTML('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        console.log("Chute: " + chuteUsuario);
        console.log("Número secreto: " + numeroSecreto);
        if(chuteUsuario > numeroSecreto){
            interagirHTML('p',`O número secreto é menor que ${chuteUsuario}`);
        }else if(chuteUsuario > rangeMax){
           interagirHTML('h1','Atenção!');
            interagirHTML('p', 'Chute um número apenas de 0 e 10!')
        }else{
             interagirHTML('p', `O número secreto é maior que ${chuteUsuario}`);
        }
        tentativas++;
        limparCampo();
    }
}

//Funções:
//Função com parâmetros
function interagirHTML (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio (){
    let numeroAleatorio = parseInt(Math.random()* rangeMax + 1);//Quando colocamos + 1 queremos que nosso número aleatório contenha o intervalo do número que está multiplicando o número aleatório.
    console.log("Numero gerado "+ numeroAleatorio); 
    console.log("lista: "+ listaNumerosGerados.length + "\nMax: " + rangeMax);
    if (listaNumerosGerados.length == rangeMax){
        reiniciarJogo();
        listaNumerosGerados = [];
    }
    if (listaNumerosGerados.includes(numeroAleatorio)){
    //Faz uma nova verificação e trás outro número aleatório:
        console.log("Já existe esse número na lista: ")  
        gerarNumeroAleatorio();
    }else{
        listaNumerosGerados.push(numeroAleatorio);
        console.log("Retorno:" + numeroAleatorio);
        return numeroAleatorio;
    }

}

function limparCampo(){
    campoImput = document.querySelector('input');
    campoImput.value = '';
}

function reiniciarJogo(){
    document.getElementById('reiniciar').setAttribute('disabled',true);

    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    
    interagirHTML('h1',"Jogo do número Secreto");
    interagirHTML('p',"Escolha um número entre 1 e 10");
    limparCampo();
}
