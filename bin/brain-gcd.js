import readlineSync from 'readline-sync';
let i = 0;
const brain_gcd = () => {    
    
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name: ');
    console.log(`Hello, ${name}!`)
    console.log('Find the greatest common divisor of given numbers.');
    
    while (i < 3) { 
        let number = Math.floor(Math.random() * 100 + 1);
        let number_2 = Math.floor(Math.random() * 100 + 1)
        console.log(`Question: ${number} ${number_2}`);
        const answer = readlineSync.question('Your answer: ');
        let solution;
        while (number !== number_2) {
            if (number > number_2) {
                number = number - number_2
            }
            if (number_2 > number) {
                    number_2 = number_2 - number
                }
            }  
                solution = number;
        if (Number(answer) === solution) {
            i = i + 1;
            console.log('Correct');
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.\nLet's try again, ${name}!`)
} return console.log(`Congratulation, ${name}`)
}

brain_gcd();