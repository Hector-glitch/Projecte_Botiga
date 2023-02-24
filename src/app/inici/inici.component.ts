import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {elementAt} from "rxjs";

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css','../../assets/css/Default.css']
})
export class IniciComponent {

  constructor(private renderer: Renderer2) {
  }
}
