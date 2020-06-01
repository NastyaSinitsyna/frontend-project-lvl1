import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const greeting = () => {
  console.log(`Hi, ${userName}!`);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const numbers = [15, 6, 7];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    const correctAnswer = isEven(number);
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
