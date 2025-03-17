import { gretting, randomSmallNumber, mainGame } from '../index.js';

const generateQuestion = () => {
  const number = randomSmallNumber();
  const number2 = randomSmallNumber();
  const operation = ['*', '+', '-'];
  const randomIndex = Math.floor(Math.random() * (operation.length));
  const resultOperation = operation[randomIndex];
  let correctAnswer;
  switch (resultOperation) {
  case '*':
    correctAnswer = number * number2;
    break;
  case '+':
    correctAnswer = number + number2;
    break;
  case '-':
    correctAnswer = number - number2;
    break;
  }
  return {
    question: `${number} ${resultOperation} ${number2}`,
    correctAnswer,
  };
};
const name = gretting();
console.log('What is the result of the expression?');
mainGame(name, generateQuestion);
