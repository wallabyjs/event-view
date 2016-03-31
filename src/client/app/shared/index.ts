export * from './config';
export * from './entity.service';
export * from './exception.service';
export * from './filter-text';
export * from './init-caps.pipe';
export * from './message.service';
export * from './modal';
export * from './spinner';
export * from './toast';

import {EntityService} from './entity.service';
import {ExceptionService} from './exception.service';
import {FilterService} from './filter-text';
import {InitCapsPipe} from './init-caps.pipe';
import {MessageService} from './message.service';
import {ModalService} from './modal';
import {SpinnerService} from './spinner';
import {ToastService} from './toast';

export const BLOCK_PROVIDERS = [
  EntityService,
  ExceptionService,
  FilterService,
  InitCapsPipe,
  MessageService,
  ModalService,
  SpinnerService,
  ToastService
];