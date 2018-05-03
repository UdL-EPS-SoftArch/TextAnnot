import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sample } from './sample';
import { RestService } from 'angular4-hal-aot';


@Injectable()
export class SamplesService extends RestService<Sample> {

  constructor(injector: Injector) {
    super(Sample, 'sample', injector);

  }


}
