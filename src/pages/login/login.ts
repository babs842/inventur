import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

// import providers
import {UserData} from '../../providers/userData';
import {ToastService} from '../../providers/toastService';
import {Constants} from '../../providers/constants';

import {HomePage} from '../home/home';
import {SignupPage} from '../signup/signup';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {
  login: {email?: any, password?: any} = {};
  user: any;
  submitted = false;
  api: string;

  constructor(private userData: UserData,
              private navCtrl: NavController,
              private con: Constants,
              private http: Http,
              private toastService: ToastService) {
    this.api = con.root;
  }

  onLogin(form, login) {
    this.submitted = true;
    if(form.valid) {
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       var data = JSON.stringify(login);
       this.http.post(this.api + "/checkLogin.php", data, {
         headers: headers
        })
         .map(res => res.json())
           .subscribe(data => 
                     {this.toastService.getMessage(data["error_msg"]);if(data.error == false) this.navCtrl.setRoot(HomePage);
                       this.userData.onLogin(data)});
     }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}