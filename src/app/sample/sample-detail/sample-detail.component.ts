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
       // this.sample.getRelationArray(MetadataValue, 'has').subscribe(
       //   (metadataValues: MetadataValue[]) => sample.has = metadataValues
       // );
      });
  }
}
