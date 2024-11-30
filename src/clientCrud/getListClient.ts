import Client from "../clientModel/client";
import GetList from "./getListExport";

export default class GetListClients extends GetList {
  private clients: Array<Client>
  constructor(clients: Array<Client>) {
    super()
    this.clients = clients
  }
  public getList(): void {
    console.log(`\nLista de todos os clientes:`)
    console.log(`--------------------------------------`)
    console.log(this.clients)
    this.clients.forEach(client => {
      console.log(`Nome: ${client.socialName}`)
      console.log(`CPF: ${client.getCpf.getValue}`)
      console.log(`RG: ${client.getRgs.getValue}`)
      console.log(`Telefone: (${client.getTelephone.getDdd}) ${client.getTelephone.getNumber}`)
      console.log(`Gênero: ${client.getGender}`)
      console.log(`Produtos consumidos:`)
      console.log(`--------------------------------------`)
      client.getProductsConsumed.forEach(productsConsumed => {
        console.log(`- Foi consumido ${productsConsumed.quantity.toFixed(0)} ${productsConsumed.product.getName}`)
        console.log(`--------------------------------------`)
      })
    })

    console.log(`\n`)
  }
}
