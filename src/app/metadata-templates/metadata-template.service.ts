import { Injectable, Injector } from '@angular/core';
import { MetadataTemplate } from './metadata-template';
import { RestService } from 'angular4-hal-aot';
@Injectable()
export class MetadataTemplateService extends RestService<MetadataTemplate> {
  constructor(injector: Injector) {
    super(MetadataTemplate, 'metadataTemplates', injector);
  }
}
