import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/css/Default.css']
})
export class LoginComponent {
  [x: string]: any;
  email: any;
  passwd: any;

  autenticar(){
    let trobat = false;
    let posicio = 0;
    for(let i = 0; i <= this.registraServei.correu_array.length; i++){
      if (this.registraServei.correu_array[i]==this.email){

        trobat = true;
        posicio = i
      }
    }
    if (trobat == false){
      alert("Usuari o contrasenya incorrectes")

    }
    else if (trobat == true){
      if(this.registraServei.passwd_array[posicio]==this.passwd){
        this.registraServei.autenticat = true;
        this.registraServei.nomAutenticat = this.registraServei.nom_array[posicio];
        this.registraServei.correuAutenticat = this.registraServei.correu_array[posicio];
        this.registraServei.adrecaAutenticat = this.registraServei.adreca_array[posicio];
        this.registraServei.cognomsAutenticat = this.registraServei.cognoms_array[posicio];
        this.registraServei.telAutenticat = this.registraServei.tel_array[posicio];
        this.router.navigate(['/'])

      }
      else alert("Usuari o contrasenya incorrectes")
    }


  }
  constructor(private registraServei: RegisterLoginService,public router:Router) {
  }
}


