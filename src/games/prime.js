import { getRandomInt, game } from '../index.js';

const isPrime = (n) => {
  if (n < 2) {
    return 'no';
  }
  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => game(task, getRandomInt, isPrime);
export default prime;
