// Kullanacağimiz objenin niteliklerini ayarlıyoruz. Böylece istenmeyen datalara engel oluyoruz.

export class Product {
    // id: number; 
    // name : string;  //? Böyle uzun yoldan tanımlama

    constructor(public id?: number, public name?: string, public catagory?: string, public price?: number) {

    }

    // ? parametrelerde bulunan soru işareti isteğe bağlı anlamına geliyor,

}

//? let p = new Product()

//? eger public _id yerine private _id yasaydık

//?  p.id şeklinde _id nitelige ulaşamazdık