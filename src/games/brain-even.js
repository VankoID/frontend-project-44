import { gretting, randomNumber, mainGame } from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const questionCorrectAnswer = () => {
  const number = randomNumber(1, 100);
  const correctAnswer = isEven(number);
  return {
    question: number,
    correctAnswer,
  };
};
const name = gretting();
const message = 'Answer "yes" if the number is even, otherwise answer "no".';
mainGame(name, questionCorrectAnswer, message );

export default questionCorrectAnswer;
