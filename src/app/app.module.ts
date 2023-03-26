import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {AngularFireModule} from "@angular/fire/compat";
import { AppComponent } from './app.component';
import { RegistreComponent } from './registre/registre.component';
import { AppRoutingModule } from './app-routing.module';
import { ContacteComponent } from './contacte/contacte.component';
import { IniciComponent } from './inici/inici.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { CistellaComponent } from './cistella/cistella.component';
import { CondicionsComponent } from './condicions/condicions.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { PerfilComponent } from './perfil/perfil.component';
import { CanviarpasswordComponent } from './canviarpassword/canviarpassword.component';
import { NgHcaptchaModule } from 'ng-hcaptcha';

@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    ContacteComponent,
    IniciComponent,
    CatalegComponent,
    CistellaComponent,
    CondicionsComponent,
    LoginComponent,
    PerfilComponent,
    CanviarpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: 'products/:productId', component: CatalegComponent },
        { path: 'cart', component: CistellaComponent },
  ]),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCUXh-1oomV95HRDcmmtbOw83Tk9e8AiTk",
      authDomain: "book-net-eb5c1.firebaseapp.com",
      projectId: "book-net-eb5c1",
      storageBucket: "book-net-eb5c1.appspot.com",
      messagingSenderId: "1004200328733",
      appId: "1:1004200328733:web:c3dc24caa99a9b98ef10f4",
      measurementId: "G-HH3JEHKSEK"
    }),
    NgHcaptchaModule.forRoot({
      siteKey: '8f6ae743-c8d0-4c3b-bb0d-f42684acfdbc',
      languageCode: 'ca',
    }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
