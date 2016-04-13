import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { SessionService } from './shared';

@Component({
  selector: 'ev-sessions-root',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [SessionService]
})
@RouteConfig([
  {
    path: '/',
    name: 'Sessions',
    loader: () => window['System'].import('app/+sessions/+session-list')
      .then((module: any) => module.SessionListComponent),
    useAsDefault: true
  },
  {
    path: '/list/:id',
    name: 'Sessions',
    loader: () => window['System'].import('app/+sessions/+session-list')
      .then((module: any) => module.SessionListComponent)
  },
  {
    path: '/:id',
    name: 'Session',
    loader: () => window['System'].import('app/+sessions/+session')
      .then((module: any) => module.SessionComponent)
   }
])
export class SessionsComponent { }
