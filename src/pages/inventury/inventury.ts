import {Component} from '@angular/core';

import {ActionSheetController} from 'ionic-angular';

@Component({
	templateUrl: 'inventury.html'
})

export class InventuryPage {

	constructor(private actionSheet: ActionSheetController) {

	}

	options() {
		let options = this.actionSheet.create({
			title: 'Auswahl',
			buttons: [
				{
					text: 'Barcode scannen',
					handler: () => {
						console.log("scannen");
					}
				},
				{
					text: 'Barcode eingeben',
					handler: () => {
						console.log("eingeben");
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