import {Resource} from 'angular4-hal';

export class MetadataValue extends Resource {
  uri: string;
  _links: any = {};
  id: string;
  value: string;
  forA: string;
  valued: string;
  // This would be the value when the classes of the other objects would be finished
  // forA: Sample;
  // valued: MetadataField;
}
