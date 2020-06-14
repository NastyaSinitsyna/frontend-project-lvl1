import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};


const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};


const getRandomInt = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min;
};


export const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    const correctAnswer = isEven(question);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};


const getExpression = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const expression = `${num1} ${operation} ${num2}`;
  return expression;
};

const calcStringExp = (string) => {
  const stringColl = string.split(' ');
  const num1 = Number(stringColl[0]);
  const num2 = Number(stringColl[2]);
  const operator = stringColl[1];
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

export const calc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const question = getExpression();
    const correctAnswer = String(calcStringExp(question));
    const answer = readlineSync.question(`Questuion: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
