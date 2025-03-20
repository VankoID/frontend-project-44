import {
  gretting, randomNumber, mainGame,
} from '../index.js';

const progression = (num, num2) => {
  const progressionArray = [];
  let j = 0;
  while (j < 11) {
    const newNum = num + num2;
    num = newNum;
    j += 1;
    progressionArray.push(newNum);
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
