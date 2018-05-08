import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { XMLSample } from './XMLsample';
import { RestService } from 'angular4-hal-aot';

@Injectable()
export class XMLSampleService extends RestService<XMLSample> {

  constructor(injector: Injector) {
    super(XMLSample, 'XMLsamples', injector);
  }

  public findByTextContaining(text: string): Observable<XMLSample[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByTextContaining', options);
  }
}
