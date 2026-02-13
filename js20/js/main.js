// Handling Errors

// Temel Try Catch 
const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe"; // Hata alınır. const değiştirilemez
    } catch (err) {
        // Hata olduğunda program durmaz, burası çalışır
        console.error(err); // Hatanın ne olduğunu kırmızı yazdırır
        console.table(err); // Hatayı tablo şeklinde gösterir
        console.warn(err);  // Sarı uyarı şeklinde gösterir
    }
};
makeError();

// Finally Kullanımı
const makeErrorWithFinally = () => {
    try {
        
    } catch (err) {
        console.error(err);
    } finally {
        console.log("...finally block her zaman çalışır!"); 
        // Genelde veritabanı bağlantısını kapatmak için kullanılır.
    }
};

// Custom Errors (Özel hatalar)
const customError = () => {
    try {
        throw new Error("Bu benim oluşturduğum özel bir hata!");
    } catch (err) {
        console.error(err.name);    // Error
        console.error(err.message); // Bu benim oluşturduğum hata
        console.error(err.stack);   // Hatanın hangi satırda olduğunu gösteren iz
    }
};
customError();

// Profesyonel Yaklaşım
function evenDivisor(n) {
    if (n % 2 !== 0) {
        // Eğer sayı tekse hata fırlat
        throw new Error("Sadece çift sayılarla işlem yapabiliriz!");
    }
    return n / 2;
}

try {
    evenDivisor(3); // Tek sayı gönderdik, hata çıkacak
} catch (err) {
    console.error(err.message);
}

// try: Çalıştırılacak kodları buraya yazarız (Hata çıkma ihtimali olan yer).
// catch: Eğer hata çıkarsa uygulamanın çökmesini engeller ve hatayı yakalar.
// finally: Hata çıksa da çıkmasa da en sonda mutlaka çalışır.
// throw: İstediğimiz bir durumda "burada hata var" diyerek manuel hata fırlatmamızı sağlar.