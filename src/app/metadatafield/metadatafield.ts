import { Resource} from 'angular4-hal-aot';


export class Metadatafield extends Resource {
  id:string;
  name:string;
  type:string;
  values: string;
  definedIn: string;
}
