import {Component} from '@angular/core';

import {ActionSheetController, NavController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

import {CreateCodePage} from '../createCode/createCode';

@Component({
	templateUrl: 'inventury.html'
})

export class InventuryPage {

	constructor(private actionSheet: ActionSheetController,
				private navCtrl: NavController) {

	}

	options() {
		let options = this.actionSheet.create({
			title: 'Auswahl',
			buttons: [
				{
					text: 'Barcode scannen',
					handler: () => {
						BarcodeScanner.scan().then((barcodeData) => {
							this.navCtrl.pop();
							console.log(barcodeData);
						})
					}
				},
				{
					text: 'Barcode eingeben',
					handler: () => {
						this.navCtrl.push(CreateCodePage);
					}
				},
				{
					text: 'Abbruch'
				}
			]
		});
		options.present();
	}
}