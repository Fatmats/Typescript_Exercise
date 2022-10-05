"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, "Samsung S5", "Telefon", 10000), new product_1.Product(2, "Samsung S4", "Tablet", 20000), new product_1.Product(3, "Samsung S9", "Bilgisayar", 30000));
    }
    SimpleDataSource.prototype.getProducs = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
//# sourceMappingURL=simpleDatasource.js.map