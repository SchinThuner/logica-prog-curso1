let contador = 1
while(contador <= 10){
    alert(`${contador} `);
    contador++;
}
contador = 10;
while(contador > 0){
    alert(`${contador} `);
    contador--;
}

let numeroInformado = prompt(`Digite o número para contagem regressiva`);
while (numeroInformado >= 0) {
    console.log(`${numeroInformado} `);
    numeroInformado--;
}

let numeroProgressivo = prompt(`Digite o número para contagem regressiva`);
contador = 0;
while (contador <= numeroProgressivo) {
    console.log(`- ${contador} `);
    contador++;
}