import CPF from "./cpf"
import Product from "../productModel/product"
import RG from "./rg"
import Telephone from "./telephone"

export default class Client {
    public name: string
    public socialName: string
    private cpf: CPF
    private rgs: RG
    private registerDate: Date
    private telephone: Telephone
    private gender: string
    private productsConsumed: Array<{ product: Product; quantity: number }> = []

    constructor(name: string, socialName: string, cpf: CPF, rg: RG, telephone: Telephone, gender: string) {
        this.name = name
        this.socialName = socialName
        this.cpf = cpf
        this.rgs = rg
        this.registerDate = new Date()
        this.telephone = telephone
        this.gender = gender
    }

    public get getCpf(): CPF {
        return this.cpf
    }

    public get getRgs(): RG {
        return this.rgs
    }

    public get getRegisterDate(): Date {
        return this.registerDate
    }

    public get getTelephone(): Telephone {
        return this.telephone
    }

    public get getProductsConsumed(): Array<{ product: Product; quantity: number }> {
        return this.productsConsumed
    }

    public get getGender(): string {
        return this.gender
    }

    public addConsumedProduct(consumedProduct: { product: Product, quantity: number }): void {
        this.productsConsumed.push(consumedProduct)
    }
}
