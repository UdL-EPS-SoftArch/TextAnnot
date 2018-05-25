import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Sample} from '../sample';
import {SampleService} from '../sample.service';
import {MetadataTemplate} from '../../metadata-template/metadata-template';
import {MetadataTemplateService} from '../../metadata-template/metadata-template.service';

@Component({
  selector: 'app-sample-edit',
  templateUrl: '../sample-form/sample-form.component.html'
})
export class SampleEditComponent implements OnInit {
  public sample: Sample;
  public errorMessage: string;
  public formTitle = 'Edit Sample';
  public formSubtitle = 'Edit the value of a Sample';
  public metadataTemplates: MetadataTemplate[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sampleService: SampleService,
              private metadataTemplateService: MetadataTemplateService) {
  }

  ngOnInit() {
    this.sample = new Sample();
    const id = this.route.snapshot.paramMap.get('id');
    this.sampleService.get(id).subscribe(
     sample => this.sample = sample);

    this.metadataTemplateService.getAll().subscribe(
      (metadataTemplates: MetadataTemplate[]) => {
        this.metadataTemplates = metadataTemplates;
      }
    );
  }

  onSubmit(): void {
    this.sampleService.update(this.sample)
      .subscribe(
        sample => this.router.navigate([sample.uri]));
  }
}
