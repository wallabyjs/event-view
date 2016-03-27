System.register(['angular2/core', 'angular2/router', '../common'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1;
    var MenuItem, NavComponent;
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
            }],
        execute: function() {
            MenuItem = (function () {
                function MenuItem(caption, link) {
                    this.caption = caption;
                    this.link = link;
                }
                return MenuItem;
            }());
            NavComponent = (function () {
                function NavComponent(_messageService, _modalService) {
                    this._messageService = _messageService;
                    this._modalService = _modalService;
                }
                NavComponent.prototype.ngOnInit = function () {
                    this.menuItems = [
                        { caption: 'Dashboard', link: ['Dashboard'] },
                        { caption: 'Speakers', link: ['Speakers'] },
                        { caption: 'Sessions', link: ['Sessions'] }
                    ];
                };
                NavComponent.prototype.resetDb = function () {
                    var _this = this;
                    var msg = 'Are you sure you want to reset the database?';
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this._messageService.resetDb();
                        }
                    });
                };
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-nav',
                        templateUrl: 'app/layout/nav.component.html',
                        styleUrls: ['app/layout/nav.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.MessageService, common_1.ModalService])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.component.js.map