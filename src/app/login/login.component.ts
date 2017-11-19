import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profile: Object;


constructor(private router: Router) {
    this.profile = new Object();
   }

  ngOnInit() {
  }

  login() {
    this.router.navigate(["/transfer"]);
  }

}
