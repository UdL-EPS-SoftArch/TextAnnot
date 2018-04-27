
export class MetadataValue {
  uri: string;
  _links: any = {};
  id: string;
  value: string;
  forA: string;
  valued: string;
  // This would be the value when the classes of the other objects would be finished
  // forA: Sample;
  // valued: MetadataField;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
