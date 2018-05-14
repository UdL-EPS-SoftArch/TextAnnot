import { Resource} from 'angular4-hal-aot';
import {MetadataValue} from '../metadataValue/metadataValue';


export class Metadatafield extends Resource {
  id: string;
  uri: string;
  name: string;
  type: string;
  definedIn: MetadataValue[];
}
