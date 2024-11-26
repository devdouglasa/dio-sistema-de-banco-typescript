export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      if (value > 0) {
        this.balance += value;
        console.log(`Voce depositou R$ ${value}!`);
      } else {
        console.log('Valor inválido!');
      }
    } else {
      console.log('Conta inválida!')
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()) {
      if(this.balance >= value) {
        this.balance -= value;
        console.log(`Voce sacou R$ ${value}!`);
      } else {
        console.log('Saldo insuficiente!');
      }
    } else {
      console.log('Conta inválida!')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
