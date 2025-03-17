import { gretting, randomNumber, mainGame } from '../index.js';

const brainEven = () => {
  const generateQuestion = () => {
    const number = randomNumber();
    let correctAnswer;
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';
    return {
      question: number,
      correctAnswer,
    };
  };
  const name = gretting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  mainGame(name, generateQuestion);
};

export default brainEven;
