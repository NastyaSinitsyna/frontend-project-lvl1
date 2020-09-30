import getRandomInt from '../intgenerator.js';
import playGame from '../index.js';

const getProgressionGameData = () => {
  const start = getRandomInt(1, 100);
  const diff = getRandomInt(1, 100);
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = start + diff * i;
  }
  const secretItemIndex = getRandomInt(1, progressionLength - 1);
  const answer = String(progression[secretItemIndex]);
  progression[secretItemIndex] = '..';
  const question = progression.join(' ');
  const result = [question, answer];
  return result;
};


const task = 'What number is missing in the progression?';

const playProgressionGame = () => playGame(task, getProgressionGameData);
export default playProgressionGame;
