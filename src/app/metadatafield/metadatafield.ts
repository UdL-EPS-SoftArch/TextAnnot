import { Resource} from 'angular4-hal-aot';
import { MetadataValue } from '../metadataValue/metadataValue';
import { MetadataTemplate } from '../metadata-template/metadata-template';


export class Metadatafield extends Resource {
  id: string;
  uri: string;
  name: string;
  type: string;
  definedAt: MetadataTemplate;
  has: MetadataValue[];
}
