import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Subscription } from 'rxjs/Rx';

import { EntityService, ModalService, ToastService } from '../../common';
import { Speaker, SpeakerService } from '../common/speaker.service';

@Component({
  selector: 'ev-speaker',
  templateUrl: 'app/^speakers/^speaker/speaker.component.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  directives: [ROUTER_DIRECTIVES]
})
export class SpeakerComponent implements CanDeactivate, OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  @Input() speaker: Speaker;
  editSpeaker: Speaker = <Speaker>{};

  constructor(
    private _speakerService: SpeakerService,
    private _entityService: EntityService,
    private _modalService: ModalService,
    private _routeParams: RouteParams,
    private _router: Router,
    private _toastService: ToastService) { }

  cancel(showToast = true) {
    this.editSpeaker = this._entityService.clone(this.speaker);
    if (showToast) {
      this._toastService.activate(`Cancelled changes to ${this.speaker.name}`);
    }
  }

  delete() {
    let msg = `Do you want to delete ${this.speaker.name}?`;
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.cancel(false);
        this._speakerService.deleteSpeaker(this.speaker)
          .subscribe(() => {
            this._toastService.activate(`Deleted ${this.speaker.name}`);
            this._gotoSpeakers();
          });
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
    this._getSpeaker();
    this._dbResetSubscription = this._speakerService.onDbReset
      .subscribe(() => this._getSpeaker());
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return !this.speaker ||
      !this._isDirty() ||
      this._modalService.activate();
  }

  save() {
    let speaker = this.speaker = this._entityService.merge(this.speaker, this.editSpeaker);
    if (speaker.id == null) {
      this._speakerService.addSpeaker(speaker)
        .subscribe(s => {
          this._setEditSpeaker(s);
          this._toastService.activate(`Successfully added ${s.name}`);
          this._gotoSpeakers();
        });
      return;
    }
    this._speakerService.updateSpeaker(speaker)
      .subscribe(() => this._toastService.activate(`Successfully saved ${speaker.name}`));
  }

  private _getSpeaker() {
    let id = +this._routeParams.get('id');
    if (id === 0) { return; };
    if (this.isAddMode()) {
      this.speaker = <Speaker>{ name: '', twitter: '' };
      this.editSpeaker = this._entityService.clone(this.speaker);
      return;
    }
    this._speakerService.getSpeaker(id)
      .subscribe(speaker => this._setEditSpeaker(speaker));
  }

  private _gotoSpeakers() {
    let id = this.speaker ? this.speaker.id : null;
    let route = ['Speakers', { id: id }];
    this._router.navigate(route);
  }

  private _isDirty() {
    return this._entityService.propertiesDiffer(this.speaker, this.editSpeaker);
  }

  private _setEditSpeaker(speaker: Speaker) {
    if (speaker) {
      this.speaker = speaker;
      this.editSpeaker = this._entityService.clone(this.speaker);
    } else {
      this._gotoSpeakers();
    }
  }
}
