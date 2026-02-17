// ASYNC JS (PROMISES, FETCH, ASYNC & AWAIT)

// PROMISE :JavaScript'te bir işlemin (genelde veri çekme) sonucunun "gelecekte" tamamlanacağına dair verilen bir sözdür.JavaScript'e "Bu işi yap, bitince bana haber ver" diyoruz.
    //Pending (Beklemede): İşlem sürüyor.
    //Fulfilled (Tamamlandı): Veri başarıyla geldi.
    //Rejected (Reddedildi): Bir hata oluştu.

// FETCH API: Bir URL üzerinden (sunucudan) veri çekmemizi sağlayan modern yöntemdir.posts.js dosyasındaki verileri manuel yazmak yerine, internetteki bir adresten (URL) gerçek verileri çekiyoruz.

// ASYNC & AWAIT:Asenkron kodları, sanki satır satır sırayla (senkron) çalışıyormuş gibi daha okunabilir yazmamızı sağlayan modern sözdizimidir (Syntactic Sugar).İşlemler çok hızlı olduğu için JavaScript'e "Dur ve veri gelene kadar bekle" talimatını await ile veriyoruz.

// Bir API'den veri çekme fonksiyonu
//const getAllUserEmails = async () => 
    {
    // 1. Veri gelene kadar bekle (Fetch)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // 2. Gelen cevabı JSON (anlaşılır veri) formatına çevir
    const jsonUserData = await response.json();
    
    // 3. Veriyi işle (Örn: Sadece e-postaları al)
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    console.log(userEmailArray);
};

// Fonksiyonu çalıştır
getAllUserEmails();


// JS26 - Promises / Fetch / Async & Await

// 1. PROMISE YAPISI (Temel Mantık)
// Bir işlem başarılı (resolve) veya başarısız (reject) olabilir.
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Söz tutuldu, veri hazır!");
    } else {
        reject("Eyvah, bir hata oluştu!");
    }
});

// Promise'i kullanma (Then/Catch metodu)
myPromise
    .then(value => {
        return value + " + yeni veri";
    })
    .then(newValue => {
        console.log(newValue);
    })
    .catch(err => {
        console.error(err);
    });


// 2. FETCH API (Gerçek Veri Çekme)
// JSONPlaceholder sitesinden kullanıcı verilerini çekiyoruz.
const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user.name);
        });
    });


// 3. ASYNC & AWAIT (En Modern ve Profesyonel Yöntem)
// Videoda vurgulanan "bekle ve çalıştır" mantığı budur.
const getAllUserEmails = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw Error("Veri çekilemedi!");
        
        const userData = await response.json();
        
        const emails = userData.map(user => user.email);
        console.log("E-postalar:", emails);
    } catch (err) {
        console.error("Hata Yakalandı:", err.message);
    }
}

getAllUserEmails();