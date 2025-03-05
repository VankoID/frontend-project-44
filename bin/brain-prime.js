#!/usr/bin/env node

import readlineSync from 'readline-sync';
let i = 0;
const brain_prime = () => {   
    
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name: ');
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    
    while (i < 3) { 
        let number = Math.floor(Math.random() * 100);
        console.log(`Question: ${number}`);
        let answer = readlineSync.question('Your answer: ');
        let solution; 
        
        const prime = () => {
            if (number < 2)  return solution = 'no'
            for (let j = 2; j <= Math.sqrt(number); ++j) {
                if (number % j === 0) {
                    return solution = 'no'
            }
        } 
        return solution = 'yes';
        }
        prime();

        if ((answer === 'no' && solution === 'no') || ((answer === 'yes' && solution === 'yes'))) {
                i = i + 1;
                console.log('Correct');
        }
        else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.\nLet's try again, ${name}!`)
    }    
    return console.log(`Congratulations, ${name}!`)
}

brain_prime();