#!/usr/bin/env node

import readlineSync from 'readline-sync';

const brain_progression = () => {        
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name: ');
    console.log(`Hello, ${name}!`)
    let i = 0;
    while (i < 3) { 
        let number = Math.floor(Math.random() * 100 + 1);
        let diff = Math.floor(Math.random() * 10 + 1);    
        let j = 0;
        let array = [];
        while (j < 11) {
            number = number + diff;
            j = j + 1; 
            array.push(number);
        }
        let randomIndex = Math.floor(Math.random() * (array.length - 1));
        let checkRandom = (array[randomIndex]);    
        // console.log(array[randomIndex]);
        array[randomIndex] = '..';
        let str = array.join(' ');
        console.log('What number is missing in the progression?');
        console.log(`Question: ${str}`);
        const answer = readlineSync.question('Your answer: ');
        if (Number(answer) === checkRandom) {
            i = i + 1;
            console.log('Correct');
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkRandom}'.\nLet's try again, ${name}!`)
} return console.log(`Congratulation, ${name}!`)
}
brain_progression();