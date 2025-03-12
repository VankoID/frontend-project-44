import readlineSync from 'readline-sync';

const gretting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
};

const randomSmallNumber = () => {
  const numberSmall = Math.floor(Math.random() * 10 + 1);
  return numberSmall;
};

export { gretting, randomNumber, randomSmallNumber };

