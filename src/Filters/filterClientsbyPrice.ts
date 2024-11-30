import Client from "../clientModel/client"
import Entrace from "../io/entrace"
import FilterClientsbyPrice from "./filterClientsbyPriceExport"

export default class GetFilterbyPrice extends FilterClientsbyPrice {
  private clients: Array<Client>
  private entrace: Entrace
  constructor(clients: Array<Client>) {
    super()
    this.clients = clients
    this.entrace = new Entrace()
  }
  public filterClientsbyPrice(): void {
    console.log(`--------------------------------------`)
    console.log(`\nLista dos 5 clientes que mais consumiram produtos em valor:`)
    console.log(`--------------------------------------`)

    const consumptionDetails: Array<{ clientName: string, productName: string, price: number }> = []

    this.clients.forEach(client => {
      client.getProductsConsumed.forEach(consumedProduct => {
        const clientName = client.name
        const productName = consumedProduct.product.getName
        const price = consumedProduct.product.getPrice

        consumptionDetails.push({ clientName, productName, price })
      })
    })

    const topClients = consumptionDetails
      .sort((a, b) => b.price - a.price)
      .slice(0, 5)

      console.log(`\nDetalhes de consumo dos 5 clientes que mais consumiram em valor:`)
      topClients.forEach(({ clientName, productName, price }) => {
        console.log(`Cliente: ${clientName}, Produto: ${productName}, Valor: ${price}`)
      })
      console.log(`--------------------------------------`)  
  }
}
