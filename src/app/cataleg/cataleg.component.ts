import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Product} from '../products';
import { CartService } from '../cistella.service';
import {UsuariService} from "../usuari.service";
import {HttpClient} from "@angular/common/http";
import {ProducteserveiService} from "../producteservei.service";

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css','../../assets/css/Default.css']
})

export class CatalegComponent implements OnInit {
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  // @ts-ignore
  products: Product[];
  clicatE: any;
  clicatM: any;
ngOnInit():void {
  this.producteservei.getProducts().subscribe(products => {
    this.products = products;
  });
}

  // @ts-ignore
  @ViewChild('manual') manual: ElementRef;
  // @ts-ignore
  @ViewChild('entretenir') entretenir: ElementRef;
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
  catEntretenir(){
    if(this.clicatE){
      this.render.removeClass(this.entretenir.nativeElement,'entrete')
    }
    else(this.render.addClass(this.entretenir.nativeElement,'entrete'))
  }

  catManuals(){
    if(this.clicatM){
      this.render.removeClass(this.manual.nativeElement,'manu')

    }
    else(this.render.addClass(this.manual.nativeElement,'manu'))
  }

  constructor(private http: HttpClient,private usuariServei: UsuariService, private cartService: CartService, private render: Renderer2, private producteservei: ProducteserveiService) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.nom} s'ha afegit a la cistella.`);
  }

}
