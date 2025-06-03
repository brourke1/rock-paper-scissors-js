

// 0 is for rock
// 1 is for paper
// 2 is for scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random()*10) % 3;

    return choice;
}

function isUserWin(user, computer){
    if(user == computer){
        return 0;
    }
    let num = user - computer;

    if(num == 1 || num == -1){
        return user > computer;
    }

    if(num > 0){
        return -1;
    }

    return 1;
}
console.log("Hello World");

let userInput = prompt("Please enter 1 for rock, 2 for paper, and 3 for scissors");
userInput--;
    //userInput = +userInput;

let computerChoice = getComputerChoice();
let isWin = isUserWin(userInput, computerChoice);


console.log("isWin: " + isWin);
console.log("computer choice: " + computerChoice);

if(isWin == 1){
    console.log("Player Wins!");
}
else if(isWin == 0){
    console.log("It's a tie!");
}

else{
    console.log("Computer Wins");
}
