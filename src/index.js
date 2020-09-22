import readlineSync from 'readline-sync';

const playGame = (task, getQuestionWithAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n${task}`);
  const numberOfTries = 3;
  let message;
  for (let i = 0; i < numberOfTries; i += 1) {
    const [question, correctAnswer] = getQuestionWithAnswer();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      message = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;
      return console.log(message);
    }
    console.log('Correct!');
  }
  message = `Congratulations, ${userName}!`;
  return console.log(message);
};
export default playGame;
