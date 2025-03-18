import { gretting, randomNumber, mainGame } from '../index.js';

const brainPrime = () => {
  const generateQuestion = () => {
    const number = randomNumber();
    const prime = () => {
      if (number < 2) return 'no';
      for (let j = 2; j <= Math.sqrt(number); j += 1) {
        if (number % j === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    const correctAnswer = prime();
    return {
      question: `Question: ${number}`,
      correctAnswer,
    };
  };
  const name = gretting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  mainGame(name, generateQuestion);
};

export default brainPrime;
