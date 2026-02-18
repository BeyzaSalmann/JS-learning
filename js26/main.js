// ASYNC JS (PROMISES, FETCH, ASYNC & AWAIT)
// PROMISE :JavaScript'te bir işlemin (genelde veri çekme) sonucunun "gelecekte" tamamlanacağına dair verilen bir sözdür.JavaScript'e "Bu işi yap, bitince bana haber ver" diyoruz.
    //Pending (Beklemede): İşlem sürüyor.
    //Fulfilled (Tamamlandı): Veri başarıyla geldi.
    //Rejected (Reddedildi): Bir hata oluştu.

// FETCH API: Bir URL üzerinden (sunucudan) veri çekmemizi sağlayan modern yöntemdir.posts.js dosyasındaki verileri manuel yazmak yerine, internetteki bir adresten (URL) gerçek verileri çekiyoruz.

// ASYNC & AWAIT:Asenkron kodları, sanki satır satır sırayla (senkron) çalışıyormuş gibi daha okunabilir yazmamızı sağlayan modern sözdizimidir (Syntactic Sugar).İşlemler çok hızlı olduğu için JavaScript'e "Dur ve veri gelene kadar bekle" talimatını await ile veriyoruz.

//Fonksiyonun başına eklenen async anahtar kelimesi, JavaScript'e bu fonksiyonun içinde "beklememiz gereken" (asenkron) işlemler olacağını bildirir.
const getAllUsersEmails = async () =>  

    {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
    
    const jsonUserData = await response.json();// Gelen cevabı JSON (anlaşılır veri) formatına çevir
    
    const userEmailArray = jsonUserData.map(user => {  //Gelen tüm kullanıcı verilerini tarar ve her birinden sadece email bilgisini çekip yeni bir dizi (userEmailArray) oluşturur.
        return user.email;
    });

    console.log(userEmailArray);
};

// Fonksiyonu çalıştır
getAllUsersEmails();




// PROMISE YAPISI 
//new Promise ile bir "söz" oluşturulur.
//İşlem başarılıysa resolve, başarısızsa reject fonksiyonu çağrılır.
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Söz tutuldu, veri hazır!");
    } else {
        reject("Eyvah, bir hata oluştu!");
    }
});

//Bir işlem bittiğinde değer bir sonraki .then bloğuna aktarılır.
//Zincirdeki herhangi bir noktada hata oluşursa doğrudan .catch bloğuna zıplanır.
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


// FETCH API 
//fetch() fonksiyonu doğrudan bir Promise döndürür.
// JSONPlaceholder sitesinden kullanıcı verilerini çekiyoruz.
//Sunucudan gelen ilk cevap hamdır; response.json() ile bu ham veri işlenebilir bir nesneye dönüştürülür.
//İkinci .then bloğunda, veri artık elimizdedir ve forEach gibi metotlarla ekrana yazdırılabilir.
const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user.name);
        });
    });


// ASYNC & AWAIT (En Modern ve Profesyonel Yöntem)
//Syntactic Sugar: .then().then() kalabalığını ortadan kaldırır; kodu sanki düz bir satırmış gibi yukarıdan aşağıya okumamızı sağlar.
//await Duraklatması: JavaScript'e "Sunucudan veri (fetch) gelene kadar bu satırda dur ve bekle" emrini verir.
//Hata Yönetimi (try...catch): Modern yöntemde .catch() yerine try/catch blokları kullanılır.
//try: Kodun normal çalışmasını dener.
//catch: Eğer internet koparsa veya veri çekilemezse devreye girip hatayı yakalar.
//Hata Kontrolü: if (!response.ok) throw Error(...) satırı ile sunucudan gelen 404 gibi hataları manuel olarak yakalayıp yönetirsin.

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
