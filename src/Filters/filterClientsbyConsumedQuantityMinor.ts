import Client from "../clientModel/client"
import FilterClientsbyConsumedQuantityMinor from "./filterClientsbyConsumedQuantityMinorExport"



export default class FilterClientsbyConsumeQuantityMinor extends FilterClientsbyConsumedQuantityMinor{
  private clients: Array<Client>

  constructor(clients: Array<Client>) {
    super()
    this.clients = clients
  }

  public filterClientsbyConsumedQuantityMinor(): void {
    console.log(`--------------------------------------`)
    console.log(`\nLista dos 10 clientes que menos consumiram produtos em quantidade:`)
    console.log(`--------------------------------------`)

    const consumptionDetails: Array<{ clientName: string, productName: string, quantity: number }> = []

    this.clients.forEach(client => {
      client.getProductsConsumed.forEach(consumedProduct => {
        const clientName = client.name
        const productName = consumedProduct.product.getName
        const quantity = consumedProduct.quantity

        consumptionDetails.push({ clientName, productName, quantity })
      })
    })

    const topClients = consumptionDetails
      .sort((a, b) => a.quantity - b.quantity)
      .slice(0, 10)


    console.log(`\nDetalhes de consumo dos 10 clientes que mais consumiram:`)
    topClients.forEach(({ clientName, productName, quantity }) => {
      console.log(`Cliente: ${clientName}, Produto: ${productName}, Quantidade: ${quantity}`)
    })
    console.log(`--------------------------------------`)
  }
}
