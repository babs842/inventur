import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Constants} from '../providers/constants';

@Injectable()

export class InventuryService {
	api: string;
	constructor(private http: Http,
				private con: Constants) {
		this.api = con.root;
	}

	selectInventury() {
		return this.http.get(this.api + '/selectInventury.php')
			.toPromise()
			.then(data => data.json().inventury)
	}
}