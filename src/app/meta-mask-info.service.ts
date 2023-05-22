import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MetaMaskInfoService {
  constructor(private http: HttpClient) { }

  getCurrencyValue(currencySymbol: string, targetCurrency: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${currencySymbol}&vs_currencies=${targetCurrency}`;

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          this.http.get(url).subscribe((response: any) => {
            resolve(response[currencySymbol][targetCurrency]);
          });
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}
