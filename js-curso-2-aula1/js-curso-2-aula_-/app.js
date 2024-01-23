let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
titulo.innerHTML = `Jogo do número Secreto`;
paragrafo.innerHTML = `Escolha um número entre 1 e 10`;
let chute = '';
function verificarChute(){
    chute = document.getElementsByClassName('container__input').value;
    console.log(`valor do chute ${chute}`);
}