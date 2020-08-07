import getRandomInt from '../general.js';
import game from '../index.js';

const GCD = (m, n) => {
  if (n === 0) {
    return m;
  }
  return GCD(n, m % n);
};

const getTwoNumbers = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const result = `${number1} ${number2}`;
  return result;
};

const getGCD = (string) => {
  const stringColl = string.split(' ');
  const num1 = Number(stringColl[0]);
  const num2 = Number(stringColl[1]);
  const result = GCD(num1, num2);
  return String(result);
};

const getTwoNumbersWithGCD = () => {
  const question = getTwoNumbers();
  const answer = getGCD(question);
  const result = [question, answer];
  return result;
};

const task = 'Find the greatest common divisor of given numbers.';

const gcd = () => game(task, getTwoNumbersWithGCD);
export default gcd;
