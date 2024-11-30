import Entrace from "../io/entrace";
import Enterprise from "../clientModel/enterprise"
import RegisterClient from "../clientCrud/registerClient";
import GetListClients from "../clientCrud/getListClient";
import DeleteClient from "../clientCrud/deleteClient";
import UpdateClient from "../clientCrud/updateClient";
import RegisterProduct from "../productCrud/registerProduct";
import GetListProduct from "../productCrud/getListProduct";
import DeleteProduct from "../productCrud/deleteProduct";
import UpdateProduct from "../productCrud/updateProduct";
import ConsumedProduct from "../consumedProducts/consumedProduct";
import GetFilterGender from "../Filters/filterGender";
import FilterProductsConsumed from "../Filters/filterProductsConsumed";
import FilterProductbyGender from "../Filters/filterProductsbyGender";
import GetFilterProductbyGender from "../Filters/filterClientsbyConsumedQuantity";
import FilterClientsbyConsumeQuantityMinor from "../Filters/filterClientsbyConsumedQuantityMinor";
import GetFilterbyPrice from "../Filters/filterClientsbyPrice";
import RegisterClientMock from "./mockClients";
import RegisterProductMock from "./mockProducts";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let enterprise = new Enterprise()
let execute = true

let mockClients = new RegisterClientMock(enterprise.getClients)
let mockProducts = new RegisterProductMock(enterprise.getProducts)
mockClients.register()
mockProducts.register()

while (execute) {
  console.log(`--------------------------------------`)
  console.log(`Opções:`)
  console.log(`1 - Opções de cliente`)
  console.log(`2 - Opções de produtos`)
  console.log(`3 - Opções de listagens`)
  console.log(`0 - Sair`)

  let entrace = new Entrace()
  let option = entrace.receiveNumber(`Por favor, escolha uma opção: `)

  switch (option) {
    case 1:
      console.log(`--------------------------------------`)
      console.log(`1 - Cadastrar cliente`)
      console.log(`2 - Listar todos os clientes`)
      console.log(`3 - Atualizar cliente`)
      console.log(`4 - Deletar cliente`)
      console.log(`0 - Voltar`)
      let optionClient = entrace.receiveNumber(`Por favor, escolha uma opção: `)

      switch (optionClient) {
        case 1:
          let registerClient = new RegisterClient(enterprise.getClients)
          registerClient.register()
          continue
        case 2:
          let getClient = new GetListClients(enterprise.getClients)
          getClient.getList()
          continue
        case 3:
          let updateClient = new UpdateClient(enterprise.getClients)
          updateClient.update()
          continue
        case 4:
          let deleteClient = new DeleteClient(enterprise.getClients)
          deleteClient.delete()
          continue
        case 0:
          continue
      }

    case 2: {
      console.log(`--------------------------------------`)
      console.log(`1 - Registrar produto`)
      console.log(`2 - Listar todos os produtos`)
      console.log(`3 - Atualizar produto`)
      console.log(`4 - Deletar produto`)
      console.log(`5 - Registrar produto consumido`)
      console.log(`0 - Voltar`)
      let optionProduct = entrace.receiveNumber(`Por favor, escolha uma opção: `)
      switch (optionProduct) {
        case 1:
          let registerProduct = new RegisterProduct(enterprise.getProducts)
          registerProduct.register()
          continue
        case 2:
          let getProduct = new GetListProduct(enterprise.getProducts)
          getProduct.getList()
          continue
        case 3:
          let updateProduct = new UpdateProduct(enterprise.getProducts)
          updateProduct.update()
          continue
        case 4:
          let deleteProduct = new DeleteProduct(enterprise.getProducts)
          deleteProduct.delete()
          continue
        case 5:
          let consumedProduct = new ConsumedProduct(enterprise.getProducts, enterprise.getClients)
          consumedProduct.consumed()
          continue
        case 0:
          continue
      }
    }

    case 3: {
      console.log(`--------------------------------------`)
      console.log(`1 - Listagem de clientes por gênero`)
      console.log(`2 - Listagem de clientes por quantidade consumida`)
      console.log(`3 - Listagem de produtos mais consumidos por gênero`)
      console.log(`4 - Listagem dos 10 clientes que mais consumiram produtos`)
      console.log(`5 - Listagem dos 10 clientes que menos consumiram produtos`)
      console.log(`6 - Listagem dos 5 clientes que mais consumiram produtos`)
      console.log(`0 - Voltar`)
      let optionGet = entrace.receiveNumber(`Por favor, escolha uma opção: `)
      switch (optionGet) {
        case 1:
          let filterGender = new GetFilterGender(enterprise.getClients)
          filterGender.filterGender()
          continue
        case 2:
          let filterProductsConsumed = new FilterProductsConsumed(enterprise.getProducts, enterprise.getClients)
          filterProductsConsumed.filterProductsConsumed()
          continue
        case 3:
          let filterProductsConsumedbyGender = new FilterProductbyGender(enterprise.getClients)
          filterProductsConsumedbyGender.filterProductbyGender()
          continue
        case 4:
          let filterClientsbyConsumedQuantity = new GetFilterProductbyGender(enterprise.getClients)
          filterClientsbyConsumedQuantity.filterClientsbyConsumedQuantity()
          continue
        case 5:
          let filterClientsbyConsumeQuantityMinor = new FilterClientsbyConsumeQuantityMinor(enterprise.getClients)
          filterClientsbyConsumeQuantityMinor.filterClientsbyConsumedQuantityMinor()
          continue
        case 6:
          let filterClientsbyPrice = new GetFilterbyPrice(enterprise.getClients)
          filterClientsbyPrice.filterClientsbyPrice()
          continue
      }
    }

    case 0:
      execute = false
      console.log(`Até mais`)
      break
    default:
      console.log(`Operação não entendida!`)
  }
}
