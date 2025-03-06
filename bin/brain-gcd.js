#!/usr/bin/env node
import readlineSync from 'readline-sync';

let i = 0;
const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  while (i < 3) {
    let number = Math.floor(Math.random() * 100 + 1);
    let number2 = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${number} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    while (number !== number2) {
      if (number > number2) {
        number -= number2;
      }
      if (number2 > number) {
        number2 -= number;
      }
    }
    const solution = number;
    if (Number(answer) === solution) {
      i += 1;
      console.log('Correct');
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.\nLet's try again, ${name}!`);
  } return console.log(`Congratulations, ${name}!`);
};

brainGcd();
