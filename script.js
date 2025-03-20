/*
function getComputerChoice() {
    let getRandomObject = Math.floor(Math.random() * 3);
    if (getRandomObject === 0) {
    return "rock";
    }   else if (getRandomObject === 1) {
        return "paper";
    }   else {
        return "scissors";
    }
}

let computerGame = getComputerChoice();
console.log(computerGame);
*/



// if-else method with parameters in the function.

function getComputerChoice(rock, paper, scissors) {
    let getRandomObject = Math.floor(Math.random() * 3);
    if (getRandomObject === 0) {
        return rock;
    }   else if (getRandomObject === 1) {
        return paper;
    }   else {
        return scissors;
    }
}


function getHumanChoice() {
    let userChoice = prompt("Choose your game. Rock, paper or scissors?");
    return userChoice.toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            console.log("You choose: " + humanChoice);
        }
        if (computerChoice === humanChoice) {
            console.log("It's a tie!");
        }   else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        )   {
            humanScore++;
            console.log("You win!");
        }   else {
            computerScore++;
            console.log("Computer wins!");
        }
    }

    // Round 1
    console.log("Round 1!");
    let humanSelection1 = getHumanChoice();
    let computerSelection1 = getComputerChoice("rock", "paper", "scissors");
    console.log("Computer chose: " + computerSelection1);
    playRound(humanSelection1, computerSelection1);
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

    // Round 2
    console.log("Round 2!");
    let humanSelection2 = getHumanChoice();
    let computerSelection2 = getComputerChoice("rock", "paper", "scissors");
    console.log("Computer chose: " + computerSelection2);
    playRound(humanSelection2, computerSelection2);
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

    // Round 3
    console.log("Round 3!");
    let humanSelection3 = getHumanChoice();
    let computerSelection3 = getComputerChoice("rock", "paper", "scissors");
    console.log("Computer chose: " + computerSelection3);
    playRound(humanSelection3, computerSelection3);
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

    // Round 4
    console.log("Round 4!");
    let humanSelection4 = getHumanChoice();
    let computerSelection4 = getComputerChoice("rock", "paper", "scissors");
    console.log("Computer chose: " + computerSelection4);
    playRound(humanSelection4, computerSelection4);
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

    // Round 5
    console.log("Round 5!");
    let humanSelection5 = getHumanChoice();
    let computerSelection5 = getComputerChoice("rock", "paper", "scissors");
    console.log("Computer chose: " + computerSelection5);
    playRound(humanSelection5, computerSelection5);
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win! Yay!")
    }   else if (humanScore < computerScore) {
        console.log("You lose! Bohoo!")
    }   else {
        console.log("It's a tie game!")
    }
}

playGame();


// switch method.
/*
function getComputerChoice(rock, paper, scissors) {
    let getRandomObject = Math.floor(Math.random() * 3);
    switch (getRandomObject) {
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
        // This should not happen, but it is good to have a predetermined case:
        default:
            return null;
    }
}

let computerGame = getComputerChoice("rock", "paper", "scissors");
console.log(computerGame);
*/