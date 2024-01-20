alert(`Boas vindas ao jogo do número secreto!`);
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {

    chute = prompt(`chute um número entre 1 e 30`);
    
    if (chute == numeroSecreto) {
        alert(`você acertou o número secreto que é ${chute} com ${tentativas} tentativas`);
    }else{
        tentativas++;
        if (chute > numeroSecreto) {
            alert(`O número informado é maior que o número secreto`);
        }else{
            alert(`O número informado é menor que o número secreto`);
        }
    }
}
