let listNumbersSorted = [];
let limitNumber = 10;
let attempt = 1;
let wordAttempt = 'attempt'
let assort = ''
let secretNumber = generateRandomNumber();
console.log(secretNumber);

function showMessageStart() {
    showOnScreen(`h1`,`Secret number game`);
    showOnScreen(`p`,`Choose a number from 1 to ${limitNumber}`);   
}

function showOnScreen(tag,text) {
    let fieldText = document.querySelector(tag);
    fieldText.innerHTML = `${text}`;
}

function generateRandomNumber(){
    let drawnNumber = parseInt(Math.random() * limitNumber + 1);
    let quantityOfElementsInList = listNumbersSorted.length;
    console.log(listNumbersSorted);
    limitNumber == quantityOfElementsInList ? listNumbersSorted = [] : null;
    if (listNumbersSorted.includes(drawnNumber)) {
        console.log(listNumbersSorted);
        return generateRandomNumber();
    } else {
        listNumbersSorted.push(drawnNumber);
        return drawnNumber;
    }
}

function checkAssort(){
    assort = document.querySelector('input').value;
    if (assort == secretNumber) {
        document.getElementById('reiniciar').removeAttribute('disabled');
        showOnScreen(`h1`,`Congratulations !! You guessed the secret number`);
        showOnScreen(`p`,`You found the secret number in ${attempt} ${wordAttempt}`);
    } else {
        wordAttempt = `attempts`;
        attempt++;
        if(assort > secretNumber){
            showOnScreen(`p`,`The secret number is smaller`);
        } else {
            showOnScreen(`p`,`The secret number is bigger`);
        };
        cleanField();
    }
}

function cleanField() {
    assort = document.querySelector('input');
    assort.value = '';
}

function newGame(){
    document.getElementById('reiniciar').setAttribute('disabled',true);
    secretNumber = generateRandomNumber();
    cleanField();
    attempt = 1;
    wordAttempt = `attempt`;
    showMessageStart();
}

showMessageStart();
