#!/usr/src/games/env node
import readlineSync from 'readline-sync';
import { gretting, randomSmallNumber } from '../functions.js';

const brainCalc = () => {
  let i = 0;
  const name = gretting();
  console.log('What is the result of the expression?');
  while (i < 3) {
    const number = randomSmallNumber();
    const number2 = randomSmallNumber();
    const operation = ['*', '+', '-'];
    const randomIndex = Math.floor(Math.random() * (operation.length - 1));
    const resultOperation = operation[randomIndex];
    console.log(`Question: ${number} ${resultOperation} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (resultOperation === '*') {
      if (Number(answer) === number * number2) {
        i += 1;
        console.log('Correct');
      } else return console.log(`Question: ${number} ${resultOperation} ${number2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number * number2}'\nLet's try again, ${name}!`);
    } else if (resultOperation === '+') {
      if (Number(answer) === number + number2) {
        i += 1;
        console.log('Correct');
      } else return console.log(`Question: ${number} ${resultOperation} ${number2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number + number2}'\nLet's try again, ${name}!`);
    } else if (resultOperation === '-') {
      if (Number(answer) === number - number2) {
        i += 1;
        console.log('Correct');
      } else return console.log(`Question: ${number} ${resultOperation} ${number2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number - number2}'\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainCalc;
