/* tslint:disable:no-unused-variable */
import { SessionButtonComponent } from './session-button.component';

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


describe('SessionButtonComponent Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('SessionButtonComponent', function () {
  beforeEachProviders((): any => []);

  it('should instantiate component',
    injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      return tcb.createAsync(SessionButtonComponent).then(fixture => {
        expect(fixture.componentInstance instanceof SessionButtonComponent).toBe(true, 'should create SessionButtonComponent');
      });
    }));

});
