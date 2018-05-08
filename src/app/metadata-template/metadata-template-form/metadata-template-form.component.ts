import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MetadataTemplate} from '../metadata-template';
import {MetadataTemplateService} from '../metadata-template.service';

@Component({
  selector: 'app-metadata-template-form',
  templateUrl: './metadata-template-form.component.html',
  styleUrls: ['./metadata-template-form.component.css']
})
export class MetadataTemplateFormComponent implements OnInit {

  public metadataTemplate: MetadataTemplate;
  public errorMessage: string;
  public formTitle = 'Register Metadata Templates';
  public formSubtitle = 'Register a new metadata templates';

  constructor(private router: Router,
              private metadataTemplateService: MetadataTemplateService) { }

  ngOnInit() {
    this.metadataTemplate = new MetadataTemplate();
  }

  onSubmit(): void {
    this.metadataTemplateService.addMetadataTemplate(this.metadataTemplate)
      .subscribe(
        metadataTemplate => this.router.navigate(['/metadataTemplates']));
  }
}
