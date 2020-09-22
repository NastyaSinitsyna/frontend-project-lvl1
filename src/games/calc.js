import getRandomInt from '../intgenerator.js';
import game from '../index.js';

const calcExp = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getExpAndCalc = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(1, operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calcExp(num1, num2, operator));

  const result = [question, answer];
  return result;
};

const task = 'What is the result of the expression?';

const playCalcGame = () => game(task, getExpAndCalc);
export default playCalcGame;
