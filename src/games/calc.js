import { getRandomInt, game } from '../index.js';

const getExpression = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(1, operations.length)];
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
    case '*':
      result = num1 * num2;
      break;
    default:
      return undefined;
  }
  return result;
};

const calcExpAsString = (string) => String(calcStringExp(string));

const task = 'What is the result of the expression?';

const calc = () => game(task, getExpression, calcExpAsString);
export default calc;
