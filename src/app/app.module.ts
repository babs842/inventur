import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InventurApp } from './app.component';

// import the pages
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';

// import the providers
import {Constants} from '../providers/constants';
import {LoginService} from '../providers/loginService';
import {ToastService} from '../providers/toastService';

@NgModule({
  declarations: [
    InventurApp,
    LoginPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(InventurApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    InventurApp,
    LoginPage,
    HomePage
  ],
  providers: [
    LoginService,
    Constants,
    ToastService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
