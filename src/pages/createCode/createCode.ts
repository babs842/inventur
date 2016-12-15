import {Component} from '@angular/core';

@Component({
	templateUrl: 'createCode.html'
})

export class CreateCodePage {
	createCode: {barcode?: string, quantity?: number, description?: string, timeAdd?: any} = {};
	submitted = false;
	constructor() {

	}

	create(form, createCode) {
		this.submitted = true;
		console.log(createCode);
	}
}