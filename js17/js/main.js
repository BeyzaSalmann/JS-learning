// Objects
// key-value pairs in curly braces
const myObj = { name: "Dave" };// muObj adında değiştirilmez bir referans oluşturur.
//Süslü parantezler JS'de bir nesne tanımlar
//Nesneler key-value şeklinde çift halinde bulunur.
//name key,Dave ise value 

const anotherObj = { //Buradan itibaren key-value çiftleri oluşmaya başlandı
    alive: true, //Nesnenin aktif olduğu bilgisi
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],//array tanımlanabilir
    beverage: { //iç içe nesne
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function () {
        return `Time for ${this.beverage.morning}`;// Fonksiyon her ne kadar nesne (anotherObj) içinde tanımlanmış olsa da, 
        // JavaScript fonksiyonun içindeki kodları kendi başına bir 'kapsam' olarak görür.
        // Fonksiyona "kendi sınırlarından dışarı çık ve bu nesnenin diğer özelliklerine bak" 
        // demek için 'this' anahtar kelimesini kullanmak zorundayız.
        //this olmadan fonksiyon, nesnenin içindeki beverage kısmını göremez, onu dışarıda (globalde) aramaya çalışır.
    }
};

console.log(anotherObj.action());

//Nesne Mirası (Inheritance) ve Türetme
const vehicle = { //sabit bir araç nesnesi tanımlandı
wheels: 4, // key-value çifti tanımlandı  
//Key veriye ulaşmak için kullandığın isimdir. Value o ismin karşılığı olan içeriktir.
engine: function () { //key-value çiftimiz 
return "Vroom!";
}
};

const truck = Object.create(vehicle); // Miras (Inheritance) başlangıcı
truck.doors = 2;// truck nesnesine özel yeni bir özellik eklendi

const car = Object.create(vehicle);// car nesnesi vehicle'dan türetildi
car.doors = 4;// car nesnesine 4 kapı özelliği eklendi
car.engine = function () {// Miras alınan metodun üzerine yazma
    return "Whoosh!";//Overwriting:Artık car nesnesi için motor sesi farklı
};

const band = { // Bir müzik grubu nesnesi
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums; // "delete" komutu özelliği nesneden siler
console.log(band.hasOwnProperty("drums")); // hasOwnProperty: "drums" var mı kontrolü //false

console.log(Object.keys(band));   // Nesnenin tüm anahtarlarını (key) listeler

for (let job in band) { //Nesnenin içindeki her bir anahtarı tek tek job değişkenine atar ve liste bitene kadar döner.
    console.log(`On ${job}, it's ${band[job]}!`);
}
//Destructuring (Nesne Parçalama / Yeniden Yapılandırma)
// Nesne içindeki 'id' gibi genel isimleri çekip onlara 'userId' gibi eşsiz takma isimler vermemizi sağlar. 
// Bu sayede büyük projelerde aynı isimdeki değişkenlerin birbiriyle çakışmasını önler ve kodun hangi veriye ait olduğunu netleştiririz.
// Kısacası; karmaşık bir paketin içinden sadece ihtiyacımız olanı alıp, projemize uygun şekilde yeniden adlandırarak kod kalabalığını gideririz.
const { guitar: myGuitar, bass: myBass } = band; // Özel isimle parçalama
const { vocals, bass } = band; // Aynı isimle parçalama
function sings({ vocals }) { // Parametre içinde parçalama
    return `${vocals} sings!`;
}
