import { Component, ViewChild, OnInit } from '@angular/core';
import { SampleFieldsFormComponent } from '../sample-fields-form/sample-fields-form.component';
import { Router } from '@angular/router';
import { Sample } from '../sample';
import { SampleService } from '../sample.service';
import { MetadataTemplate } from '../../metadata-template/metadata-template';
import { MetadataTemplateService } from '../../metadata-template/metadata-template.service';
import { NgForm } from '@angular/forms';
import { MetadataValueService } from '../../metadataValue/metadataValue.service';
import { MetadataValue } from '../../metadataValue/metadataValue';

@Component({
  selector: 'app-sample-create',
  templateUrl: '../sample-form/sample-form.component.html'
})
export class SampleCreateComponent implements OnInit {
  @ViewChild(SampleFieldsFormComponent) child: SampleFieldsFormComponent;
  public sample: Sample;
  public errorMessage: string;
  public formTitle = 'Create Sample';
  public formSubtitle = 'Creates a new sample';
  public metadataTemplates: MetadataTemplate[] = [];
  public uriMetadataTemplate: string;
  public values: MetadataValue[] = [];
  constructor(private router: Router,
              private sampleService: SampleService,
              private metadataTemplateService: MetadataTemplateService, private metadataValueService: MetadataValueService) { }

  ngOnInit() {

    this.sample = new Sample();
    this.metadataTemplateService.getAll().subscribe(
      (metadataTemplates: MetadataTemplate[]) => {
        this.metadataTemplates = metadataTemplates;
      }
    );
  }

  onSubmit(): void {
    this.sampleService.create(this.sample)
        .subscribe(
          sample => {this.creationMetadataValues(sample); }
        );
    this.sample.text = this.uriMetadataTemplate;
  }
  creationMetadataValues(sample): void {
    this.values = this.child.onSubmit();
    for (const metadataValue of this.values) {
      if (metadataValue.value) {
        metadataValue.forA = sample;
        this.metadataValueService.create(metadataValue).subscribe(
          metadatavalue => this.router.navigate(['/samples']));
      }
    }
  }
}
