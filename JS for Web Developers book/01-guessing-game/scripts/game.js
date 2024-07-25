"use strict";

init();

function init() {
  const button = document.querySelector("button#startgame");
  button.addEventListener("click", startGame);
}

function startGame() {
  // Set up the data.
  const MIN_VALUE = 1;
  const MAX_VALUE = 100;
  let min, max;
  let userAnswer, correctNumber;
  let gameMessage;

  // Initialize
  [min, max] = [MIN_VALUE, MAX_VALUE];
  correctNumber = getRandomInteger(MIN_VALUE, MAX_VALUE);
  gameMessage = "Guess the Number";

  do {
    userAnswer = prompt(`${gameMessage}\nFrom ${min} to ${max}`);
    console.log(userAnswer);
    if (userAnswer === null) {
      alert("Game cancelled");
      return;
    }

    userAnswer = parseInt(userAnswer, 10) || 0;

    if (userAnswer < correctNumber) {
      gameMessage = "Too Low";
      min = userAnswer + 1;
    } else if (userAnswer > correctNumber) {
      gameMessage = "Too High";
      max = userAnswer - 1;
    } else {
      alert("Correct, you won! 🎉🏆");
    }
  } while (userAnswer !== correctNumber);
}
