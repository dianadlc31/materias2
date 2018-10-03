import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { ComPage } from '../com/com';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  Com= ComPage;
  constructor(public navCtrl: NavController) {

  }
  clickHistoria() {
    this.navCtrl.push(this.historia);
  }
  clickCom() {
    this.navCtrl.push(this.Com);
  }
}
