import {Injectable} from '@angular/core';

@Injectable()

export class UserData {
	
	constructor() {

	}

	onLogin(user) {
		console.log(user.login);
		this.setId(user.login.id);
		this.setUsername(user.login.name);
	}

	setId(id) {
		localStorage.setItem('staff_id', id);
	}

	setUsername(username) {
		localStorage.setItem('username', username);
	}

	getUsername() {
		return localStorage.getItem('username');
	}
}