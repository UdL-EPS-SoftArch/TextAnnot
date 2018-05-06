import { Resource} from 'angular4-hal-aot';


export class Sample extends Resource{
  id: number;
  text: string;
  describedBy: any;
  has: any;
}
