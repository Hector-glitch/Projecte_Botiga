"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CondicionsComponent = void 0;
var core_1 = require("@angular/core");
var CondicionsComponent = /** @class */ (function () {
    function CondicionsComponent(usuariServei, render) {
        this.usuariServei = usuariServei;
        this.render = render;
        this.autenticat = this.usuariServei.autenticat;
        this.negre = true;
        this.active = 1;
        if (this.autenticat) {
            this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
        }
    }
    CondicionsComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
    };
    CondicionsComponent.prototype.canviarFons = function () {
        if (this.negre) {
            this.render.addClass(this.fons.nativeElement, 'canviarColor');
            this.negre = false;
        }
        else {
            this.render.removeClass(this.fons.nativeElement, 'canviarColor');
            this.negre = true;
        }
    };
    __decorate([
        (0, core_1.ViewChild)('fons')
    ], CondicionsComponent.prototype, "fons");
    CondicionsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-condicions',
            templateUrl: './condicions.component.html',
            styleUrls: ['./condicions.component.css', '../../assets/css/Default.css']
        })
    ], CondicionsComponent);
    return CondicionsComponent;
}());
exports.CondicionsComponent = CondicionsComponent;
