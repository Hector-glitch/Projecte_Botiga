"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContacteComponent = void 0;
var core_1 = require("@angular/core");
var ContacteComponent = /** @class */ (function () {
    function ContacteComponent(usuariServei, http) {
        this.usuariServei = usuariServei;
        this.http = http;
        this.autenticat = this.usuariServei.autenticat;
        this.captchaVerificat = false;
        if (this.autenticat) {
            this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
        }
    }
    ContacteComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
    };
    ContacteComponent.prototype.onVerify = function (token) {
        this.captchaVerificat = true;
    };
    ContacteComponent.prototype.onExpired = function (response) {
        alert("La verificació ha caducat!");
    };
    ContacteComponent.prototype.onError = function (error) {
        alert("No 'ha pogut verificar correctament el captcha!");
    };
    ContacteComponent.prototype.enviaFormulari = function () {
        this.http.post('http://localhost:3080/contacte', {
            nom: this.nomFormulari,
            correu: this.correuFormulari,
            missatge: this.missatgeFormulari
        }).subscribe();
        alert("Enviat!");
        this.nomFormulari = '';
        this.correuFormulari = '';
        this.missatgeFormulari = '';
    };
    __decorate([
        (0, core_1.ViewChild)('omplenaCorreu')
    ], ContacteComponent.prototype, "omplenaCorreu");
    __decorate([
        (0, core_1.ViewChild)('omplenaNom')
    ], ContacteComponent.prototype, "omplenaNom");
    ContacteComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-contacte',
            templateUrl: './contacte.component.html',
            styleUrls: ['./contacte.component.css', '../../assets/css/Default.css']
        })
    ], ContacteComponent);
    return ContacteComponent;
}());
exports.ContacteComponent = ContacteComponent;
