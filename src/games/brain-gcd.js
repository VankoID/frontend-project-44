import { randomNumber, gretting, mainGame } from '../index.js';

const commonDivider = (num, num2) => {
  while (num !== num2) {
    if (num > num2) {
      num -= num2;
    }
    if (num2 > num) {
      num2 -= num;
    }
  } return num;
};
const questionCorrectAnswer = () => {
  const number = randomNumber();
  const number2 = randomNumber();
  const correctAnswer = commonDivider(number, number2);
  return {
    question: `${number} ${number2}`,
    correctAnswer: String(correctAnswer),
  };
};
const name = gretting();
const message = 'Find the greatest common divisor of given numbers.';
mainGame(name, questionCorrectAnswer, message);

export default questionCorrectAnswer;
