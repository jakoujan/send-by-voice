import { Component } from '@angular/core';
import { Account } from '../app/entity/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter: number;
  ra: Account;
  aa: Account;

  constructor() {
    this.counter = 1;
    this.ra = new Account();
    this.aa = new Account();
  }

  onSubmit() {
    console.log('Hola');
    this.counter++
  }

}
