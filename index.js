// Quiz Game
const userInput = require("readline-sync");

let questionBank = [
  {
    question: 'Where is Shaniwar Wada Located?',
    answer: 'Pune'
  },
  {
    question: 'Which city is home to Chitale Bandhu?',
    answer: 'Pune'
  },
  {
    question: 'Where is Fergusson College Located?',
    answer: 'Pune'
  },
  {
    question: 'Which city is home to Katakirr Misal?',
    answer: 'Pune'
  },
  {
    question: 'Which is the best city in Maharashtra?',
    answer: 'Pune'
  }
]


function greet(){
  let userName = userInput.question("What is your name? ")
  console.log(userName + ",thanks for stopping by to play this game!")
}

function game() {
  let currentScore = 0
  
  questionBank.forEach(function(question) {
  let userResponse = userInput.question(question.question + "\n")
  if (userResponse.toUpperCase().replace(/\s+/g, '') ==       
  question.answer.toUpperCase().replace(/\s+/g, '')) {
    currentScore += 1
    console.log("You got that right! Your score is " + currentScore + "/5")
  }
  else{
      console.log("Oops better luck next time" + "\n" + "Your score is " + currentScore 
  +"/5")
  }
  })
  
  return replay()
}

// not to be called directly; limited to Game() Scope
function replay() {
  let playAgain = userInput.question("Do you want to play Again? Simply type yes or no \n")
  if (playAgain.toUpperCase().replace(/\s+/g, '') == "YES") {
    game()
  }
  else {
    console.log("Have a good day!!")
    return
  }
}

greet()
game()