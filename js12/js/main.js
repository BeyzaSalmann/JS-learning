//Functions
//Metotlar fonksiyonların içine yerleştirilmişlerdir.

//Sytax
function sum () {
    return 2 +2;
}

console.log(sum()); //4

//Parametreli fonksiyon
function sum2 (num1, num2) {
    return num1 + num2;
}

console.log(sum2(5, 10)); //15

//Example
function sum3 (num1, num2) {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}
console.log(sum3);

//Example
function sum4 (num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum4(2, 3)); //5

//Example
function getUserNameFromEmail(email) {
    return email.slice(0 , email.indexOf("@"));
}

console.log(getUserNameFromEmail("user@Github.com")); 

//Example

const getUserNameFromEmail2 = (email) => {
    return email.slice(0 , email.indexOf("@"));
};

console.log(getUserNameFromEmail2("john@davesdomain.com")); 

//Example

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("jOhN")); //John

