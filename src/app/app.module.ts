import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

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
import { VerificarComponent } from './verificar/verificar.component';

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
    VerificarComponent,
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
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
