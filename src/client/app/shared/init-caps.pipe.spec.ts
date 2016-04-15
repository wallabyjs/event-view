/* tslint:disable:no-unused-variable */
import { InitCapsPipe } from './init-caps.pipe';

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

describe('InitCapsPipe Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('InitCapsPipe', () => {
  let pipe: InitCapsPipe;

  beforeEach(() => {
    pipe = new InitCapsPipe();
  });

  it('transforms "john" to "John"', () => {
    expect(pipe.transform('john')).toEqual('John');
  });

  it('transforms "john papa" to "John Papa"', () => {
    expect(pipe.transform('john papa')).toEqual('John Papa');
  });

  it('leaves "John Papa" unchanged', () => {
    expect(pipe.transform('John Papa')).toEqual('John Papa');
  });

  it('transforms "johnpapa" to "Johnpapa"', () => {
    expect(pipe.transform('johnpapa')).toEqual('Johnpapa');
  });

  it('transforms "john-papa" to "John-papa"', () => {
    expect(pipe.transform('john-papa')).toEqual('John-papa');
  });

  it('transforms "   john   papa" to "   John   Papa" (preserves spaces) ', () => {
    expect(pipe.transform('   john   papa')).toEqual('   John   Papa');
  });

});
