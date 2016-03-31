import { Component, Input } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { InitCapsPipe } from '../../shared';
import { Session } from '../session';

@Component({
  selector: 'ev-session-button',
  templateUrl: './app/+sessions/session-button/session-button.component.html',
  styles: [`
    .mdl-card__title-text {font-size: 16px;}
    .mdl-card {min-height: 60px;}
  `],
  directives: [ROUTER_DIRECTIVES],
  pipes: [InitCapsPipe]
})
export class SessionButtonComponent {
  @Input() session: Session;
}
