let limitNumber = 10;
let Attempt = '';
let secretNumber = generateRandomNumber();
console.log(secretNumber);

showOnScreen(`h1`,`Secret number game`);
showOnScreen(`p`,`Choose a number from 1 to ${limitNumber}`);

function showOnScreen(tag,text) {
    let fieldText = document.querySelector(tag);
    fieldText.innerHTML = `${text}`;
}

function generateRandomNumber(){
    return parseInt(Math.random() * limitNumber + 1);
}

function checkAttempt(){
    Attempt = document.querySelector('input').value;
    if (Attempt == secretNumber) {
        showOnScreen(`h1`,`Congratulations !! You guessed the secret number`);
        showOnScreen(`p`,`You find the secret number`);
    } else {
        if(Attempt > secretNumber){
            showOnScreen(`p`,`The secret number is smaller`);
        } else {
            showOnScreen(`p`,`The secret number is bigger`);
        };
    }

}

