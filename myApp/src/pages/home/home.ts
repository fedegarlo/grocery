import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items: Array<string>;
  pushPage: any;
  constructor(public navCtrl: NavController) {
  	this.items = ['Zanahorias', 'Cebollas', 'Plátanos'];
  	this.pushPage = DetailPage;
  }

	buttonClick () {
		console.log('sdsd');
	}
}
