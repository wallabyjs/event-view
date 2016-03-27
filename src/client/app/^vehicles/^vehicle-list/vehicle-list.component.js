System.register(['angular2/core', 'angular2/router', '../../common', '../common', '../vehicle-button'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, common_2, vehicle_button_1;
    var VehicleListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (vehicle_button_1_1) {
                vehicle_button_1 = vehicle_button_1_1;
            }],
        execute: function() {
            VehicleListComponent = (function () {
                function VehicleListComponent(_filterService, _vehicleService) {
                    this._filterService = _filterService;
                    this._vehicleService = _vehicleService;
                    this.filteredVehicles = this.vehicles;
                }
                VehicleListComponent.prototype.filterChanged = function (searchText) {
                    this.filteredVehicles = this._filterService.filter(searchText, ['id', 'name', 'type'], this.vehicles);
                };
                VehicleListComponent.prototype.getVehicles = function () {
                    var _this = this;
                    this.vehicles = [];
                    this._vehicleService.getVehicles()
                        .subscribe(function (vehicles) {
                        _this.vehicles = _this.filteredVehicles = vehicles;
                        _this.filterComponent.clear();
                    }, function (error) {
                        console.log('error occurred here');
                        console.log(error);
                    }, function () {
                        console.log('completed');
                    });
                };
                VehicleListComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                VehicleListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this.getVehicles();
                    this._dbResetSubscription = this._vehicleService.onDbReset
                        .subscribe(function () { return _this.getVehicles(); });
                };
                VehicleListComponent.prototype.trackByVehicles = function (index, vehicle) {
                    return vehicle.id;
                };
                __decorate([
                    core_1.ViewChild(common_1.FilterTextComponent), 
                    __metadata('design:type', common_1.FilterTextComponent)
                ], VehicleListComponent.prototype, "filterComponent", void 0);
                VehicleListComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-vehicles',
                        templateUrl: 'app/^vehicles/^vehicle-list/vehicle-list.component.html',
                        directives: [common_1.FilterTextComponent, vehicle_button_1.VehicleButtonComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['app/^vehicles/^vehicle-list/vehicle-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [common_1.FilterService, common_2.VehicleService])
                ], VehicleListComponent);
                return VehicleListComponent;
            }());
            exports_1("VehicleListComponent", VehicleListComponent);
        }
    }
});
//# sourceMappingURL=vehicle-list.component.js.map