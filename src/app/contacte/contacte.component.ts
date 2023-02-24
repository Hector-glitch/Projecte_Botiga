import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css', '../../assets/css/Default.css']
})
export class ContacteComponent{


  // @ts-ignore
  @ViewChild('omplenaCorreu') omplenaCorreu: ElementRef;
  // @ts-ignore
  @ViewChild('omplenaNom') omplenaNom: ElementRef;
  constructor() {
  }
}
