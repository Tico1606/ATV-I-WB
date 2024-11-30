import Client from "../clientModel/client";
import Entrace from "../io/entrace";
import Product from "../productModel/product";
import Consumed from "./consumedExport";

export default class ConsumedProduct extends Consumed {
  private product: Array<Product>
  private clients: Array<Client>
  private entrace: Entrace
  
  constructor(product: Array<Product>, clients: Array<Client>) {
    super()
    this.product = product
    this.clients = clients
    this.entrace = new Entrace()
  }
  
  public consumed(): void {
    console.log(`\nInício do cadastro do produto consumido`)
    let cpf = this.entrace.receiveText(`Por favor, informe o CPF do cliente que consumiu o produto: `)
    let idProduct = this.entrace.receiveNumber(`Por favor, informe o ID do produto consumido: `)
    let quantity = this.entrace.receiveNumber(`Por favor, informe a quantidade consumida: `)

    let clientIndex = this.clients.findIndex(client => client.getCpf.getValue === cpf)
    if (clientIndex !== -1) {
      let productIndex = this.product.findIndex(product => product.getId === idProduct)
      if (productIndex !== -1) {
        const consumedProduct = {
          product: this.product[productIndex],
          quantity: quantity
        }
        this.clients[clientIndex].getProductsConsumed.push(consumedProduct)

        console.log(`\nProduto adicionado com sucesso ao cliente ${this.clients[clientIndex].name}.`)
        console.log(`Quantidade consumida: ${quantity}`)
      } else {
        console.log(`Produto com ID ${idProduct} não encontrado. Não é possível registrar o produto consumido.`)
      }
    } else {
      console.log(`Cliente com CPF ${cpf} não encontrado. Não é possível registrar o produto consumido.`)
    }
  }

  public showConsumedProducts(): void {
    console.log(`\nLista de produtos consumidos por cada cliente:`)
    this.clients.forEach(client => {
      console.log(`\nCliente: ${client.name}`)
      client.getProductsConsumed.forEach((consumedProduct: { product: Product, quantity: number }) => {
        console.log(`Produto: ${consumedProduct.product.getName}, Quantidade: ${consumedProduct.quantity}`)
      })
    })
  }
}
