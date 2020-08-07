import readlineSync from 'readline-sync';

const game = (task, getQuestionWithAnswer) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hi, ${userName}!\n${task}`);
  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = getQuestionWithAnswer();
    const question = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1]; // Использовать ли REST????
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default game;
