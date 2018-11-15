import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {Metadatafield} from '../../metadatafield/metadatafield';
import {MetadatafieldService} from '../../metadatafield/metadatafield.service';

@Component({
  selector: 'app-sample-fields-form',
  templateUrl: './sample-fields-form.html'
})
export class SampleFieldsFormComponent implements OnChanges, OnInit {
  public metadataFields: Metadatafield[] = [];
  constructor(private metadataService: MetadatafieldService) {}
  @Input() metadataTemplateUri: string;
  ngOnInit() {
    this.metadataService.getMetadataFieldsByMetadataTemplate(this.metadataTemplateUri).subscribe(
    (metadataFields: Metadatafield[]) => { this.metadataFields = metadataFields; });
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('Something has changed: ' + this.metadataTemplateUri);
  }
}
