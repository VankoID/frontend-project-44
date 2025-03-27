import { gretting, randomNumber, mainGame } from '../index.js';

const calculateResult = (num, num2, operator) => {
  switch (operator) {
    case '*':
      return num * num2;
    case '+':
      return num + num2;
    case '-':
      return num - num2;
    default:
      throw new Error('Оператор не определён');
  }
};
const questionCorrectAnswer = () => {
  const number = randomNumber();
  const number2 = randomNumber();
  const operation = ['*', '+', '-'];
  const randomIndex = Math.floor(Math.random() * (operation.length));
  const resultOperation = operation[randomIndex];
  const correctAnswer = calculateResult(number, number2, resultOperation);
  return {
    question: `${number} ${resultOperation} ${number2}`,
    correctAnswer: String(correctAnswer),
  };
};
const startGame = () => {
  const name = gretting();
  mainGame(name, questionCorrectAnswer, 'What is the result of the expression?');
};

export { questionCorrectAnswer, startGame };
