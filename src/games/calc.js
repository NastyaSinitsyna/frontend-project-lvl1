import { getRandomInt, game } from '../index.js';

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

const task = 'What is the result of the expression?';

const calc = () => game(task, getExpression, calcStringExp);
export default calc;
