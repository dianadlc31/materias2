import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { ComPage } from '../com/com';
import { CsPage } from '../cs/cs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  Com= ComPage;
  Cs=CsPage;
  constructor(public navCtrl: NavController) {

  }
  clickHistoria() {
    this.navCtrl.push(this.historia);
  }
  clickCom() {
    this.navCtrl.push(this.Com);
  }
  clickCs() {
    this.navCtrl.push(this.Cs);
  }
}
