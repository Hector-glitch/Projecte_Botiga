import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {UsuariService} from "../usuari.service";

@Component({
  selector: 'app-condicions',
  templateUrl: './condicions.component.html',
  styleUrls: ['./condicions.component.css','../../assets/css/Default.css']
})
export class CondicionsComponent {
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  negre = true;

  // @ts-ignore
  @ViewChild('fons') fons: ElementRef;
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
  canviarFons(){
    if(this.negre){
      this.render.addClass(this.fons.nativeElement,'canviarColor')
      this.negre = false;
    }
    else{
      this.render.removeClass(this.fons.nativeElement,'canviarColor')
      this.negre = true;
    }
  }

  constructor(private usuariServei: UsuariService, private render: Renderer2) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    }
  }

}
