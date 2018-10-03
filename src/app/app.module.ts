import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { ComPage } from '../pages/com/com';
import { CsPage } from '../pages/cs/cs';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { PaapsPage } from '../pages/paaps/paaps';
import { MetodologiaPage } from '../pages/metodologia/metodologia';
import { RobotoicaPage } from '../pages/robotoica/robotoica';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    ComPage,
    CsPage,
    DibujoPage,
    PaapsPage,
    MetodologiaPage,
    RobotoicaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    ComPage,
    CsPage,
    DibujoPage,
    PaapsPage,
    MetodologiaPage,
    RobotoicaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
