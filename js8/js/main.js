// Ternary Operator 

//syntax
// condition? ifTrue : ifFalse

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes,we have soup." : "Sorry, no soup today.";
console.log(response);

//Example 2
let soup2 ="Cihcken Noodle Soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup2 ? `Yes, we have ${soup2} today.` : "Sorry, no soup today.";
console.log(soupAccess);

//Example 3

let testScore = 85;
let myGrade=
testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My test grade is a ${myGrade}.`);

//Example 4

let playerOne = "rock";
let computer = "paper";
let result = 
playerOne === computer 
? "Tie game!"
: playerOne === "rock" && computer === "paper"
? "Computer wins!"
: playerOne === "paper" && computer === "scissors"
? "Computer wins!"
: playerOne === "scissors" && computer === "rock"
? "Computer wins!"
: "Player wins!";
console.log(result);