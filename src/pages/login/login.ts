import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

// import providers
import {LoginService} from '../../providers/loginService';

import {HomePage} from '../home/home';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {
  login: {email?: any, password?: any} = {};
  submitted = false;

  constructor(private loginService: LoginService,
              private navCtrl: NavController) {

  }

  onLogin(form, login) {
    this.loginService.checkLogin(login).then(data => this.navCtrl.setRoot(HomePage));
  }

  onSignup() {
    console.log("Neu anmelden");
  }
}