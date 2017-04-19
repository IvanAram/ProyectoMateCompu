import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../../providers/http-service';
import { ListaPacientesPage } from '../lista-pacientes/lista-pacientes';

@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  isDoctor: boolean = true;

  constructor(public navCtrl: NavController, public httpService: HttpService, private builder: FormBuilder, private toastCtrl: ToastController) {
    this.loginForm = builder.group({
    	role: [
    		'doctor',
    		Validators.required
    	],
    	matricula: [
    		'',
    		Validators.required
    	],
    	password: [
    		'',
    		Validators.required
    	]
    });
  }

  login(){
   	if(this.loginForm.controls['role'].value == "asistente"){
   		this.navCtrl.setRoot(ListaPacientesPage,{
   			role: this.loginForm.controls['role'].value
   		});
   	} else if(this.loginForm.valid){
  		let doctor = {
  			'matricula': this.loginForm.controls['matricula'].value,
  			'password': this.loginForm.controls['password'].value
  		};

  		this.httpService.login(doctor).subscribe(
  			data => {
  				if(data[0].codigo==1){
  					this.navCtrl.setRoot(ListaPacientesPage,{
  		  			role: this.loginForm.controls['role'].value
  		  		});
  				} else{
            let errorToast = this.toastCtrl.create({
              message: 'Error, wrong credentials',
              duration: 2000,
              position: 'middle'
            });
            errorToast.present();
          }
  			}, err => {
  				console.log(err);
  			}
      );
    } else{
      let errorToast = this.toastCtrl.create({
        message: 'Please fill all fields',
        duration: 2000,
        position: 'middle'
      });
      errorToast.present();
    }
  }

  checkValue(){
    this.isDoctor = (this.loginForm.controls['role'].value=="doctor");
  }
}
