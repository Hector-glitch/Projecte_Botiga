import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UsuariService} from "../usuari.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css', '../../assets/css/Default.css']
})
export class RegistreComponent {
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  correu: any;
  passwd: any;
  nom: any;
  cognoms: any;
  adreca: any;
  telefon: any;
  correuTrobat: any;
  captchaVerificat = false;

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
  async registrar() {
    for (let i = 0; i < this.usuariServei.arrClients.clients.length; i++) {
      if (this.usuariServei.arrClients.clients[i].Correu == this.correu) {
        this.correuTrobat = true;
      }
    }
    if (this.correuTrobat) {
      alert("Ja existeix un usuari registrat amb aquest correu!")
    } else {
      this.http.post<any>('http://localhost:3080/datausers', {
        Adreça: this.adreca,
        Cognoms: this.cognoms,
        Correu: this.correu,
        Nom: this.nom,
        Telèfon: this.telefon
      }).subscribe();
      this.http.post<any>('http://localhost:3080/signup', {
        email: this.correu,
        password: this.passwd
      }).subscribe();
      this.http.post<any>('http://localhost:3080/log',{
        log: 'registre',
        text: `${this.nom} s'ha registrat amb l'adreça de correu ${this.correu}`
      }).subscribe();
      window.alert("S'ha enviat un correu de verificació.")
      await this.router.navigate(['/login']);
    }
  }

  constructor(private usuariServei: UsuariService,public router:Router, private http:HttpClient, public firebaseAuth: AngularFireAuth, config: NgbModalConfig, private modalService: NgbModal) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    }
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content: any) {
    this.modalService.open(content);
  }


  ngOnInit(){}



}

