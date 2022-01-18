const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? ",
  "What's your favorite pass-time? ",
  "What's your favorite song? ",
  "What's your favourite meal of the day? ",
  "What's your favourite food? ",
  "What's your favorite sport? ",
  "What's your superpower? ",
];
const answers = [];

const askQuestions = function(index) {
  rl.question(questions[index], (answer) => {
    answers.push(answer);
    if (answers.length !== questions.length) {
      askQuestions(index + 1);
    } else {
      const profile = `${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}. `;
      console.log(profile);
      rl.close();
    }
  });
};

askQuestions(0);