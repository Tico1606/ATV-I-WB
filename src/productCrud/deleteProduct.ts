import Entrace from "../io/entrace";
import Product from "../productModel/product";
import Delete from "./deleteExport";

export default class DeleteProduct extends Delete {
  private product: Array<Product>
  private entrace: Entrace
  constructor(product: Array<Product>) {
    super()
    this.product = product
    this.entrace = new Entrace()
  }

  public delete(): void {
    console.log(`\nInício da exclusão do produto`)
    let id = this.entrace.receiveNumber(`Por favor, informe o id do produto a ser excluído: `)
    let productIndex = this.product.findIndex(product => product.getId === id)

    if (productIndex !== -1) {
      this.product.splice(productIndex, 1)
      console.log(`\nProduto excluído com sucesso.\n`)
    } else {
      console.log(`\nProduto não encontrado. Nenhuma exclusão realizada.\n`)
    }
  }
}
