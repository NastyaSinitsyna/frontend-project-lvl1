import readlineSync from 'readline-sync';

const getRandomInt = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min;
};

const GCD = (m, n) => {
  if (n === 0) {
    return m;
  }
  return GCD(n, m % n);
};

const getTwoNumbers = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const result = `${number1} ${number2}`;
  return result;
};

const getGCD = (string) => {
  const stringColl = string.split(' ');
  const num1 = Number(stringColl[0]);
  const num2 = Number(stringColl[1]);
  const result = GCD(num1, num2);
  return String(result);
};

const gcd = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const question = getTwoNumbers();
    const correctAnswer = getGCD(question);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (correctAnswer !== answer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default gcd;
