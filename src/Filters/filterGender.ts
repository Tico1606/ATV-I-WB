import Client from "../clientModel/client"
import Entrace from "../io/entrace"
import FilterGender from "./filterGenderExport"


export default class GetFilterGender extends FilterGender {
  private clients: Array<Client>
  private entrace: Entrace
  constructor(clients: Array<Client>) {
    super()
    this.clients = clients
    this.entrace = new Entrace()
  }
  public filterGender(): void {
    console.log(`\nLista de todos os clientes por gênero:`)
    console.log(`--------------------------------------`)
    let gender = this.entrace.receiveText(`Insira "M" para masculino e "F" para feminino: `)
    console.log(`--------------------------------------`)
    if (gender.toLocaleLowerCase() === 'm') {
      let clientsM = this.clients.filter(clients => clients.getGender === 'Masculino')
      clientsM.forEach(client => {
        console.log(`Nome: ${client.socialName}`)
        console.log(`CPF: ${client.getCpf.getValue}`)
        console.log(`RG: ${client.getRgs.getValue}`)
        console.log(`Telefone: (${client.getTelephone.getDdd}) ${client.getTelephone.getNumber}`)
        console.log(`Gênero: ${client.getGender}`)
        console.log(`Produtos consumidos:`)
        client.getProductsConsumed.forEach(productsConsumed => {
          console.log(`- Foi consumido ${productsConsumed.quantity.toFixed(0)} ${productsConsumed.product.getName}`)
        })
      })
    } else if (gender.toLocaleLowerCase() === 'f') {
      let clientsM = this.clients.filter(clients => clients.getGender === 'Feminino')
      clientsM.forEach(client => {
        console.log(`Nome: ${client.socialName}`)
        console.log(`CPF: ${client.getCpf.getValue}`)
        console.log(`RG: ${client.getRgs.getValue}`)
        console.log(`Telefone: (${client.getTelephone.getDdd}) ${client.getTelephone.getNumber}`)
        console.log(`Gênero: ${client.getGender}`)
        console.log(`Produtos consumidos:`)
        client.getProductsConsumed.forEach(productsConsumed => {
          console.log(`- Foi consumido ${productsConsumed.quantity.toFixed(0)} ${productsConsumed.product.getName}`)
        })
      })
    }
  }
}
