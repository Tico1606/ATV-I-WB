import Register from "../clientCrud/registerExport";
import Client from "../clientModel/client";
import CPF from "../clientModel/cpf";
import RG from "../clientModel/rg";
import Telephone from "../clientModel/telephone";

export default class RegisterClientMock extends Register {
  private clients: Array<Client>;

  constructor(clients: Array<Client>) {
    super();
    this.clients = clients;
  }

  public register(): void {
    for (let i = 1; i <= 30; i++) {
      const client = new Client(
        `Cliente ${i}`,
        `Cliente Social ${i}`,
        new CPF(`1234567890${i}`, new Date(1980 + (i % 40), (i % 12), (i % 28) + 1)),
        new RG(`RG${i}`, new Date(2000 + (i % 20), (i % 12), (i % 28) + 1)),
        new Telephone(`${10 + (i % 10)}`, `${900000000 + i}`),
        i % 2 === 0 ? "Masculino" : "Feminino"
      );
      this.clients.push(client);
    }
  }
}
