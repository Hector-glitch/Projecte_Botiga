"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.items = [];
    }
    CartService.prototype.addToCart = function (product) {
        this.items.push(product);
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.clearItems = function () {
        this.items = [];
        return this.items;
    };
    CartService.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    CartService.prototype.setCartData = function (data) {
        localStorage.setItem('cart', JSON.stringify(data));
    };
    CartService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
