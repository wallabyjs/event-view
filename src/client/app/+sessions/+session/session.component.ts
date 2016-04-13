import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Subscription } from 'rxjs/Rx';

import { EntityService, ModalService, ToastService } from '../../../app/shared';
import { Session } from '../session.model';
import { SessionService } from '../session.service';

@Component({
  selector: 'ev-session',
  templateUrl: 'app/+sessions/+session/session.component.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  directives: [ROUTER_DIRECTIVES]
})
export class SessionComponent implements CanDeactivate, OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  @Input() session: Session;
  editSession: Session = <Session>{};

  constructor(
    private _entityService: EntityService,
    private _modalService: ModalService,
    private _routeParams: RouteParams,
    private _router: Router,
    private _toastService: ToastService,
    private _sessionService: SessionService) { }

  cancel(showToast = true) {
    this.editSession = this._entityService.clone(this.session);
    if (showToast) {
      this._toastService.activate(`Cancelled changes to ${this.session.name}`);
    }
  }

  delete() {
    let msg = `Do you want to delete the ${this.session.name}?`;
    this._modalService.activate(msg).then((responseOK) => {
      if (responseOK) {
        this.cancel(false);
        this._sessionService.deleteSession(this.session)
          .subscribe(() => { // Success path
            this._toastService.activate(`Deleted ${this.session.name}`);
            this._gotoSessions();
          },
          (err) => this._handleServiceError('Delete', err), // Failure path
          () => console.log('Delete Completed') // Completed actions
          );
      }
    });
  }

  isAddMode() {
    let id = +this._routeParams.get('id');
    return isNaN(id);
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this._getSession();
    this._dbResetSubscription = this._sessionService.onDbReset
      .subscribe(() => {
        this._getSession();
      });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return !this.session ||
      !this._isDirty() ||
      this._modalService.activate();
  }

  save() {
    let session = this.session = this._entityService.merge(this.session, this.editSession);
    if (session.id == null) {
      this._sessionService.addSession(session)
        .subscribe(v => {
          this._setEditSession(v);
          this._toastService.activate(`Successfully added ${v.name}`);
          this._gotoSessions();
        });
      return;
    }
    this._sessionService.updateSession(this.session)
      .subscribe(() => this._toastService.activate(`Successfully saved ${this.session.name}`));
  }

  private _getSession() {
    let id = +this._routeParams.get('id');
    if (id === 0) { return; };
    if (this.isAddMode()) {
      this.session = <Session>{ name: '', level: '' };
      this.editSession = this._entityService.clone(this.session);
      return;
    }
    this._sessionService.getSession(id)
      .subscribe((session: Session) => this._setEditSession(session));
  }

  private _gotoSessions() {
    let id = this.session ? this.session.id : null;
    let route = ['Sessions', { id: id }];
    this._router.navigate(route);
  }

  private _handleServiceError(op: string, err: any) {
    console.error(`${op} error: ${err.message || err}`);
  }

  private _isDirty() {
    return this._entityService.propertiesDiffer(this.session, this.editSession);
  }

  private _setEditSession(session: Session) {
    if (session) {
      this.session = session;
      this.editSession = this._entityService.clone(this.session);
    } else {
      this._gotoSessions();
    }
  }
}
