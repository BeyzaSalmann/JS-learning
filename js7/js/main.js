// Conditionals: Switch Statements

// Syntax
// Evaluates an expression and executes the matching case block.
switch (expression) {
    case 1:
        // Run this code if expression matches 1
        break;
    case 2:
        // Run this code if expression matches 2
        break;
    // Add as many cases as needed
    default:
        // Run this code if no cases match
}

// Example 1
// Generates a random number between 1 and 3 and checks the result.
switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match"); 
}

// Example 2
// Corrected: Passing a value to evaluate, such as a rounded number.
switch (Math.floor(2.8)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2); // This will run because floor(2.8) is 2
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match"); 
}

// Example 3
// A Rock-Paper-Scissors logic using switch statements and nested if-else.
let playerOne = "rock";
let computer = "rock";

switch (playerOne) {
    case computer:
        console.log("Tie game!"); // Result if both choices are the same
        break;
    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        } else {
            console.log("PlayerOne wins!");
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("Computer wins!");
        } else {
            console.log("PlayerOne wins!");
        }
        break;
    default:
        // Handling "scissors" or any other value
        if (computer === "rock") {
            console.log("Computer wins!");
        } else {
            console.log("PlayerOne wins!");
        }       
}