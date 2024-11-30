import Entrace from "../io/entrace"
import Product from "../productModel/product"
import Update from "./updateExport"



export default class UpdateProduct extends Update {
  private product: Array<Product>
  private entrace: Entrace
  constructor(product: Array<Product>) {
    super()
    this.product = product
    this.entrace = new Entrace()
  }
  public update(): void {
    console.log(`\nInício da edição do produto`)
    let id = this.entrace.receiveNumber(`Por favor, informe o id do produto a ser atualizado: `)
    let productIndex = this.product.findIndex(product => product.getId === id)

    if (productIndex !== -1) {
      this.product.splice(productIndex, 1)

      console.log(`\nInício da atualizacao do cadastro do produto`)
      let name = this.entrace.receiveText(`Por favor informe o nome do produto: `)
      let price = this.entrace.receiveNumber(`Por favor informe o preço do produto: `)
      let product = new Product(name, price)
      this.product.push(product)
      console.log(`\Atualização realizada com sucesso\n`)

    } else {
      console.log(`\Produto não encontrado. Nenhuma atualização realizada.\n`)
    }
  }
}
