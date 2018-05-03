import { Resource } from 'angular4-hal-aot';

export class Linguist extends Resource {
  uri: string;
  username: string;
  email: string;
  authorities = [];
  id: string;
  password: string;
}
