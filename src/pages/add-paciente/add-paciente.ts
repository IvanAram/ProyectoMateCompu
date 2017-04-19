import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../../providers/http-service';

@Component({
  selector: 'page-add-paciente',
  templateUrl: 'add-paciente.html'
})
export class AddPacientePage {
	newInfoPaciente: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private builder: FormBuilder, public httpService: HttpService) {
  	this.newInfoPaciente = this.builder.group({
  		servicio:[
  			'terapia',
  			Validators.required
  		],
  		nombre:[
  			'',
  			Validators.required
  		],
  		matricula:[
  			'',
  			Validators.required
  		]
  	});
  }

  ionViewDidLoad() {}

  add(){
    if(this.newInfoPaciente.valid){
      let newPaciente = {
        'servicio': this.newInfoPaciente.controls['servicio'].value,
        'nombre': this.newInfoPaciente.controls['nombre'].value,
        'matricula': this.newInfoPaciente.controls['matricula'].value
      };
      console.log(JSON.stringify(newPaciente));
      this.httpService.add(newPaciente).subscribe(
        data =>{
          console.log(data);
        }, err => {
          console.log(err);
        }
      );
    }
  }
}
