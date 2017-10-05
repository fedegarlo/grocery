import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})

export class DetailPage {
  product: any;

  constructor(public navParams: NavParams) {
  	this.product = this.navParams.get('name');
  }
}
