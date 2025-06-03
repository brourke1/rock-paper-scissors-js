

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

function inputToNum(user) {
    user.toLowerCase();
    if (user == "rock") {
        return 0;
    }
    else if (user == "paper") {
        return 1;
    }
    else if (user == "scissors") {
        return 2;
    }
    else {
        alert("user input error");
        return;
    }
}
function isUserWin(user, computer) {

    user = inputToNum(user);

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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {

        let userInput = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let isWin = isUserWin(userInput, computerChoice);

        console.log("isWin: " + isWin);
        console.log("computer choice: " + computerChoice);

        if (computerChoice == 0) {
            computerChoice = "rock";
        }
        else if (computerChoice == 1) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }

        if (isWin == 1) {
            console.log(`You win! ${userInput} beats ${computerChoice}`);
            humanScore++;
        }
        else if (isWin == 0) {
            console.log(`It's a tie! Both players chose ${userInput}`);
        }

        else {
            console.log(`Computer Wins! ${computerChoice} beats ${userInput}`);
            computerScore++;
        }


    }

    for(let i = 0; i < 5; i++){
        playRound();
        console.log(`Current score: User - ${humanScore} Computer - ${computerScore}`)
    }
}



