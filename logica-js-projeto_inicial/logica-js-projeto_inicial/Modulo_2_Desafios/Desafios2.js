let diaSemana = prompt(`Informe o dia da semana`);
if (diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    alert(`Bom fim de semana!`);
}else{
    alert(`Boa semana!`);
}

let numero = prompt(`Digite um número`);
if(!(numero%2)){
    alert(`Número digitado é par`);
}else{
    alert(`Número digitado é impar`);
}   

let pontuacao = 50;
if (pontuacao == 100) {
    alert(`Parabéns você venceu!`);
}else{
    alert(`Tente novamente para ganhar`);
}

let saldo = 586;
alert(`Saldo na conta ${saldo}`);

let nome = prompt(`Insira seu nome`);
alert(`Bem vindo ${nome}!`);
