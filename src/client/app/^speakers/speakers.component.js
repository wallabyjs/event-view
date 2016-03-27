System.register(['angular2/core', 'angular2/router', './^speaker', './^speaker-list'], function(exports_1, context_1) {
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
    var core_1, router_1, _speaker_1, _speaker_list_1;
    var SpeakersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_speaker_1_1) {
                _speaker_1 = _speaker_1_1;
            },
            function (_speaker_list_1_1) {
                _speaker_list_1 = _speaker_list_1_1;
            }],
        execute: function() {
            SpeakersComponent = (function () {
                function SpeakersComponent() {
                }
                SpeakersComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-speakers-root',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Speakers', component: _speaker_list_1.SpeakerListComponent, useAsDefault: true },
                        { path: '/list/:id', name: 'Speakers', component: _speaker_list_1.SpeakerListComponent },
                        { path: '/:id', name: 'Speaker', component: _speaker_1.SpeakerComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], SpeakersComponent);
                return SpeakersComponent;
            }());
            exports_1("SpeakersComponent", SpeakersComponent);
        }
    }
});
//# sourceMappingURL=speakers.component.js.map