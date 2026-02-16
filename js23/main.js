// Web Storage API (Yerel Depolama)
//Web sitelerinin, kullanıcının tarayıcısında veri saklamasına izin veren bir mekanizmadır.
// Geleneksel değişkenlerin aksine, bu veriler sayfa yenilendiğinde veya tarayıcı kapatıldığında (türüne göre) silinmez.
// Veriler her zaman "Key-Value" (Anahtar-Değer) çiftleri şeklinde saklanır.
// Neden Kullanılır?
// 1. Kullanıcı tercihlerini (örneğin: Gece modu/Aydınlık modu) hatırlamak için.
// 2. Kullanıcının oturum bilgilerini veya geçici form verilerini saklamak için.
// 3. Veritabanına her an gitmek yerine, küçük verileri yerelde tutarak hızı artırmak için.

// İki Ana Türü Vardır:
// 1. Local Storage: Veriler tarayıcıda kalıcı olarak saklanır. Kullanıcı silmediği sürece silinmez.
// 2. Session Storage: Veriler sadece sekme açık kaldığı sürece saklanır. Sekme kapandığında veri uçar.

// Önemli Kısıtlama: 
// Web Storage sadece "String" (Metin) formatında veri kabul eder. 
// Karmaşık veriler (Obje, Dizi) için JSON.stringify ve JSON.parse köprüsü kullanılır.

const myObj = {
    name: "Beyza",
    hobbies: ["Coding", "Learning", "JS"],
    logName: function() {
        console.log(this.name);
    }
};

const myArray = ["eat", "sleep", "code"];

// Veri Kaydetme (SetItem)
// Objeyi saklarken JSON.stringify ile string'e (metne) çeviriyoruz.
//Tarayıcının hafızası (Web Storage), sadece metin (string) formatında veri kabul eder. Yani orası aslında devasa bir not defteri gibidir ve içine sadece yazı yazabilirsin.
//JSON.stringify paketleme makinesi

sessionStorage.setItem("mySessionStore", JSON.stringify(myObj)); //myObj isimli objeyi metne dönüştürerek,sadece tarayıcı sekmesi açık kaldığı sürece yaşayacak olan geçici hafızaya (sessionStorage) "mySessionStore" adıyla kaydeder.
localStorage.setItem("myLocalStore", JSON.stringify(myArray)); //myArray isimli diziyi metne dönüştürerek, tarayıcı kapatılsa bile silinmeyecek olan kalıcı hafızaya (localStorage) "myLocalStore" adıyla kaydeder.

//localStorage: kalıcı bir hafıza
//sessionStorage: geçiçi hafıza

// Veriyi Geri Alma (GetItem)
// Alınan string veriyi JSON.parse ile tekrar JavaScript objesine/dizisine çeviriyoruz.
//JSON.parse = Metin halindeki o "paketi" açar ve tekrar JavaScript'in anlayacağı bir objeye/diziye çözümler.
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); //sessionStorage içindeki "mySessionStore" isimli metin paketini geri çağırır ve JSON.parse ile o paketi açıp tekrar gerçek bir JavaScript objesine dönüştürerek mySessionData değişkenine atar.
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore")); //localStorage içinde saklanan "myLocalStore" isimli metin paketini alır ve JSON.parse ile onu tekrar üzerinde işlem yapılabilecek (eleman eklenip çıkarılabilecek) bir diziye (array) dönüştürerek myLocalData değişkenine atar.

// Veri Silme ve Temizleme
// localStorage.removeItem("myLocalStore"); // Hafızadaki dağınıklığı önlemek için sadece ismi belirtilen ("myLocalStore") veriyi çekip çıkarır ve siler.
// localStorage.clear(); // Hiçbir anahtar (key) ayırmadan, o tarayıcı hafızasında (Local Storage) ne varsa her şeyi tek seferde bomboş yapar.
// const keyCount = localStorage.length; // O an hafızada kaç farklı veri paketinin saklandığını sayar ve bize sayısal bir değer (örneğin: 1 veya 5) döndürür.

console.log(mySessionData);
console.log(myLocalData);