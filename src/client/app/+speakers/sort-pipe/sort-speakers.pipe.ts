import { Pipe, PipeTransform } from 'angular2/core';
import { Speaker } from '../../speakers';

@Pipe({ name: 'sortSpeakers' })
export class SortSpeakersPipe implements PipeTransform {
  transform(value: Speaker[], args: any[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Speaker, b: Speaker) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }
}
