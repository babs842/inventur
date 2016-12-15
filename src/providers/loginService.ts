import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import constants to communicate with api
import {Constants} from './constants';
import {ToastService} from './toastService';


@Injectable()

export class LoginService {
	api: string;
	
	constructor(private http: Http,
				private con: Constants,
				private toastService: ToastService) {
		this.api = con.root;
	}

	checkLogin(loginData) {
		console.log(loginData);
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post(this.api + '/checkLogin.php', JSON.stringify(loginData), {
			headers: headers
		})
				.toPromise()
				.then(data => {data.json();this.toastService.getMessage(data.json()["error_msg"])})
	}
}