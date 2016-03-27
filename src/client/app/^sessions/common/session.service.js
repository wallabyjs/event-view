System.register(['angular2/core', 'angular2/http', '../../common'], function(exports_1, context_1) {
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
    var core_1, http_1, common_1;
    var sessionsUrl, SessionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            sessionsUrl = common_1.CONFIG.baseUrls.sessions;
            SessionService = (function () {
                function SessionService(_http, _exceptionService, _messageService, _spinnerService) {
                    var _this = this;
                    this._http = _http;
                    this._exceptionService = _exceptionService;
                    this._messageService = _messageService;
                    this._spinnerService = _spinnerService;
                    this.onDbReset = this._messageService.state;
                    this._messageService.state.subscribe(function (state) { return _this.getSessions(); });
                }
                SessionService.prototype.addSession = function (session) {
                    var _this = this;
                    var body = JSON.stringify(session);
                    this._spinnerService.show();
                    return this._http
                        .post("" + sessionsUrl, body)
                        .map(function (res) { return res.json().data; })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                SessionService.prototype.deleteSession = function (session) {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http
                        .delete(sessionsUrl + "/" + session.id)
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                SessionService.prototype.getSessions = function () {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http.get(sessionsUrl)
                        .map(function (response) { return response.json().data; })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                SessionService.prototype.getSession = function (id) {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http.get(sessionsUrl + "/" + id)
                        .map(function (response) { return response.json().data; })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                SessionService.prototype.updateSession = function (session) {
                    var _this = this;
                    var body = JSON.stringify(session);
                    this._spinnerService.show();
                    return this._http
                        .put(sessionsUrl + "/" + session.id, body)
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                SessionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, common_1.ExceptionService, common_1.MessageService, common_1.SpinnerService])
                ], SessionService);
                return SessionService;
            }());
            exports_1("SessionService", SessionService);
        }
    }
});
//# sourceMappingURL=session.service.js.map