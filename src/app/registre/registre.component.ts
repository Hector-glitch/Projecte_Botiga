import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css', '../../assets/css/Default.css']
})
export class RegistreComponent {
  correu: any;
  passwd: any;
  nom: any;
  cognoms: any;
  adreca: any;
  telefon: any;

  registrar(){
    this.router.navigate(['/login'])
  }

  constructor(public router:Router, private http:HttpClient) {
    this.http.get<any>('http://172.16.8.1:3080/api/firebase').subscribe((document)=>{
      console.log(document);
    });

  }

  ngOnInit(){}



}

