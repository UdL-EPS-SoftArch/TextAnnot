import { Resource} from 'angular4-hal-aot';


export class Sample extends Resource{
  uri:string;
  id: number;
  text: string;
  describedBy: any;
  has: any;
}
