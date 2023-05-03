"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IniciComponent = void 0;
var core_1 = require("@angular/core");
var IniciComponent = /** @class */ (function () {
    function IniciComponent(renderer, usuariServei) {
        this.renderer = renderer;
        this.usuariServei = usuariServei;
        this.autenticat = this.usuariServei.autenticat;
        if (this.autenticat) {
            this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
            //Aqui verifiquem si l'usari es admin o no
            if (this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Rol == 'root') {
                this.root = true;
            }
            else
                (this.root = false);
        }
    }
    IniciComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
        this.root = false;
    };
    IniciComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-inici',
            templateUrl: './inici.component.html',
            styleUrls: ['./inici.component.css', '../../assets/css/Default.css']
        })
    ], IniciComponent);
    return IniciComponent;
}());
exports.IniciComponent = IniciComponent;
