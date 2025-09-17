function botaoMaior(x,y){
    x > y ? alert(`${x} é maior que ${y}`): alert(`${y} é maior que ${x}`);
}
function botaoAlert(nome){
    alert(`Eu me chamo ${nome}`);
}
function botaoMedia(x,y,z){
    alert(`A média de ${x}, ${y} e ${z} é ${(x+y+z)/3}`);
}
function botaoDobrar(num1){
    alert(`O dobro de ${num1} é ${num1*2}`);
}

function botaoPotencia(){
    let num = parseInt(Math.random() * 10 + 1);
    return num*num
}

function imprimirPotencia(){
    console.log(botaoPotencia());
}

