import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css', '../../assets/css/Default.css']
})
export class ContacteComponent implements AfterViewInit{
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat
  correuAutenticat = this.registraServei.correuAutenticat
  nomFormulari: any;
  correuFormulari: any;
  missatgeFormulari: any;

  // @ts-ignore
  @ViewChild('omplenaCorreu') omplenaCorreu: ElementRef;
  // @ts-ignore
  @ViewChild('omplenaNom') omplenaNom: ElementRef;
  ngAfterViewInit() {
    if(this.autenticat){
      this.omplenaNom.nativeElement.value = this.nomAutenticat;
      this.omplenaCorreu.nativeElement.value = this.correuAutenticat;
    }
  }



  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }

  enviaFormulari(){
    alert("Enviat!")
  }

  constructor(private registraServei: RegisterLoginService) {
  }
}
