import { Component, OnDestroy, OnInit, ViewChild } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Subscription } from 'rxjs/Rx';

import { FilterService, FilterTextComponent, Speaker, SpeakerService } from '../../../app/shared';
import { SortSpeakersPipe, SpeakerButtonComponent } from '../shared';

@Component({
  moduleId: __moduleName,
  selector: 'ev-speakers',
  templateUrl: 'speaker-list.component.html',
  directives: [SpeakerButtonComponent, FilterTextComponent, ROUTER_DIRECTIVES],
  styleUrls: ['speaker-list.component.css'],
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
