import readlineSync from 'readline-sync';

//  Функиция приветствия;
const gretting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Функция генерации случайного числа в заданном диапазоне;
function randomNumber(min = 1, max = 20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция запуска игры до 3 верных ответов;
const mainGame = (name, questionCorrectAnswer, message) => {
  let i = 0;
  while (i < 3) {
    const { question, correctAnswer } = questionCorrectAnswer();
    printQuestion(message);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

// Функция вывода вопроса;
const printQuestion = (message) =>{
  console.log(message);
};

export {
  gretting, randomNumber, mainGame,
};
