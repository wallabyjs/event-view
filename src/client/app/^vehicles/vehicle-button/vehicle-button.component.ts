import { Component, Input } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { InitCapsPipe } from '../../common';
import { Vehicle } from '../common';

@Component({
  selector: 'ev-vehicle-button',
  templateUrl: './app/^vehicles/vehicle-button/vehicle-button.component.html',
  styles: [`
    .mdl-card__title-text {font-size: 16px;}
    .mdl-card {min-height: 60px;}
  `],
  directives: [ROUTER_DIRECTIVES],
  pipes: [InitCapsPipe]
})
export class VehicleButtonComponent {
  @Input() vehicle: Vehicle;
}
