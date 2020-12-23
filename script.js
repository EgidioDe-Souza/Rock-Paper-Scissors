//Set-up of computer choices and game settings
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

let computerPoints = 0;
let playerPoints = 0;

function playRound(playerSelection) {
    const results = document.querySelector('#results')
    const computerScore = document.querySelector('#computer-score');
    const playerScore = document.querySelector('#player-score');


    playerScore.textContent = 'Player points: '+ playerPoints;
    computerScore.textContent = 'Computer points: '+ computerPoints;

    const computerSelection = computerPlay();

//Conditional Statements- Structure of the game
 if(computerSelection == "rock" && playerSelection == "rock" ||
   computerSelection == "paper" && playerSelection == "paper" ||
   computerSelection == "scissors" && playerSelection == "scissors") {
   results.textContent = "Its a tie!";

   } 
   if (computerSelection == "rock" && playerSelection == "paper") {
       ++playerPoints
       results.textContent = "You win! Paper beats rock!";
       playerScore.textContent = "Player points: " + playerPoints;
    
   } else if (computerSelection == "rock" && playerSelection == "scissors") {
       ++computerPoints
       results.textContent = "You lose! Rock beats Scissors!";
       computerScore.textContent = "Computer points: " + computerPoints;
       
   } else if (computerSelection == "paper" && playerSelection == "rock") {
       ++computerPoints
       results.textContent = "You Lose! Paper beats rock!";
       computerScore.textContent = "Computer points: " + computerPoints;

   } else if (computerSelection == "paper" && playerSelection == "scissors") {
       ++playerPoints
       results.textContent = "You win! Scissors beats paper!";
       playerScore.textContent = "Player points: " + playerPoints;

   } else if (computerSelection == "scissors" && playerSelection == "rock") {
       ++playerPoints
       results.textContent = "You win! Rock beats Scissors!";
       playerScore.textContent = "Player points: " + playerPoints;

   } else if (computerSelection == "scissors" && playerSelection == "paper") {
       ++computerPoints
       results.textContent = "You Lose! Scissors beats paper!";
       computerScore.textContent = "Computer points: " + computerPoints
   }
}

//Determines the winner of the game 
function whoIsWinner() {
    const round = document.querySelector('#round-end'); 
    if (computerPoints == 5) {
        round.textContent = "YOU LOSE, computer wins!"
        restartButton();
    } else if (playerPoints == 5) {
        round.textContent =  "Congratulations YOU WON!"
        restartButton();
    } 
}

//Results, Score, Round & Button Settings
function restartButton () {
    const restartButton = document.createElement("BUTTON");
    const computerScore = document.querySelector('#computer-score');
    const playerScore = document.querySelector('#player-score');
    const results = document.querySelector('#results');
    const round = document.querySelector('#round-end');

    restartButton.innerHTML = "Restart Game";
    restartButton.style.backgroundColor = 'rgb(0, 226, 215)';
    restartButton.style.color = 'rgb(0, 0, 0)';
    restartButton.style.borderRadius = '5%'
    restartButton.style.borderColor = 'rgb(0, 226, 215)'
    restartButton.style.fontFamily = 'Lucida Console", "Courier New", monospace'
    document.getElementById('restart-button').appendChild(restartButton);
    restartButton.addEventListener('click', function(event) {
        results.textContent = "";
        playerPoints = 0;
        computerPoints = 0;
        computerScore.textContent = 'Computer points: ' + computerPoints;
        playerScore.textContent = 'Player points: ' + playerPoints;
        document.getElementById('restart-button').removeChild(restartButton);
        round.textContent = "";
    })
}

const buttons = document.querySelectorAll('.btn');

//Event Listener
    buttons.forEach((button) => {
    button.addEventListener('click', function(event) {
        playRound(event.target.value);
        whoIsWinner();
    })
})
 
