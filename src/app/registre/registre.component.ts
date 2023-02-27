import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UsuariService} from "../usuari.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {sendEmailVerification} from "@angular/fire/auth";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css', '../../assets/css/Default.css']
})
export class RegistreComponent {
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  correu: any;
  passwd: any;
  nom: any;
  cognoms: any;
  adreca: any;
  telefon: any;
  correuTrobat: any;

  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
  registrar(){
    for (let i = 0; i<this.usuariServei.arrClients.clients.length;i++){
      if(this.usuariServei.arrClients.clients[i].Correu == this.correu){
        this.correuTrobat = true;
      }
    }
    if (this.correuTrobat){
      alert("Ja existeix un usuari registrat amb aquest correu!")
    }else {
      this.http.post<any>('http://172.16.8.1:3080/datausers', {
        Adreça: this.adreca,
        Cognoms: this.cognoms,
        Correu: this.correu,
        Nom: this.nom,
        Telèfon: this.telefon
      }).subscribe();
      this.http.post<any>('http://172.16.8.1:3080/signup', {
        email: this.correu,
        password: this.passwd
      }).subscribe();
      this.router.navigate(['/login']);
    }
  }

  constructor(private usuariServei: UsuariService,public router:Router, private http:HttpClient, public firebaseAuth: AngularFireAuth) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    }
  }

  ngOnInit(){}



}

