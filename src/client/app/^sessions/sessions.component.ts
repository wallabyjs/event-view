import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { SessionListComponent } from './^session-list';
import { SessionComponent } from './^session';
import { SessionService } from './common';

@Component({
  selector: 'ev-sessions-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [SessionService]
})
@RouteConfig([
  { path: '/', name: 'Sessions', component: SessionListComponent, useAsDefault: true },
  { path: '/list/:id', name: 'Sessions', component: SessionListComponent },
  { path: '/:id', name: 'Session', component: SessionComponent }
])
export class SessionsComponent { }
