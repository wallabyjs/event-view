import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { VehicleListComponent } from './^vehicle-list';
import { VehicleComponent } from './^vehicle';
import { VehicleService } from './common';

@Component({
  selector: 'ev-vehicles-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [VehicleService]
})
@RouteConfig([
  { path: '/', name: 'Vehicles', component: VehicleListComponent, useAsDefault: true },
	{ path: '/list/:id', name: 'Vehicles', component: VehicleListComponent	},
	{ path: '/:id', name: 'Vehicle', component: VehicleComponent }
])
export class VehiclesComponent { }
