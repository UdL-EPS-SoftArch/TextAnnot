import {Injectable, Injector} from '@angular/core';
import {Metadatafield} from './metadatafield';
import { RestService } from 'angular4-hal';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MetadatafieldService extends RestService<Metadatafield> {

  constructor(injector: Injector) {
    super(Metadatafield, 'metadataFields', injector);
  }

  public getMetadataFieldsByUsername(text: string): Observable<Metadatafield[]> {
    const options: any = {params: [{key: 'name', value: text}]};
    return this.search('findByMetadataFieldContaining', options);
  }
}
