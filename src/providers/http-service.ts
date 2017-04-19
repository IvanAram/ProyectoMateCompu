import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  private headers;
  //prefix: string = 'http://ubiquitous.csf.itesm.mx/~pddm-1022584/MateComp/';
  prefix: string = 'http://localhost:80/API/';

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
  }

  login(doctor){
  	return this.http.post(this.prefix + 'servicio.login.php', JSON.stringify(doctor), {headers: this.headers}).map(res => res.json());
  }

  getPacientes(){
    return this.http.get(this.prefix + 'servicio.pacientes.php').map(res => res.json());
  }

  add(paciente){
    return this.http.post(this.prefix + 'servicio.pacientes.insert.php', JSON.stringify(paciente), {headers: this.headers}).map(res => res.json());
  }

  addHistorial(matricula){
    return this.http.post(this.prefix + 'servicio.pacientes.historial.php', JSON.stringify(matricula), {headers: this.headers}).map(res => res.json());
  }
}
