'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const score = document.querySelector('.score');
const again = document.querySelector('.again');

let scoreNum = 20;
let highScore = 0;

const check = document.querySelector('.check');
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    message.textContent = 'Not a number!';
  } else if (guess > randomNumber) {
    if (scoreNum > 1) {
      message.textContent = 'Too high!';
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      message.textContent = 'You lost the game!';
      score.textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (scoreNum > 1) {
      message.textContent = 'Too low!';
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      message.textContent = 'You lost the game!';
      score.textContent = 0;
    }
  } else if (guess === randomNumber) {
    message.textContent = 'You won the game.';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    number.textContent = randomNumber;
    if (scoreNum > highScore) {
      highScore = scoreNum;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
again.addEventListener('click', () => {
  scoreNum = 20;
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  score.textContent = scoreNum;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '20rem';
});
