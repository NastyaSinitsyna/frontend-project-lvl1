import getRandomInt from '../general.js';
import game from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const sayIfEven = (num) => (isEven(num) ? 'yes' : 'no');

const getRandomTillHundred = () => getRandomInt(1, 100);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => game(task, getRandomTillHundred, sayIfEven);
export default even;
