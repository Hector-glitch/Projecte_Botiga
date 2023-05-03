"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GraficsComponent = void 0;
var core_1 = require("@angular/core");
var auto_1 = __importDefault(require("chart.js/auto"));
var GraficsComponent = /** @class */ (function () {
    function GraficsComponent(http, usuariServei, router) {
        var _this = this;
        this.http = http;
        this.usuariServei = usuariServei;
        this.router = router;
        this.dades = [];
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
        this.http.get('http://localhost:3080/dadescompres').subscribe(function (data) {
            _this.dades = data;
            _this.renderChart();
        });
    }
    GraficsComponent.prototype.renderChart = function () {
        var _this = this;
        // Agrupar los datos por fecha y producto
        var groupedData = this.dades.reduce(function (result, d) {
            var key = "".concat(d.data_compra, "-").concat(d.producte_comprat);
            if (!result[key]) {
                result[key] = {
                    label: d.producte_comprat,
                    data: [],
                    backgroundColor: _this.getRandomColor()
                };
            }
            result[key].data.push(d.quantitat);
            return result;
        }, {});
        // Crear un conjunto de datos para cada grupo de datos
        var datasets = Object.keys(groupedData).map(function (key) { return groupedData[key]; });
        // Configurar la gráfica de barras
        new auto_1["default"]('grafic-ventes', {
            type: 'bar',
            data: {
                labels: this.getUniqueDates(),
                datasets: datasets
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        stacked: false
                    },
                    x: {
                        beginAtZero: true,
                        stacked: false
                    }
                }
            }
        });
        var groupedDataOferta = this.dades.reduce(function (result, d) {
            var key = "".concat(d.data_compra, "-").concat(d.oferta);
            if (!result[key]) {
                result[key] = {
                    label: d.oferta ? 'En Oferta' : 'Cap Oferta',
                    data: [],
                    borderColor: d.oferta ? 'green' : 'red',
                    fill: false
                };
            }
            result[key].data.push(d.quantitat);
            return result;
        }, {});
        // Crear un conjunto de datos para cada grupo de datos
        var datasetsOferta = Object.keys(groupedDataOferta).map(function (key) { return groupedDataOferta[key]; });
        // Configurar la gráfica de líneas
        new auto_1["default"]('grafic-oferta', {
            type: 'line',
            data: {
                labels: this.getUniqueDates(),
                datasets: datasetsOferta
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };
    // Obtener una lista de todas las fechas únicas en los datos
    GraficsComponent.prototype.getUniqueDates = function () {
        return __spreadArray([], new Set(this.dades.map(function (d) { return d.data_compra; })), true);
    };
    GraficsComponent.prototype.getRandomColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    };
    GraficsComponent.prototype.tancarSessio = function () {
        this.usuariServei.autenticat = false;
        this.autenticat = false;
        this.nomAutenticat = 'null';
        this.root = false;
        this.router.navigate(['/']);
    };
    GraficsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-grafics',
            templateUrl: './grafics.component.html',
            styleUrls: ['./grafics.component.css', '../../assets/css/Default.css']
        })
    ], GraficsComponent);
    return GraficsComponent;
}());
exports.GraficsComponent = GraficsComponent;
