import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import * as Console from "console";
import {UsuariService} from "../usuari.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/css/Default.css']
})
export class LoginComponent {
  [x: string]: any;
  email: any;
  passwd: any;
  correuTrobat: any;

  constructor(public router:Router, private usuariServei: UsuariService, public firebaseAuth: AngularFireAuth) {
  }

  async autenticar() {
    await this.firebaseAuth.signInWithEmailAndPassword(this.email, this.passwd)
      .then(res => {
        this.usuariServei.autenticat = true;
        this.usuariServei.usuari = JSON.stringify(res.user);
        this.usuariServei.correuAutenticat = this.email;
        this.correuTrobat = false;
        for (let i = 0; i<this.usuariServei.arrClients.clients.length;i++){
          if(this.usuariServei.arrClients.clients[i].Correu == this.email){
            this.usuariServei.posAutenticat = i;
            this.correuTrobat = true;
            this.router.navigate(['/'])
          }
        }
        if(!this.correuTrobat){
          alert("Sembla que no disposem de les dades d'aquest client!")
        }

      })
    if (!this.usuariServei.autenticat) {
      alert("Correu i/o contrasenya incorrectes!")
    }
  }


}


