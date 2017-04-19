import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListaPacientesPage } from '../pages/lista-pacientes/lista-pacientes';
import { InfoPacientePage } from '../pages/info-paciente/info-paciente';
import { AddPacientePage } from '../pages/add-paciente/add-paciente';
import { AddSignosVitalesPage } from '../pages/add-signos-vitales/add-signos-vitales';
import { HttpService } from '../providers/http-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListaPacientesPage,
    InfoPacientePage,
    AddPacientePage,
    AddSignosVitalesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListaPacientesPage,
    InfoPacientePage,
    AddPacientePage,
    AddSignosVitalesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService
  ]
})
export class AppModule {}
