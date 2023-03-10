let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return "rock";
    }
    else if(randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    //Setting up winning, losing and drawing messages to avoid repetition
    let loseMessage = "You Lose!, " + 
                        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + 
                        " beats " + 
                        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let winMessage = "You Win!, " + 
                        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + 
                        " beats " + 
                        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    let drawMessage = "It is a draw!";  

    //Conditional statements deciding the winner/loser
    if(playerSelection === "rock" && 
        computerSelection === "paper") {
        computerScore += 1;
        return loseMessage;
    }
    else if(playerSelection === "paper" && 
            computerSelection === "scissor") {
        computerScore += 1;
        return loseMessage;
    }
    else if(playerSelection === "scissor" && 
            computerSelection === "rock") {
        computerScore += 1;
        return loseMessage;
    }
    else if(playerSelection === computerSelection) {
        return drawMessage;
    }
    else {
        playerScore += 1;
        return winMessage;
    }
}

function game() {
    while(playerScore < 5 && computerScore < 5) {
        let correctInput = false;
        let userInput;
        
        do {
            userInput = prompt("Please enter rock, paper or scissor (correct spelling): ").toLowerCase();
            
            if(userInput === "rock" || 
                userInput === "paper" ||
                userInput === "scissor") {
                correctInput = true;
            }
            else {
                alert("Incorrect input. Please try again.");
            }
        } while(!correctInput);
        
        console.log(playRound(userInput, getComputerChoice()));
    }
}

game();
console.log("Your score is: " + playerScore + 
            "\nThe computer score is: " + computerScore);