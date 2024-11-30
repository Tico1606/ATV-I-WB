import Entrace from "../io/entrace";
import Client from "../clientModel/client";
import Delete from "./deleteExport";

export default class DeleteCliente extends Delete {
  private clients: Array<Client>
  private entrace: Entrace
  constructor(clients: Array<Client>) {
    super()
    this.clients = clients
    this.entrace = new Entrace()
  }
  public delete(): void {
    console.log(`\nInício da exclusão do cliente`)
    let cpf = this.entrace.receiveText(`Por favor, informe o CPF do cliente a ser excluído: `)
    let clientIndex = this.clients.findIndex(client => client.getCpf.getValue === cpf)

    if (clientIndex !== -1) {
      this.clients.splice(clientIndex, 1)
      console.log(`\nCliente excluído com sucesso.\n`)
    } else {
      console.log(`\nCliente não encontrado. Nenhuma exclusão realizada.\n`)
    }
  }
}
