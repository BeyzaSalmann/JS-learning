//DOM

//DOM (Document Object Module) HTML dökümanları içerisinde bulunan nesnelere kolaylıkla erişim sağlamak ve üzerinde işlemler yapabilmek için tasarlanan bir modeldir. 
//DOM ile HTML dosyamızda bulunan her şeye erişim sağlayabiliriz.
//DOM, statik (sabit) olan HTML'i, JavaScript kullanarak dinamik (hareketli) hale getirmemizi sağlayan bir köprüdür.


// ID ile bir elementi seçmek
const view1 = document.getElementById("view1");//document tüm HTML sayfasını temsil eden ana objedir.Her şey onun içindedir.
//.getElementById("view1") methodu tüm sayfayı tarar 
// ID'si "view1" olan elemanı bulup getirir
console.log(view1); // Konsolda view1 bölümünü görmelisin

// QuerySelector ile seçmek (CSS mantığıyla)
// Sayfadaki elemanları CSS kurallarıyla arar ve karşısına çıkan ilk uygun elemanı yakalayıp getirir.
// ID için başına "#",class için ".",etiket seçerken ise sadece ismini yazarsın "nav"
const view2 = document.querySelector("#view2"); 
console.log(view2);

// Birden fazla aynı sınıfa sahip elementi seçmek
const divs = view1.querySelectorAll("div");
console.log(divs); // view1 içindeki tüm div'leri bir liste (NodeList) olarak verir

// View1'i gizleyelim, View2'yi gösterelim
view1.style.display = "none"; 
view2.style.display = "flex"; 

// View2'nin içindeki kutular için stil verelim
view2.style.flexDirection = "row"; //Kutuları satır boyunca yan yana diz
view2.style.flexWrap = "wrap"; //Kutular ekrana sığmazsa alta geç
view2.style.margin = "10px"; //Kutu etrafına boşluk bırak
const navbar = document.querySelector("nav h1"); //nav etiketinin içindeki h1 başlığını bul
navbar.textContent = "DOM Manipülasyonu"; // Başlığı değiştirir

// Gezinti (Navigation)
console.log(view1.parentElement); // view1'in üstündeki body veya ana div'i gösterir
console.log(view1.children);      // view1'in içindeki çocuk HTML etiketlerini gösterir

// Görünüm ayarlarını tek bir temiz blokta toplayalım
view1.style.display = "none"; 
view2.style.display = "flex";
view2.style.flexWrap = "wrap"; 
view2.style.flexDirection = "row"; 

// Yeni bir Div oluşturma fonksiyonu
const createDiv = (parent, iter) => { //arrow function ile verilen parent ve iter'e(sıra num) bakarak yeni bir Div oluşturulur
    const newDiv = document.createElement("div"); // Etiketi oluştur
    newDiv.textContent = iter; // İçine metin ekle (sayı gelecek) (sıra numaraları)
    
    // Stiller
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.backgroundColor = "black";
    newDiv.style.color = "white";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    
    // Oluşturulan div'i parent'ın (View2) içine ekle
    parent.append(newDiv); 
};

// Döngü ile 12 tane kutu oluşturma
for (let i = 1; i <= 12; i++) {
    createDiv(view2, i);
}

