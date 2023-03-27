import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {UsuariService} from "../usuari.service";


@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css','../../assets/css/Default.css']
})
export class IniciComponent {
  nomAutenticat: any;
  autenticat = this.usuariServei.autenticat;

  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
  constructor(private renderer: Renderer2,private usuariServei: UsuariService) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    }
  }
}
