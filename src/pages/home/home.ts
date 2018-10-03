import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { ComPage } from '../com/com';
import { CsPage } from '../cs/cs';
import { DibujoPage } from '../dibujo/dibujo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  Com= ComPage;
  Cs=CsPage;
  Dibujo= DibujoPage
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
  clickDibujo() {
    this.navCtrl.push(this.Dibujo);
  }
}
