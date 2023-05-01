import { Component } from '@angular/core';
import {UsuariService} from "../usuari.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-afegirproducte',
  templateUrl: './afegirproducte.component.html',
  styleUrls: ['./afegirproducte.component.css','../../assets/css/Default.css']
})
export class AfegirproducteComponent {
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  categoria: any;
  nom: any;
  root: any;
  descripcio: any;
  preu: any;
  imatge: File | undefined;
  onFileSelected(event: Event): void {
    this.imatge = (event.target as HTMLInputElement).files?.[0];
  }
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }

  async registrar():  Promise<void> {
    const formData = new FormData();
    formData.append('nom', this.nom);
    formData.append('descripcio', this.descripcio);
    formData.append('preu', this.preu.toString());
    formData.append('categoria', this.categoria);
    // @ts-ignore
    formData.append('imatge', this.imatge);

    this.http.post('http://localhost:3080/afegirproducte', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    alert('Producte afegit!');
    this.nom = '';
    this.descripcio = '';
    this.preu = '';
    this.categoria = '';
    this.imatge = undefined;



  }

  constructor(private usuariServei: UsuariService,public router:Router, private http:HttpClient, public firebaseAuth: AngularFireAuth, config: NgbModalConfig, private modalService: NgbModal) {if(this.autenticat){
    this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    if(this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Rol == 'root'){
      this.root = true;
    }
    else{
      this.root=false
      this.router.navigate(['/']);
    };
  }else{
    this.router.navigate(['/']);
  }
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content: any) {
    this.modalService.open(content);
  }


  ngOnInit(){}

}
