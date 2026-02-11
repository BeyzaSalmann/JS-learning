//First Interactive Game

let playGame = confirm("Shall we play rock, paper, scissors?");

if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

            let result =
                playerOne === computer
                    ? "Tie game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "scissors" && computer === "rock"
                    ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : `Player: ${playerOne}\nComputer: ${computer}\nPlayer wins!`;

            alert(result);
            let playAgain = confirm("Play again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");

        } else {
            alert("You did not enter rock, paper, or scissors.");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Okay, maybe next time.");
}
