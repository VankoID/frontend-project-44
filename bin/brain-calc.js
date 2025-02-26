import readlineSync from 'readline-sync';

let i = 0;

const brain_calc = () => {    
    
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name: ');
    console.log(`Hello, ${name}!`)
    console.log('What is the result of the expression?');
    
    while (i < 3) {
        let number = Math.floor(Math.random() * 10 + 1);
        let number_2 = Math.floor(Math.random() * 10 + 1);
        let operation = ['*', '+', '-'];
        let randomIndex = Math.floor(Math.random() * (operation.length - 1));
        let resultOperation = operation[randomIndex];
        console.log(`Question: ${number} ${resultOperation} ${number_2}`);
        let answer = readlineSync.question('Your answer: ');
        if (resultOperation === '*') {
            if (Number(answer) === number * number_2) {
                i = i + 1;
                console.log('Correct')    
            } else return console.log(`Question: ${number} ${resultOperation} ${number_2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number * number_2}'\nLet's try again, ${name}`)
        } 
        else if (resultOperation === '+') {
                if (Number(answer) === number + number_2) {
                i = i + 1;
                console.log('Correct')
            }else return console.log(`Question: ${number} ${resultOperation} ${number_2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number + number_2}'\nLet's try again, ${name}`)
        }
        else if (resultOperation === '-') {
                if (Number(answer) === number - number_2) {
                    i = i + 1;
                    console.log('Correct')
                }else return console.log(`Question: ${number} ${resultOperation} ${number_2}\nYour answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${number - number_2}'\nLet's try again, ${name}`)
        } else return
    }
    return console.log(`Congratulations, ${name}`)
}   

brain_calc();