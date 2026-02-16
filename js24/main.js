// ES Modules (ESM), JavaScript'in modern ve standartlaşmış modül sistemidir.
//Basitçe; devasa bir kod yığını yazmak yerine, projenizi mantıklı, bağımsız ve tekrar kullanılabilir küçük parçalara (dosyalara) ayırmanızı sağlayan bir mimaridir.
//ES Modules iki temel eylem üzerine kuruludur:
// Export (Dışa Aktarma)
//Import (İçe Aktarma)

// MODÜLLER: IMPORT (İÇE AKTARMA) MANTIĞI
// Import Nedir ? : 'export' edilmiş kodları bu dosyaya dahil eder.
// Default Import: 'export default' ile gönderilen yapıyı süslü parantez {} OLMADAN alırız. İstersek ismini değiştirebiliriz 
// Named Import: Normal 'export' ile gönderilenleri mutlaka süslü parantez {} içinde ve orijinal isimleriyle alırız.
// Dosya Yolu: Modüllerde dosya uzantısını (.js) belirtmek zorunludur.


// Dışarıdan gelenleri karşılıyoruz: 
// User (default olduğu için serbest), diğerleri süslü parantez içinde.
import User, { printName, printAge } from './user.js';

const user = new User('Beyza', 22);

console.log(user); // Objenin tamamını görürüz
printName(user);   // Fonksiyonu çalıştırırız
printAge(user);    // Fonksiyonu çalıştırırız