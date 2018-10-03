import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { ComPage } from '../com/com';
import { CsPage } from '../cs/cs';
import { DibujoPage } from '../dibujo/dibujo';
import { PaapsPage } from '../paaps/paaps';
import { MetodologiaPage } from '../metodologia/metodologia';
import { RobotoicaPage } from '../robotoica/robotoica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  Com= ComPage;
  Cs=CsPage;
  Dibujo= DibujoPage;
  paaps=PaapsPage;
  metodologia=MetodologiaPage;
  robotica=RobotoicaPage;
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
  clickpaaps() {
    this.navCtrl.push(this.paaps);
  }
  clickmetodologia() {
    this.navCtrl.push(this.metodologia);
  }
  clickrobotica() {
    this.navCtrl.push(this.robotica);
  }
}
