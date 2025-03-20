import {
  gretting, randomNumber, mainGame,
} from '../index.js';

const progression = (num, num2) => {
  const progressionArray = [];
  let j = 0;
  let a = num;
  while (j < 11) {
    a += num2;
    j += 1;
    progressionArray.push(a);
  }
  const randomIndex = Math.floor(Math.random() * (progressionArray.length - 1));
  const checkRandom = (progressionArray[randomIndex]);
  progressionArray[randomIndex] = '..';
  const string = progressionArray.join(' ');
  return [string, checkRandom];
};

const questionCorrectAnswer = () => {
  const number = randomNumber();
  const diff = randomNumber(1, 10);
  const [str, correctAnswer] = progression(number, diff);
  return {
    question: `${str}`,
    correctAnswer: String(correctAnswer),
  };
};
const name = gretting();
const message = 'What number is missing in the progression?';
mainGame(name, questionCorrectAnswer, message);

export default questionCorrectAnswer;
