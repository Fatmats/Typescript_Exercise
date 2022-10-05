import { Product } from "./product";

//?  interface imzemiz diyeibliriz. Burada oluşturulacak yapının nasil bir düzende olması gerektiğni ayarlıyoruz böylede olabilecek yanlişlari önlüyoruz.

export interface IProductService {
    getById(id: number): Product;
    getProducts(): Array<Product>;
    saveProduct(product: Product): void;  //? geriye return etmeyecek
    deleteProduct(product: Product): void;
}