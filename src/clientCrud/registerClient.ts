import Entrace from "../io/entrace";
import Client from "../clientModel/client";
import CPF from "../clientModel/cpf";
import Register from "./registerExport";
import RG from "../clientModel/rg";
import Telephone from "../clientModel/telephone";

export default class RegisterClient extends Register {
  private clients: Array<Client>
  private entrace: Entrace
  constructor(clients: Array<Client>) {
    super()
    this.clients = clients
    this.entrace = new Entrace()
  }
  public register(): void {
    console.log(`\nInício do cadastro do cliente`)
    let name = this.entrace.receiveText(`Por favor informe o nome do cliente: `)
    let socialName = this.entrace.receiveText(`Por favor informe o nome social do cliente: `)
    let ddd = this.entrace.receiveText(`Por favor informe o número do ddd: `)
    let numeroTele = this.entrace.receiveText(`Por favor informe o número do telefone: `)
    let telefone = new Telephone(ddd, numeroTele)

    let valueRg = this.entrace.receiveText(`Por favor informe o número do RG: `)
    let dateRg = this.entrace.receiveText(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `)
    let partsDateRg = dateRg.split('/')
    let yearRg = new Number(partsDateRg[2].valueOf()).valueOf()
    let monthRg = new Number(partsDateRg[1].valueOf()).valueOf()
    let dayRg = new Number(partsDateRg[0].valueOf()).valueOf()
    let issueDateRg = new Date(yearRg, monthRg, dayRg)
    let rg = new RG(valueRg, issueDateRg)

    let valueCpf = this.entrace.receiveText(`Por favor informe o número do CPF: `)
    let dateCpf = this.entrace.receiveText(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `)
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
    console.log(`\nCadastro realizado com sucesso\n`)
  }
}
