import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cistella.service';
import {UsuariService} from "../usuari.service";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import { DatePipe } from '@angular/common';


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
  nomComprador: any;
  cognomComprador: any;
  adrecaComprador: any;
  dataCompra: any;

  constructor(private usuariServei: UsuariService, private cartService: CartService, private formBuilder: FormBuilder, private calendar: NgbCalendar, private render: Renderer2,private http:HttpClient,private datePipe: DatePipe) {
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
    const data = new Date();
    this.dataCompra = this.datePipe.transform(data, 'yyyy-MM-dd');
    for (let i = 0;i<this.items.length;i++){
      let query = `INSERT INTO projecta_botiga.registres_compra (nom, cognom, producte_comprat, oferta, quantitat, data_compra) VALUES (?,?,?,?,?,?)`;
      let values = [this.nomComprador, this.cognomComprador, this.items[i].nom, false, this.items[i].quantitat, this.dataCompra];
      this.http.post('http://172.16.8.1:3080/log/compraproductes', {query, values}).subscribe();
    }
    this.http.post<any>('http://172.16.8.1:3080/log',{
      log: 'cistella',
      text: `${this.nomComprador} ${this.cognomComprador} ha fet una compra de ${JSON.stringify(this.items)}`
    }).subscribe();
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
      event.target.value = this.items[i].quantitat;
      return;
    }
    this.QtyUpdated(qty, i)
  }
  private QtyUpdated(qty:number, i:number){
    this.items[i].quantitat = qty;

    this.cartService.setCartData(this.items)
  }
  public calcTotal():number {
    let total:number = 0;
    for(let item of this.items){
      total += (item.quantitat * item.preu);
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
