import readlineSync from 'readline-sync';

const game = (task, getQuestionWithAnswer) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hi, ${userName}!\n${task}`);
  const numberOfTries = 3;
  for (let i = 0; i < numberOfTries; i += 1) {
    let message;
    const [question, correctAnswer] = getQuestionWithAnswer();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      message = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;
      return console.log(message);
    }
    message = 'Correct!';
    console.log(message);
  }
  const congratulation = `Congratulations, ${userName}!`;
  return console.log(congratulation);
};
export default game;
