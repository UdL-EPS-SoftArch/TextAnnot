import {Component, Input, OnChanges, OnInit, QueryList, SimpleChange, ViewChild, ViewChildren} from '@angular/core';
import {Metadatafield} from '../../metadatafield/metadatafield';
import {MetadatafieldService} from '../../metadatafield/metadatafield.service';
import {MetadatafieldInputComponent} from '../../metadatafield/metadatafield-input/metadatafield-input.component';

@Component({
  selector: 'app-sample-fields-form',
  templateUrl: './sample-fields-form.html'
})
export class SampleFieldsFormComponent implements OnInit {
  @ViewChildren(MetadatafieldInputComponent) childs: QueryList<MetadatafieldInputComponent>;
  public metadataFields: Metadatafield[] = [];

  constructor(private metadataService: MetadatafieldService) {}
  @Input() metadataTemplateUri: string;
  ngOnInit() {
    this.metadataService.getMetadataFieldsByMetadataTemplate(this.metadataTemplateUri).subscribe(
    (metadataFields: Metadatafield[]) => { this.metadataFields = metadataFields; });
  }
  onSubmit() {
    const fields = [];
    const childsArray = this.childs.toArray();
    for (const child of childsArray) {
      fields.push(child.onSubmit());
    }
    return fields;
  }
}
