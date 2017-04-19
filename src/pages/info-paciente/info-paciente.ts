import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../providers/http-service';
import { AddSignosVitalesPage } from '../add-signos-vitales/add-signos-vitales';

@Component({
  selector: 'page-info-paciente',
  templateUrl: 'info-paciente.html'
})
export class InfoPacientePage {
  paciente: any;
  isUrgent: boolean = false;
  hasHistorial: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService) {
    this.paciente = this.navParams.get('paciente');
    this.isUrgent = (this.paciente.status.slice(0,1) == 'U');
    this.hasHistorial = (this.paciente.status.slice(1,2) == 'H');
  }

  ionViewDidLoad(){}

  addHistorial(){
    this.httpService.addHistorial(this.paciente.matricula).subscribe(
      data => {
        console.log(data);
        if(data[0].codigo == 1){
          this.hasHistorial = true;
        }
      }, err => {
        console.log(err);
      }
    );
  }

  gotoAddSignosVitales(){
    this.navCtrl.push(AddSignosVitalesPage,{
      paciente: this.paciente
    });
  }

}
