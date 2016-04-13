import { Component, Input } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Speaker } from '../../../../app/shared';

@Component({
  moduleId: __moduleName,
  selector: 'ev-speaker-button',
  templateUrl: 'speaker-button.component.html',
  styles: [`
    .mdl-card__title-text {font-size: 16px;}
    .mdl-card {min-height: 60px;}
  `],
  directives: [ROUTER_DIRECTIVES]
})
export class SpeakerButtonComponent {
  @Input() speaker: Speaker;
}
