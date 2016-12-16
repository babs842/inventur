import {Component} from '@angular/core';

import {NavController, ActionSheetController} from 'ionic-angular';

import {InventuryPage} from '../inventury/inventury';

@Component({
	templateUrl: 'home.html'
})

export class HomePage {
	inventuries?: any;
	//done;

	constructor(private navCtrl: NavController,
				private actionSheet: ActionSheetController) {
		this.inventuries = [
		{
			title: 'Hallo',
			createdAt: '6 Dez',
			done: true
		},
		{
			title: 'Doof',
			createdAt: '13 Dez',
			done: false
		}
		]
	}

	showData(inventury) {
		console.log(inventury);
	}

	options() {
		let actionSheet = this.actionSheet.create({
			title: 'Auswahl',
			buttons: [
				{
					text: 'Inventur starten',
					handler: () => {
						this.navCtrl.push(InventuryPage);
					}
				},
				{
					text: 'Abbrechen'
				}
			]
		});
		actionSheet.present();
	}
}