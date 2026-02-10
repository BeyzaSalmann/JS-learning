//Loops 
let myNumber = 0;
while (myNumber < 50) {
    console.log(myNumber);
    myNumber ++;
}

let myNumber2 = 50;
while (myNumber2 <50)   {
    myNumber2 += 2;
    console.log(myNumber2);
}
do {
    console.log(myNumber2);
} while (myNumber2 < 50);

//Example2

let name ="Dave";
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}

//Example3

let name2=  "Dave";
let counter = 0;
let myLetter;
while (counter <=3) {
    myLetter = name2[ counter];
    console.log(myLetter);
if (counter === 1) {
    counter += 2;
    continue;
}
if (myLetter === "v") break;
counter++;
}
console.log(counter);