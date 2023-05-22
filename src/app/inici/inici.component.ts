import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {UsuariService} from "../usuari.service";
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css','../../assets/css/Default.css']
})
export class IniciComponent implements OnInit{
  nomAutenticat: any;
  autenticat = this.usuariServei.autenticat;
  root: any; //creem la boolean
  book: any = {};

  ngOnInit(): void {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=random').subscribe((data: any) => {
      const randomBook = data.items[Math.floor(Math.random() * data.items.length)];
      this.book.title = randomBook.volumeInfo.title;
      this.book.authors = randomBook.volumeInfo.authors;
      this.book.description = randomBook.volumeInfo.description;
      this.book.thumbnail = randomBook.volumeInfo.imageLinks.thumbnail;
    });
  }
  tancarSessio(){
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
    this.root=false;
  }
  constructor(private renderer: Renderer2,private usuariServei: UsuariService, private http: HttpClient) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;

      //Aqui verifiquem si l'usari es admin o no
      if(this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Rol == 'root'){
        this.root = true;
      }
      else(this.root=false);
    }

  }
}
