import { randomNumber, gretting, mainGame } from '../index.js';

const findGreatestCommonDivisor = (num, num2) => {
  let a = num;
  let b = num2;

  while (a !== b) {
    if (a > b) {
      a -= b;
    }
    if (b > a) {
      b -= a;
    }
  } return a;
};
const questionCorrectAnswer = () => {
  const number = randomNumber();
  const number2 = randomNumber();
  const correctAnswer = findGreatestCommonDivisor(number, number2);
  return {
    question: `${number} ${number2}`,
    correctAnswer: String(correctAnswer),
  };
};
const startGame = () => {
  const name = gretting();
  const message = 'Find the greatest common divisor of given numbers.';
  mainGame(name, questionCorrectAnswer, message);
};

export { questionCorrectAnswer, startGame };
