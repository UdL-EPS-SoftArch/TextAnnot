import { Injectable } from '@angular/core';
import { Resource } from 'angular4-hal-aot';
import { Sample } from '../sample/sample';

@Injectable()
export class MetadataTemplate extends Resource {
  name: string;
  defines: [{}];
  describes: Sample[];
  uri: string;
}
