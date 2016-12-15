import {Component} from '@angular/core';

@Component({
	templateUrl: 'home.html'
})

export class HomePage {
	inventuries?: any;

	constructor() {
		this.inventuries = [
		{
			title: 'Hallo',
			createdAt: '6 Dez'
		},
		{
			title: 'Doof',
			createdAt: '13 Dez'
		}
		]
	}

	showData(inventury) {
		console.log(inventury);
	}
}