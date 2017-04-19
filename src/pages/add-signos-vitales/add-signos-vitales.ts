import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AddSignosVitales page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-signos-vitales',
  templateUrl: 'add-signos-vitales.html'
})
export class AddSignosVitalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	//this.navParams.get('paciente');
  	/*
		this.paciente.signosVitales = {
		frecCard: "a",
		frecResp: "b",
		presion: "c",
		temperatura: "d"
		};
		*/
  }

  ionViewDidLoad() {
  }

}
