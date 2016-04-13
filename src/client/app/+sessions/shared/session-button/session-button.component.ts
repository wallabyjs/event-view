import { Component, Input } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { InitCapsPipe } from '../../../../app/shared';
import { Session } from '../';

@Component({
  moduleId: __moduleName,
  selector: 'ev-session-button',
  templateUrl: 'session-button.component.html',
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
