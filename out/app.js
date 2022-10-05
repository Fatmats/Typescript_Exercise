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
_productService.saveProduct(p);
result = _productService.getById(2);
_productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);
//# sourceMappingURL=app.js.map