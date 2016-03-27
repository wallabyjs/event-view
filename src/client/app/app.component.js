System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx', 'a2-in-memory-web-api/core', '../api/in-memory-story.service', './^speakers', './^dashboard', './layout/nav.component', './^vehicles', './common'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, core_2, in_memory_story_service_1, _speakers_1, _dashboard_1, nav_component_1, _vehicles_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (in_memory_story_service_1_1) {
                in_memory_story_service_1 = in_memory_story_service_1_1;
            },
            function (_speakers_1_1) {
                _speakers_1 = _speakers_1_1;
            },
            function (_dashboard_1_1) {
                _dashboard_1 = _dashboard_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (_vehicles_1_1) {
                _vehicles_1 = _vehicles_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ev-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.ModalComponent, nav_component_1.NavComponent, common_1.SpinnerComponent, common_1.ToastComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            core_1.provide(http_1.XHRBackend, { useClass: core_2.InMemoryBackendService }),
                            core_1.provide(core_2.SEED_DATA, { useClass: in_memory_story_service_1.InMemoryStoryService }),
                            core_1.provide(core_2.InMemoryBackendConfig, { useValue: { delay: 600 } }),
                            router_1.ROUTER_PROVIDERS,
                            _speakers_1.SpeakerService,
                            common_1.BLOCK_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', name: 'Dashboard', component: _dashboard_1.DashboardComponent, useAsDefault: true },
                        { path: '/sessions/...', name: 'Sessions', component: _vehicles_1.VehiclesComponent },
                        { path: '/speakers/...', name: 'Speakers', component: _speakers_1.SpeakersComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map