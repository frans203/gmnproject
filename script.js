'use strict';
let body = document.querySelector('body');
let guess = document.querySelector('.guess');
let btnC = document.querySelector('.check');
let msg = document.querySelector('.message');
let scoreTxt = document.querySelector('.score');
let inter = document.querySelector('.number');
let again = document.querySelector('.again');
let highTxt = document.querySelector('.highscore');

console.log(Number(highTxt.textContent));
let score = 20;
let playing = true;
let high;
scoreTxt.textContent = score;

let random = Math.trunc(Math.random() * 20);
console.log(random);
function reduce() {
  --score;
  console.log(score);
  scoreTxt.textContent = score;

  if (score <= 0) {
    body.style.background = 'red';
    playing = false;
    msg.textContent = 'No Score, try again :(';
  }
}

btnC.addEventListener('click', function () {
  if (playing) {
    if (Number(guess.value) === random) {
      msg.textContent = 'Congratulations!!';
      body.style.background = 'green';
      inter.textContent = random;
      playing = false;
      // high = Number(guess.value);
      if (Number(scoreTxt.textContent) > Number(highTxt.textContent)) {
        highTxt.textContent = scoreTxt.textContent;
      }
    } else {
      if (Number(guess.value) > random) {
        msg.textContent = 'Above';
        reduce();
      }
      if (Number(guess.value) < random) {
        msg.textContent = 'Below';
        reduce();
      }
    }
  }
});

again.addEventListener('click', function () {
  playing = true;
  score = 20;
  scoreTxt.textContent = score;
  msg.textContent = 'Start Guessing';
  body.style.background = '#333';
  random = Math.trunc(Math.random() * 20);
  console.log(random);
  guess.value = '';
  inter.textContent = '?';
  console.log(Number(highTxt.textContent));
});

/*
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let number = Math.trunc(Math.random() * 20);

let score = 20;
let highscore = 0;

const displayMesssage = function (message) {
  document.querySelector('.message').textContent = message;
};

let again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

let btn = document.querySelector('.btnch');
console.log(btn);
btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //no data input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number :( try again';
    displayMesssage('No number :( try again');

    //player wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMesssage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Above' : 'Below';
      displayMesssage(guess > number ? 'Above' : 'Below');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMesssage('You lost the game');
    }
  }

  //   //too high
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Above';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }

  //   //too low
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Below';

  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // }
});

*/
