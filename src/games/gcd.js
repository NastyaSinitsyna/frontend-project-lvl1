import getRandomInt from '../intgenerator.js';
import game from '../index.js';

const GCD = (m, n) => {
  if (n === 0) {
    return m;
  }
  return GCD(n, m % n);
};

const getTwoNumbersWithGCD = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(GCD(num1, num2));
  const result = [question, answer];
  return result;
};

const task = 'Find the greatest common divisor of given numbers.';

const playGcdGame = () => game(task, getTwoNumbersWithGCD);
export default playGcdGame;
