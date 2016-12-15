import {Component} from '@angular/core';

@Component({
	templateUrl: 'home.html'
})

export class HomePage {
	inventuries?: any;

	constructor() {
		this.inventuries = ['Hallo', 'Test', 'Blöd hier'];
	}

	
}