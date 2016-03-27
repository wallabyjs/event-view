import { Component, Input } from 'angular2/core';

import { Speaker } from '../../^speakers';

@Component({
  selector: 'my-dashboard-button',
  template: `
  <button class="dashboard-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect
      mdl-button--accent">{{speaker.name}}</button>
  `,
  styleUrls: ['app/^dashboard/dashboard-button/dashboard-button.component.css']
})
export class DashboardButtonComponent {
  @Input() speaker: Speaker;
}
