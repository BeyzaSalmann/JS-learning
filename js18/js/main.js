// Temel yapı ve constructor
// Pizza fabrikamızın temel şablonu
class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize; // Dışarıdan gelen boyut
        this.crust = "original"; // Varsayılan hamur tipi
        this.toppings = []; // Malzeme listesi (başlangıçta boş)
    }

    // Pizzanın hamur tipini öğrenmek istediğinde çalışır
    get pizzaCrust() {
        return this.crust;
    }

    // Pizzanın hamur tipini değiştirmek istediğinde çalışır
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    // Metot
    bake() {
        console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
}

// Yeni bir nesne üretme (Instantiation)
const myPizza = new Pizza("medium");
myPizza.pizzaCrust = "thin"; // 'set' metodu sayesinde hamuru değiştirdik
myPizza.bake(); // Çıktı: Baking a medium thin crust pizza.


// Inheritance -Miras 
// Pizza sınıfındaki her şeyi miras alan yeni bir sınıf: SpecialtyPizza
class SpecialtyPizza extends Pizza {
    constructor(size) {
        super(size); // 'super' üst sınıfın (Pizza) constructor'ını çalıştırır
        this.type = "The Works";
    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecialty = new SpecialtyPizza("large");
mySpecialty.slice(); // Çıktı: Our The Works large pizza has 8 slices.


// Private -Gizli Alanlar 
// Veriyi korumak için başına '#' koyarak gizliyoruz.
class PersonalPizza {
    #sauce = "traditional"; // Tamamen gizli özellik (Dışarıdan erişilemez)
    #size;

    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }

    hereIsYourPizza() {
        // Gizli verilere sadece sınıfın içindeki bu fonksiyon ulaşabilir
        console.log(`Here is your ${this.#size} pizza with ${this.#sauce} sauce.`);
    }
}

const myPersonal = new PersonalPizza("small");
myPersonal.hereIsYourPizza();
// console.log(myPersonal.#sauce); // Bu satır HATA verir çünkü #sauce gizlidir.


// Factory Functions
// Class kullanmadan nesne üretmenin başka bir yolu
function pizzaFactory(pizzaSize) {
    const crust = "original"; // Fonksiyon içinde hapsolmuş (gizli) değişken
    return {
        bake: () => console.log(`Baking a ${pizzaSize} ${crust} crust pizza.`)
    };
}

const factoryPizza = pizzaFactory("small");
factoryPizza.bake(); // Çıktı: Baking a small original crust pizza.