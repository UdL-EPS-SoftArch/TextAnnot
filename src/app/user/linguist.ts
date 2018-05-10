<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Resource } from 'angular4-hal-aot';
=======
import {Resource} from 'angular4-hal';
>>>>>>> df490554205c66bb79c57c340585fd848d9e1e68

@Injectable()
export class Linguist extends Resource {
  uri: string;
  username: string;
  email: string;
  authorities = [];
  id: string;
  password: string;
}
