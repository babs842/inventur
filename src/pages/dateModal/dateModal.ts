import {Component} from '@angular/core';

@Component({
	templateUrl: 'dateModal.html'
})
export class DateTimeModal {
	constructor() {

	}

	saveDate(createdAt) {
		console.log(createdAt);
	}
}