export default class Product {
    private static lastId: number = 0
    private name!: string
    private price!: number
    private id!: number

    constructor(name: string, price: number) {
        this.id = ++Product.lastId
        this.name = name
        this.price = price
    }
    public get getName(): string {
        return this.name
    }
    public get getPrice(): number {
        return this.price
    }
    public get getId(): number {
        return this.id
    }
}
