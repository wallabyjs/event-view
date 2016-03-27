import { Component, OnDestroy, OnInit, ViewChild } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Subscription } from 'rxjs/Rx';

import { FilterTextComponent, FilterService } from '../../common';
import { Session, SessionService } from '../common';
import { SessionButtonComponent } from '../session-button';

@Component({
  selector: 'ev-sessions',
  templateUrl: 'app/^sessions/^session-list/session-list.component.html',
  directives: [FilterTextComponent, SessionButtonComponent, ROUTER_DIRECTIVES],
  styleUrls: ['app/^sessions/^session-list/session-list.component.css']
})
export class SessionListComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  sessions: Session[];
  filteredSessions = this.sessions;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;


  constructor(
    private _filterService: FilterService,
    private _sessionService: SessionService) { }

  filterChanged(searchText: string) {
    this.filteredSessions = this._filterService.filter(searchText, ['id', 'name', 'type'], this.sessions);
  }

  getSessions() {
    this.sessions = [];
    this._sessionService.getSessions()
      .subscribe(sessions => {
        this.sessions = this.filteredSessions = sessions;
        this.filterComponent.clear();
      },
      error => {
        console.log('error occurred here');
        console.log(error);
      },
       () => {
        console.log('completed');
      });
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.getSessions();
    this._dbResetSubscription = this._sessionService.onDbReset
      .subscribe(() => this.getSessions());
  }

  trackBySessions(index: number, session: Session) {
    return session.id;
  }
}
