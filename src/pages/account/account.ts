import {Component} from '@angular/core';

import {UserData} from '../../providers/userData';

@Component({
	templateUrl: 'account.html'
})

export class AccountPage {
	username: any;

	constructor(private userData: UserData) {
		this.username = this.userData.getUsername();
	}
}