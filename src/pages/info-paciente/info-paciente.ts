import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-info-paciente',
  templateUrl: 'info-paciente.html'
})
export class InfoPacientePage {
  paciente: any;
  isUrgent: boolean = false;
  hasHistorial: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paciente = this.navParams.get('paciente');
    this.isUrgent = (this.paciente.status.slice(0,1) == 'U' ? true : false);
    this.hasHistorial = (this.paciente.status.slice(1,2) == 'H' ? true : false);
  }

  /*
    this.paciente.signosVitales = {
      frecCard: "a",
      frecResp: "b",
      presion: "c",
      temperatura: "d"
    };
  */

  ionViewDidLoad() {
  }

}
