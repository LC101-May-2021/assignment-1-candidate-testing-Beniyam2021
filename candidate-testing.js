
const input = require('readline-sync');

let candidateName;
let question = "1) Who was the first American woman in space?";
//let candidateAnswer1;
let candidateAnswer;
let correctAnswer = "Sally Ride";
// TODO 2: modify your quiz app to ask 5 questions //
//Hellow World!
// TODO 1.1a: Define candidateName // 
//let candidateName;
let questions = ["1) Who was the first American woman in space?","2) True or false: 5000 meters = 5 kilometers.","3) (5 + 3)/2 * 10 = ?","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","5) What is the minimum crew size for the ISS?"];

let correctAnswers = ["Sally Ride","true","40","Trajectory","3"] ;

//let candidateAnswer = "";
let candidateAnswers = [];
//candidateName=input.question("Write Candidate Name");
//TODO 1.2a: Define question, correctAnswer, and candidateAnsw


function askForName() {
  let candidateName = input.question("enter your name?");
  console.log("Candidate Name: "+ candidateName + "!");
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for(let i=0; i<questions.length; i++){
  let candidateAnswer = input.question(questions[i]);
  candidateAnswers.push(candidateAnswer);
}

}
let numOfCorrect;
function gradeQuiz(candidateAnswers) {
let numOfCorrect = 0
//let candidateAnswers;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for(let i=0; i<candidateAnswers.length; i++){
  //candidateAnswers[i].input.question(correctAnswers[i]);
  if (candidateAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase()){
    numOfCorrect++; 
  }
  console.log(`${questions[i]}`); 
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
  console.log();
}
}
//let grade;


for (let i=0; i<candidateAnswers.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    numOfCorrect = numOfCorrect ++;
  }
}

let grade = (numOfCorrect/candidateAnswers.length) * 100; 
//console.log(">>> Overall Grade: ${grade}% (${numOfCorrect} of ${questions.length} responses correct) <<<");
  if(grade > 80){
    console.log(">>> Status: PASS <<<");
  }else{
    console.log(">>> Status: FAILED <<<")
    console.log(`>>> Overall Grade: ${grade}% (${numOfCorrect} of ${questions.length} responses correct) <<<`);

  }

  return grade; 

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}
