

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

        let computerChoice = getComputerChoice();
        let isWin = isUserWin(userInput, computerChoice);

        userInput = numToChoice(userInput);
        computerChoice = numToChoice(computerChoice);

        const computerChoiceElement = document.createElement("div");
        computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;

        body.appendChild(computerChoiceElement);

        const winMessage = document.createElement("div");

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

        body.appendChild(winMessage);
    }

buttons = Array.from(document.querySelectorAll(".buttons button"));

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => playRound(i));
}

let body = document.querySelector("body");
