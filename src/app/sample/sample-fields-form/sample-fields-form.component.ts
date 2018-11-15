import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import { Router } from '@angular/router';
import { Sample } from '../sample';
import { SampleService } from '../sample.service';
import { MetadataTemplate } from '../../metadata-template/metadata-template';
import { MetadataTemplateService } from '../../metadata-template/metadata-template.service';

@Component({
  selector: 'app-sample-fields-form',
  template: '<div class="form-group" style="width:100%;height:auto;padding: 20px; border:1px solid lightgray"> ' +
  'These are my fields {{metadataTemplateUri}}</div>'
})
export class SampleFieldsFormComponent implements OnChanges {
  @Input() metadataTemplateUri: String;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("Something has changed: " + this.metadataTemplateUri);
  }

}
