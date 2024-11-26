import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            if (value > 0) {
                this.balance += value + 10;
            } else {
                console.log('Valor inválido!');
            }
        } else {
            console.log('Conta inválida!');
        }
    }

}