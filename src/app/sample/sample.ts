import { Injectable } from '@angular/core';
import { Resource } from 'angular4-hal-aot';
import { MetadataValue } from '../metadataValue/metadataValue';
import { MetadataTemplate } from '../metadata-template/metadata-template';

@Injectable()
export class Sample extends Resource {
  id: number;
  text: string;
  describedBy: MetadataTemplate;
  has: MetadataValue[];
  uri: string;
}
