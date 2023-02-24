import {Component, Renderer2} from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css', '../../assets/css/Default.css']
})
export class PerfilComponent{
  constructor(private renderer: Renderer2) {}
}
