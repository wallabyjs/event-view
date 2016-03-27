System.register(['angular2/core', 'angular2/router', '../common', '../speaker-button', '../../common'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, speaker_button_1, common_2;
    var SpeakerListComponent;
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
            function (speaker_button_1_1) {
                speaker_button_1 = speaker_button_1_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            }],
        execute: function() {
            SpeakerListComponent = (function () {
                function SpeakerListComponent(_speakerService, _filterService) {
                    this._speakerService = _speakerService;
                    this._filterService = _filterService;
                    this.filteredSpeakers = this.speakers;
                }
                SpeakerListComponent.prototype.filterChanged = function (searchText) {
                    this.filteredSpeakers = this._filterService.filter(searchText, ['id', 'name', 'side'], this.speakers);
                };
                SpeakerListComponent.prototype.getSpeakers = function () {
                    var _this = this;
                    this.speakers = [];
                    this._speakerService.getSpeakers()
                        .subscribe(function (speakers) {
                        _this.speakers = _this.filteredSpeakers = speakers;
                        _this.filterComponent.clear();
                    });
                };
                SpeakerListComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                SpeakerListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this.getSpeakers();
                    this._dbResetSubscription = this._speakerService.onDbReset
                        .subscribe(function () { return _this.getSpeakers(); });
                };
                SpeakerListComponent.prototype.trackBySpeakers = function (index, speaker) {
                    return speaker.id;
                };
                __decorate([
                    core_1.ViewChild(common_2.FilterTextComponent), 
                    __metadata('design:type', common_2.FilterTextComponent)
                ], SpeakerListComponent.prototype, "filterComponent", void 0);
                SpeakerListComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-speakers',
                        templateUrl: './app/^speakers/^speaker-list/speaker-list.component.html',
                        directives: [speaker_button_1.SpeakerButtonComponent, common_2.FilterTextComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['./app/^speakers/^speaker-list/speaker-list.component.css'],
                        pipes: [common_1.SortSpeakersPipe]
                    }), 
                    __metadata('design:paramtypes', [common_1.SpeakerService, common_2.FilterService])
                ], SpeakerListComponent);
                return SpeakerListComponent;
            }());
            exports_1("SpeakerListComponent", SpeakerListComponent);
        }
    }
});
//# sourceMappingURL=speaker-list.component.js.map