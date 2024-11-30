import Entrace from "../io/entrace";
import Client from "../clientModel/client";
import CPF from "../clientModel/cpf";
import Update from "./updateExport";
import Telephone from "../clientModel/telephone";
import RG from "../clientModel/rg";


export default class UpdateClient extends Update {
  private clients: Array<Client>
  private entrace: Entrace
  constructor(clients: Array<Client>) {
    super()
    this.clients = clients
    this.entrace = new Entrace()
  }
  public update(): void {
    console.log(`\nInício da edição do cliente`)
    let cpf = this.entrace.receiveText(`Por favor, informe o CPF do cliente a ser atualizado: `)
    let clienteIndex = this.clients.findIndex(client => client.getCpf.getValue === cpf)

    if (clienteIndex !== -1) {
      this.clients.splice(clienteIndex, 1)

      console.log(`\nInício da atualizacao do cadastro do cliente`)
      let name = this.entrace.receiveText(`Por favor informe o nome do cliente: `)
      let socialName = this.entrace.receiveText(`Por favor informe o nome social do cliente: `)
      let ddd = this.entrace.receiveText(`Por favor informe o número do ddd: `)
      let numeroTele = this.entrace.receiveText(`Por favor informe o número do telefone: `)
      let telefone = new Telephone(ddd, numeroTele)

      let valueRg = this.entrace.receiveText(`Por favor informe o número do rg: `)
      let dateRg = this.entrace.receiveText(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `)
      let partsDateRg = dateRg.split('/')
      let yearRg = new Number(partsDateRg[2].valueOf()).valueOf()
      let monthRg = new Number(partsDateRg[1].valueOf()).valueOf()
      let dayRg = new Number(partsDateRg[0].valueOf()).valueOf()
      let issueDateRg = new Date(yearRg, monthRg, dayRg)
      let rg = new RG(valueRg, issueDateRg)

      let valueCpf = this.entrace.receiveText(`Por favor informe o número do cpf: `)
      let dateCpf = this.entrace.receiveText(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `)
      let partsDateCpf = dateCpf.split('/')
      let year = new Number(partsDateCpf[2].valueOf()).valueOf()
      let month = new Number(partsDateCpf[1].valueOf()).valueOf()
      let day = new Number(partsDateCpf[0].valueOf()).valueOf()
      let issueDate = new Date(year, month, day)
      let cpf = new CPF(valueCpf, issueDate)

      let gender = this.entrace.receiveText(`Insira "M" para masculino e "F" para feminino: `)
      if (gender.toLocaleLowerCase() === 'm') {
        gender = 'Masculino'
      } else if (gender.toLocaleLowerCase() === 'f') {
        gender = 'Feminino'
      } else {
        throw new Error(`Resposta inválida.`)
      }

      let client = new Client(name, socialName, cpf, rg, telefone, gender)
      this.clients.push(client)
      console.log(`\nAtualização realizada com sucesso\n`)
    } else {
      console.log(`\nCliente não encontrado. Nenhuma atualização realizada.\n`)
    }
  }
}
