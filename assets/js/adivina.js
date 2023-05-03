

let min = 1;
let max = 100;

const guessElem = document.getElementById('guess');
const higherBtn = document.getElementById('trueBtn');
const lowerBtn = document.getElementById('falseBtn');
const winBtn = document.getElementById('si');

function updateGuess(min,max) {
  const buttonRef = document.getElementById("iniciar");
  buttonRef.style.display="none";


  let guess = Math.floor((max + min) / 2);
  guessElem.innerHTML = `¿Tu numero es el ${guess}?`;

higherBtn.addEventListener('click', function() {
  min = guess + 1;
  if (min > max) {
    guessElem.innerHTML = `No puedo adivinar tu numero, eres excelente en esto.`;
  } else {
    updateGuess(min,max);
  }
});

lowerBtn.addEventListener('click', function() {

  max = guess - 1;
  if (min > max) {
    guessElem.innerHTML = `No puedo adivinar tu numero, eres excelente en esto.`;
  } else {
    updateGuess(min, max);
  }
});
}

const end =() => {
  alert("Escelente logramos adivinar tu numero");
  alert("puedes volver a jugar si presionas iniciar");
  guessElem.innerHTML = "";
  const buttonRef = document.getElementById("iniciar");
  buttonRef.style.display="inline";
}
