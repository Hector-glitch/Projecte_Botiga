import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cistella.service';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css','../../assets/css/Default.css']
})
export class CistellaComponent {
  deleteItem$ = new Subject<{ id: string }>();
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }

  constructor(private registraServei: RegisterLoginService,
  private cartService: CartService,
  private formBuilder: FormBuilder) {
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearItems();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  delete(item: any) {
    this.deleteItem$.next({ id: item.id });
    }
}
