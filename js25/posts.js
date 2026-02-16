// ES Modules (ESM), JavaScript'in modern ve standartlaşmış modül sistemidir.
//Basitçe; devasa bir kod yığını yazmak yerine, projenizi mantıklı, bağımsız ve tekrar kullanılabilir küçük parçalara (dosyalara) ayırmanızı sağlayan bir mimaridir.
//ES Modules iki temel eylem üzerine kuruludur:
// Export (Dışa Aktarma)
//Import (İçe Aktarma)


// MODÜLLER: EXPORT (DIŞA AKTARMA) MANTIĞI
// Export Nedir ?: Bir dosyadaki değişken, fonksiyon veya sınıfı diğer dosyaların kullanımına açar.
// Export Default: Bir dosyadan sadece bir tane "varsayılan" değer gönderilebilir. İçe aktarılırken süslü parantez {} kullanılmaz.
// Named Export (İsimlendirilmiş): Birden fazla gönderilebilir. İçe aktarılırken mutlaka aynı isimle ve {} içinde çağrılmalıdır.


// export default: Bu dosyadan çıkan ana yapı budur. (Bir tane olabilir)
export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Named Export: Yan özellikler/fonksiyonlar. (İstediğin kadar olabilir)
export function printName(user) {
    console.log(`Kullanıcının adı: ${user.name}`);
}

export function printAge(user) {
    console.log(`Kullanıcının yaşı: ${user.age}`);
}