import { getRandomInt, game } from '../index.js';

const getProgression = () => {
  const firstItem = getRandomInt();
  const diff = getRandomInt();
  const coll = [firstItem, firstItem + diff];
  for (let n = 3; n <= 10; n += 1) {
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
  for (let n = 0; n < coll.length; n += 1) {
    if (coll[n] === '..') {
      switch (n) {
        case (0):
          diff = Number(coll[n + 2]) - Number(coll[n + 1]);
          break;
        case (coll.length - 1):
          diff = Number(coll[n - 2]) - Number(coll[n - 1]);
          break;
        default:
          diff = (Number(coll[n + 1]) - Number(coll[n - 1])) / 2;
          break;
      }
      answer = n === coll.length - 1 ? Number(coll[n - 1]) + diff : Number(coll[n + 1]) - diff;
    }
  }
  return String(answer);
};

const task = 'What number is missing in the progression?';

const progression = () => game(task, getProgression, getSpecialItem);
export default progression;
