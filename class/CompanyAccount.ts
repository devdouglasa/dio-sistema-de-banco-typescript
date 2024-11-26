import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()) { 
      if (value > 0) {
        this.deposit(value);
        console.log(`Voce fez um empréstimo de R$ ${value}.`)
      } else {
        console.log('Valor inválido!')
      }
    } else {
      console.log('Conta inválida!')
    }
    
  }
}
