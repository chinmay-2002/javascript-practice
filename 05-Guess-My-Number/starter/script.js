'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 23;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;
*/


let randomNumber = Math.trunc(Math.random() * 5) + 1;
let score = document.querySelector('.score').textContent;
let highscore = 0;

document.querySelector('.check').addEventListener
    ('click', function () {
        randomNumber = Math.trunc(Math.random() * 5) + 1;
        const guess = Number(document.querySelector('.guess').value);
        if (guess > 5) {
            document.querySelector('.message').textContent = '📈 Number is Greater';
            document.body.style.backgroundColor = "#222";
        }
        else if (guess < 1) {
            document.querySelector('.message').textContent = '📉 Number is Smaller';
            document.body.style.backgroundColor = "#222";
        }
        else if (guess === randomNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            score += 5;
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = randomNumber;
            document.body.style.backgroundColor = "#00b300";
        }
        else {
            document.querySelector('.message').textContent = '❌ Wrong Guess!';
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = randomNumber;
            document.body.style.backgroundColor = "#222";
        }
        highscore = Math.max(score, highscore);
        console.log(highscore);
        document.querySelector('.highscore').textContent = highscore;
    }
    );


document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        highscore = 0;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.number').textContent = "?";
        document.querySelector('.guess').value = "";
    }
);