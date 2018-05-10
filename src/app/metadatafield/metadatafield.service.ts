import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Metadatafield} from './metadatafield';
import { RestService } from 'angular4-hal-aot';
import {Linguist} from '../user/linguist';

@Injectable()
export class MetadatafieldService extends RestService<Metadatafield> {

  constructor(injector: Injector) {
    super(Metadatafield, 'metadataFields', injector);
  }
  public getMetadataFieldsByUsername(text: string): Observable<Metadatafield[]> {
    const options: any = {params: [{key: 'name', value: text}]};
    return this.search('findByMetadataFieldContaining', options);
  }

  /* method for get the reference of MetadataFields from path _links
    // new line to get get the link of MetadataField
   getMetadataFieldsLink(link: string): Observable<MetadataField> {
     return this.http.get(`${link}`).pipe(
        catchError((error: HttpErrorResponse) => new ErrorObservable(error))
     );
   }*/

  /*
  public addMetadataField(metadataField: Metadatafield) {
    const body = JSON.stringify(metadataField);
    return this.http.post(`${environment.API}/metadataField`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }
  */
}
