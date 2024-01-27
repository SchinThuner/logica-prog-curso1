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
        showOnScreen(`h1`,`Try again, you didn't get the secret number right`);
        showOnScreen(`p`,`You didn't get the secret number, try again`);
    }
    console.log(`Value of Attempt: ${Attempt}`);
    console.log(Attempt == secretNumber ? `Congratulations !! You guessed the secret number
    ` : `Try again you didn't get the secret number right`);
}

