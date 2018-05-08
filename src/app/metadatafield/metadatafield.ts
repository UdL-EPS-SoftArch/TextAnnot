import { Resource} from 'angular4-hal-aot';


export class Metadatafield extends Resource {
  uri: string;
  id:string;
  name:string;
  type:string;
  values: string;
  definedIn: string;
}
