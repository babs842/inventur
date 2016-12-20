import {Component} from '@angular/core';

import {NavController, ActionSheetController} from 'ionic-angular';

import {InventuryPage} from '../inventury/inventury';
import {BarcodeService} from '../../providers/barcodeService';

@Component({
	templateUrl: 'home.html'
})

export class HomePage {
	inventuries?: any;
	//done;

	constructor(private navCtrl: NavController,
				private actionSheet: ActionSheetController,
				private barcodeService: BarcodeService) {
		this.inventuries = [
			{
				title: "Hallo",
				date: "12 Dez",
				done: true
			},
			{
				title: "Tach auch",
				date: "24 Dez",
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