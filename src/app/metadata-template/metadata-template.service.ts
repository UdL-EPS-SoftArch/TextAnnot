import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal-aot';
import {MetadataTemplate} from './metadata-template';
import {environment} from '../../environments/environment';
import {HttpErrorResponse} from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class MetadataTemplateService extends RestService<MetadataTemplate> {

  constructor(injector: Injector, private http: HttpClient) {
    super(MetadataTemplate, 'metadataTemplates', injector);
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  public findByDefinesName(name: string): Observable<MetadataTemplate[]> {
    const options: any = {params: [{key: 'name', value: name}]};
    return this.search('findByDefinesName', options);
  }

  public addMetadataTemplate(metadataTemplate: MetadataTemplate) {
    const body = JSON.stringify(metadataTemplate);
    return this.http.post(`${environment.API}/metadataTemplates`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

}

