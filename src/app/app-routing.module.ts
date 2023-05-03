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
import {CanviarpasswordComponent} from "./canviarpassword/canviarpassword.component";
import {GraficsComponent} from "./grafics/grafics.component";
import {AfegiradminComponent} from "./afegiradmin/afegiradmin.component";
import {AfegirproducteComponent} from "./afegirproducte/afegirproducte.component";
import {EliminaproducteComponent} from "./eliminaproducte/eliminaproducte.component";


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
  { path: 'canviarpasswd',
    component: CanviarpasswordComponent},
  {path: 'grafics',
    component: GraficsComponent },
  { path: 'afegiradmin',
    component: AfegiradminComponent},
  { path: 'nouproducte',
    component: AfegirproducteComponent},
  { path: 'eliminaproducte',
    component: EliminaproducteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
