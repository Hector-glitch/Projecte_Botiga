import {Component, Renderer2} from '@angular/core';
import {RegisterLoginService} from "../register-login.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css', '../../assets/css/Default.css']
})
export class PerfilComponent{
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }
  constructor(private registraServei: RegisterLoginService, private renderer: Renderer2) {
  }
}
