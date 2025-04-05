import {
  gretting, randomNumber, mainGame,
} from '../index.js';

const createProgression = (num, num2) => {
  const progressionArray = [];
  let j = 0;
  let a = num;
  while (j < 11) {
    a += num2;
    j += 1;
    progressionArray.push(a);
  };
  return progressionArray;
};

const questionCorrectAnswer = () => {
  const number = randomNumber();
  const diff = randomNumber(1, 10);
  const progression = createProgression(number, diff);
  const randomIndex = Math.floor(Math.random() * (progression.length - 1));
  const checkRandom = (progression[randomIndex]);
  progression[randomIndex] = '..';
  const questionProgression = progression.join(' ');
  const correctAnswer = checkRandom;
  return {
    question: `${questionProgression}`,
    correctAnswer: String(correctAnswer),
  };
};
const startGame = () => {
  const name = gretting();
  const message = 'What number is missing in the progression?';
  mainGame(name, questionCorrectAnswer, message);
};

export { questionCorrectAnswer, startGame };
