import { gretting, randomNumber, mainGame } from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let j = 2; j <= Math.sqrt(num); j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};
const questionCorrectAnswer = () => {
  const number = randomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return {
    question: `Question: ${number}`,
    correctAnswer,
  };
};
const startGame = () => {
  const name = gretting();
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  mainGame(name, questionCorrectAnswer, message);
};

export { questionCorrectAnswer, startGame };
