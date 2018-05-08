import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {MetadataValue} from './metadataValue';
import {RestService} from 'angular4-hal';
import {Linguist} from '../user/linguist';

@Injectable()
export class MetadataValueService extends RestService<MetadataValue> {

  constructor(injector: Injector) {
    super(MetadataValue, 'metadataValues', injector);
  }
  public getMetadataValuesByUsername(text: string): Observable<MetadataValue[]> {
    const options: any = {params: [{key: 'value', value: text}]};
    return this.search('findByValueContaining', options);
  }

  /* method for get the reference of MetadataFields from path _links
    // new line to get get the link of MetadataField
   getMetadataFieldsLink(link: string): Observable<MetadataField> {
     return this.http.get(`${link}`).pipe(
        catchError((error: HttpErrorResponse) => new ErrorObservable(error))
     );
   }*/
}
