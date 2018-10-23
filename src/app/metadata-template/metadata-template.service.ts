import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal-aot';
import {MetadataTemplate} from './metadata-template';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MetadataTemplateService extends RestService<MetadataTemplate> {

  constructor(injector: Injector, private http: HttpClient) {
    super(MetadataTemplate, 'metadataTemplates', injector);
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  public findByDefinesName(name: string): Observable<MetadataTemplate[]> {
    const options: any = {params: [{key: 'name', value: name}]};
    return this.search('findByDefinesName', options);
  }
}
