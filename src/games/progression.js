import getRandomInt from '../general.js';
import game from '../index.js';

const getProgressionWithAnswer = () => {
  const start = getRandomInt(1, 100);
  const diff = getRandomInt(1, 100);
  const coll = [];
  const collFullLength = 10;
  for (let i = 0; i < collFullLength; i += 1) {
    coll[i] = start + diff * i;
  }
  const secretItemIndex = getRandomInt(1, collFullLength);
  const answer = String(coll[secretItemIndex]);
  coll[secretItemIndex] = '..';
  const question = coll.join(' ');
  const result = [question, answer];
  return result;
};


const task = 'What number is missing in the progression?';

const playProgressionGame = () => game(task, getProgressionWithAnswer);
export default playProgressionGame;
