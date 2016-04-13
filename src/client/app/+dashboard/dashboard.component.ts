import { Component, OnDestroy, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { DashboardButtonComponent } from './dashboard-button.component';
import { Speaker, SpeakerService, ToastService } from '../../app/shared';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/+dashboard/dashboard.component.html',
  styleUrls: ['app/+dashboard/dashboard.component.css'],
  directives: [DashboardButtonComponent]
})
export class DashboardComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  speakers: Observable<Speaker[]>;

  constructor(
    private _speakerService: SpeakerService,
    private _router: Router,
    private _toastService: ToastService) { }

  getSpeakers() {
    this.speakers = this._speakerService.getSpeakers()
      .catch(e => {
        this._toastService.activate(`${e}`);
        return Observable.of();
      });
  }

  gotoDetail(speaker: Speaker) {
    let link = ['Speakers', 'Speaker', { id: speaker.id }];
    this._router.navigate(link);
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    this.getSpeakers();
    this._dbResetSubscription = this._speakerService.onDbReset
      .subscribe(() => this.getSpeakers());
  }

  trackBySpeakers(index: number, speaker: Speaker) {
    return speaker.id;
  }
}
