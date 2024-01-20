alert(`Boas vindas ao jogo do número secreto!`);

let chute;
let tentativas = 1;
let numeroMaximo = 10;
//let palavraTentativa = 'tentativa';
let numeroSecreto = parseInt(Math.random()*numeroMaximo + 1);
console.log(numeroSecreto);

while (chute != numeroSecreto) {

    chute = prompt(`chute um número entre 1 e ${numeroMaximo}`);
    
    if (chute == numeroSecreto) {
        break;
    }else{
        tentativas++;
        //palavraTentativa = 'tentativas';
        if (chute > numeroSecreto) {
            alert(`O número informado é maior que o número secreto`);
        }else{
            alert(`O número informado é menor que o número secreto`);
        }
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`você acertou o número secreto que é ${chute} com ${tentativas} ${palavraTentativa}`);
