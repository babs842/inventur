import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InventurApp } from './app.component';

// import the pages
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {AccountPage} from '../pages/account/account';
import {SignupPage} from '../pages/signup/signup';
import {InventuryPage} from '../pages/inventury/inventury';
import {CreateCodePage} from '../pages/createCode/createCode';
import {DateTimeModal} from '../pages/dateModal/dateModal';

// import the providers
import {Constants} from '../providers/constants';
import {ToastService} from '../providers/toastService';
import {UserData} from '../providers/userData';
import {CategorieService} from '../providers/categorieService';
import {BarcodeService} from '../providers/barcodeService';
import {InventuryService} from '../providers/inventuryService';

@NgModule({
  declarations: [
    InventurApp,
    LoginPage,
    HomePage,
    AccountPage,
    SignupPage,
    InventuryPage,
    CreateCodePage,
    DateTimeModal
  ],
  imports: [
    IonicModule.forRoot(InventurApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    InventurApp,
    LoginPage,
    HomePage,
    AccountPage,
    SignupPage,
    InventuryPage,
    CreateCodePage,
    DateTimeModal
  ],
  providers: [
    Constants,
    ToastService,
    UserData,
    CategorieService,
    BarcodeService,
    InventuryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
