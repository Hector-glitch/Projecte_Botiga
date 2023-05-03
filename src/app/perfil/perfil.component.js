"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PerfilComponent = void 0;
var core_1 = require("@angular/core");
var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(renderer, router, usuariServei, http) {
        this.renderer = renderer;
        this.router = router;
        this.usuariServei = usuariServei;
        this.http = http;
        this.autenticat = this.usuariServei.autenticat;
        this.edita = false;
        if (this.autenticat) {
            this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
            this.cognomsAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Cognoms;
            this.adrecaAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Adreça;
            this.correuAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Correu;
            this.telefonAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Telèfon;
            this.nom = this.nomAutenticat;
            this.cognoms = this.cognomsAutenticat;
            this.adreca = this.adrecaAutenticat;
            this.correu = this.correuAutenticat;
            this.telefon = this.telefonAutenticat;
            if (this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Rol == 'root') {
                this.rol = 'root';
            }
            else {
                this.rol = 'client';
            }
            ;
        }
        else {
            this.router.navigate(['/']);
        }
    }
    PerfilComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
        this.cognomsAutenticat = 'null';
        this.adrecaAutenticat = 'null';
        this.correuAutenticat = 'null';
        this.telefonAutenticat = 'null';
        this.router.navigate(['/']);
    };
    PerfilComponent.prototype.editaDades = function () {
        this.edita = true;
    };
    PerfilComponent.prototype.enviaDades = function () {
        this.http.post('http://localhost:3080/datausersdelete', {
            Adreça: this.adrecaAutenticat,
            Cognoms: this.cognomsAutenticat,
            Correu: this.correuAutenticat,
            Nom: this.nomAutenticat,
            Telèfon: this.telefonAutenticat,
            //Afegim un camp que es rol que per defecte es client.
            Rol: this.rol
        }).subscribe();
        this.nomAutenticat = this.nom;
        this.cognomsAutenticat = this.cognoms;
        this.adrecaAutenticat = this.adreca;
        this.telefonAutenticat = this.telefon;
        this.http.post('http://localhost:3080/datausers', {
            Adreça: this.adreca,
            Cognoms: this.cognoms,
            Correu: this.correu,
            Nom: this.nom,
            Telèfon: this.telefon,
            //Afegim un camp que es rol que per defecte es client.
            Rol: this.rol
        }).subscribe();
        this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom = this.nomAutenticat;
        this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Cognoms = this.cognomsAutenticat;
        this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Adreça = this.adrecaAutenticat;
        this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Correu = this.correuAutenticat;
        this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Telèfon = this.telefonAutenticat;
        this.http.post('http://localhost:3080/log', {
            log: 'perfil',
            text: "L'usuari amb correu ".concat(this.correu, ", ha editat les dades del seu perfil")
        }).subscribe();
        this.edita = false;
    };
    PerfilComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-perfil',
            templateUrl: './perfil.component.html',
            styleUrls: ['./perfil.component.css', '../../assets/css/Default.css']
        })
    ], PerfilComponent);
    return PerfilComponent;
}());
exports.PerfilComponent = PerfilComponent;
