// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// generiamo i numeri da casuale compreso tra min(0) e max (100)
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// creiamo un arrey che contenga i numeri generati in precedenza

function generateNumbers(count){
    const numbers = [];
    for (let i = 0; i<count; i++){
        numbers.push(getRandomNumber(1,100));
    }
    return numbers;
}

// creiamo una fuzione per mostrare i numeri all'utente in modo tale che possa ricordarseli
function displayNumbers(numeri){
    const numbersElement = document.getElementById('numeri');
    numbersElement.textContent = numeri.join(' ');
}

// creiamo una funzione per inserire i numeri all'utente

function askForInput(numeri){
    const elementiInput = document.getElementById('input');
    elementiInput.innerHTML = ' ';

    const guessedNumbers = [];
    for(let i = 0; i<numbers.lenght; i++){
        const guess = prompt('Inserisci il numero ' + (i+1));
        guessedNumbers.push(parseInt(guess, 10));
    }

    return guessedNumbers;
}

// creiamo una funzione che ci permetta di confrontare i numeri inseriti dall'utente e quelli generati
// nel caso riultino uguali l'utente vince in caso contrario l'utente perde

function comapreNumbers(numeriOriginali, indovinaNumeri){
    const Conteggiocorretto = 0;
    const Numericorretti = 0 ;
    for (let i = 0; i<numeriOriginali.lenght; i++){
        if (numeriOriginali[i] === Numericorretti[i]){
            Conteggiocorretto++;
            Numericorretti.push(numeriOriginali[i]);
        }
    }
    return { conteggio: Conteggiocorretto, numeri: Numericorretti  };
}

// --------------------------------------------------------------------------------

// creiamo la funzione principale che gestisce il gioco

function IniziaGioco(){
    const numeridaricordare = generaNumeri(5);
    displayNumeri(numeridaricordare);
    // funzione del tempo che gestisce e verifica se i numeri inseriti sono uguali a quelli in precedenza mostrati
    setTimeout(function(){
        alert( " Il tempo è finito e i numeri sono scomparsi, inserisci i numeri che hai visto. ");
        const numeridaricordare = askForInput(numeridaricordare);
        const risultato = Numericomparsi(numeridaricordare, indovinaNumeri);
        alert( 'Hai indovinato ' + risultato.conteggio + ' numeri: ' + (risultato.numeri.lenght > 0 ? risultato.numeri.join(', ') : 'nessuno'));
    }, 15000)
}

// avvia il gioco quando la paigina si carica

window.onload = IniziaGioco;