export default class RG {
    private value: string
    private issueDate: Date
    constructor(value: string, issueDate: Date) {
        this.value = value
        this.issueDate = issueDate
    }
    public get getValue(): string {
        return this.value
    }
    public get getIssueDate(): Date {
        return this.issueDate
    }
}
