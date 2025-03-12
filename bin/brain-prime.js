#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gretting, randomNumber } from '../src/functions.js';

let i = 0;
const brainPrime = () => {
  const name = gretting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (i < 3) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const prime = () => {
      if (number < 2) return 'no';
      for (let j = 2; j <= Math.sqrt(number); j += 1) {
        if (number % j === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    const solution = prime();
    if ((answer === 'no' && solution === 'no') || ((answer === 'yes' && solution === 'yes'))) {
      i += 1;
      console.log('Correct');
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.\nLet's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!`);
};

brainPrime();
