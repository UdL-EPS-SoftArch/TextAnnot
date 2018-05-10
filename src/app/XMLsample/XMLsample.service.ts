import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal-aot';
import {XMLSample} from './XMLsample';
import {environment} from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class XMLSampleService extends RestService<XMLSample> {

  constructor(injector: Injector, private http: HttpClient) {
    super(XMLSample, 'xmlSamples', injector);
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  public findByDefinesName(name: string): Observable<XMLSample[]> {
    const options: any = {params: [{key: 'name', value: name}]};
    return this.search('findByDefinesName', options);
  }

  public addXMLSample(xmlSample: XMLSample) {
    const body = JSON.stringify(xmlSample);
    return this.http.post(`${environment.API}/xmlSamples`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

}
