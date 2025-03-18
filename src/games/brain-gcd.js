import { randomNumber, gretting, mainGame } from '../index.js';

const brainGcd = () => {
  const generateQuestion = () => {
    let number = randomNumber();
    let number2 = randomNumber();
    const savedNumber = number;
    const savedNumber2 = number2;
    while (number !== number2) {
      if (number > number2) {
        number -= number2;
      }
      if (number2 > number) {
        number2 -= number;
      };
    };
    const correctAnswer = number;
    return {
      question: `Question: ${savedNumber} ${savedNumber2}`,
      correctAnswer: String(correctAnswer),
    };
  };
  const name = gretting();
  console.log('Find the greatest common divisor of given numbers.');
  mainGame(name, generateQuestion);
};
export default brainGcd;
