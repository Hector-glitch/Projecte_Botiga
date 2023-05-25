import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cistella.service';
import {UsuariService} from "../usuari.service";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import { DatePipe } from '@angular/common';
import {MetaMaskInfoService} from "../meta-mask-info.service";
import * as Web3 from 'web3';

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css','../../assets/css/Default.css']
})
export class CistellaComponent implements OnInit{
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  //@ts-ignore
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
  root: any;
  currencyValue: number;
  selectedCurrency: string;

  ngOnInit(): void {
    this.getCurrencyValue();
  }

  constructor(private usuariServei: UsuariService,private cryptoService: MetaMaskInfoService, private cartService: CartService, private formBuilder: FormBuilder, private calendar: NgbCalendar, private render: Renderer2,private http:HttpClient,private datePipe: DatePipe) {
    this.selectedCurrency = 'usd'; // Establece la moneda de destino predeterminada (USD)
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
      let query = `INSERT INTO projecta_botiga.registres_compra (nom, cognom, oferta, quantitat, data_compra, id_producta_comprat) VALUES (?,?,?,?,?,?)`;
      let values = [this.nomComprador, this.cognomComprador, this.items[i].oferta, this.items[i].quantitat, this.dataCompra, this.items[i].id];
      this.http.post('http://localhost:3080/log/compraproductes', {query, values}).subscribe();
    }
    this.http.post<any>('http://localhost:3080/log',{
      log: 'cistella',
      text: `${this.nomComprador} ${this.cognomComprador} ha fet una compra de ${JSON.stringify(this.items)}`
    }).subscribe();

    // @ts-ignore
    const web3 = new Web3(Web3.givenProvider);
    const recipientAddress = '0x93DC645f2838fE364d57cd046d9b26C10517c015';
    const amountInEuros = this.calcTotal(); // Cantidad en euros que deseas enviar
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur&api_key=BNB';
    this.http.get(apiUrl)
      .subscribe((data: any) => {
        const bnbToEuroRate = data.bitcoin.eur;
        // Utilitza el valor bnbToEuroRate per calcular la quantitat en Ether i enviar la transacció
        const amountInEther = (amountInEuros * 100) / bnbToEuroRate;
        const amountInWei = web3.utils.toWei(amountInEther.toString(), 'ether');
        console.log(amountInWei);
        console.log(amountInEther);
        console.log(amountInEuros);
        web3.eth.sendTransaction({
          from: web3.givenProvider.selectedAddress,
          to: recipientAddress,
          value: amountInWei
        })
          .on('transactionHash', (hash: string) => {
            console.log('Transaction hash:', hash);
          })
          .on('confirmation', (confirmationNumber: number, receipt: any) => {
            console.log('Confirmation number:', confirmationNumber);
            // Realitza accions addicionals després que la transacció s'hagi confirmat
          })
          .on('error', (error: any) => {
            console.error('Error:', error);
          });
      }, (error: any) => {
        console.error('Error:', error);
      });
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
  getCurrencyValue(): void {
    const currencySymbol = 'BNB'; // Reemplaza 'crypto' por el símbolo de la criptomoneda que deseas obtener

    this.cryptoService.getCurrencyValue(currencySymbol, this.selectedCurrency)
      .then((value: number) => {
        this.currencyValue = value;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  onCurrencyChange(): void {
    this.getCurrencyValue();
  }
}
