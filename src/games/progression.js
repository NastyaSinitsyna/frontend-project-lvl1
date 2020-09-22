import getRandomInt from '../intgenerator.js';
import playGame from '../index.js';

const getProgressionGameData = () => {
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

const playProgressionGame = () => playGame(task, getProgressionGameData);
export default playProgressionGame;
