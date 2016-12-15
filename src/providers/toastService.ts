import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';

@Injectable()

export class ToastService {
	constructor(private toastCtrl: ToastController) {

	}

	getMessage(message) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: 2000
		});
		toast.present();
	}
}