function calculoIMC(altura, peso) {
    let result = peso /(altura*altura);
    return result
}

let peso = prompt(`Informe seu peso:`);
let altura = prompt(`Informe sua altura`);

let IMC = calculoIMC(altura,peso); 
console.log(IMC < 18.5);
if (IMC > 30) {
    alert(`Você está no estágio de obesidade`);
} 
else if (IMC < 18.5) {
    alert(`Você está com baixo peso`);
} 
else if (IMC >= 18.5 && IMC <= 24.99) {
    alert(`Você está com peso normal`);
} else {
    alert(`Você está com sobrepeso`);
}

let numero = prompt(`Digite o número que se deseja saber o fatorial`);

function fatorial(numero) {
    if(numero < 0){
        return -1;
    } else if (numero == 0) {
        return 1;
    } else {
        return (numero * fatorial(numero - 1));
    }
}

console.log('O valor fatorial de '+' '+ numero +' '+ 'é'+' '+ fatorial(numero));

dolares = prompt(`Informe a quantidade de dolares`);

function conversão(dollar) {
    return dollar*4.8;
}
palavraDolar = dolares > 1 ? `dolares` : `dolar`
console.log(`valor de $${dolares} ${palavraDolar} em real é R$${conversão(dolares)}`);

let alturaInformada = prompt(`Informe a altura do retangulo:`);
let larguraInformada = prompt(`Informe a largura do retangulo:`);

function tamanhoSala(altura, largura){
    let area = altura*largura;
    let perimetro = 2*(altura+largura);
    console.log(`A área do retangulo é ${area} e o perimetro é ${perimetro}`);
}

tamanhoSala(alturaInformada,larguraInformada);

let raioInformada = prompt(`Informe a altura do retangulo:`);

function tamanhoCircular(raio){
    const pi = 3.14;
    let areaCirculo = (raio**2)*pi;
    let perimetroCirculo = 2*raio*pi;
    console.log(`A área do circulo é ${areaCirculo} e o perimetro do circulo é ${perimetroCirculo}`);
}

tamanhoCircular(raioInformada);

const tabuada = prompt(`Informe a altura do retangulo:`);

function tabuadaDoNumero(tabuada){
    for (let i = 0; i <= 9; i++) {
        console.log(`tabuada do ${tabuada} : ${tabuada} x ${i} = ${tabuada * i}`);        
    }
}

tabuadaDoNumero(tabuada);

/**
 * oque falta fazer ::
 * 
 * Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
 */