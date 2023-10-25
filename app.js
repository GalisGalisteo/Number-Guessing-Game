const correctNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 10;
const previousGuesses = [];

const remainingGuessesNode = document.querySelector('#remaining-guesses');
remainingGuessesNode.textContent = remainingAttempts;

document.querySelector("form").addEventListener("submit", (event) => {

  event.preventDefault();

  const userInputNode = document.querySelector("#guessField");
  const lowOrHiNode = document.querySelector('#low-or-hi');
  const previousGuessesNode = document.querySelector('#previous-guesses');
  const submitNode = document.querySelector('#subt');
  const resultParamNode = document.querySelector('#result-param');
  const userValueInput = +userInputNode.value;
  remainingAttempts--;

  if (remainingAttempts === 0) {
    userInputNode.disabled = true;
    submitNode.style.display = "none";
    const playAgainMessage = document.createElement('div');
    playAgainMessage.classList.add('play-again');
    playAgainMessage.textContent = 'Play Again';
    resultParamNode.appendChild(playAgainMessage);
    playAgainMessage.addEventListener('click', () => {
      location.reload();
    })
  } else if (userValueInput < correctNumber) {
    lowOrHiNode.textContent = 'Too low, try again!';
  } else if (userValueInput > correctNumber) {
    lowOrHiNode.textContent = 'Too high, try again!';
  } else if (userValueInput === correctNumber) {
    lowOrHiNode.textContent = 'Congratulations, you got it!';
    userInputNode.disabled = true;
    submitNode.style.display = "none";
  }

  remainingGuessesNode.textContent = remainingAttempts;
  previousGuesses.push(userValueInput);
  previousGuessesNode.textContent = previousGuesses.join(' - ');
  userInputNode.value = '';
  userInputNode.focus();
});