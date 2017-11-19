import { Injectable } from '@angular/core';
import { Account } from "../entity/account";

@Injectable()
export class MockFirebaseService {

  constructor() { }

  withdrawalAccouts() {
    let accounts = [
      new Account(1523, '1233432344', "Cuenta de Nomina"),
      new Account(8565, '9883648732', "Cuenta de Cheques")
    ]

    return accounts;
  }

  depositAccouts() {
    let accounts = [
      new Account(44566, '8545125448', "Jhon Doe"),
      new Account(85265, '9883648732', "Richard Roe")
    ]

    return accounts;
  }

}
