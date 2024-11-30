import Product from "../productModel/product";
import Client from "../clientModel/client";
import FilterProductsConsumed from "./filterProductsExport";

export default class GetFilterProductsConsumed extends FilterProductsConsumed{
  private products: Array<Product>
  private clients: Array<Client>

  constructor(products: Array<Product>, clients: Array<Client>) {
    super()
    this.products = products
    this.clients = clients
  }

  public filterProductsConsumed(): void {
    const consumptionMap: { [key: number]: number } = {}

    this.clients.forEach(client => {
      client.getProductsConsumed.forEach(consumedProduct => {
        const productId = consumedProduct.product.getId
        if (!consumptionMap[productId]) {
          consumptionMap[productId] = 0
        }
        consumptionMap[productId] += consumedProduct.quantity
      })
    })

    const sortedProducts = this.products.sort((a, b) => {
      return (consumptionMap[b.getId] || 0) - (consumptionMap[a.getId] || 0)
    })

    console.log(`\nLista de produtos ordenados por consumo:`)
    console.log(`--------------------------------------`)
    sortedProducts.forEach(product => {
      const totalConsumed = consumptionMap[product.getId] || 0
      console.log(`Nome: ${product.getName}, Total consumido: ${totalConsumed}`)
    })
    console.log(`--------------------------------------`)
  }
}
