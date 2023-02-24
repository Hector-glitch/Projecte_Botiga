import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cistella.service';

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css','../../assets/css/Default.css']
})

export class CatalegComponent  {
  products = products;
  clicatE: any;
  clicatM: any;

  // @ts-ignore
  @ViewChild('manual') manual: ElementRef;
  // @ts-ignore
  @ViewChild('entretenir') entretenir: ElementRef;
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

  constructor(private cartService: CartService, private render: Renderer2) {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} s'ha afegit a la cistella.`);
  }

}
