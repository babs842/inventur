import {Component} from '@angular/core';

import {AlertController, NavController, ActionSheetController} from 'ionic-angular';

import {InventuryPage} from '../inventury/inventury';
import {BarcodeService} from '../../providers/barcodeService';
import {InventuryService} from '../../providers/inventuryService';
import {DateTimeModal} from '../dateModal/dateModal';

@Component({
	templateUrl: 'home.html'
})

export class HomePage {
	inventuries?: any;
	//done;

	constructor(private navCtrl: NavController,
				private actionSheet: ActionSheetController,
				private barcodeService: BarcodeService,
				private inventuryService: InventuryService,
				private alertCtrl: AlertController) {
		
	}

	ionViewWillEnter() {
		this.inventuryService.selectInventury().then(data => this.inventuries = data)
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
						this.navCtrl.push(DateTimeModal);
						/*let alert = this.alertCtrl.create({
							title: 'Datum',
							message: 'Datum eingeben',
							inputs: [
								{
									name: 'createdAt',
									placeholder: 'Datum eingeben'
								}
							],
							buttons: [
								{
									text: 'Speichern',
									handler: data => {
										console.log(data);
									}
								},
								{
									text: 'Abbruch',
									handler: data => {
										console.log("Abbrechen");
									}
								}
							]
						});
						alert.present();*/
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