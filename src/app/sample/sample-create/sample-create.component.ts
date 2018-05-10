import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sample } from '../sample';
import { SampleService } from '../sample.service';
import { Linguist } from '../../user/linguist';
import { MetadataTemplate } from '../../metadata-template/metadata-template';
import { MetadataTemplateService } from '../../metadata-template/metadata-template.service';

@Component({
  selector: 'app-sample-create',
  templateUrl: '../sample-form/sample-form.component.html'
})
export class SampleCreateComponent implements OnInit {
  public sample: Sample;
  public errorMessage: string;
  public formTitle = 'Create Sample';
  public formSubtitle = 'Creates a new sample';
  public metadataTemplates: MetadataTemplate[] = [];

  constructor(private router: Router,
              private sampleService: SampleService, private metadataTemplateService: MetadataTemplateService) { }

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
          sample => this.router.navigate(["/samples"]));
  }

}
