"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var opensky_service_1 = require("./opensky.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(openskyService) {
        this.openskyService = openskyService;
        this.flights = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadFlights();
    };
    DashboardComponent.prototype.loadFlights = function () {
        var _this = this;
        this.openskyService.getFlights().subscribe(function (data) {
            _this.flights = data.states;
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        __param(0, Inject(opensky_service_1.OpenskyService))
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
function Inject(OpenskyService) {
    throw new Error('Function not implemented.');
}

//# sourceMappingURL=dashboard.component.js.map
