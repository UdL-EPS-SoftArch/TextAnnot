import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Sample} from '../sample';
import {SampleService} from '../sample.service';
import { MetadataTemplate } from '../../metadata-template/metadata-template';
import { MetadataValue } from '../../metadataValue/metadataValue';
import { MetadataValueService } from '../../metadataValue/metadataValue.service';

@Component({
  selector: 'app-sample-detail',
  templateUrl: './sample-detail.component.html'
})
export class SampleDetailComponent implements OnInit {
  public sample: Sample = new Sample();
  public metadataValues: MetadataValue[];
  public errorMessage: string;
  public detailsPageTitle = 'Sample';
  public detailsPageSubtitle = 'Details about a Sample';
  public oldmetadatavalueField = '';
  public compareMetadata(value: MetadataValue) {
    if (this.oldmetadatavalueField === '') {
      this.oldmetadatavalueField = value.fieldCategory;
      return true;
    } else if (this.oldmetadatavalueField === value.fieldCategory) {
      return false;
    } else {
      this.oldmetadatavalueField = value.fieldCategory;
      return true;
    }

  }


  constructor(private route: ActivatedRoute,
              private sampleService: SampleService, private metadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.sampleService.get(id).subscribe(
      sample => {
        this.sample = sample;
        // Get the metadata template for each sample
        this.sample.getRelation(MetadataTemplate, 'describedBy').subscribe(
          (metadataTemplate: MetadataTemplate) => sample.describedBy = metadataTemplate
        );

        this.metadataValueService.findByForA(this.sample).subscribe(
          (metadataValues: MetadataValue[]) => this.metadataValues = metadataValues
        );

  });


}
}
