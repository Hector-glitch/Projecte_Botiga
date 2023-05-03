"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var inici_component_1 = require("./inici/inici.component");
var cataleg_component_1 = require("./cataleg/cataleg.component");
var registre_component_1 = require("./registre/registre.component");
var cistella_component_1 = require("./cistella/cistella.component");
var condicions_component_1 = require("./condicions/condicions.component");
var contacte_component_1 = require("./contacte/contacte.component");
var login_component_1 = require("./login/login.component");
var perfil_component_1 = require("./perfil/perfil.component");
var canviarpassword_component_1 = require("./canviarpassword/canviarpassword.component");
var grafics_component_1 = require("./grafics/grafics.component");
var afegiradmin_component_1 = require("./afegiradmin/afegiradmin.component");
var afegirproducte_component_1 = require("./afegirproducte/afegirproducte.component");
var eliminaproducte_component_1 = require("./eliminaproducte/eliminaproducte.component");
var routes = [
    { path: '',
        component: inici_component_1.IniciComponent },
    { path: 'cataleg',
        component: cataleg_component_1.CatalegComponent },
    { path: 'registre',
        component: registre_component_1.RegistreComponent },
    { path: 'cistella',
        component: cistella_component_1.CistellaComponent },
    { path: 'condicions',
        component: condicions_component_1.CondicionsComponent },
    { path: 'contacte',
        component: contacte_component_1.ContacteComponent },
    { path: 'login',
        component: login_component_1.LoginComponent },
    { path: 'perfil',
        component: perfil_component_1.PerfilComponent },
    { path: 'canviarpasswd',
        component: canviarpassword_component_1.CanviarpasswordComponent },
    { path: 'grafics',
        component: grafics_component_1.GraficsComponent },
    { path: 'afegiradmin',
        component: afegiradmin_component_1.AfegiradminComponent },
    { path: 'nouproducte',
        component: afegirproducte_component_1.AfegirproducteComponent },
    { path: 'eliminaproducte',
        component: eliminaproducte_component_1.EliminaproducteComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
