"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CatalegComponent = void 0;
var core_1 = require("@angular/core");
var CatalegComponent = /** @class */ (function () {
    function CatalegComponent(http, usuariServei, cartService, render, producteservei) {
        this.http = http;
        this.usuariServei = usuariServei;
        this.cartService = cartService;
        this.render = render;
        this.producteservei = producteservei;
        this.autenticat = this.usuariServei.autenticat;
        if (this.autenticat) {
            this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
        }
    }
    CatalegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producteservei.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    CatalegComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
    };
    CatalegComponent.prototype.catEntretenir = function () {
        if (this.clicatE) {
            this.render.removeClass(this.entretenir.nativeElement, 'entrete');
        }
        else
            (this.render.addClass(this.entretenir.nativeElement, 'entrete'));
    };
    CatalegComponent.prototype.catManuals = function () {
        if (this.clicatM) {
            this.render.removeClass(this.manual.nativeElement, 'manu');
        }
        else
            (this.render.addClass(this.manual.nativeElement, 'manu'));
    };
    CatalegComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product);
        window.alert("".concat(product.nom, " s'ha afegit a la cistella."));
    };
    __decorate([
        (0, core_1.ViewChild)('manual')
    ], CatalegComponent.prototype, "manual");
    __decorate([
        (0, core_1.ViewChild)('entretenir')
    ], CatalegComponent.prototype, "entretenir");
    CatalegComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-cataleg',
            templateUrl: './cataleg.component.html',
            styleUrls: ['./cataleg.component.css', '../../assets/css/Default.css']
        })
    ], CatalegComponent);
    return CatalegComponent;
}());
exports.CatalegComponent = CatalegComponent;
