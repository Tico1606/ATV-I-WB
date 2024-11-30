import Client from "../clientModel/client"
import Entrace from "../io/entrace"
import Product from "../productModel/product"
import FilterProductbyGender from "./filterProductsbyGenderExport"


export default class GetFilterProductsConsumed extends FilterProductbyGender{
  private clients: Array<Client>
  private entrace: Entrace

  constructor(clients: Array<Client>) {
    super()
    this.clients = clients
    this.entrace = new Entrace()
  }

  public filterProductbyGender(): void {
    console.log(`--------------------------------------`)
    console.log(`\nLista de produtos mais consumidos por gênero:`)
    console.log(`--------------------------------------`)
    
    const consumptionMap: { [key: number]: number } = {}
    const masculineProducts: { [key: number]: Product } = {}

    let gender = this.entrace.receiveText(`Insira "M" para masculino e "F" para feminino: `)
    
    if (gender.toLocaleLowerCase() === 'm') {
      let clientsM = this.clients.filter(clients => clients.getGender === 'Masculino')
      clientsM.forEach(client => {
        client.getProductsConsumed.forEach(consumedProduct => {
          const productId = consumedProduct.product.getId
          
          if (!consumptionMap[productId]) {
            consumptionMap[productId] = 0
          }
          consumptionMap[productId] += consumedProduct.quantity

          masculineProducts[productId] = consumedProduct.product;
        })
      })
    
      const sortedMasculineProducts = Object.values(masculineProducts).sort((a, b) => {
      return (consumptionMap[b.getId] || 0) - (consumptionMap[a.getId] || 0)
    })

    console.log(`\nLista de produtos ordenados por consumo:`)
    console.log(`--------------------------------------`)
    sortedMasculineProducts.forEach(product => {
      const totalConsumed = consumptionMap[product.getId] || 0
      console.log(`Nome: ${product.getName}, Total consumido: ${totalConsumed}`)
    })
    console.log(`--------------------------------------`)
    }
  }
}
