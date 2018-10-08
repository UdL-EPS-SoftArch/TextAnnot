import { Injectable } from '@angular/core';
import { Resource } from 'angular4-hal-aot';
import {Sample} from '../sample/sample';
import {Metadatafield} from '../metadatafield/metadatafield';

@Injectable()
export class MetadataValue extends Resource {
  uri: string;
  id: string;
  value: string;
  fieldName: string;
  fieldCategory: string;
  forA: Sample;
  valued: Metadatafield;
}
