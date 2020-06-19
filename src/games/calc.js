import readlineSync from 'readline-sync';

const getRandomInt = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min;
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
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
      break;
  }
  return String(result);
};

const calc = (userName) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const question = getExpression();
    const correctAnswer = calcStringExp(question);
    const answer = readlineSync.question(`Questuion: ${question}\nYour answer: `);

    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
export default calc;
