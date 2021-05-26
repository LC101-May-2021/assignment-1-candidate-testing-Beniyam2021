const input = require('readline-sync');
console.log("WEL COME TO CANDIDATE-TESTING");
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = "Can Twin";
console.log(("Candidate Name:") , (candidateName));
//candidateName=input.question("Write Candidate Name");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
question = "1) Who was the first American woman in space?";
console.log(question);
let candidateAnswer;
candidateAnswer = "Your Answer: sally ride";
console.log(candidateAnswer);
let correctAnswer;
correctAnswer = "Correct Answer: Sally Ride";
console.log(correctAnswer);
console.log();

let questions;
questions = "2) True or false: 5000 meters = 5 kilometers."
console.log(questions);
let candidateAnswers;
candidateAnswers = "Your Answer: false";
console.log(candidateAnswers);
let correctAnswers;
correctAnswers = "Correct Answer: true";
console.log(correctAnswers);
console.log()

let question3;
question3 = "3) (5 + 3)/2 * 10 = ? "
console.log(question3);
let candidateAnswer3;
candidateAnswer3 = "Your Answer: 45";
console.log(candidateAnswer3);
let correctAnswer3;
correctAnswer3 = "Correct Answer: 40";
console.log(correctAnswer3);
console.log()

let question4;
question4 = `4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?`
console.log(question4);
let candidateAnswer4;
candidateAnswer4 = "Your Answer: trajectory";
console.log(candidateAnswer4);
let correctAnswer4;
correctAnswer4 = "Correct Answer: Trajectory";
console.log(correctAnswer4);
console.log()

let question5;
question5 = "5) What is the minimum crew size for the ISS?"
console.log(question5);
let candidateAnswer5;
candidateAnswer5 = "Your Answer: 10";
console.log(candidateAnswer5);
let correctAnswer5;
correctAnswer5 = "Correct Answer: 3";
console.log(correctAnswer5);
console.log()

function askForName() {
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

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
};