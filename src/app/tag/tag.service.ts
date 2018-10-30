import { TagHierarchy } from 'src/app/tag-hierarchy';
import {Injectable, Injector} from '@angular/core';
import {Tag} from './tag';
import {RestService} from 'angular4-hal-aot';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class TagService extends RestService<Tag> {
  constructor(injector: Injector) {
    super(Tag, 'tag', injector);
  }

  public findByParent(parent: Tag): Observable<Tag> {
    const options: any = {params: [{key: 'parent', value: parent}]};
    return this.searchSingle('findByParent', options);
  }

  public findByNameContaining(name: string): Observable<Tag[]> {
    const options: any = {params: [{key: 'name', value: name}]};
    return this.search('findByNameContaining', options);
  }

  public findByTagHierarchy(tagHierarchy:TagHierarchy): Observable<Tag[]>{
    const options: any = {params: [{key:'tagHierarchy', value:tagHierarchy}]};
    return this.search('findByTagHierarchy', options);
  }
}
