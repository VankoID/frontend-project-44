#!/usr/bin/src/games/env node
import readlineSync from 'readline-sync';
import { gretting, randomNumber } from '../functions.js';

let i = 0;
let variable;
const brainEven = () => {
  const name = gretting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < 3) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      variable = 'even';
    } else variable = 'odd';
    if (((answer === 'yes' && variable === 'even')) || ((answer === 'no' && variable === 'odd'))) {
      i += 1;
      console.log('Correct');
    } else
      if (answer === 'yes') return console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      else if (answer === 'no') return console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      else return console.log(`Unsupported answer!\nLet's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!`);
};

brainEven();
