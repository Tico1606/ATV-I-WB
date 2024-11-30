import Product from "../productModel/product"
import GetList from "./getListExport"


export default class GetListProduct extends GetList {
  private product: Array<Product>
  constructor(product: Array<Product>) {
    super()
    this.product = product
  }
  public getList(): void {
    console.log(`\nLista de todos os produtos:`)
    console.log(`--------------------------------------`)
    this.product.forEach(product => {
      console.log(`Nome: ${product.getName}`)
      console.log(`Preço: ${product.getPrice.toFixed(2)}`)
      console.log(`ID: ${product.getId}`)
      console.log(`--------------------------------------`)
    })
  }
}
