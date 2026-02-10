//User Input

alert ("Hello, World!"); //tek seçenekli uyarı kutusu

confirm("Ok === True\nCancel === False"); //iki seçenekli uyarı kutusu, kullanıcıya bir soru sorar ve "OK" veya "Cancel" seçeneklerini sunar.

let myBoolen = confirm("Ok === True\nCancel === False"); //confirm() fonksiyonu, kullanıcı "OK" düğmesine tıkladığında true, "Cancel" düğmesine tıkladığında false döndürür. Bu nedenle, myBoolean değişkeni kullanıcıya bağlı olarak true veya false değerini alır.
console.log(myBoolen);

//let name = prompt("Please enter your name"); //prompt() fonksiyonu, kullanıcıdan bir girdi alır ve bu girdiyi bir string olarak döndürür. Eğer kullanıcı "Cancel" düğmesine tıklarsa, prompt() fonksiyonu null döndürür. Bu nedenle, name değişkeni kullanıcıya bağlı olarak bir string veya null değerini alır.
//console.log(name);

//Example 2

let name = prompt("Please enter your name"); 
if (name) {
    console.log(name.length);//name.length, name değişkeninin içindeki karakter sayısını döndürür. Eğer kullanıcı bir isim girerse, bu isimdeki karakter sayısını konsola yazdırır.
    console.log(name.trim().length);//name.trim().length, name değişkeninin başındaki ve sonundaki boşlukları kaldırarak karakter sayısını döndürür. Eğer kullanıcı bir isim girerse, bu isimdeki karakter sayısını başındaki ve sonundaki boşluklar olmadan konsola yazdırır.
    console.log(name.trim());//name.trim(), name değişkeninin başındaki ve sonundaki boşlukları kaldırır. Eğer kullanıcı bir isim girerse, bu ismi başındaki ve sonundaki boşluklar olmadan konsola yazdırır.
} else {
    console.log("You didn't enter your name.");//Eğer kullanıcı hiçbir şey girmezse veya "Cancel" düğmesine tıklarsa, name değişkeni falsy bir değere sahip olur (örneğin, boş string veya null). Bu durumda, else bloğu çalışır ve kullanıcıya isim girmediği mesajı konsola yazdırılır.
}

