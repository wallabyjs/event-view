// import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { SPEAKERS } from './mock-speakers';
import { Speaker, SpeakerService } from '../app/shared';

export class MockSpeakerService extends SpeakerService {

  onDbReset: any;

  mockSpeakers = SPEAKERS.slice();

  getSpeaker(id: number) {
    return Observable.of(this.mockSpeakers[0]);
  }

  getSpeakers() {
    return Observable.of(this.mockSpeakers);
  }

  addSpeaker(speaker: Speaker) {
    return <Observable<any>>{};
  }

  deleteSpeaker(speaker: Speaker) {
    return <Observable<any>>{};
  }

  updateSpeaker(speaker: Speaker) {
    return <Observable<any>>{};
  }
}
