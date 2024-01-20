console.log(`Bem-vindo`);
let nome = `Schindler`;
console.log(`Olá ${nome}`);
alert(`Olá ${nome}`);
let linguagemPreferida = prompt(`Qual linguagem você mais gosta?`);
console.log(linguagemPreferida);
let valor1 = 2;
let valor2 = 9;
let resultado = valor1 + valor2;
console.log(`O valor da soma de ${valor1} + ${valor2} é igual a ${resultado}`);
resultado = valor1 - valor2;
console.log(`O valor da soma de ${valor1} - ${valor2} é igual a ${resultado}`);

let idade = prompt(`Informe sua idade:`);
if (idade >= 18) {
    console.log(`Você já é maior de idade`);
}else{
    console.log(`Você não é maior de idade`);
}

let numero = prompt(`Informe um número`);
if (numero == 0) {
    console.log(`Número informado é 0`)
}else if (numero > 0) {
    console.log(`Número informado é positivo`);
} else {
    console.log(`Número informado é negativo`);
}

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let nota = prompt(`Informe sua nota:`);
if (nota >= 7) {
    console.log(`Aprovado`);
}else{
    console.log(`Reprovado`);
}

let numeroRandomico = parseInt(Math.random());
console.log(numeroRandomico);

numeroRandomico = parseInt(Math.random() * 10) + 1;
console.log(numeroRandomico);

numeroRandomico = parseInt(Math.random() * 1000) + 1;
console.log(numeroRandomico);
