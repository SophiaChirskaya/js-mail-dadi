// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Definisco funzione per creare i numeri random

function diceRoll(){
    return Math.floor(Math.random()*6) + 1;
}

// Per il giocatore e per il sw si genera il numero

const playerScore = diceRoll();
const swScore = diceRoll();

// Output dei risultati

console.log(`Punti giocatore ${playerScore}`);
console.log(`Punti giocatore ${swScore}`);

// Procedura per dichiarare il vincitore

if (playerScore > swScore){
    console.log(`Human being wins`)
}
else if(playerScore < swScore){
    console.log("SW wins")
}
else{
    console.log("Draw")
}

