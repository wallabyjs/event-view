System.register(['angular2/core', 'angular2/router', '../../common', '../common/session.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, session_service_1;
    var SessionComponent;
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
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            }],
        execute: function() {
            SessionComponent = (function () {
                function SessionComponent(_entityService, _modalService, _routeParams, _router, _toastService, _sessionService) {
                    this._entityService = _entityService;
                    this._modalService = _modalService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._toastService = _toastService;
                    this._sessionService = _sessionService;
                    this.editSession = {};
                }
                SessionComponent.prototype.cancel = function (showToast) {
                    if (showToast === void 0) { showToast = true; }
                    this.editSession = this._entityService.clone(this.session);
                    if (showToast) {
                        this._toastService.activate("Cancelled changes to " + this.session.name);
                    }
                };
                SessionComponent.prototype.delete = function () {
                    var _this = this;
                    var msg = "Do you want to delete the " + this.session.name + "?";
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this.cancel(false);
                            _this._sessionService.deleteSession(_this.session)
                                .subscribe(function () {
                                _this._toastService.activate("Deleted " + _this.session.name);
                                _this._gotoSessions();
                            }, function (err) { return _this._handleServiceError('Delete', err); }, // Failure path
                            function () { return console.log('Delete Completed'); } // Completed actions
                             // Completed actions
                            );
                        }
                    });
                };
                SessionComponent.prototype.isAddMode = function () {
                    var id = +this._routeParams.get('id');
                    return isNaN(id);
                };
                SessionComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                SessionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this._getSession();
                    this._dbResetSubscription = this._sessionService.onDbReset
                        .subscribe(function () {
                        _this._getSession();
                    });
                };
                SessionComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !this.session ||
                        !this._isDirty() ||
                        this._modalService.activate();
                };
                SessionComponent.prototype.save = function () {
                    var _this = this;
                    var session = this.session = this._entityService.merge(this.session, this.editSession);
                    if (session.id == null) {
                        this._sessionService.addSession(session)
                            .subscribe(function (v) {
                            _this._setEditSession(v);
                            _this._toastService.activate("Successfully added " + v.name);
                            _this._gotoSessions();
                        });
                        return;
                    }
                    this._sessionService.updateSession(this.session)
                        .subscribe(function () { return _this._toastService.activate("Successfully saved " + _this.session.name); });
                };
                SessionComponent.prototype._getSession = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id === 0) {
                        return;
                    }
                    ;
                    if (this.isAddMode()) {
                        this.session = { name: '', type: '' };
                        this.editSession = this._entityService.clone(this.session);
                        return;
                    }
                    this._sessionService.getSession(id)
                        .subscribe(function (session) { return _this._setEditSession(session); });
                };
                SessionComponent.prototype._gotoSessions = function () {
                    var id = this.session ? this.session.id : null;
                    var route = ['Sessions', { id: id }];
                    this._router.navigate(route);
                };
                SessionComponent.prototype._handleServiceError = function (op, err) {
                    console.error(op + " error: " + (err.message || err));
                };
                SessionComponent.prototype._isDirty = function () {
                    return this._entityService.propertiesDiffer(this.session, this.editSession);
                };
                SessionComponent.prototype._setEditSession = function (session) {
                    if (session) {
                        this.session = session;
                        this.editSession = this._entityService.clone(this.session);
                    }
                    else {
                        this._gotoSessions();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SessionComponent.prototype, "session", void 0);
                SessionComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-session',
                        templateUrl: 'app/^sessions/^session/session.component.html',
                        styles: ['.mdl-textfield__label {top: 0;}'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.EntityService, common_1.ModalService, router_1.RouteParams, router_1.Router, common_1.ToastService, session_service_1.SessionService])
                ], SessionComponent);
                return SessionComponent;
            }());
            exports_1("SessionComponent", SessionComponent);
        }
    }
});
//# sourceMappingURL=session.component.js.map