import { Product } from "./product";

// Kendimize kullanmak için data yapıyoruz

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung S5", "Telefon", 10000),
            new Product(2, "Samsung S4", "Tablet", 20000),
            new Product(3, "Samsung S9", "Bilgisayar", 30000)

        );
    }
    
    getProducs(): Product[] {
        return this.products;
    }
}
