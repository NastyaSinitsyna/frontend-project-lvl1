import { getRandomInt, game } from '../index.js';

const getProgression = () => {
  const firstItem = getRandomInt(1, 100);
  const diff = getRandomInt(1, 100);
  const coll = [firstItem, firstItem + diff];
  const collFullLength = 10;
  const firstAddedItem = coll.length + 1;
  for (let n = firstAddedItem; n <= collFullLength; n += 1) {
    const stepNumber = n - 1;
    coll[stepNumber] = firstItem + (n - 1) * diff;
  }
  const specialItem = Math.floor(Math.random() * (coll.length - 1));
  coll[specialItem] = '..';
  const result = coll.join(' ');
  return result;
};

const getSpecialItem = (progression) => {
  const coll = progression.split(' ');
  let diff;
  let answer;
  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] === '..') {
      switch (i) {
        case (0):
          diff = Number(coll[i + 2]) - Number(coll[i + 1]);
          break;
        case (coll.length - 1):
          diff = Number(coll[i - 2]) - Number(coll[i - 1]);
          break;
        default:
          diff = (Number(coll[i + 1]) - Number(coll[i - 1])) / 2;
          break;
      }
      answer = i === 0 ? Number(coll[i + 1]) - diff : Number(coll[0]) + diff * i;
    }
  }
  return String(answer);
};

const task = 'What number is missing in the progression?';

const progression = () => game(task, getProgression, getSpecialItem);
export default progression;
