"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var compat_1 = require("@angular/fire/compat");
var app_component_1 = require("./app.component");
var registre_component_1 = require("./registre/registre.component");
var app_routing_module_1 = require("./app-routing.module");
var contacte_component_1 = require("./contacte/contacte.component");
var inici_component_1 = require("./inici/inici.component");
var cataleg_component_1 = require("./cataleg/cataleg.component");
var cistella_component_1 = require("./cistella/cistella.component");
var condicions_component_1 = require("./condicions/condicions.component");
var login_component_1 = require("./login/login.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var perfil_component_1 = require("./perfil/perfil.component");
var canviarpassword_component_1 = require("./canviarpassword/canviarpassword.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_hcaptcha_1 = require("ng-hcaptcha");
var grafics_component_1 = require("./grafics/grafics.component");
var common_1 = require("@angular/common");
var afegiradmin_component_1 = require("./afegiradmin/afegiradmin.component");
var afegirproducte_component_1 = require("./afegirproducte/afegirproducte.component");
var eliminaproducte_component_1 = require("./eliminaproducte/eliminaproducte.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                registre_component_1.RegistreComponent,
                contacte_component_1.ContacteComponent,
                inici_component_1.IniciComponent,
                cataleg_component_1.CatalegComponent,
                cistella_component_1.CistellaComponent,
                condicions_component_1.CondicionsComponent,
                login_component_1.LoginComponent,
                perfil_component_1.PerfilComponent,
                canviarpassword_component_1.CanviarpasswordComponent,
                grafics_component_1.GraficsComponent,
                afegiradmin_component_1.AfegiradminComponent,
                afegirproducte_component_1.AfegirproducteComponent,
                eliminaproducte_component_1.EliminaproducteComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbRating,
                ng_bootstrap_1.NgbTimepicker,
                ng_bootstrap_1.NgbNav,
                ng_bootstrap_1.NgbNavOutlet,
                ng_bootstrap_1.NgbInputDatepicker,
                ng_hcaptcha_1.NgHcaptchaModule,
                ng_bootstrap_1.NgbNavItem,
                ng_bootstrap_1.NgbNavLink,
                ng_bootstrap_1.NgbNavContent,
                ng_bootstrap_1.NgbPopover,
                router_1.RouterModule.forRoot([
                    { path: 'products/:productId', component: cataleg_component_1.CatalegComponent },
                    { path: 'cart', component: cistella_component_1.CistellaComponent },
                ]),
                compat_1.AngularFireModule.initializeApp({
                    apiKey: "AIzaSyCUXh-1oomV95HRDcmmtbOw83Tk9e8AiTk",
                    authDomain: "book-net-eb5c1.firebaseapp.com",
                    projectId: "book-net-eb5c1",
                    storageBucket: "book-net-eb5c1.appspot.com",
                    messagingSenderId: "1004200328733",
                    appId: "1:1004200328733:web:c3dc24caa99a9b98ef10f4",
                    measurementId: "G-HH3JEHKSEK"
                }),
                ng_hcaptcha_1.NgHcaptchaModule.forRoot({
                    siteKey: '8f6ae743-c8d0-4c3b-bb0d-f42684acfdbc',
                    languageCode: 'ca'
                }), ng_hcaptcha_1.NgHcaptchaModule.forRoot({
                    siteKey: '8f6ae743-c8d0-4c3b-bb0d-f42684acfdbc'
                }), ng_bootstrap_1.NgbModule,
            ],
            providers: [
                common_1.DatePipe,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
