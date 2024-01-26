function showOnScreen(tag,text) {
    let fieldText = document.querySelector(tag);
    fieldText.innerHTML = `${text}`;
}
let limitNumber = 10;
showOnScreen(`h1`,`Jogo do número Secreto`);
showOnScreen(`p`,`Escolha um número entre 1 e ${limitNumber}`);

let Attempt = '';
function checkAttempt(){
    Attempt = document.getElementsByClassName('container__input').value;
    console.log(`valor do chute ${Attempt}`);
}