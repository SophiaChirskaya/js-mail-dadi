// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.


// Creo lista degli invitati

const invite = ["m.bianchi@mail.com", "m.rossi@mail.com", "m.neri@mail.com"];

// Chiedo l'indirizzo mail dell'utente

const userMail = prompt("Inserisci la tua email:");

// Controllo se l'email è nella llista

let accessGranted = false;
for (let i = 0; i < invite.length; i++){
    if(invite[i] === userMail) {
        accessGranted = true;
        break;
    }
}

// Mostro messaggio di output

if(accessGranted){
    console.log("Sei benvenuto!");
}else{
    console.log(`Spiacente, la tua mail ${userMail} non è nella lista`);
}