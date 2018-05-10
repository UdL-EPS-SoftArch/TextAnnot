<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Resource } from 'angular4-hal-aot';

@Injectable()
=======
import {Resource} from 'angular4-hal';

>>>>>>> df490554205c66bb79c57c340585fd848d9e1e68
export class MetadataValue extends Resource {
  uri: string;
  id: string;
  value: string;
  forA: string;
  valued: string;
  // This would be the value when the classes of the other objects would be finished
  // forA: Sample;
  // valued: MetadataField;
}
