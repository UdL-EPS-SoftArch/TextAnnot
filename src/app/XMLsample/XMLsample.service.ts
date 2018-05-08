import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal-aot';
import {XMLSample} from "./XMLsample";
import {environment} from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class XMLSampleService extends RestService<XMLSample> {

  constructor(injector: Injector, private http: HttpClient) {
    super(XMLSample, 'XMLSamples', injector);
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

  public addXMLSample(XMLSample: XMLSample) {
    const body = JSON.stringify(XMLSample);
    return this.http.post(`${environment.API}/XMLSamples`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

}
