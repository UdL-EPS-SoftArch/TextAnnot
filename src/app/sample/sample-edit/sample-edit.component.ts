import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Sample} from '../sample';
import {SampleService} from '../sample.service';
import {MetadataTemplate} from '../../metadata-template/metadata-template';
import {MetadataTemplateService} from '../../metadata-template/metadata-template.service';
import {SampleFieldsFormComponent} from '../sample-fields-form/sample-fields-form.component';
import {MetadataValue} from '../../metadataValue/metadataValue';
import {forkJoin, Observable} from 'rxjs/index';
import { flatMap} from 'rxjs/operators';
import {MetadataValueService} from '../../metadataValue/metadataValue.service';

@Component({
  selector: 'app-sample-edit',
  templateUrl: 'sample-edit.component.html'
})
export class SampleEditComponent implements OnInit {
  @ViewChild(SampleFieldsFormComponent) child: SampleFieldsFormComponent;
  public sample: Sample;
  public errorMessage: string;
  public formTitle = 'Edit Sample';
  public formSubtitle = 'Edit the value of a Sample';
  public metadataTemplates: MetadataTemplate[] = [];
  public uriMetadataTemplate: string;
  public values: MetadataValue[] = [];
  public metadataValues: MetadataValue[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private sampleService: SampleService,
              private metadataTemplateService: MetadataTemplateService,  private metadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    this.sample = new Sample();
    const id = this.route.snapshot.paramMap.get('id');
    this.sampleService.get(id).subscribe(
     sample => {this.sample = sample;
       this.sample.getRelation(MetadataTemplate, 'describedBy')
         .subscribe((mfields: MetadataTemplate) => this.uriMetadataTemplate = mfields.uri);
     });
    this.metadataTemplateService.getAll().subscribe(
      (metadataTemplates: MetadataTemplate[]) => {
        this.metadataTemplates = metadataTemplates;
      }
    );
  }

  onSubmit(): void {
    const update$: Observable<Sample> = this.sampleService.update(this.sample) as Observable<Sample>;
    update$.pipe(
      flatMap((sample: Sample) => forkJoin(...this.creationMetadataValues(sample))),
      flatMap(() => forkJoin(...this.deleteMetadataValues()))
    ).subscribe(() => this.router.navigate([this.sample.uri]));
  }
  creationMetadataValues(sample): Observable<MetadataValue>[] {
    this.values = this.child.onSubmit();
    return this.values.filter(value => value.value)
      .map(value => {
        value.forA = sample;
        return this.metadataValueService.create(value) as Observable<MetadataValue>;
      });
  }
  deleteMetadataValues(): Observable<MetadataValue>[] {
    this.metadataValues = this.child.metadataValues;
    return this.metadataValues.filter(value => value)
      .map(value => {
        return this.metadataValueService.delete(value) as Observable<MetadataValue>;
      });
  }
}
