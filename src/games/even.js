import getRandomInt from '../intgenerator.js';
import playGame from '../index.js';

const isEven = (num) => (num % 2 === 0);

const getEvenGameData = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  const result = [question, answer];
  return result;
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => playGame(task, getEvenGameData);
export default playEvenGame;
