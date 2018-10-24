import { Injectable } from '@angular/core';
import { Resource } from 'angular4-hal-aot';


@Injectable()
export class TagHierarchy extends Resource {
  id: number;
  name: string;
  uri: string;
}
