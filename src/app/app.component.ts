import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, MenuController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {AccountPage} from '../pages/account/account';

import {UserData} from '../providers/userData';


@Component({
  templateUrl: 'app.html'
})
export class InventurApp {
  rootPage: any;
  pages: Array<{title: string, component: any, icon: any}>;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
              private userData: UserData,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      if(this.userData.getUsername() === null) {
        this.rootPage = LoginPage;
      } else {
        this.rootPage = HomePage;
      }
    });

    this.pages = [
    {title: 'Home', component: HomePage, icon: 'home'},
    {title: 'Account', component: AccountPage, icon: 'person'}]
  }

  openPage(page: any) {
    this.nav.setRoot(page.component).then(() => {
      this.menuCtrl.close();
    })
  }
}
