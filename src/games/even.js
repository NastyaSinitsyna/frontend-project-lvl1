import { getRandomInt, game } from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => game(task, getRandomInt, isEven);
export default even;
