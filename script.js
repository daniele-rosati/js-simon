// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// generiamo i numeri da casuale compreso tra min(0) e max (100)
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// creiamo un arrey che contenga i numeri generati in precedenza

function generaNumeri(count){
    const numeri = [];
    for (let i = 0; i<count; i++){
        numeri.push(getRandomNumber(1,100));
    }
    return numeri;
}

// creiamo una fuzione per mostrare i numeri all'utente in modo tale che possa ricordarseli
function displayNumeri(numeri){
    const numbersElement = document.getElementById('numeri');
    numbersElement.textContent = numeri.join(' ');
}

