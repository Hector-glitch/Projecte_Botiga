import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UsuariService} from "../usuari.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";

@Component({
  selector: 'app-canviarpassword',
  templateUrl: './canviarpassword.component.html',
  styleUrls: ['./canviarpassword.component.css','../../assets/css/Default.css']
})
export class CanviarpasswordComponent {
  email: any;
  async restaurarContrasenya(){
   this.firebaseAuth.sendPasswordResetEmail(this.email);
   alert("S'ha enviat un correu per a restablir la contraseya a l'acreça indicada")
    this.router.navigate(['/login'])
  }
  constructor(public router:Router, private usuariServei: UsuariService, public firebaseAuth: AngularFireAuth) {}

}
