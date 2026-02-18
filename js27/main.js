// REGULAR EXPRESSIONS (REGEX) - DÜZENLİ İFADELER
// TANIM: Metinler (string) içinde belirli karakter desenlerini aramak, eşleştirmek ve manipüle etmek için kullanılan özel bir sözdizimidir.

// TEMEL YAPI VE BAYRAKLAR (FLAGS):
    // /pattern/flags  -> Örnek: /beyza/gi
    //- g (global): Metindeki tüm eşleşmeleri bulur (ilkinde durmaz).
    //- i (insensitive): Büyük/küçük harf duyarlılığını kaldırır.
    // KARAKTER SINIFLARI:
    // - \d : Tüm rakamları (0-9) temsil eder.
    // - \w : Tüm harf, rakam ve alt çizgileri temsil eder.
    //- \s : Boşluk karakterlerini (space, tab) temsil eder.
   //  - [a-z] : Belirli bir aralıktaki karakterleri arar. 

  //NİCELEYİCİLER (QUANTIFIERS):
//  - + : 1 veya daha fazla kez tekrar.
   //  - * : 0 veya daha fazla kez tekrar.
    // - {n} : Tam olarak n kez tekrar (Örn: \d{3} -> 3 basamaklı sayı).//
  

     



const paragraph = "Beyza staj yapıyor. Telefon: 555-123-4567";

// .test() Metodu: "Bu desen metinde var mı?"
// Rakam (digit) olup olmadığını kontrol eden bir desen oluşturalım.
const hasNumber = /\d+/; 
console.log("Metinde rakam var mı?:", hasNumber.test(paragraph)); // true döner


// .match() Metodu: "Eşleşen tüm parçaları bana getir."
// g (global) bayrağı sayesinde tüm sayı gruplarını dizi olarak alırız.
const allNumbers = paragraph.match(/\d+/g);
console.log("Bulunan Sayılar:", allNumbers); // ["2026", "555", "123", "4567"]


// .replace() Metodu: "Bulduğun deseni şununla değiştir."
// i (insensitive) bayrağı ile harf duyarlılığı olmadan Beyza'yı bulup değiştiriyoruz.
const updatedParagraph = paragraph.replace(/beyza/i, "Mühendis Beyza");
console.log("Güncellenmiş Metin:", updatedParagraph);


// Telefon Numarası Formatı Doğrulama
const phonePattern = /\d{3}-\d{3}-\d{4}/;
const isPhoneValid = phonePattern.test(paragraph);
console.log("Telefon formatı doğru mu?:", isPhoneValid); // true
