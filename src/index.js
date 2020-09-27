import readlineSync from 'readline-sync';

const playGame = (task, getQuestionWithAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log(task);
  const numberOfTries = 3;
  for (let i = 0; i < numberOfTries; i += 1) {
    const [question, correctAnswer] = getQuestionWithAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question(`Your answer: `);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
export default playGame;
