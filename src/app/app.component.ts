import { Component, OnInit } from '@angular/core';
import { Account } from '../app/entity/account';
import { MockFirebaseService } from "./service/mock-firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  counter: number;
  wa: Account;
  da: Account;
  was: Array<Account>;
  das: Array<Account>;
  amount: number;

  constructor(private mockService: MockFirebaseService) {
    this.counter = 1;
    this.wa = new Account(null, null, null);
    this.da = new Account(null, null, null);
    this.amount = 0.00;
  }

  ngOnInit(): void {
    this.was = this.mockService.withdrawalAccouts();
    this.das = this.mockService.depositAccouts();
  }


  onSubmit() {
    console.log('Hola');
    this.counter++
  }

}
