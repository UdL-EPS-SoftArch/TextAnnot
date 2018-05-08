import {Resource} from 'angular4-hal-aot';
import {Sample} from "../sample/sample";


export class MetadataTemplate extends Resource {
  name: string;
  defines: [{}];
  describes: Sample[];
  uri: string;
}
