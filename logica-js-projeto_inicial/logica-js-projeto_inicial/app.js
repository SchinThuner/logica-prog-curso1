alert(`Boas vindas ao jogo do número secreto!`);
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt(`chute um número entre 1 e 30`);
if (chute == numeroSecreto) {
    alert(`você acertou o número secreto que é ${chute}`);
}else{
    alert(`você errou o número secreto não é ${chute}`);
}
