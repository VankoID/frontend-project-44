import readlineSync from 'readline-sync';

//  Функиция приветствия;
const gretting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Функция генерации случайного числа до 100;
const randomNumber = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
};

// Функция генерации случайного числа до 10;
const randomSmallNumber = () => {
  const numberSmall = Math.floor(Math.random() * 10 + 1);
  return numberSmall;
};

// Функция запуска цикл до 3 верных ответов;
const mainGame = (name, generateQuestion) => {
  let i = 0;
  while (i < 3) {
    const { question, correctAnswer } = generateQuestion();
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

export { gretting, randomNumber, randomSmallNumber, mainGame };
