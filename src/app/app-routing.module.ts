import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { RegistreComponent } from './registre/registre.component';
import { CistellaComponent } from './cistella/cistella.component';
import {CondicionsComponent} from "./condicions/condicions.component";
import {ContacteComponent} from "./contacte/contacte.component";
import {LoginComponent} from "./login/login.component";
import {PerfilComponent} from "./perfil/perfil.component";

const routes: Routes = [

  { path: '',
    component:IniciComponent},
  { path: 'cataleg',
    component:CatalegComponent},
  { path: 'registre',
    component: RegistreComponent },
  { path: 'cistella',
    component: CistellaComponent},
  { path: 'condicions',
    component: CondicionsComponent },
  { path: 'contacte',
    component: ContacteComponent },
  { path: 'login',
    component: LoginComponent },
  { path: 'perfil',
    component: PerfilComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
