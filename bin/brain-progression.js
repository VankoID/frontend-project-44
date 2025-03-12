#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gretting, randomNumber, randomSmallNumber } from '../functions.js';

let i = 0;
const brainProgression = () => {
  const name = gretting();
  while (i < 3) {
    let number = randomNumber();
    const diff = randomSmallNumber();
    let j = 0;
    const array = [];
    while (j < 11) {
      number += diff;
      j += 1;
      array.push(number);
    }
    const randomIndex = Math.floor(Math.random() * (array.length - 1));
    const checkRandom = (array[randomIndex]);
    array[randomIndex] = '..';
    const str = array.join(' ');
    console.log('What number is missing in the progression?');
    console.log(`Question: ${str}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === checkRandom) {
      i += 1;
      console.log('Correct');
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkRandom}'.\nLet's try again, ${name}!`);
  } return console.log(`Congratulations, ${name}!`);
};

brainProgression();
