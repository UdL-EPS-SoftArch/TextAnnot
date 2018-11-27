import {Component, Input, OnChanges, OnInit, QueryList, SimpleChange, ViewChild, ViewChildren} from '@angular/core';
import {Metadatafield} from '../../metadatafield/metadatafield';
import {MetadatafieldService} from '../../metadatafield/metadatafield.service';
import {MetadatafieldInputComponent} from '../../metadatafield/metadatafield-input/metadatafield-input.component';
import {MetadataValue} from '../../metadataValue/metadataValue';

@Component({
  selector: 'app-sample-fields-form',
  templateUrl: './sample-fields-form.html'
})
export class SampleFieldsFormComponent implements OnInit {
  @ViewChildren(MetadatafieldInputComponent) childs: QueryList<MetadatafieldInputComponent>;
  public metadataFields: Metadatafield[] = [];
  public values: MetadataValue[] = [];
  constructor(private metadataService: MetadatafieldService) {}
  @Input() metadataTemplateUri: string;
  ngOnInit() {
    this.metadataService.getMetadataFieldsByMetadataTemplate(this.metadataTemplateUri).subscribe(
    (metadataFields: Metadatafield[]) => { this.metadataFields = metadataFields; });
  }
  onSubmit() {
    const childsArray = this.childs.toArray();
    for (const child of childsArray) {
      this.values.push(child.onSubmit());
    }
    return this.values;
  }
}
