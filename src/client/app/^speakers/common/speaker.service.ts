import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { CONFIG, ExceptionService, MessageService, SpinnerService } from '../../common';

let speakersUrl = CONFIG.baseUrls.speakers;

export interface Speaker {
  id: number;
  name: string;
  side: string;
}

@Injectable()
export class SpeakerService {
  constructor(private _http: Http,
    private _exceptionService: ExceptionService,
    private _messageService: MessageService,
    private _spinnerService: SpinnerService) {
    this._messageService.state.subscribe(state => this.getSpeakers());
  }

  addSpeaker(speaker: Speaker) {
    let body = JSON.stringify(speaker);
    this._spinnerService.show();
    return this._http
      .post(`${speakersUrl}`, body)
      .map(res => res.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  deleteSpeaker(speaker: Speaker) {
    this._spinnerService.show();
    return this._http
      .delete(`${speakersUrl}/${speaker.id}`)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getSpeakers() {
    this._spinnerService.show();
    return this._http.get(speakersUrl)
      .map((response: Response) => <Speaker[]>response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getSpeaker(id: number) {
    this._spinnerService.show();
    return this._http.get(`${speakersUrl}/${id}`)
      .map((response: Response) => response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  onDbReset = this._messageService.state;

  updateSpeaker(speaker: Speaker) {
    let body = JSON.stringify(speaker);
    this._spinnerService.show();

    return this._http
      .put(`${speakersUrl}/${speaker.id}`, body)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }
}
