#!/usr/bin/env node
import readlineSync from 'readline-sync';
const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  while (i < 3) {
    let number = Math.floor(Math.random() * 100 + 1);
    const diff = Math.floor(Math.random() * 10 + 1);
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
