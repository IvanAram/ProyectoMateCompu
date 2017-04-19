import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpService } from '../../providers/http-service';
import { InfoPacientePage } from '../info-paciente/info-paciente'; 
import { AddPacientePage } from '../add-paciente/add-paciente'; 

@Component({
	selector: 'page-lista-pacientes',
	templateUrl: 'lista-pacientes.html'
})
export class ListaPacientesPage {
	role: string;
	pacientes: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService, public loading: LoadingController) {
		this.role = navParams.get('role');
	}

	ionViewDidLoad() {
		setInterval(() => { this.loadPacientes(); }, 300000);
	}

	ionViewDidEnter(){
		let loading = this.loading.create({
			content: 'Loading...'
		});
		loading.present();
		this.httpService.getPacientes().subscribe(
			data => {
				loading.dismiss();
				this.pacientes = data[0].lista;
			},
			err => {
				console.log(err);
				loading.dismiss();
			}
		);
	}

	loadPacientes(){
		this.httpService.getPacientes().subscribe(
			data => { this.pacientes = data[0].lista; },
			err => { console.log(err); }
		);
	}

	infoPaciente(event, paciente){
		this.navCtrl.push(InfoPacientePage, {
			role: this.role,
			paciente: paciente 
		});
	}

	gotoAddPaciente(){
		this.navCtrl.push(AddPacientePage);
	}
}
