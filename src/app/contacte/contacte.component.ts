import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {UsuariService} from "../usuari.service";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css', '../../assets/css/Default.css']
})
export class ContacteComponent{
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;

  // @ts-ignore
  @ViewChild('omplenaCorreu') omplenaCorreu: ElementRef;
  // @ts-ignore
  @ViewChild('omplenaNom') omplenaNom: ElementRef;
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
  constructor(private usuariServei: UsuariService) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    }
  }
}
