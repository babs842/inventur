import {Injectable} from '@angular/core';

@Injectable()

export class UserData {
	
	constructor() {

	}

	onLogin(user) {
		this.setId(user.id);
		this.setUsername(user.name);
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