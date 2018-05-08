import {Observable} from 'rxjs/Observable';
import {MetadataTemplate} from './metadata-template';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class MetadataTemplateService {

  constructor(private http: HttpClient) {
  }

  public getAllMetadataTemplates(): Observable<MetadataTemplate[]> {
    return this.http.get(`${environment.API}/metadataTemplates`).pipe(
      map((res: any) => res._embedded.metadataTemplates),
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

}

