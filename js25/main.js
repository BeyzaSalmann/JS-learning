// HIGHER ORDER FUNCTIONS (YÜKSEK MERTEBEDEN FONKSİYONLAR)
//JavaScript'te bir fonksiyon eğer;
// Parametre olarak bir veya birden fazla fonksiyon alıyorsa,
//VEYA sonuç olarak yeni bir fonksiyon döndürüyorsa, bu fonksiyona "Higher Order Function" (HOF) denir.

//NEDEN KULLANIRIZ? 
//Kod Tekrarını Azaltmak: Aynı döngüleri tekrar tekrar yazmak yerine işlemi soyutlarız.
//Esneklik: Bir işlemin ne zaman ve nasıl çalışacağını dışarıdan belirleriz.
//Okunabilirlik: Veri işleme süreçlerini (filtreleme, dönüştürme) daha temiz gösteririz.
 
//Temel Metotlar:
     //forEach: Dizideki her eleman için bir işlem yapar.
     //filter: Belirli bir kurala uyan elemanları seçip yeni dizi oluşturur.
     //map: Dizideki elemanları değiştirerek yeni bir dizi üretir.
     //reduce: Dizideki tüm değerleri işleyip tek bir sonuca indirger.


import { posts } from "./posts.js"; //posts.js dosyasında hazırladığımız o büyük veri paketini (JSON dizisini) bu dosyada kullanmak üzere içeri çağırıyoruz.

posts.forEach((post) => { // .forEach(): Dizideki her bir eleman (post) için bu fonksiyonu bir kez çalıştırır.Konsola tüm postları tek tek yazdırır.
    console.log(post);
});
console.clear();


const filteredPosts = posts.filter((post) => { // .filter():Sadece senin verdiğin kurala (userId === 1) uyanları seçer ve yeni bir diziye koyar. Diğer kullanıcıların postlarını eler, sadece 1 numaralı kullanıcının postlarını tutar.
    return post.userId === 1; 
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => { //.map():Elindeki elemanları alıp onları başka bir şeye dönüştürür.Filtrelenmiş postların içindeki id değerlerini alır ve her birini 10 ile çarparak yeni bir sayı dizisi oluşturur.
    return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => { //.reduce(): Dizideki tüm sayıları alır ve tek bir sonuç elde edene kadar birbiriyle işler (toplar). 10 ile çarptığımız tüm id'lerin toplamını verir.
});
console.log(reducedPostsValue);