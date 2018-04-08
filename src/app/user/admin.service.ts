import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Admin } from './admin';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  // GET /admins
  getAllAdmins(): Observable<Admin[]> {
    return this.http.get(`${environment.API}/admins`).pipe(
      map((res: any) => res._embedded.admins),
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // GET /admins/{id}
  getAdmin(id: string): Observable<Admin> {
    return this.http.get(`${environment.API}/admins/${id}`).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // POST /admins
  addAdmin(admin: Admin): Observable<Admin> {
    const body = JSON.stringify(admin);
    return this.http.post(`${environment.API}/admins`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // PUT /admins/{id}
  updateAdmin(admin: Admin): Observable<Admin> {
    const adminNoAuthorities = admin;
    adminNoAuthorities.authorities = [];
    const body = JSON.stringify(adminNoAuthorities);
    return this.http.put(`${environment.API}${admin.uri}`, body, this.getHttpOptions()).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // DELETE /admins/{id}
  deleteAdmin(admin: Admin): Observable<Response> {
    return this.http.delete(`${environment.API}${admin.uri}`).pipe(
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }

  // GET /admins/search/findByUsernameContaining?text={text}
  getAdminsByUsername(text: string): Observable<Admin[]> {
    return this.http.get(`${environment.API}/admins/search/findByUsernameContaining?text=${text}`).pipe(
      map((res: any) => res._embedded.admins),
      catchError((error: HttpErrorResponse) => new ErrorObservable(error))
    );
  }
}
