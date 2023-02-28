import {Component, Renderer2} from '@angular/core';
import {UsuariService} from "../usuari.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css', '../../assets/css/Default.css']
})
export class PerfilComponent{
  nomAutenticat: any;
  cognomsAutenticat: any;
  adrecaAutenticat: any;
  correuAutenticat: any;
  telefonAutenticat: any;
  correu: any;
  passwd: any;
  nom: any;
  cognoms: any;
  adreca: any;
  telefon: any;
  autenticat = this.usuariServei.autenticat;
  edita = false;
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
    this.cognomsAutenticat='null';
    this.adrecaAutenticat='null';
    this.correuAutenticat='null';
    this.telefonAutenticat='null';
    this.router.navigate(['/']);
  }
  editaDades(){
    this.edita = true;
  }
  enviaDades(){
    this.http.post<any>('http://localhost:3080/datausersdelete', {
      Adreça: this.adrecaAutenticat,
      Cognoms: this.cognomsAutenticat,
      Correu: this.correuAutenticat,
      Nom: this.nomAutenticat,
      Telèfon: this.telefonAutenticat,
    }).subscribe();

    this.nomAutenticat = this.nom;
    this.cognomsAutenticat = this.cognoms;
    this.adrecaAutenticat = this.adreca;
    this.telefonAutenticat = this.telefon;

    this.http.post<any>('http://localhost:3080/datausers', {
      Adreça: this.adreca,
      Cognoms: this.cognoms,
      Correu: this.correu,
      Nom: this.nom,
      Telèfon: this.telefon
    }).subscribe();
    this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom = this.nomAutenticat;
    this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Cognoms = this.cognomsAutenticat;
    this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Adreça = this.adrecaAutenticat;
    this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Correu = this.correuAutenticat;
    this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Telèfon = this.telefonAutenticat;
    this.edita= false;
  }
  constructor(private renderer: Renderer2, public router:Router, private usuariServei: UsuariService, private http:HttpClient) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
      this.cognomsAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Cognoms;
      this.adrecaAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Adreça;
      this.correuAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Correu;
      this.telefonAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Telèfon;
      this.nom=this.nomAutenticat;
      this.cognoms=this.cognomsAutenticat;
      this.adreca=this.adrecaAutenticat;
      this.correu=this.correuAutenticat;
      this.telefon=this.telefonAutenticat;
    }else{
      //this.router.navigate(['/']);
    }



  }
}
