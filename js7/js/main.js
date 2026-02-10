//Conditionals: Switch Statements

//sytax
switch (expression OR value) {

    case choice1:
        //run this code
        break;

    case choice2:
        //run this different code
        break;

    // add as many cases as needed

    default:
        //run this code if no cases matches
        //no need for break statement here
}

//Example

switch  (2) {

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

//Example 2

switch  (Math.floor) {

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
