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

////////  SPECS  /////////////


describe('SessionService Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('SessionService', function () {

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: MockBackend })
  ]);

  beforeEachProviders((): any => [
    provide(Http, { useValue: { get: () => { } } }),
    provide(ExceptionService, { useValue: { catchBadResponse: () => { } } }),
    provide(MessageService, { useValue: { resetDb: () => { }, state: { subscribe: () => { }} } }),
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

});
