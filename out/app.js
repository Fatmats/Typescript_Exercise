"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var productService_1 = require("./productService");
var _productService = new productService_1.ProductService();
var result;
var p = new product_1.Product();
p.name = "Iphone";
p.catagory = "telefon";
p.price = 5000;
_productService.saveProduct(p); // data kaydetme
result = _productService.getById(2); // ıd si verilen bit datayi getirme
_productService.deleteProduct(result); // getirien datayi silme 
result = _productService.getProducts(); // tüm dataları getirme
console.log(result);
//# sourceMappingURL=app.js.map