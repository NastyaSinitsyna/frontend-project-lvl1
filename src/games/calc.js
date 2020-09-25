import getRandomInt from '../intgenerator.js';
import playGame from '../index.js';

const calcExpression = (num1, num2, operator) => {
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

const getCalcGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(1, operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calcExpression(num1, num2, operator));

  const result = [question, answer];
  return result;
};

const task = 'What is the result of the expression?';

const playCalcGame = () => playGame(task, getCalcGameData);
export default playCalcGame;
