// // Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// // Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// generiamo i numeri da casuale compreso tra min(0) e max (100)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// creiamo un arrey che contenga i numeri generati in precedenza
function generateNumbers(count) {
  var numbers = [];
  for (var i = 0; i < count; i++) {
    numbers.push(getRandomNumber(1, 100));
  }
  return numbers;
}

// creiamo una funzione per inserire i numeri all'utente
function displayNumbers(numbers) {
  const numbersElement = document.getElementById('numbers');
  numbersElement.textContent = numbers.join(' ');
}

// Funzione per chiedere all'utente di inserire i numeri
function askForInput(numbers) {
  const inputElement = document.getElementById('input');
  inputElement.innerHTML = '';

  const guessedNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    var guess = prompt('Inserisci il numero ' + (i + 1));
    guessedNumbers.push(parseInt(guess, 10));
  }

  return guessedNumbers;
}
// creiamo una funzione che ci permetta di confrontare i numeri inseriti dall'utente e quelli generati
//  nel caso riultino uguali l'utente vince in caso contrario l'utente perde
function compareNumbers(originalNumbers, guessedNumbers) {
  let correctCount = 0;
  let correctNumbers = [];
  for (var i = 0; i < originalNumbers.length; i++) {
    if (originalNumbers[i] === guessedNumbers[i]) {
      correctCount++;
      correctNumbers.push(originalNumbers[i]);
    }
  }
  return { count: correctCount, numbers: correctNumbers };
}

// --------------------------------------------------------------------------------

// creiamo la funzione principale che gestisce il gioco
function startGame() {
  const numbersToRemember = generateNumbers(5);
  displayNumbers(numbersToRemember);

  setTimeout(function() {
    alert('I numeri sono scomparsi! Ora inserisci i numeri che hai visto.');
    let guessedNumbers = askForInput(numbersToRemember);
    let result = compareNumbers(numbersToRemember, guessedNumbers);
    alert('Hai indovinato ' + result.count + ' numeri: ' + (result.numbers.length > 0 ? result.numbers.join(', ') : 'nessuno'));
  }, 30000); // Timer di 30 secondi
}

// avvia il gioco quando la paigina si carica
window.onload = startGame;
