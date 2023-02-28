import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css', '../../assets/css/Default.css']
})
export class RegistreComponent {
  correu: any;
  passwd: any;
  nom: any;
  cognoms: any;
  adreca: any;
  telefon: any;

  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }

  registrar(){
    let trobat = false;
    for(let i = 0; i <= this.registraServei.correu_array.length; i++ ){
      if (this.registraServei.correu_array[i]==this.correu){
        trobat = true;
        alert("Ja existeix un usuari amb aquest correu")
        break;
      }
    }
    if (trobat == false){
    this.registraServei.correu_array.push(this.correu)
    this.registraServei.passwd_array.push(this.passwd)
    this.registraServei.nom_array.push(this.nom)
    this.registraServei.cognoms_array.push(this.cognoms)
    this.registraServei.adreca_array.push(this.adreca)
    this.registraServei.tel_array.push(this.telefon)
      window.alert(`S'ha enviat un correu de verificacio.`)
    this.router.navigate(['/login'])
    }


  }
  constructor(private registraServei: RegisterLoginService,public router:Router) {
  }

  ngOnInit(){}



}

