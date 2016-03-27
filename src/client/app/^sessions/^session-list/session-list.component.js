System.register(['angular2/core', 'angular2/router', '../../common', '../common', '../session-button'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, common_2, session_button_1;
    var SessionListComponent;
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
            function (session_button_1_1) {
                session_button_1 = session_button_1_1;
            }],
        execute: function() {
            SessionListComponent = (function () {
                function SessionListComponent(_filterService, _sessionService) {
                    this._filterService = _filterService;
                    this._sessionService = _sessionService;
                    this.filteredSessions = this.sessions;
                }
                SessionListComponent.prototype.filterChanged = function (searchText) {
                    this.filteredSessions = this._filterService.filter(searchText, ['id', 'name', 'type'], this.sessions);
                };
                SessionListComponent.prototype.getSessions = function () {
                    var _this = this;
                    this.sessions = [];
                    this._sessionService.getSessions()
                        .subscribe(function (sessions) {
                        _this.sessions = _this.filteredSessions = sessions;
                        _this.filterComponent.clear();
                    }, function (error) {
                        console.log('error occurred here');
                        console.log(error);
                    }, function () {
                        console.log('completed');
                    });
                };
                SessionListComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                SessionListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this.getSessions();
                    this._dbResetSubscription = this._sessionService.onDbReset
                        .subscribe(function () { return _this.getSessions(); });
                };
                SessionListComponent.prototype.trackBySessions = function (index, session) {
                    return session.id;
                };
                __decorate([
                    core_1.ViewChild(common_1.FilterTextComponent), 
                    __metadata('design:type', common_1.FilterTextComponent)
                ], SessionListComponent.prototype, "filterComponent", void 0);
                SessionListComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-sessions',
                        templateUrl: 'app/^sessions/^session-list/session-list.component.html',
                        directives: [common_1.FilterTextComponent, session_button_1.SessionButtonComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['app/^sessions/^session-list/session-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [common_1.FilterService, common_2.SessionService])
                ], SessionListComponent);
                return SessionListComponent;
            }());
            exports_1("SessionListComponent", SessionListComponent);
        }
    }
});
//# sourceMappingURL=session-list.component.js.map