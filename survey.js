const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionList = [
  "What\'s your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

let answerList = []

rl.question(questionList[0], (answer) => {
  answerList.push(answer);
  rl.question(questionList[1], (answer) => {
    answerList.push(answer);
    rl.question(questionList[2], (answer) => {
      answerList.push(answer);
      rl.question(questionList[3], (answer) => {
        answerList.push(answer);
        rl.question(questionList[4], (answer) => {
          answerList.push(answer);
          rl.question(questionList[5], (answer) => {
            answerList.push(answer);
            rl.question(questionList[6], (answer) => {
              answerList.push(answer);
              console.log(`${answerList[0]} loves listening to ${answerList[2]} while ${answerList[1]}, devouring ${answerList[4]} for ${answerList[3]} , prefers ${answerList[5]} over any other sport, and is amazing at ${answerList[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


// rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// })

// rl.question('Thank you for your valuable feedback) ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// })

// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.