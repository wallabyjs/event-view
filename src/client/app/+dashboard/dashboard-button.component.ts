import { Component, Input } from 'angular2/core';

import { Speaker } from '../shared';

@Component({
  selector: 'my-dashboard-button',
  template: `
  <button class="dashboard-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">{{speaker.name}}</button>
  `,
  styleUrls: ['app/+dashboard/dashboard-button.component.css']
})
export class DashboardButtonComponent {
  @Input() speaker: Speaker;
}
