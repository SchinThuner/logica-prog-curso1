let titulo = document.querySelector('h1');
titulo.innerHTML = `Hora do Desafio`;

function btnConsole(){
    console.log(`O botão foi clicado`);
}

function btnAlert(){
    alert(`Eu amo JS`);
}

function btnPrompt(){
    let cidade = prompt(`Informe o nome de uma cidade:`);
    alert(`Estive em ${cidade} e lembreu de você`);
}

function btnSoma(){
    let primeiroNumero = prompt(`Informe o primeiro valor da Somar`);
    let segundoNumero = prompt(`Informe o segundo valor da Somar`);
    let soma = primeiroNumero + segundoNumero;
    alert(`A soma ${primeiroNumero} + ${segundoNumero} = ${soma}`);
}