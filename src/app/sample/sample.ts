import { Injectable } from '@angular/core';
import { Resource } from 'angular4-hal-aot';
import { MetadataValue } from '../metadataValue/metadataValue';

@Injectable()
export class Sample extends Resource {
  id: number;
  text: string;
  // describedBy: any;
  has: MetadataValue[];
}
