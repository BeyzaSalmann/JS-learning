//Numbers

//An integer is a whole number
const myNumber =42;
console.log(myNumber); //42

const myFloat = 42.0
console.log(myFloat); //42

const myString = "42";
console.log(myString); //42

console.log(myNumber === myString)//false number and string are different types

console.log(myString + 3);//423
console.log(Number(myString)+3);//45 because we converted the string to a number
console.log(Number(myString) ===myNumber);//true because they are both numbers and have the same value
console.log(NUmber("Dave"));//NaN Not a Number because "Dave" cannot be converted to a number
console.log(Number(underfined));//NaN because undefined cannot be converted to a number
console.log(Number(true));//1 because true is converted to 1
console.log(Number(false));//0 because false is converted to 0

//Number Methods
//The Number.isInteger() method determşnes whether the passed value is an integer

console.log(Number.isInteger(myNumber));//true because 42 is an integer
const myFloat2 = 42.5;
console.log(Number.isInteger(myFloat2));//false because 42.5 is not an integer


//parseFlOAT() method 
console.log(Number.parseFloat(myNumber));//42 because myNumber is already a number so it returns 42
console.log(Number.parseFloat(myFloat2));//42.5 because myFloat2 is already a number so it returns 42.5
console.log(Number.parseFloat(myString));//42 because myString is "42" and parseFloat converts it to a number
const myString2 = "42.123abc";
console.log(Number.parseFloat(myString2));//42.123 because parseFloat reads the number until it reaches a non-numeric character
const myString3 = "abc42.123";
console.log(Number.parseFloat(myString3));//NaN because parseFloat cannot convert a string that starts with non-numeric characters to a number


//The toFixed() method
console.log(Number.parseFloat(myString2).toFixed(2));//42.12 because toFixed() rounds the number to 2 decimal places
console.log(Number.parseFloat(myString2).toFixed(0));//42 because toFixed() rounds the number to 0 decimal places

//The Number.parseInt() method 
console.log(Number.parseInt(myFloat).toFixed(2));//42.00 because parseInt() converts the number to an integer and toFixed() rounds it to 2 decimal places
console.log(Number.parseInt(myString2)); //42 because parseInt() converts the string to an integer and ignores the decimal part and non-numeric characters

console.log(typeof myFloat.toString());//string because toString() converts the number to a string
console.log(typeof Number.parseFloat(myString2)); //number because parseFloat converts the string to a number


//NaN
console.log (Number.isNaN("Dave"));//false because "Dave" is a string and not NaN
console.log(Number.isNaN(Number("Dave")));//true because Number("Dave") returns NaN and Number.isNaN() returns true for NaN values
