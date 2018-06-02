import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetadatafieldService } from '../metadatafield.service';
import { Metadatafield } from '../metadatafield';
import { MetadataTemplate } from '../../metadata-template/metadata-template';
import { MetadataTemplateService } from '../../metadata-template/metadata-template.service';



@Component({
  selector: 'app-metadatafield-create',
  templateUrl: '../metadatafield-form/metadatafield-form.component.html'
})
export class MetadafieldCreateComponent implements OnInit {
  public metadatafield: Metadatafield;
  public errorMessage: string;
  public formTitle = 'Create Metadatafield';
  public formSubtitle = 'Creates a new metadatafield';
  public metadataTemplates: MetadataTemplate[] = [];

  constructor(private router: Router,
              private metadataField: MetadatafieldService,  private metadataTemplateService: MetadataTemplateService) { }

  ngOnInit() {
    this.metadatafield = new Metadatafield();
    this.metadataTemplateService.getAll().subscribe(
      (metadataTemplates: MetadataTemplate[]) => {
        this.metadataTemplates = metadataTemplates;
      }
    );
  }

  onSubmit(): void {
    this.metadataField.create(this.metadatafield)
      .subscribe(
        metadatafield => this.router.navigate(['/metadataFields']));

  }
}
