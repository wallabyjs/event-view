/* tslint:disable:no-unused-variable */
import { ModalService } from './modal.service';

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

describe('ModalService Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('ModalService', () => {

  beforeEachProviders((): any => [
  ]);

  it('can instantiate service when inject service',
    withProviders(() => [ModalService])
      .inject([ModalService], (service: ModalService) => {
        expect(service instanceof ModalService).toBe(true);
      }));

  it('can instantiate service with "new"', inject([], () => {
    let service = new ModalService();
    expect(service instanceof ModalService).toBe(true, 'new service should be ok');
  }));
});
