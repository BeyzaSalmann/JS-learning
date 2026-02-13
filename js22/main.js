//Event Listeners
//Kullanıcı ile web sitesi arasındaki etkileşimi (tıklama, yazma vb.) sağlar.
//JavaScript'in belirli bir eylemi "dinlemesini" ve o an tepki vermesini sağlar.
//Event Listeners mantığı: Belirli bir hedefi (örneğin siyah bir kutuyu) takibe alıp, onda beklenen bir olay (tıklama gibi) gerçekleştiğinde, önceden belirlenen tepkiyi (renk değişimi gibi) anında yerine getirme işlemidir. 

const view2 = document.getElementById("view2"); //ID'si view2 olan elementi çektik

// Kutuları Oluşturma Fonksiyonu 
//Bu fonksiyon dışarıdan bir ebeveyn (parent) ve sayı (iter) alarak kutu üretir.
const createDiv = (parent, iter) => {
    const newDiv = document.createElement("div");
    //Stil ayarları
    newDiv.textContent = iter;
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.backgroundColor = "black";
    newDiv.style.color = "white";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    newDiv.style.cursor = "pointer"; // Tıklanabilir olduğunu belli eder
    // Oluşturulan kutuyu sayfaya ekleme
    parent.append(newDiv);
};

//  12 tane kutuyu döngüyle oluştur
for (let i = 1; i <= 12; i++) {
    createDiv(view2, i);
}

// Event Listeners 
// Sayfadaki tüm yeni oluşturulan div'leri yakala
const allDivs = view2.querySelectorAll("div");
// Listedeki her bir kutuya tek tek ulaşıyoruz.
allDivs.forEach((div) => { //forEach liste üzerinde döngü kurmayı sağlar
    // Her kutuya bir "tıklama" (click) dinleyicisi ekle
    div.addEventListener("click", (event) => {
        // Tıklanan kutunun rengini mavi yap
        event.target.style.backgroundColor = "blue";//event.target kutuya tıklandığı an js 'in o kutuyu hedef almasını sağlar
        console.log(`Kutu ${event.target.textContent} tıklandı!`);
    });
});



allDivs.forEach((div) => { //her kutuya tek tek uğrar ve o kutuyu div ismiyle temsil ederek içeri girmeni sağlar
    // Her kutuya bir "tıklama" (click) dinleyicisi ekle
    div.addEventListener("click", (event) => { //event aslında bilgi paketidir tıklama yapıldığı an haangi tuşa tıklanıldı,ekranın nersinde tıklandı bunlara bakar
        event.target.style.backgroundColor = "blue";//hangi elemana tıklandığı event target olur
        console.log(`Kutu ${event.target.textContent} tıklandı!`);
    });

    // Fare üzerine geldiğinde (mouseover) çalışacak kısım
    div.addEventListener("mouseover", (event) => {
        // Fare kutunun üzerine gelince rengi kırmızı yap
        event.target.style.backgroundColor = "red";
    });

    // Fare üzerinden çekildiğinde (mouseout) çalışacak kısım
    div.addEventListener("mouseout", (event) => {
        // Fare kutudan ayrılınca rengi tekrar siyah yap
        event.target.style.backgroundColor = "black";
    });
});