import { gretting, randomNumber, mainGame } from '../index.js';

const prime = (num) => {
  if (num < 2) return 'no';
  for (let j = 2; j <= Math.sqrt(num); j += 1) {
    if (num % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const questionCorrectAnswer = () => {
  const number = randomNumber(1, 100);
  const correctAnswer = prime(number);
  return {
    question: `Question: ${number}`,
    correctAnswer,
  };
};
const name = gretting();
const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
mainGame(name, questionCorrectAnswer, message);

export default questionCorrectAnswer;
