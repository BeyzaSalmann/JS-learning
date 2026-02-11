//Scope
//Değişken bir fonksiyonun içinde tanımlanırsa Local Scope olur eğer fonksiyonun dışında tanımlanırsa Global Scope olur. 
// Tüm fonksiyonlar kendi içinde yeni bir Scope oluşturur.

//var,let and const

//var x = 1;
//var x = 2; //var ile aynı isimde değişken tanımlanabilir.
//console.log(x); //2

//let y = 1;
//let y = 2; //let ile aynı isimde değişken tanımlanamaz.

//let x=1;
//x = 2; //let ile tanımlanan değişkenin değeri değiştirilebilir.
//console.log(x); //2

//const z = 1;
//z = 2; //const ile tanımlanan değişkenin değeri değiştirilemez.

//global scope
//var a = 1; //global scope
//let y=2;
//const z=3;



//local scope 
//function myFunc() {
   // const z = 5;
    console.log(z);
//}

//local scope
{
    const y = 4;
    console.log(y); 
}
myFunc();


//global scope
var x = 1;
let y = 2;
const z = 3;

console.log('global: ${x}');
console.log('global: ${y}');
console.log('global: ${z}');

function myFunc() {
    var x = 10;
    const z=5;
    console.log('local: ${x}'); //10
    console.log('local: ${y}');
    console.log('local: ${z}'); //5

    {
        console.log('block: ${x}'); //10
        console.log('block: ${y}');
        console.log('block: ${z}'); //5
    }

    myFunc2();
}




