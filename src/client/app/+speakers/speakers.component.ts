import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'ev-speakers-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/',
    name: 'Speakers',
    loader: () => window['System'].import('app/+speakers/+speaker-list')
      .then((module: any) => module.SpeakerListComponent),
    useAsDefault: true
  }, {
    path: '/list/:id',
    name: 'Speakers',
    loader: () => window['System'].import('app/+speakers/+speaker-list')
      .then((module: any) => module.SpeakerListComponent),
  }, {
    path: '/:id',
    name: 'Speaker',
    loader: () => window['System'].import('app/+speakers/+speaker')
      .then((module: any) => module.SpeakerComponent),
  }
])
export class SpeakersComponent { }
