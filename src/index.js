import readlineSync from 'readline-sync';

//  Функиция приветствия;
const gretting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Функция генерации случайного числа до 100
const randomNumber = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
};

// Функция генерации случайного числа до 10
const randomSmallNumber = () => {
  const numberSmall = Math.floor(Math.random() * 10 + 1);
  return numberSmall;
};

export { gretting, randomNumber, randomSmallNumber };
