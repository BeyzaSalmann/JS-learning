// --- JSON (JavaScript Object Notation) ---

// Farklı yazılım dillerinin (JS, Java, Python vb.) birbirini anlamasını sağlar.
// İnternet üzerinden veri gönderirken nesneleri hafif ve hızlı bir "metin" paketine dönüştürür.
// Sadece saf verileri taşır; fonksiyon (eylem) taşıyamaz.
// JSON.stringify() ile paketlenir, JSON.parse() ile paket açılır.

//JavaScript Nesnesi Oluşturma
const myObj = {
    name: "Dave",
    hobbies: ["programming", "teaching"],
    hello: function () {
        console.log("Hello!");
    }
};

console.log(myObj.name); // Çıktı: Dave
myObj.hello(); // Çıktı: Hello!

// JSON.stringify() : Nesneyi Gönderilecek Bir METİN Haline Getirir
// Fonksiyonlar bu aşamada silinir
const sendJSON = JSON.stringify(myObj);

console.log(sendJSON); 
// Çıktı: {"name":"Dave","hobbies":["programming","teaching"]}
console.log(typeof sendJSON); // Çıktı: string 

// JSON.parse() : Gelen metni tekrar Kullanılabilir bir nesne haline getirir
const receiveJSON = JSON.parse(sendJSON);

console.log(receiveJSON); 
// Çıktı: { name: 'Dave', hobbies: [ 'programming', 'teaching' ] }
console.log(receiveJSON.name); // Çıktı: Dave
console.log(typeof receiveJSON); // Çıktı: object