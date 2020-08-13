import getRandomInt from '../general.js';
import game from '../index.js';

const getRandomToHundred = () => getRandomInt(1, 100);

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getNumAndSayIfEven = () => {
  const question = getRandomToHundred();
  const answer = isEven(question) ? 'yes' : 'no';
  const result = [question, answer];
  return result;
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => game(task, getNumAndSayIfEven);
export default playEvenGame;
