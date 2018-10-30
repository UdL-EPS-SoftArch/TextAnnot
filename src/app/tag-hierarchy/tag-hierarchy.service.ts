import {Injectable, Injector} from '@angular/core';
import {TagHierarchy} from './tag-hierarchy';
import {RestService} from 'angular4-hal-aot';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class TagHierarchyService extends RestService<TagHierarchy> {
  constructor(injector: Injector) {
    super(TagHierarchy, 'tagHierarchies', injector);
  }

  public findByName(name: string): Observable<TagHierarchy> {
    const options: any = {params: [{key: 'name', value: name}]};
    return this.searchSingle('findByName', options);
  }

  public findByNameContaining(name: string): Observable<TagHierarchy[]> {
    const options: any = {params: [{key: 'name', value: name}]};
    return this.search('findByNameContaining', options);
  }
}
