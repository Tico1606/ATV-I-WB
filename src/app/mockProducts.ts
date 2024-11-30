import Register from "../productCrud/registerExport"; 
import Product from "../productModel/product";

export default class RegisterProductMock extends Register {
  private products: Array<Product>;

  constructor(products: Array<Product>) {
    super();
    this.products = products;
  }

  public register(): void {
    for (let i = 1; i <= 20; i++) {
      const product = new Product(
        `Produto ${i}`, 
        (10 + i) * 2.5 
      );
      this.products.push(product);
    }
  }
}
