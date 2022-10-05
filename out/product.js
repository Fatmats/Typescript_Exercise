"use strict";
// Kullanacağimiz objenin niteliklerini ayarlıyoruz. Böylece istenmeyen datalara engel oluyoruz.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    // id: number; 
    // name : string;  //? Böyle uzun yoldan tanımlama
    function Product(id, name, catagory, price) {
        this.id = id;
        this.name = name;
        this.catagory = catagory;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
//? let p = new Product()
//? eger public _id yerine private _id yasaydık
//?  p.id şeklinde _id nitelige ulaşamazdık
//# sourceMappingURL=product.js.map