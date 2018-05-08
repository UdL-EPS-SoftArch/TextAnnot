import {Observable} from "rxjs/Observable";
import {Injector} from "@angular/core";
import {RestService} from "angular4-hal-aot";
import {MetadataTemplate} from "./metadata-template";


export class MetadataTemplateService extends RestService<MetadataTemplate> {

  constructor(injector: Injector) {
    super(MetadataTemplate, 'metadataTemplates', injector);
  }

  public findByDefinesName(name: string): Observable<MetadataTemplate[]> {
    const options: any = {params: [{key: 'name', value: name}]};
    return this.search('findByDefinesName', options);
  }
}

