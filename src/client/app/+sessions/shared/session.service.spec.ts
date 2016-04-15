/* tslint:disable:no-unused-variable */
import { SessionService } from './session.service';
import { ExceptionService, MessageService, SpinnerService } from '../../../app/shared';
import {
  MockBackend,
  MockConnection } from 'angular2/src/http/backends/mock_backend';

import {
  BaseRequestOptions,
  ConnectionBackend,
  Request,
  RequestMethod,
  RequestOptions,
  Response,
  ResponseOptions,
  URLSearchParams,
  HTTP_PROVIDERS,
  XHRBackend,
  Http} from 'angular2/http';

// Add all operators to Observable
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import {
  it,
  iit,
  xit,
  describe,
  ddescribe,
  xdescribe,
  expect,
  fakeAsync,
  tick,
  beforeEach,
  inject,
  injectAsync,
  withProviders,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import { provide }        from 'angular2/core';
import { ViewMetadata }   from 'angular2/core';
import { PromiseWrapper } from 'angular2/src/facade/promise';

/////////// Module Preparation ///////////////////////
interface Done {
  (): void;
  fail: (err: any) => void;
}

type SessionData = { id: string, name: string, level: string }

const makeSessionData = () => <SessionData[]>[
  { 'id': '1', 'name': 'Windstorm', 'level': undefined },
  { 'id': '2', 'name': 'Bombasto', 'level': undefined },
  { 'id': '3', 'name': 'Magneta', 'level': undefined },
  { 'id': '4', 'name': 'Tornado', 'level': undefined }
];

// const makeResponseData = (data: {}) => {return { data }; };

////////  SPECS  /////////////

describe('SessionService Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('SessionService', () => {

  beforeEachProviders((): any => [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: MockBackend }),
    provide(ExceptionService, { useValue: { catchBadResponse: () => { } } }),
    provide(MessageService, { useValue: { resetDb: () => { }, state: { subscribe: () => { } } } }),
    provide(SpinnerService, { useValue: { hide: () => { }, show: () => { } } }),
  ]);

  it('can instantiate service when inject service',
    withProviders(() => [SessionService])
      .inject([SessionService], (service: SessionService) => {
        expect(service instanceof SessionService).toBe(true);
      }));

  it('can instantiate service with "new"', inject(
    [Http, ExceptionService, MessageService, SpinnerService],
    (http: Http, ex: ExceptionService, msg: MessageService, spin: SpinnerService) => {

      expect(http).not.toBeNull('http should be provided');
      let service = new SessionService(http, ex, msg, spin);
      expect(service instanceof SessionService).toBe(true, 'new service should be ok');
    }));


  it('can provide the mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
    }));

  describe('when getSessions', () => {
    let backend: MockBackend;
    let service: SessionService;
    let fakeSessions: SessionData[];
    let response: Response;

    beforeEach(inject([Http, XHRBackend, ExceptionService, MessageService, SpinnerService],
      (http: Http, be: MockBackend, ex: ExceptionService, msg: MessageService, spin: SpinnerService) => {
        backend = be;
        service = new SessionService(http, ex, msg, spin);
        fakeSessions = makeSessionData();
        let options = new ResponseOptions({ status: 200, body: { data: fakeSessions } });
        response = new Response(options);
      }));


    it('should have expected fake sessions (then)', injectAsync([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      return service.getSessions().toPromise()
        // .then(() => Promise.reject('deliberate'))
        .then(session => {
          expect(session.length).toEqual(fakeSessions.length,
            'should have expected no. of session');
        });
    }));

    it('should have expected fake sessions (Observable.do)', injectAsync([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      return service.getSessions()
        .do(sessions => {
          expect(sessions.length).toEqual(fakeSessions.length,
            'should have expected no. of sessions');
        })
        .toPromise();
    }));

    it('should be OK returning no sessions', injectAsync([], () => {
      let resp = new Response(new ResponseOptions({ status: 200, body: { data: [] } }));
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

      return service.getSessions()
        .do(sessions => {
          expect(sessions.length).toEqual(0, 'should have no sessions');
        })
        .toPromise();
    }));

    it('should treat 404 as an Observable error', injectAsync([], () => {
      let resp = new Response(new ResponseOptions({ status: 404, body: { data: [] } }));
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

      return service.getSessions()
        .do(sessions => {
          fail('should not respond with sessions');
        })
        .catch(err => {
          expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
          return Observable.of(null); // failure is the expected test result
        })
        .toPromise();
    }));
  });
});
