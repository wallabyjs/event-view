System.register(['angular2/core', 'angular2/router', '../../common', '../common/speaker.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, speaker_service_1;
    var SpeakerComponent;
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
            function (speaker_service_1_1) {
                speaker_service_1 = speaker_service_1_1;
            }],
        execute: function() {
            SpeakerComponent = (function () {
                function SpeakerComponent(_speakerService, _entityService, _modalService, _routeParams, _router, _toastService) {
                    this._speakerService = _speakerService;
                    this._entityService = _entityService;
                    this._modalService = _modalService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._toastService = _toastService;
                    this.editSpeaker = {};
                }
                SpeakerComponent.prototype.cancel = function (showToast) {
                    if (showToast === void 0) { showToast = true; }
                    this.editSpeaker = this._entityService.clone(this.speaker);
                    if (showToast) {
                        this._toastService.activate("Cancelled changes to " + this.speaker.name);
                    }
                };
                SpeakerComponent.prototype.delete = function () {
                    var _this = this;
                    var msg = "Do you want to delete " + this.speaker.name + "?";
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this.cancel(false);
                            _this._speakerService.deleteSpeaker(_this.speaker)
                                .subscribe(function () {
                                _this._toastService.activate("Deleted " + _this.speaker.name);
                                _this._gotoSpeakers();
                            });
                        }
                    });
                };
                SpeakerComponent.prototype.isAddMode = function () {
                    var id = +this._routeParams.get('id');
                    return isNaN(id);
                };
                SpeakerComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                SpeakerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this._getSpeaker();
                    this._dbResetSubscription = this._speakerService.onDbReset
                        .subscribe(function () { return _this._getSpeaker(); });
                };
                SpeakerComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !this.speaker ||
                        !this._isDirty() ||
                        this._modalService.activate();
                };
                SpeakerComponent.prototype.save = function () {
                    var _this = this;
                    var speaker = this.speaker = this._entityService.merge(this.speaker, this.editSpeaker);
                    if (speaker.id == null) {
                        this._speakerService.addSpeaker(speaker)
                            .subscribe(function (s) {
                            _this._setEditSpeaker(s);
                            _this._toastService.activate("Successfully added " + s.name);
                            _this._gotoSpeakers();
                        });
                        return;
                    }
                    this._speakerService.updateSpeaker(speaker)
                        .subscribe(function () { return _this._toastService.activate("Successfully saved " + speaker.name); });
                };
                SpeakerComponent.prototype._getSpeaker = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id === 0) {
                        return;
                    }
                    ;
                    if (this.isAddMode()) {
                        this.speaker = { name: '', side: 'dark' };
                        this.editSpeaker = this._entityService.clone(this.speaker);
                        return;
                    }
                    this._speakerService.getSpeaker(id)
                        .subscribe(function (speaker) { return _this._setEditSpeaker(speaker); });
                };
                SpeakerComponent.prototype._gotoSpeakers = function () {
                    var id = this.speaker ? this.speaker.id : null;
                    var route = ['Speakers', { id: id }];
                    this._router.navigate(route);
                };
                SpeakerComponent.prototype._isDirty = function () {
                    return this._entityService.propertiesDiffer(this.speaker, this.editSpeaker);
                };
                SpeakerComponent.prototype._setEditSpeaker = function (speaker) {
                    if (speaker) {
                        this.speaker = speaker;
                        this.editSpeaker = this._entityService.clone(this.speaker);
                    }
                    else {
                        this._gotoSpeakers();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SpeakerComponent.prototype, "speaker", void 0);
                SpeakerComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-speaker',
                        templateUrl: 'app/^speakers/^speaker/speaker.component.html',
                        styles: ['.mdl-textfield__label {top: 0;}'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [speaker_service_1.SpeakerService, common_1.EntityService, common_1.ModalService, router_1.RouteParams, router_1.Router, common_1.ToastService])
                ], SpeakerComponent);
                return SpeakerComponent;
            }());
            exports_1("SpeakerComponent", SpeakerComponent);
        }
    }
});
//# sourceMappingURL=speaker.component.js.map