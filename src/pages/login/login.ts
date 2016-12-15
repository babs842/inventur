import {Component} from '@angular/core';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {
  login: any;

  constructor() {

  }

  onLogin(form, login) {
    console.log(login);
  }

  onSignup() {
    console.log("Neu anmelden");
  }
}