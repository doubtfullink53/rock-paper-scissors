const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");

const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");



const resultDisplay = document.getElementById("result");
const roundsDisplay = document.getElementById("rounds")

const playerChoices = document.querySelectorAll('button')

let userChoice;
let computerChoice;
let result;
let rounds = 0;
let cpuScore = 0;
let pScore = 0;



playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', (e) => {
    
        userChoice = e.target.id;
        
        computerChoiceGenerate();
        getResult();
        
   
    
}))



function computerChoiceGenerate(){
    const randomNumber = Math.floor(Math.random() * playerChoices.length) + 1;
    switch(randomNumber) {
        case 1:
          computerChoice = "rock"
          break;
        case 2:
            computerChoice = "paper"
          break;
        case 3:
            computerChoice = "scissors"
           break;
      }
      
}

function getResult(){
    
    if(computerChoice == userChoice){
        rounds++
        result = "it's a tie"
    }
    if(computerChoice == "rock" && userChoice == "paper"){
       rounds++
       pScore++
        result = "you win"
    }
    if(computerChoice == "rock" && userChoice == "scissors"){
        rounds++
        cpuScore++
        result = "you lose"
    }
    if(computerChoice == "paper" && userChoice == "scissors"){
        rounds++
        pScore++
        result = "you win"
    }
    if(computerChoice == "paper" && userChoice == "rock"){
        rounds++
        cpuScore++
        result = "you lose"
    }
    if(computerChoice == "scissors" && userChoice == "rock"){
        rounds++
        pScore++
        result = "you win"
    }
    if(computerChoice == "scissors" && userChoice == "paper"){
        rounds++
        cpuScore++
        result = "you lose"
    }

    if(rounds <= 5){
        
        playerChoiceDisplay.innerHTML = userChoice;
        computerChoiceDisplay.innerHTML = computerChoice
        computerScore.innerHTML = cpuScore;
        playerScore.innerHTML = pScore;
        roundsDisplay.innerHTML = rounds;
        resultDisplay.innerHTML = result;
        if(cpuScore > pScore && rounds == 5){
            resultDisplay.innerHTML = `Cpu Wins! ${cpuScore} out of 5 rounds`;
        }
        if(cpuScore < pScore && rounds == 5){
            resultDisplay.innerHTML = `You Win! ${pScore} out of 5 rounds`;
        }
    }

   
    
    
    
    

}

