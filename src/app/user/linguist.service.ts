import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationBasicService } from '../login-basic/authentication-basic.service';
import { Linguist } from './linguist';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class LinguistService {

  constructor(private http: HttpClient,
              private authentication: AuthenticationBasicService) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authentication.getCurrentUser().authorization
      })
    };
  }

  // GET /linguists
  getAllLinguists(): Observable<Linguist[]> {
    return this.http.get(`${environment.API}/linguists`, this.getHttpOptions()).pipe(
      map((res: any) => res._embedded.linguists),
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // GET /linguists/{id}
  getLinguist(id: string): Observable<Linguist> {
    return this.http.get(`${environment.API}/linguists/${id}`, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // POST /linguists
  addLinguist(linguist: Linguist): Observable<Linguist> {
    const body = JSON.stringify(linguist);
    return this.http.post(`${environment.API}/linguists`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // PUT /linguists/{id}
  updateLinguist(linguist: Linguist): Observable<Linguist> {
    const linguistNoAuthorities = linguist;
    linguistNoAuthorities.authorities = [];
    const body = JSON.stringify(linguistNoAuthorities);
    return this.http.put(`${environment.API}${linguist.uri}`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // DELETE /linguists/{id}
  deleteLinguist(linguist: Linguist): Observable<Response> {
    return this.http.delete(`${environment.API}${linguist.uri}`, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // GET /linguists/search/findByUsernameContaining?text={text}
  getLinguistsByUsername(text: string): Observable<Linguist[]> {
    return this.http.get(`${environment.API}/linguists/search/findByUsernameContaining?text=${text}`, this.getHttpOptions()).pipe(
      map((res: any) => res._embedded.linguists),
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }
}
