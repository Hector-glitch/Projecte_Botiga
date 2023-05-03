import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuariService} from "../usuari.service";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../products";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-eliminaproducte',
  templateUrl: './eliminaproducte.component.html',
  styleUrls: ['./eliminaproducte.component.css','../../assets/css/Default.css'],
})
export class EliminaproducteComponent{
  products: Product[];
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  root: any;
  deleting: any;
  ngOnInit() {
    this.loadProducts();
  }
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
    this.root = false;
    this.router.navigate(['/']);
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

  loadProducts() {
    this.http.get('http://localhost:3080/productes').subscribe((data: any) => {
      this.products = data;
    });
  }
  deleteProduct(product: any) {
    this.deleting = true;
    if (confirm('N\'esteu segurs que voleu eliminar el producte?\n Aquesta opció no es pot desfer!')) {
      this.http.delete(`http://localhost:3080/eliminarproducte/${product.id}`).subscribe(() => {
        this.products = this.products.filter(p => p.id !== product.id);
        this.router.navigate(['/cataleg']);
        }, error => {
        console.log(error);
        this.deleting = false;
      });
    }else{
      this.deleting = false;
    }
  }
}
