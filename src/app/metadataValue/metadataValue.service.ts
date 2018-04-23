import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {MetadataValue} from './metadataValue';

@Injectable()
export class MetadataValueService {

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  // GET /admins
  getAllMetadataValues(): Observable<MetadataValue[]> {
    return this.http.get(`${environment.API}/metadataValues`).pipe(
      map((res: any) => res._embedded.metadataValues),
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // GET /metadataValues/{id}
  getMetadataValue(id: string): Observable<MetadataValue> {
    return this.http.get(`${environment.API}/metadataValues/${id}`).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // POST /admins
  addMetadataValue(metadataValue: MetadataValue): Observable<MetadataValue> {
    const body = JSON.stringify(metadataValue);
    return this.http.post(`${environment.API}/metadataValues`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }
/*
  // PUT /metadataValues/{id}
  updateValue(metadataValue: MetadataValue): Observable<MetadataValue> {
    const adminNoAuthorities = admin;
    adminNoAuthorities.authorities = [];
    const body = JSON.stringify(adminNoAuthorities);
    return this.http.put(`${environment.API}${admin.uri}`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }
*/
  // DELETE /metadataValue/{id}
  deleteMetadataValue(metadataValue: MetadataValue): Observable<Response> {
    return this.http.delete(`${environment.API}${metadataValue.uri}`).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }
/*
  // GET /admins/search/findByUsernameContaining?text={text}
  getAdminsByUsername(text: string): Observable<Admin[]> {
    return this.http.get(`${environment.API}/admins/search/findByUsernameContaining?text=${text}`).pipe(
      map((res: any) => res._embedded.admins),
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }*/
}
