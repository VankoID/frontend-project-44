import { gretting, randomNumber, randomSmallNumber, mainGame } from '../index.js';

const brainProgression = () => {
  const generateQuestion = () => {
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
    const correctAnswer = checkRandom;
    return {
      question:`Question: ${str}`,
      correctAnswer: String(correctAnswer),
    };
  };
  const name = gretting();
  console.log('What number is missing in the progression?');
  mainGame(name, generateQuestion);
};

export default brainProgression;
