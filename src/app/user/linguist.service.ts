<<<<<<< HEAD
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Linguist } from './linguist';
import { RestService } from 'angular4-hal-aot';
=======
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Linguist} from './linguist';
import {RestService} from 'angular4-hal';
>>>>>>> df490554205c66bb79c57c340585fd848d9e1e68

@Injectable()
export class LinguistService extends RestService<Linguist> {

  constructor(injector: Injector) {
    super(Linguist, 'linguists', injector);
  }

  public findByUsernameContaining(text: string): Observable<Linguist[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByUsernameContaining', options);
  }
}
