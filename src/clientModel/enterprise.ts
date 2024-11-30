import Client from "./client"
import Product from "../productModel/product"
import Service from "./service"

export default class Enterprise{
    private clients: Array<Client>
    private products: Array<Product>
    private services: Array<Service>
    constructor(){
        this.clients = []
        this.products = []
        this.services = []
    }
    public get getClients(){
        return this.clients
    }
    public get getProducts(){
        return this.products
    }
    public get getServices(){
        return this.services
    }
}
