import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { Session } from './session.model';
import { CONFIG, ExceptionService, MessageService, SpinnerService } from '../../shared';

let sessionsUrl = CONFIG.baseUrls.sessions;

@Injectable()
export class SessionService {
  onDbReset = this._messageService.state;

  constructor(private _http: Http,
    private _exceptionService: ExceptionService,
    private _messageService: MessageService,
    private _spinnerService: SpinnerService) {
    this._messageService.state.subscribe(state => this.getSessions());
  }

  addSession(session: Session) {
    let body = JSON.stringify(session);
    this._spinnerService.show();
    return this._http
      .post(`${sessionsUrl}`, body)
      .map(res => res.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  deleteSession(session: Session) {
    this._spinnerService.show();
    return this._http
      .delete(`${sessionsUrl}/${session.id}`)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getSessions() {
    this._spinnerService.show();
    return this._http.get(sessionsUrl)
      .map((response: Response) => <Session[]>response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getSession(id: number) {
    this._spinnerService.show();
    return this._http.get(`${sessionsUrl}/${id}`)
      .map((response: Response) => response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  updateSession(session: Session) {
    let body = JSON.stringify(session);
    this._spinnerService.show();

    return this._http
      .put(`${sessionsUrl}/${session.id}`, body)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }
}
