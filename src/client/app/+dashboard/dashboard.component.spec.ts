/* tslint:disable:no-unused-variable */
import { DashboardComponent } from './dashboard.component';
import { Router } from 'angular2/router';
import { SpeakerService, ToastService } from '../../app/shared';

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

describe('DashboardComponent Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('DashboardComponent',  () => {
  beforeEachProviders(() => [
    provide(Router, { useValue: {} }),
    provide(SpeakerService, {
      useValue: {
        getSpeakers: () => { },
        onDbReset: () => { }
    }}),
    ToastService
  ]);

  it('should instantiate component',
    injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      return tcb.createAsync(DashboardComponent).then(fixture => {
        expect(fixture.componentInstance instanceof DashboardComponent).toBe(true, 'should create DashboardComponent');
      });
    }));

});
