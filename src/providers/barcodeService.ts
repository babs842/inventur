import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Constants} from './constants';
import {UserData} from './userData';
import {ToastService} from './toastService';


@Injectable()

export class BarcodeService {
	api: string;

	constructor(public http: Http,
				public con: Constants,
				public userData: UserData,
				public toastService: ToastService) {
		this.api = con.root;
	}

	saveCode(code) {
		var headers = new Headers();
       	headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post(this.api + "/saveCode.php", code, {
			headers: headers
		})
				.toPromise()
				.then(data => data.json().codes)
	}

	loadCodes() {
		return this.http.get(this.api + '/selectCode.php')
			.toPromise()
			.then(data => data.json().codes)
	}
}
