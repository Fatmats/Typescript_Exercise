import { Product } from './product';
import { ProductService } from './productService';

let _productService = new ProductService();

let result;


let p = new Product();

p.name = "Iphone";
p.catagory = "telefon";
p.price = 5000;

_productService.saveProduct(p) // data kaydetme

result = _productService.getById(2); // ıd si verilen bit datayi getirme

_productService.deleteProduct(result); // getirien datayi silme 

result= _productService.getProducts(); // tüm dataları getirme

console.log(result);
