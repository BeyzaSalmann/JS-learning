//Conditionals: If Statements

//sytntax
if (condition) {
    //run some code
}
else{
    //run some diffrent code
}

//Example
let customerIsBanned = false;
let soup="chicken noodle soup";
let crakers =true;
let reply;
if(customerIsBanned){
    reply = "No soup for you!";
}
else if(soup && crakers){
    reply = `Here's your order of ${soup} with crackers`;
}
else if(soup){
    reply = `Here's your order of ${soup}`;
}
else{
    reply = `Sorry, we're out of soup ${soup}`;
}
console.log(reply);

//Example 2
let testScore = 89;
let grade;

if(testScore >= 90){
    grade = "A";
}
else if(testScore >= 80){
    grade = "B";
}
else if(testScore >= 70){
    grade = "C";
}
else if(testScore >= 60){
    grade = "D";
}
else{
    if(collegeStudent){
        grade = "U";
    } else{
    grade = "F";
}
}
console.log(grade);

//Example 3 = Decision tree
if (playerOne === computer){
    //tie game
}
else if(playerOne === "rock"){
    if(computer === "paper"){
        //computer wins
    }
    else{
        //player one wins
    }
}else if(playerOne === "paper"){
    if(computer === "scissors"){
        //computer wins
    }
    else{
        //player one wins
    }
}else 
    if(computer === "rock"){
        //computer wins 
    }else {
        //player one wins   
    }