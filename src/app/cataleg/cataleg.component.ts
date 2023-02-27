import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import { Product, products } from '../products';
import { CartService } from '../cistella.service';

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css','../../assets/css/Default.css']
})

export class CatalegComponent  {
  products = products;
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat
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

  transform(value: any[], filterString: string, propName:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || propName === ''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().include(filterString.toLowerCase())){
        result.push(a);
    }
    });
    return result;
  }


  tancarSessio() {
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat = false;
    this.nomAutenticat = 'null';
    console.log("funciona clic")
  }
  constructor(private registraServei: RegisterLoginService,
              private cartService: CartService, private render: Renderer2) {
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} s'ha afegit a la cistella.`);
  }

}
