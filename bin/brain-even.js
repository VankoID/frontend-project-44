import readlineSync from 'readline-sync';
let variable;
let i = 0;

const brain_even = () => {    
    
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name: ');
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    while (i < 3) {
        let number = Math.floor(Math.random() * 100 + 1)
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ')
        if (number % 2 === 0){
            variable = 'even'
        } 
        else variable = 'odd';
    
        if (((answer === 'yes' && variable === 'even')) || ((answer === 'no' && variable === 'odd'))) {
            i = i + 1;
            console.log('Correct')
        }
        else
            if (answer === 'yes') return console.log (`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`)
            else if (answer === 'no') return console.log (`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`)
            else return console.log (`Unsupported answer!\nLet's try again, ${name}!`)
    } 
    return console.log(`Congratulations, ${name}`)
}

brain_even();


