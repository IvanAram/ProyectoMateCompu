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
	hasSignos: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.paciente = this.navParams.get('paciente');
  	this.isUrgent = (this.paciente.status.slice(0,1) == 'U' ? true : false);
  	this.hasHistorial = (this.paciente.status.slice(1,2) == 'H' ? true : false);
  	if(this.isUrgent){
  		this.hasSignos = (this.paciente.status.slice(1,2) == '1') ? true : false;
  	} else{
  		this.hasSignos = (this.paciente.status.slice(2,3) == '1') ? true : false;
  	}
  }

  ionViewDidLoad() {
  }

}
