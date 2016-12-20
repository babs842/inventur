import {Component} from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';


import {CategorieService} from '../../providers/categorieService';
import {BarcodeService} from '../../providers/barcodeService';

@Component({
	templateUrl: 'createCode.html'
})

export class CreateCodePage {
	createCode: {categorie?: string, barcode?: string, description?: string, quantity?: number} = {};
	categories: any;
	submitted = false;
	
	constructor(private navParams: NavParams,
				private catService: CategorieService,
				private barcodeService: BarcodeService,
				private navCtrl: NavController) {
		this.catService.loadCategories().then(data => this.categories = data);
	}

	create(form, createCode) {
		this.submitted = true;
		if (form.valid) {
			this.barcodeService.saveCode(createCode).then(data => this.navCtrl.pop());
		}
	}
}