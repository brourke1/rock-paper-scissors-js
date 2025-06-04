

// 0 is for rock
// 1 is for paper
// 2 is for scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3;

    return choice;
}

function getPlayerChoice() {

    return prompt("Please enter your choice (rock, paper, or scissors): ");
}

function isUserWin(user, computer) {

    if (user == computer) {
        return 0;
    }
    let num = user - computer;
    let computerChoice = getComputerChoice();
    if (num == 1 || num == -1) {
        return user > computer;
    }

    if (num > 0) {
        return -1;
    }

    return 1;
}

function numToChoice(num){
    let choice = "";
    if(num == 0){
        choice = "rock";
    }
    else if(num == 1){
        choice = "paper";
    }
    else if (num == 2){
        choice = "scissors";
    }
    else{
        choice = "error";
    }
    return choice;
}


    let humanScore = 0;
    let computerScore = 0;

    function playRound(userInput) {
        while(displayMessage.firstChild){
            displayMessage.removeChild(displayMessage.lastChild);
        }
        
        const computerChoiceElement = document.createElement("div");
        const currentScore = document.createElement("div");
        const winMessage = document.createElement("div");

        let computerChoice = getComputerChoice();
        let isWin = isUserWin(userInput, computerChoice);

        userInput = numToChoice(userInput);
        computerChoice = numToChoice(computerChoice);

        
        computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;

        if (isWin == 1) {
            winMessage.textContent = `You win! ${userInput} beats ${computerChoice}`;
            humanScore++;
        }
        else if (isWin == 0) {
            winMessage.textContent = `It's a tie! Both players chose ${userInput}`;
        }

        else {
            winMessage.textContent = `Computer Wins! ${computerChoice} beats ${userInput}`;
            computerScore++;
        }
        
        currentScore.textContent = `Player: ${humanScore} Computer: ${computerScore}`;

        

        

        if(humanScore >= 5){
            winMessage.textContent = "Player Wins!";
            displayMessage.appendChild(winMessage);
        }
        else if(computerScore >= 5){
            winMessage.textContent = "Computer Wins!";
            displayMessage.appendChild(winMessage);
        }
        else{
            displayMessage.appendChild(winMessage);
            displayMessage.appendChild(currentScore);
            displayMessage.appendChild(computerChoiceElement);
        }
        body.appendChild(displayMessage);
    }


const displayMessage = document.createElement("div");

buttons = Array.from(document.querySelectorAll(".buttons button"));

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => playRound(i));
}



let body = document.querySelector("body");
