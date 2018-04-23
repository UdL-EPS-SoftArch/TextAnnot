import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {User} from '../login-basic/user';

@Injectable()
export class ListSamplesService {

  private data: any;
  private api_option = '/samples';
  private current_user: User;
  constructor(private http: HttpClient, private auth: AuthenticationBasicService) { }

  getSamples() {
    const authorization = this.auth.getCurrentUser().authorization;
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authorization})
    };
    this.http.get(`${environment.API}${this.api_option}`, httpOptions ).map(this.fetchData);
  }

  private fetchData(res: Response) {
    this.data = res;
    console.log(this.data);
    return this.data;
  }

}
