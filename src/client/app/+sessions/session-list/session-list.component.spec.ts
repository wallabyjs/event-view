/* tslint:disable:no-unused-variable */
import { SessionListComponent } from './session-list.component';
import { FilterService } from '../../../app/shared';
import { SessionService } from '../shared';

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

describe('SessionListComponent Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('SessionListComponent', function () {
  beforeEachProviders((): any => [
    FilterService,
    provide(SessionService, {
      useValue: {
        getSessions: () => { },
        onDbReset: () => { }
    }}),
  ]);

  it('should instantiate component',
    injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      return tcb.createAsync(SessionListComponent).then(fixture => {
        expect(fixture.componentInstance instanceof SessionListComponent).toBe(true, 'should create SessionListComponent');
      });
    }));

});
