import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cistella.service';
import {UsuariService} from "../usuari.service";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css','../../assets/css/Default.css']
})
export class CistellaComponent {
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({});
  model: NgbDateStruct;
  time = { hour: 13, minute: 30 };
  meridian = true;
  enviamentPremium = false;
  enviamentVIP = false;
  constructor(private usuariServei: UsuariService, private cartService: CartService, private formBuilder: FormBuilder, private calendar: NgbCalendar, private render: Renderer2) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
    }
    this.model = this.calendar.getToday();
  }
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearItems();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  delete(index: number) {
    this.cartService.removeItem(index);
  }

  validateInput(event:any, i:number){
    const qty = +event.target.value;
    if (qty < 1){
      event.target.value = this.items[i].qty;
      return;
    }
    this.QtyUpdated(qty, i)
  }
  private QtyUpdated(qty:number, i:number){
    this.items[i].qty = qty;

    this.cartService.setCartData(this.items)
  }
  public calcTotal():number {
    let total:number = 0;
    for(let item of this.items){
      total += (item.qty * item.preu);
    }
    return total;
  }
  actuEnviament(tipusEnviament: string) {
    if (tipusEnviament === 'estandard') {
      this.enviamentPremium = false;
      this.enviamentVIP = false;
    } else if (tipusEnviament === 'premium') {
      this.enviamentPremium = true;
      this.enviamentVIP = false;
    } else if (tipusEnviament === 'vip') {
      this.enviamentPremium = false;
      this.enviamentVIP = true;
    }
  }
}
