import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./products";


@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}


  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];

    return this.items;
  }
  removeItem(index: any){
    this.items.splice(index, 1);
  }
  setCartData(data:any){
    localStorage.setItem('cart', JSON.stringify(data))
  }


}
