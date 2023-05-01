import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {UsuariService} from "../usuari.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css', '../../assets/css/Default.css']
})
export class ContacteComponent{
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  nomFormulari: any;
  correuFormulari: any;
  missatgeFormulari: any;
  captchaVerificat=false;

  // @ts-ignore
  @ViewChild('omplenaCorreu') omplenaCorreu: ElementRef;
  // @ts-ignore
  @ViewChild('omplenaNom') omplenaNom: ElementRef;
  root: any;
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
  onVerify(token: string) {
    this.captchaVerificat=true;
  }

  onExpired(response: any) {
    alert("La verificació ha caducat!")
  }

  onError(error: any) {
    alert("No 'ha pogut verificar correctament el captcha!")
  }
  enviaFormulari(){
    this.http.post<any>('http://localhost:3080/contacte',{
      nom: this.nomFormulari,
      correu: this.correuFormulari,
      missatge: this.missatgeFormulari
    }).subscribe();
    alert("Enviat!");
    this.nomFormulari = '';
    this.correuFormulari = '';
    this.missatgeFormulari = '';
  }

  constructor(private usuariServei: UsuariService,private http:HttpClient) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    }
  }
}
