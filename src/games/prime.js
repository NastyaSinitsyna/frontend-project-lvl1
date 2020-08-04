import getRandomInt from '../general.js';
import game from '../index.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const sayIfPrime = (num) => (isPrime(num) ? 'yes' : 'no');

const getRandomTillHundred = () => getRandomInt(1, 100);

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => game(task, getRandomTillHundred, sayIfPrime);
export default prime;
