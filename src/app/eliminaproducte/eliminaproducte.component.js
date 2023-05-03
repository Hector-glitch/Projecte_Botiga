"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EliminaproducteComponent = void 0;
var core_1 = require("@angular/core");
var EliminaproducteComponent = /** @class */ (function () {
    function EliminaproducteComponent(usuariServei, router, http, firebaseAuth, config, modalService) {
        this.usuariServei = usuariServei;
        this.router = router;
        this.http = http;
        this.firebaseAuth = firebaseAuth;
        this.modalService = modalService;
        this.autenticat = this.usuariServei.autenticat;
        if (this.autenticat) {
            this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
            if (this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Rol == 'root') {
                this.root = true;
            }
            else {
                this.root = false;
                //this.router.navigate(['/']);
            }
            ;
        }
        else {
            //this.router.navigate(['/']);
        }
        config.backdrop = 'static';
        config.keyboard = false;
    }
    EliminaproducteComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    EliminaproducteComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
        this.root = false;
        this.router.navigate(['/']);
    };
    EliminaproducteComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    EliminaproducteComponent.prototype.loadProducts = function () {
        var _this = this;
        this.http.get('http://localhost:3080/productes').subscribe(function (data) {
            _this.products = data;
        });
    };
    EliminaproducteComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.deleting = true;
        if (confirm('N\'esteu segurs que voleu eliminar el producte?\n Aquesta opció no es pot desfer!')) {
            this.http["delete"]("http://localhost:3080/eliminarproducte/".concat(product.id)).subscribe(function () {
                _this.products = _this.products.filter(function (p) { return p.id !== product.id; });
                _this.deleting = false;
            }, function (error) {
                console.log(error);
                _this.deleting = false;
            });
        }
        else {
            this.deleting = false;
        }
    };
    EliminaproducteComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-eliminaproducte',
            templateUrl: './eliminaproducte.component.html',
            styleUrls: ['./eliminaproducte.component.css', '../../assets/css/Default.css']
        })
    ], EliminaproducteComponent);
    return EliminaproducteComponent;
}());
exports.EliminaproducteComponent = EliminaproducteComponent;
