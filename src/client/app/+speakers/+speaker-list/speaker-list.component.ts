import { Component, OnDestroy, OnInit, ViewChild } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Subscription } from 'rxjs/Rx';

import { Speaker, SpeakerService } from '../../shared';
import { SpeakerButtonComponent } from '../speaker-button.component';
import { SortSpeakersPipe } from '../sort-speakers.pipe';
import { FilterService, FilterTextComponent } from '../../shared';

@Component({
  selector: 'ev-speakers',
  templateUrl: './app/+speakers/+speaker-list/speaker-list.component.html',
  directives: [SpeakerButtonComponent, FilterTextComponent, ROUTER_DIRECTIVES],
  styleUrls: ['./app/+speakers/+speaker-list/speaker-list.component.css'],
  pipes: [SortSpeakersPipe]
})
export class SpeakerListComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  speakers: Speaker[];
  filteredSpeakers = this.speakers;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(private _speakerService: SpeakerService,
    private _filterService: FilterService) { }

  filterChanged(searchText: string) {
    this.filteredSpeakers = this._filterService.filter(searchText, ['id', 'name', 'twitter'], this.speakers);
  }

  getSpeakers() {
    this.speakers = [];

    this._speakerService.getSpeakers()
      .subscribe(speakers => {
        this.speakers = this.filteredSpeakers = speakers;
        this.filterComponent.clear();
      });
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.getSpeakers();
    this._dbResetSubscription = this._speakerService.onDbReset
      .subscribe(() => this.getSpeakers());
  }

  trackBySpeakers(index: number, speaker: Speaker) {
    return speaker.id;
  }
}
