/* tslint:disable:no-unused-variable */
import { SessionComponent } from './session.component';
import { RouteParams, Router } from 'angular2/router';
import { EntityService, ModalService, ToastService } from '../../../app/shared';
import { Session, SessionService } from '../shared';

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


describe('SessionComponent Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('SessionComponent', () => {
  beforeEachProviders((): any => [
    RouteParams,
    provide(Router, { useValue: {} }),
    EntityService,
    ModalService,
    SessionService,
    ToastService,
  ]);

  it('should instantiate component',
    injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      return tcb.createAsync(SessionComponent).then(fixture => {
        expect(fixture.componentInstance instanceof SessionComponent).toBe(true, 'should create SessionComponent');
      });
    }));

});
