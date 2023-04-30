import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./products";

@Injectable({
  providedIn: 'root'
})
export class ProducteserveiService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://172.16.8.1:3080/productes');
  }
}
