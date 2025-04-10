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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    function playRound(humanChoice, computerChoice) {
        let divYourResult = document.querySelector("#yourResult");
        divYourResult.textContent = `Your score: ${humanScore}`;
        
        let divComputerResult = document.querySelector("#computerResult");
        divComputerResult.textContent = `Computer score: ${computerScore}`;
        
        let gameResultMessage;
        if (computerChoice === humanChoice) {
            gameResultMessage = "It's a tie!";
            alert(gameResultMessage);
            console.log(gameResultMessage);
        }   else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        )   {            
            humanScore++;
            gameResultMessage = "You win!";
            alert(gameResultMessage);
            console.log(gameResultMessage);
        }   else {
            computerScore++;
            gameResultMessage = "Computer wins!";
            alert(gameResultMessage);
            console.log(gameResultMessage);
        }
        
        let divGameResult = document.querySelector("#gameResult");
        divGameResult.textContent = gameResultMessage;
    }

    let buttons = document.querySelector("#buttons");
    buttons.addEventListener("click", (event) => {
        let target = event.target;
        let humanSelection = target.id;
        if (humanSelection === "rock" || 
            humanSelection === "paper" || 
            humanSelection === "scissors") {
                let computerSelection = getComputerChoice("rock", "paper", "scissors");

                roundCount++
                let divRound = document.querySelector("#roundCount");
                divRound.textContent = `Round ${roundCount}!`;
                // alert("Round " + roundCount + "!");
                console.log("Round " + roundCount + "!");

                let divHumanChoice = document.querySelector("#yourChoice");
                divHumanChoice.textContent = `You choose ${humanSelection}!`
                // alert("You choose " + humanSelection + "!");
                console.log("You choose " + humanSelection + "!");

                let divComputerChoice = document.querySelector("#computerChoice");
                divComputerChoice.textContent = `Computer chose ${computerSelection}!`;
                alert("Computer chose " + computerSelection + "!");
                console.log("Computer chose " + computerSelection + "!")

                playRound(humanSelection, computerSelection);
                console.log("Your score: " + humanScore);
                console.log("Computer score: " + computerScore);
            }
    
        if (roundCount === 5) {
            let finalResultMessage;
            if (humanScore > computerScore) {
                finalResultMessage = "You win! Yay!";
                alert(finalResultMessage);
                console.log(finalResultMessage);
            } else if (humanScore < computerScore) {
                finalResultMessage = "You lose! Boohoo!";
                alert(finalResultMessage);
                console.log(finalResultMessage);
            } else {
                finalResultMessage = "It's a tie game!";
                alert(finalResultMessage);
                console.log(finalResultMessage);
            }
            divFinalResults = document.querySelector("#finalResults");
            divFinalResults.textContent = finalResultMessage;

            // Reset scores for a new game.
            humanScore = 0;
            computerScore = 0;
            roundCount = 0;
        }
    });
}


playGame();