import Entrace from "../io/entrace"
import Product from "../productModel/product"
import Register from "./registerExport"

export default class RegisterProduct extends Register {
  private product: Array<Product>
  private entrace: Entrace
  constructor(product: Array<Product>) {
    super()
    this.product = product
    this.entrace = new Entrace()
  }
  public register(): void {
    console.log(`\nInício do cadastro do produto`)
    let name = this.entrace.receiveText(`Por favor informe o nome do produto: `)
    let price = this.entrace.receiveNumber(`Por favor informe o preço do produto: `)
    let product = new Product(name, price)
    this.product.push(product)
    console.log(`\nCadastro realizado com sucesso\n`)
  }
}
