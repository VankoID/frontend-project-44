#!/usr/src/games/env node
import readlineSync from 'readline-sync';
import { gretting, randomNumber } from '../functions.js';

const brainGcd = () => {
  let i = 0;
  const name = gretting();
  console.log('Find the greatest common divisor of given numbers.');
  while (i < 3) {
    let number = randomNumber();
    let number2 = randomNumber();
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

export default brainGcd();
