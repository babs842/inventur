import {Component} from '@angular/core';

import {ActionSheetController, NavController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

import {CreateCodePage} from '../createCode/createCode';
import {BarcodeService} from '../../providers/barcodeService';


@Component({
	templateUrl: 'inventury.html'
})

export class InventuryPage {
	codes: any;

	constructor(private actionSheet: ActionSheetController,
				private navCtrl: NavController,
				private barcodeService: BarcodeService) {

	}

	ionViewWillEnter() {
		this.barcodeService.loadCodes().then(data => this.codes = data);
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
							var createCode = {
								barcode: barcodeData.text
							}
							this.navCtrl.push(CreateCodePage, {createCode: createCode})
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