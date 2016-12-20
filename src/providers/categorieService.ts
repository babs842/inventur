import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Constants} from './constants';

@Injectable()

export class CategorieService {
	api: string;

	constructor(private http: Http,
				private con: Constants) {
		this.api = con.root;
	}

	loadCategories() {
		return this.http.get(this.api + '/selectCategories.php')
			.toPromise()
			.then(data => data = data.json().categorie)
	}
}