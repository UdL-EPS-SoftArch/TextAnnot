import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {MetadataValue} from './metadataValue';
import {RestService} from "angular4-hal";

@Injectable()
export class MetadataValueService extends RestService<MetadataValue>{

  constructor(injector: Injector) {
    super(MetadataValue, 'samples', injector);
  }

  // GET /admins/search/findByUsernameContaining?text={text}
  getMetadataValuesByUsername(value: string): Observable<MetadataValue[]> {
     return this.get(`${environment.API}/metadataValues/search/findByValueContaining?value=${value}`).pipe(
       map((res: any) => res._embedded.metadataValues),
       catchError((error: HttpErrorResponse) => new ErrorObservable(error))
     );
   }
  /* method for get the reference of MetadataFields from path _links
    // new line to get get the link of MetadataField
   getMetadataFieldsLink(link: string): Observable<MetadataField> {
     return this.http.get(`${link}`).pipe(
        catchError((error: HttpErrorResponse) => new ErrorObservable(error))
     );
   }*/
}
