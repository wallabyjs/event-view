import { Component, provide } from 'angular2/core';
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

import { InMemoryBackendConfig, InMemoryBackendService, SEED_DATA } from 'a2-in-memory-web-api/core';
import { InMemoryStoryService } from '../api/in-memory-story.service';
import { SpeakersComponent, SpeakerService } from './^speakers';
import { DashboardComponent } from './^dashboard';
import { NavComponent } from './layout/nav.component';
import { VehiclesComponent } from './^vehicles';
import { BLOCK_PROVIDERS, ModalComponent, SpinnerComponent, ToastComponent } from './common';

@Component({
  selector: 'ev-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, ModalComponent, NavComponent, SpinnerComponent, ToastComponent],
  providers: [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }),
    provide(SEED_DATA, { useClass: InMemoryStoryService }),
    provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
    ROUTER_PROVIDERS,
    SpeakerService,
    BLOCK_PROVIDERS
  ]
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/sessions/...', name: 'Sessions', component: VehiclesComponent },
  { path: '/speakers/...', name: 'Speakers', component: SpeakersComponent },
])
export class AppComponent { }
