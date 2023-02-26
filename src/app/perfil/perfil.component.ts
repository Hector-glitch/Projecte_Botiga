import {Component, Renderer2} from '@angular/core';
import {UsuariService} from "../usuari.service";
import {Router} from "@angular/router";


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
  autenticat = this.usuariServei.autenticat;
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
  constructor(private renderer: Renderer2, public router:Router, private usuariServei: UsuariService) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
      this.cognomsAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Cognoms;
      this.adrecaAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Adreça;
      this.correuAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Correu;
      this.telefonAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Telèfon;
    }else{
      this.router.navigate(['/']);
    }
  }
}
