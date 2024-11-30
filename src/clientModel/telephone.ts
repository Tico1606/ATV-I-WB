export default class Telephone {
    private ddd: string
    private number: string
    constructor(ddd: string, number: string) {
        this.ddd = ddd
        this.number = number
    }

    public get getDdd(): string {
        return this.ddd
    }

    public get getNumber(): string {
        return this.number
    }
}