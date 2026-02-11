// Arrays (Diziler)
// Diziler, birden fazla veriyi tek bir değişken içinde saklamamızı sağlar.
const myArray = [];

// Eleman Ekleme (İndeks ile)
// Dizilerde saymaya 0'dan başlanır.
myArray[0] = "Dave";
myArray[1] = "1001";
myArray[2] = "false";

// Temel Özellikler
console.log(myArray); // Dizinin tamamını gösterir.
console.log(myArray.length); // Dizideki toplam eleman sayısını verir.
console.log(myArray[myArray.length - 1]); // Her zaman dizinin son elemanına ulaşmanızı sağlar.

// Ekleme ve Çıkarma Metotları
myArray.push("school"); // Dizinin EN SONUNA yeni bir eleman ekler.
console.log(myArray);

const lastItem = myArray.pop(); // Dizinin EN SONUNDAKİ elemanı çıkarır ve döndürür.
console.log(lastItem); // Çıkarılan "school" elemanını gösterir.

myArray.unshift("first"); // Dizinin EN BAŞINA yeni bir eleman ekler.
const newLength = myArray.unshift("new-first"); // Başa eleman ekler ve dizinin yeni uzunluğunu döndürür.
console.log(myArray);

const firstItem = myArray.shift(); // Dizinin EN BAŞINDAKİ elemanı çıkarır ve döndürür.
console.log(firstItem);

// Silme ve Parçalama Metotları
delete myArray[1]; // 1. indeksteki elemanı siler ama yeri "undefined" (boş) kalır.
console.log(myArray[1]); // undefined döner.

// splice(başlangıç, silinecek_sayı, eklenecek_eleman)
myArray.splice(1, 1, 42); // 1. indeksten başla, 1 eleman sil ve yerine 42 koy.
console.log(myArray);

// slice(başlangıç, bitiş) - Orijinal diziyi bozmadan yeni bir kopya dizi oluşturur.
const myArray2 = ['A', 'B', 'C', 'D', 'E', 'F'];
const newArray = myArray2.slice(2, 5); // 2'den başlar 5'e kadar (5 dahil değil) alır.
console.log(newArray);

//  Diziyi Düzenleme
const myArray3 = ['A', 'B', 'C', 'D', 'E', 'F'];
myArray3.reverse(); // Diziyi tamamen tersine çevirir.
console.log(myArray3);

// join ve split (Metne çevirme ve geri dizi yapma)
const myArray4 = ['A', 'B', 'C'];
const newString = myArray4.join(); // Diziyi "A,B,C" şeklinde bir metne dönüştürür.
const newArray4 = newString.split(','); // Virgülleri baz alarak metni tekrar diziye çevirir.

//  Dizileri Birleştirme
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];
// Spread Operator (...) kullanarak iki diziyi birleştirme (Modern Yöntem)
const combinedArray = [...myArrayA, ...myArrayB]; 
console.log(combinedArray);

//  Çok Boyutlu Diziler (Nested Arrays)
// Dizilerin içine başka diziler koyarak matris yapıları oluşturulabilir.
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf ball", "tennis ball"];
const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

const equipDept = [equipShelfA, equipShelfB]; // Spor ekipmanları bölümü
const clothesDept = [clothesShelfA, clothesShelfB]; // Kıyafet bölümü

console.log(equipDept[0][1]); // 0. rafın (equipShelfA) içindeki 1. eleman: "football"
console.log(clothesDept[1][0]); // 1. rafın (clothesShelfB) içindeki 0. eleman: "sweat tops"

// Tüm mağazayı birleştiren dev bir dizi
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]); // Mağaza -> EquipDept -> EquipShelfA -> "football"