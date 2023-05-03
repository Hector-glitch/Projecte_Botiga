"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CistellaComponent = void 0;
var core_1 = require("@angular/core");
var CistellaComponent = /** @class */ (function () {
    function CistellaComponent(usuariServei, cartService, formBuilder, calendar, render, http, datePipe) {
        this.usuariServei = usuariServei;
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.calendar = calendar;
        this.render = render;
        this.http = http;
        this.datePipe = datePipe;
        this.autenticat = this.usuariServei.autenticat;
        //@ts-ignore
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({});
        this.time = { hour: 13, minute: 30 };
        this.meridian = true;
        this.enviamentPremium = false;
        this.enviamentVIP = false;
        if (this.autenticat) {
            this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
        }
        this.model = this.calendar.getToday();
    }
    CistellaComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
    };
    CistellaComponent.prototype.onSubmit = function () {
        var data = new Date();
        this.dataCompra = this.datePipe.transform(data, 'yyyy-MM-dd');
        for (var i = 0; i < this.items.length; i++) {
            var query = "INSERT INTO projecta_botiga.registres_compra (nom, cognom, oferta, quantitat, data_compra, id_producta_comprat) VALUES (?,?,?,?,?,?)";
            var values = [this.nomComprador, this.cognomComprador, false, this.items[i].quantitat, this.dataCompra, this.items[i].id];
            this.http.post('http://localhost:3080/log/compraproductes', { query: query, values: values }).subscribe();
        }
        this.http.post('http://localhost:3080/log', {
            log: 'cistella',
            text: "".concat(this.nomComprador, " ").concat(this.cognomComprador, " ha fet una compra de ").concat(JSON.stringify(this.items))
        }).subscribe();
        // Process checkout data here
        this.items = this.cartService.clearItems();
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
    };
    CistellaComponent.prototype["delete"] = function (index) {
        this.cartService.removeItem(index);
    };
    CistellaComponent.prototype.validateInput = function (event, i) {
        var qty = +event.target.value;
        if (qty < 1) {
            event.target.value = this.items[i].quantitat;
            return;
        }
        this.QtyUpdated(qty, i);
    };
    CistellaComponent.prototype.QtyUpdated = function (qty, i) {
        this.items[i].quantitat = qty;
        this.cartService.setCartData(this.items);
    };
    CistellaComponent.prototype.calcTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += (item.quantitat * item.preu);
        }
        return total;
    };
    CistellaComponent.prototype.actuEnviament = function (tipusEnviament) {
        if (tipusEnviament === 'estandard') {
            this.enviamentPremium = false;
            this.enviamentVIP = false;
        }
        else if (tipusEnviament === 'premium') {
            this.enviamentPremium = true;
            this.enviamentVIP = false;
        }
        else if (tipusEnviament === 'vip') {
            this.enviamentPremium = false;
            this.enviamentVIP = true;
        }
    };
    CistellaComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-cistella',
            templateUrl: './cistella.component.html',
            styleUrls: ['./cistella.component.css', '../../assets/css/Default.css']
        })
    ], CistellaComponent);
    return CistellaComponent;
}());
exports.CistellaComponent = CistellaComponent;
