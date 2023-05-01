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
  root: any; //creem la boolean

  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
    this.root=false;
  }
  constructor(private renderer: Renderer2,private usuariServei: UsuariService) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;

      //Aqui verifiquem si l'usari es admin o no
      if(this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Rol == 'root'){
        this.root = true;
      }
      else(this.root=false);
    }

  }
}
