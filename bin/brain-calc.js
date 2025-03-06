#!/usr/bin/env node
import readlineSync from "readline-sync";

let i = 0;
const brainCalc = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name: ");
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");
  while (i < 3) {
    const number = Math.floor(Math.random() * 10 + 1);
    const number2 = Math.floor(Math.random() * 10 + 1);
    const operation = ["*", "+", "-"];
    const randomIndex = Math.floor(Math.random() * (operation.length - 1));
    const resultOperation = operation[randomIndex];
    console.log(`Question: ${number} ${resultOperation} ${number2}`);
    const answer = readlineSync.question("Your answer: ");
    if (resultOperation === "*") {
      if (Number(answer) === number * number2) {
        i += 1;
        console.log("Correct");
      } else return console.log(`Question: ${number} ${resultOperation} ${number2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number * number2}'\nLet's try again, ${name}!`);
    } else if (resultOperation === "+") {
      if (Number(answer) === number + number2) {
        i += 1;
        console.log("Correct");
      } else return console.log(`Question: ${number} ${resultOperation} ${number2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number + number2}'\nLet's try again, ${name}!`);
    } else if (resultOperation === "-") {
      if (Number(answer) === number - number2) {
        i += 1;
        console.log("Correct");
      } else return console.log(`Question: ${number} ${resultOperation} ${number2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number - number2}'\nLet's try again, ${name}!`);
    };
  }
  return console.log(`Congratulations, ${name}!`);
};

brainCalc();
