import { Component, OnInit } from '@angular/core';
import { Account } from '../entity/account';
import { MockFirebaseService } from "../service/mock-firebase.service";
import { Transaction } from "../entity/transaction";

@Component({
  selector: 'app-root',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  title = 'app';
  counter: number;
  was: Array<Account>;
  das: Array<Account>;
  transaction: Transaction;
  constructor(private mockService: MockFirebaseService) {
    this.counter = 1;
    this.transaction = new Transaction();
    this.transaction.da = new Account(null, null, null);
    this.transaction.wa = new Account(null, null, null);
  }

  ngOnInit(): void {
    this.was = this.mockService.withdrawalAccouts();
    this.das = this.mockService.depositAccouts();
  }

  handleEvent() {
    console.log('se envia desde web component', this.transaction);
  }

}
