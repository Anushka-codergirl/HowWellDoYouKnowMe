// First CLI Quiz App

var readlineSync = require('readline-sync');

const chalk = require('chalk');

// Take user's name and greet them

var userName = readlineSync.question(chalk.bold.cyan("What's your name? "));

console.log("Hey! "+ chalk.bold.red(userName));
console.log(chalk.bold.bgCyan("How well do you know me?\n"));

var score = 0;

var highScore = [
  {
    name: "Anushka",
    score: 5
  }
];

//Quiz Data

const quizData = [
  {
    question: '1. Where do I live? ',
    answer: 'Hajipur'
  },
  {
    question: '2. What is my favorite musical genres? ',
    answer: 'Jazz'
  },
  {
    question: '3. What is my Birthday Month? ',
    answer: 'July'
  },
  {
    question: '4. What is my favorite social media app? ',
    answer: 'Instagram'
  },
  {
    question: '5. What do I like to do in free time? ',
    answer: 'Playing'
  }
];


function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("You're right."));
    score++;
  }
  else{
    console.log(chalk.red("Sorry! You're wrong."));
  }
  console.log("Current Score: " + chalk.bold.yellow(score));
  console.log("-------------------");
}


//Calling quiz function

for(var i = 0; i< quizData.length; i++){
  quiz(quizData[i].question, quizData[i].answer);
}

//Printing Result

console.log("Your final score: " + chalk.bold.yellow(score));


//Check if user has beaten the score or not

if(score >= highScore[0].score){
  console.log(chalk.bold.blue("Yay!!! Congratulations!\nYou have scored a HIGH SCORE.\n"));
  console.log(chalk.bgWhite.yellow("Please share a screenshot of your & I'll update the scoreboard."));
}