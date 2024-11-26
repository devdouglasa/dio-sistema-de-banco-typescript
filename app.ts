import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(20); // Depositando o valor de R$ 20
peopleAccount.getBalance(); // Exibe saldo atual
peopleAccount.withdraw(15) // Sacando o valor R$ 15
peopleAccount.getBalance(); // Exibe saldo atual

console.log('--------------------------------------');

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount);
companyAccount.deposit(100); // Depositando o valor de R$ 100
companyAccount.getBalance(); // Exibe saldo atual
companyAccount.withdraw(50); // Sacando o valor de R$ 50
companyAccount.getBalance(); // Exibe saldo atual
companyAccount.getLoan(1000); // Pegado empréstimo de R$ 1000
companyAccount.getBalance(); // Exibe saldo atual

console.log('--------------------------------------');

const vipAccount: VipAccount = new VipAccount('Douglas', 15);
console.log(vipAccount);
vipAccount.deposit(100); // Depositando R$ 100
vipAccount.getBalance(); // Exibe saldo atual
vipAccount.withdraw(40); // Sacando R$ 40
vipAccount.getBalance(); // Exibe saldo atual