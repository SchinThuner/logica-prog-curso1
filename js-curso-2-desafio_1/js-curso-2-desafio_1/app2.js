function greeting() {
    console.log(`Olá, mundo`);
}

greeting();

function greetingPerson(name) {
    console.log(`Hello, ${name}`);
};

// greetingPerson(`Aurora`);
greetingPerson(prompt(`provide your name`));

function exponentiation(numberToDouble){
    console.log(numberToDouble**2);
};

exponentiation(prompt(`provide the number`));

function average(number1,number2,number3){
    console.log((number1+number2+number3)/3);
};
number1 = parseInt(prompt(`Provide the first Number`));
number2 = parseInt(prompt(`Provide the second Number`));
number3 = parseInt(prompt(`Provide the third Number`));

average(number1,number2,number3);

function higherNumber(number1, number2){
    if(number1 == number2){
        console.log(`equal numbers`);
    }else{
        console.log(number1 > number2 ? `The largest number is ${number1}` : `The largest number is ${number2}`);
    }
}

numberHigher1 = parseInt(prompt(`Provide the first Number to compare`));
numberHigher2 = parseInt(prompt(`Provide the second Number to compare`));

higherNumber(numberHigher1,numberHigher2);

function sameNumber(sameNumber){
    console.log(sameNumber*sameNumber);
};

sameNumberProvide = parseInt(prompt(`Provide the Number to add to himself`));
sameNumber(sameNumberProvide); 