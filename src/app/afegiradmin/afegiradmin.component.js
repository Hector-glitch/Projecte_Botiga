"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AfegiradminComponent = void 0;
var core_1 = require("@angular/core");
var AfegiradminComponent = /** @class */ (function () {
    function AfegiradminComponent(usuariServei, router, http, firebaseAuth, config, modalService) {
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
                this.router.navigate(['/']);
            }
            ;
        }
        else {
            this.router.navigate(['/']);
        }
        config.backdrop = 'static';
        config.keyboard = false;
    }
    AfegiradminComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
        this.root = false;
        this.router.navigate(['/']);
    };
    AfegiradminComponent.prototype.registrar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (i = 0; i < this.usuariServei.arrClients.clients.length; i++) {
                            if (this.usuariServei.arrClients.clients[i].Correu == this.correu) {
                                this.correuTrobat = true;
                            }
                        }
                        if (!this.correuTrobat) return [3 /*break*/, 1];
                        alert("Ja existeix un usuari registrat amb aquest correu!");
                        return [3 /*break*/, 3];
                    case 1:
                        this.http.post('http://localhost:3080/datausers', {
                            Adreça: this.adreca,
                            Cognoms: this.cognoms,
                            Correu: this.correu,
                            Nom: this.nom,
                            Telèfon: this.telefon,
                            //Afegim un camp que es rol que per defecte es client.
                            Rol: 'root'
                        }).subscribe();
                        this.http.post('http://localhost:3080/signup', {
                            email: this.correu,
                            password: this.passwd
                        }).subscribe();
                        this.http.post('http://localhost:3080/log', {
                            log: 'registre',
                            text: "".concat(this.nom, " s'ha registrat amb l'adre\u00E7a de correu ").concat(this.correu)
                        }).subscribe();
                        window.alert("S'ha enviat un correu de verificació.");
                        return [4 /*yield*/, this.router.navigate(['/'])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AfegiradminComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    AfegiradminComponent.prototype.ngOnInit = function () { };
    AfegiradminComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-afegiradmin',
            templateUrl: './afegiradmin.component.html',
            styleUrls: ['./afegiradmin.component.css', '../../assets/css/Default.css']
        })
    ], AfegiradminComponent);
    return AfegiradminComponent;
}());
exports.AfegiradminComponent = AfegiradminComponent;
